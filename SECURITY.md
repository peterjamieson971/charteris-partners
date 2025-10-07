# Security Policy & Best Practices

## 🔒 Security Measures Implemented

### 1. Security Headers
All pages include comprehensive security headers via `middleware.ts`:
- **Content-Security-Policy (CSP)** - Prevents XSS attacks
- **X-Frame-Options** - Prevents clickjacking
- **X-Content-Type-Options** - Prevents MIME sniffing
- **X-XSS-Protection** - Browser XSS protection
- **Referrer-Policy** - Controls referrer information
- **Permissions-Policy** - Restricts browser features
- **HSTS** - Forces HTTPS in production

### 2. Form Security
Contact form (`/app/api/contact/route.ts`) includes:
- ✅ Rate limiting (3 submissions/hour per IP)
- ✅ Honeypot field for bot detection
- ✅ Email validation with regex
- ✅ Input sanitization (5000 char limit)
- ✅ Spam detection patterns
- ✅ Silent failures for bots/spam
- ✅ IP tracking for audit trail

### 3. Input Validation & Sanitization
- All user inputs are validated before processing
- Email addresses validated with regex
- Input length limited to 5000 characters
- Special characters properly escaped by React
- No direct DOM manipulation

### 4. XSS Prevention
- React's built-in XSS protection
- Only safe use of `dangerouslySetInnerHTML` for JSON-LD structured data
- All user inputs escaped automatically
- CSP headers restrict inline scripts

### 5. Environment Security
- API keys stored in `.env.local` (gitignored)
- No secrets in code repository
- Environment variables never exposed to client

### 6. Dependency Security
- Regular `npm audit` checks
- Currently: ✅ 0 known vulnerabilities
- All dependencies up to date

## 🚨 Critical Security Reminders

### **IMMEDIATE ACTION REQUIRED:**

1. **Rotate API Keys** - The Resend API key in `.env.local` should be rotated if this file was ever committed to git or shared
   ```bash
   # Check if .env.local was ever committed:
   git log --all --full-history -- .env.local
   ```

2. **Production Environment Variables**
   - **NEVER** commit `.env.local` to git
   - Set environment variables in your hosting platform (Vercel, etc.)
   - Use different API keys for development and production

3. **Vercel Deployment**
   Set these environment variables in Vercel dashboard:
   ```
   RESEND_API_KEY=your_production_api_key_here
   ```

## 🛡️ Security Best Practices for Maintenance

### Regular Security Checks
Run these commands regularly:

```bash
# Check for dependency vulnerabilities
npm audit

# Update dependencies (test thoroughly after!)
npm update

# Check for outdated packages
npm outdated
```

### Rate Limiting Considerations
Current implementation uses in-memory storage:
- ⚠️ Resets on server restart
- ⚠️ Doesn't work across multiple instances
- ✅ Good for single-instance deployments
- 💡 Consider Redis/database for production scale

### Monitoring & Logging
- Monitor failed form submissions
- Track rate limit hits
- Review spam detection patterns
- Monitor API usage/costs

## 🔐 What to Watch For

### Potential Vulnerabilities to Monitor

1. **Brute Force Attacks**
   - Current: Rate limited to 3/hour
   - Monitor: Check for patterns of 429 responses

2. **Email Bombing**
   - Current: Rate limited by IP
   - Monitor: Watch for spam patterns in submissions

3. **API Key Exposure**
   - Current: Keys in environment variables
   - Monitor: Never log keys, never expose to client

4. **DDoS Attacks**
   - Current: Basic rate limiting
   - Consider: Cloudflare or similar for production

## 📝 Reporting Security Issues

If you discover a security vulnerability:
1. **DO NOT** open a public GitHub issue
2. Email: hello@charterispartners.com
3. Include: Description, steps to reproduce, potential impact

## ✅ Security Checklist for Deployment

Before deploying to production:

- [ ] Rotate all API keys from development
- [ ] Set production environment variables in hosting platform
- [ ] Verify `.env.local` is in `.gitignore`
- [ ] Run `npm audit` and fix any vulnerabilities
- [ ] Test rate limiting is working
- [ ] Test form validation and spam detection
- [ ] Verify security headers with https://securityheaders.com
- [ ] Test CSP doesn't break functionality
- [ ] Enable HTTPS (enforced by middleware in production)
- [ ] Set up monitoring/alerting for API failures
- [ ] Review CORS settings if adding API consumers

## 🔄 Regular Maintenance

### Weekly
- [ ] Review form submissions for spam patterns
- [ ] Check API usage and costs

### Monthly
- [ ] Run `npm audit`
- [ ] Review rate limit patterns
- [ ] Update dependencies (test first!)

### Quarterly
- [ ] Full security review
- [ ] Rotate API keys
- [ ] Review and update security headers
- [ ] Test disaster recovery procedures

## 📚 Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)
- [Content Security Policy](https://content-security-policy.com/)
- [npm audit documentation](https://docs.npmjs.com/cli/v8/commands/npm-audit)

---

**Last Updated:** January 2025
**Review Frequency:** Quarterly
