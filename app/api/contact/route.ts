import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { checkRateLimit } from '@/lib/rate-limiter';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Suspicious pattern detection (common spam indicators)
const SPAM_PATTERNS = [
  /\b(viagra|cialis|pharmacy|casino|poker)\b/i,
  /\b(click here|buy now|limited time)\b/i,
  /(http|https):\/\/[^\s]+/gi, // Multiple URLs
];

function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email) && email.length <= 254;
}

function detectSpam(text: string): boolean {
  return SPAM_PATTERNS.some(pattern => pattern.test(text));
}

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 5000); // Limit length
}

function getClientIp(request: NextRequest): string {
  // Try to get real IP from headers (works with proxies/CDNs)
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIp) {
    return realIp;
  }

  return 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request);

    // Check rate limit (3 submissions per hour)
    const rateLimitResult = checkRateLimit(clientIp, 3);

    if (!rateLimitResult.allowed) {
      const resetDate = new Date(rateLimitResult.resetTime);
      return NextResponse.json(
        {
          error: 'Too many submissions. Please try again later.',
          resetTime: resetDate.toISOString(),
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': '3',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': resetDate.toISOString(),
          }
        }
      );
    }

    const body = await request.json();

    // Honeypot field check (bots typically fill this)
    if (body.website) {
      // Silent fail for bots
      return NextResponse.json({ success: true });
    }

    // Extract and validate required fields
    const { name, email, phone, company, location, role, challenge, timeline } = body;

    // Validation
    if (!name || !email || !phone || !company || !location || !role || !challenge) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Email validation
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      company: sanitizeInput(company),
      location: sanitizeInput(location),
      role: sanitizeInput(role),
      challenge: sanitizeInput(challenge),
      timeline: timeline ? sanitizeInput(timeline) : 'Not specified',
    };

    // Spam detection
    const combinedText = `${sanitizedData.name} ${sanitizedData.company} ${sanitizedData.location} ${sanitizedData.role} ${sanitizedData.challenge}`;
    if (detectSpam(combinedText)) {
      // Silent fail for spam
      return NextResponse.json({ success: true });
    }

    // Send email to Charteris Partners (NOT to the user)
    const { data, error } = await resend.emails.send({
      from: 'Charteris Partners Contact Form <charteris@qstore24.com>',
      to: ['hello@charterispartners.com'],
      subject: `New Contact Form Submission from ${sanitizedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Phone:</strong> ${sanitizedData.phone}</p>
        <p><strong>Company:</strong> ${sanitizedData.company}</p>
        <p><strong>Location:</strong> ${sanitizedData.location}</p>
        <p><strong>Role:</strong> ${sanitizedData.role}</p>
        <p><strong>Timeline:</strong> ${sanitizedData.timeline}</p>
        <h3>Challenge/Message:</h3>
        <p>${sanitizedData.challenge.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Submitted from IP: ${clientIp}</p>
        <p style="color: #666; font-size: 12px;">Submission time: ${new Date().toISOString()}</p>
      `,
      text: `
New Contact Form Submission

Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Phone: ${sanitizedData.phone}
Company: ${sanitizedData.company}
Location: ${sanitizedData.location}
Role: ${sanitizedData.role}
Timeline: ${sanitizedData.timeline}

Challenge/Message:
${sanitizedData.challenge}

---
Submitted from IP: ${clientIp}
Submission time: ${new Date().toISOString()}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      {
        headers: {
          'X-RateLimit-Limit': '3',
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
        }
      }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
