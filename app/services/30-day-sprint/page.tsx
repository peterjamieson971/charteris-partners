import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "30-Day AI Sprint | From Idea to Production in 4 Weeks | Charteris Partners",
  description: "Build and deploy production-ready AI solutions in 30 days flat. No proof-of-concept paralysis. Working software that delivers ROI from day one.",
};

export default function ThirtyDaySprintPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/services/30-day-sprint.jpg"
            alt="Fast AI Development"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Most Popular Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              30-Day AI Sprint
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-200">
              From Idea to Working Solution in 4 Weeks
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Build and deploy production-ready AI in 30 days flat. No proof-of-concept paralysis. No endless pilots. Real solutions delivering real ROI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                Start Your Sprint
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8">The Challenge</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-destructive/5 border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-destructive">You&apos;re Facing:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>• Competitors moving faster with AI</p>
                  <p>• Proof-of-concept paralysis - pilots that never launch</p>
                  <p>• Budget constraints and expiring allocations</p>
                  <p>• Can&apos;t afford six-month development cycles</p>
                  <p>• Need to show ROI this quarter, not next year</p>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>What You Need:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>• Working solution in production fast</p>
                  <p>• Clear ROI within first month</p>
                  <p>• No vendor lock-in or dependencies</p>
                  <p>• Your team able to operate it independently</p>
                  <p>• Proof that AI works for your business</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8">Our 30-Day Sprint Solution</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Rapid development and deployment of focused AI solutions that deliver measurable business value.
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                    Week 1: Discovery & Design
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p><strong>Critical Kill Gate:</strong> By Friday of Week 1, we decide: proceed or kill</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Align on objectives and define success metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Validate data access and quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Prove core AI concept works</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Design architecture and integration points</span>
                    </li>
                  </ul>
                  <p className="text-sm pt-2 border-t"><strong>Outcome:</strong> Clear go/no-go decision. If no, you pay only for Week 1.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                    Weeks 2-3: Build & Integrate
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p><strong>Daily Progress:</strong> You see working software every single day</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Develop core AI functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Integrate with existing systems and data sources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Test with real data and use cases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Iterate based on your team&apos;s feedback</span>
                    </li>
                  </ul>
                  <p className="text-sm pt-2 border-t"><strong>Outcome:</strong> Working AI solution processing real data</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                    Week 4: Deploy & Train
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p><strong>Go Live:</strong> Production deployment and team enablement</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Launch to production environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Train your team to operate and monitor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Complete handover documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Establish monitoring and success tracking</span>
                    </li>
                  </ul>
                  <p className="text-sm pt-2 border-t"><strong>Outcome:</strong> Live system, trained team, complete ownership</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Delivered Outcomes */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8">Delivered Outcomes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Working solution in production by day 30</p>
                    <p className="text-sm text-muted-foreground">Not a prototype. Not a proof-of-concept. Production-ready AI.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Measurable cost savings or revenue in month one</p>
                    <p className="text-sm text-muted-foreground">ROI starts immediately, not in some future phase.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Your team operating independently by month three</p>
                    <p className="text-sm text-muted-foreground">Complete knowledge transfer and training included.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Typical 5-10x ROI within 6 months</p>
                    <p className="text-sm text-muted-foreground">Proven track record across multiple deployments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Own */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What You Own (Everything)</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Software & Code</h3>
                <ul className="space-y-2 text-sm text-primary-foreground/90">
                  <li>• Complete source code</li>
                  <li>• All AI models and training data</li>
                  <li>• Integration code</li>
                  <li>• Deployment scripts</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Documentation</h3>
                <ul className="space-y-2 text-sm text-primary-foreground/90">
                  <li>• Technical architecture</li>
                  <li>• User guides</li>
                  <li>• Operational runbooks</li>
                  <li>• Training materials</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Rights</h3>
                <ul className="space-y-2 text-sm text-primary-foreground/90">
                  <li>• Full intellectual property</li>
                  <li>• No licensing fees ever</li>
                  <li>• No vendor dependencies</li>
                  <li>• Complete operational control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8">This Sprint Is Ideal For:</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-accent">Perfect Fit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Focused, well-defined business problem</p>
                  <p>• Urgent need for results this quarter</p>
                  <p>• Team ready to participate in build</p>
                  <p>• Clear success metrics identified</p>
                  <p>• Data exists (even if messy)</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-muted-foreground">Not Ideal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Vague &ldquo;AI transformation&rdquo; goals</p>
                  <p>• No urgency or clear deadline</p>
                  <p>• Multiple competing priorities</p>
                  <p>• No data to work with</p>
                  <p>• Just exploring possibilities</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-accent">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">Ready to Sprint?</CardTitle>
                <p className="text-lg text-muted-foreground">
                  Book a free assessment. We&apos;ll identify your highest-impact opportunity and tell you exactly how we&apos;d build it in 30 days.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col gap-4">
                  <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
                    <Link href="/contact">Book Free Assessment</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/services">
                      View All Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-center text-muted-foreground pt-4 border-t">
                  If your project isn&apos;t a good fit for a 30-day sprint, we&apos;ll tell you immediately and suggest the right approach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
