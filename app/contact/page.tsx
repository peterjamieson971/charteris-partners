"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    challenge: "",
    timeline: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Let&apos;s Build Something Great Together
            </h1>
            <p className="text-xl text-muted-foreground">
              Free AI Opportunity Assessment - 2 Hours, No Cost, Real Value
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Get In Touch</h2>
                <p className="text-muted-foreground mb-6">
                  In just 2 hours, we&apos;ll identify your highest-impact AI opportunity, show exactly how we&apos;d build it, and give you a fixed price and timeline.
                </p>
                <p className="text-foreground font-semibold">
                  No commitment. No sales pressure. Just honest assessment.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:hello@charterispartners.com" className="text-secondary hover:underline">
                      hello@charterispartners.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href="tel:+1234567890" className="text-secondary hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Response Time</p>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>1. We&apos;ll review your challenge within 24 hours</p>
                  <p>2. Schedule a 2-hour working session (not a sales pitch)</p>
                  <p>3. Provide a detailed solution proposal with fixed pricing</p>
                  <p>4. Give you a clear go/no-go recommendation</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <Card className="bg-accent/10 border-accent">
                  <CardHeader>
                    <CardTitle className="text-accent">Thank You!</CardTitle>
                    <CardDescription className="text-foreground">
                      We&apos;ve received your assessment request. Our team will review your information and respond within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Submit Another Request
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Book Your Free AI Assessment</CardTitle>
                    <CardDescription>
                      Tell us about your biggest challenge and we&apos;ll show you exactly how AI can solve it.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name *</Label>
                          <Input
                            id="company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company Inc."
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Your Role *</Label>
                          <Input
                            id="role"
                            name="role"
                            required
                            value={formData.role}
                            onChange={handleChange}
                            placeholder="CEO, CTO, VP Operations, etc."
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="challenge">Your Biggest Challenge *</Label>
                        <Textarea
                          id="challenge"
                          name="challenge"
                          required
                          value={formData.challenge}
                          onChange={handleChange}
                          placeholder="Describe your biggest operational challenge, cost pressure, or growth opportunity. The more specific, the better we can help."
                          rows={5}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timeline">Desired Timeline</Label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select a timeline</option>
                          <option value="urgent">Urgent (Start ASAP)</option>
                          <option value="1-month">Within 1 Month</option>
                          <option value="1-3-months">1-3 Months</option>
                          <option value="3-6-months">3-6 Months</option>
                          <option value="exploratory">Just Exploring</option>
                        </select>
                      </div>

                      <div className="pt-4">
                        <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                          Request Free Assessment
                        </Button>
                        <p className="text-xs text-muted-foreground mt-3 text-center">
                          We only take 5 clients per quarter. We reject 60% of projects. If the ROI isn&apos;t clear, we won&apos;t waste your time.
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Why Companies Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Fast Results</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Working solutions in 30 days, not 6-month projects that never launch.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">You Own Everything</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Complete ownership of code, models, and documentation. No vendor lock-in.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Honest Guidance</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  We&apos;ll tell you if AI isn&apos;t the answer. Your success matters more than our sale.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
