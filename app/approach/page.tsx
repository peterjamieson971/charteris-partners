import { Check, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach | 30-Day AI Sprints | Charteris Partners",
  description: "No gimmicks. No games. Just value. We build AI solutions in 30 days using proven patterns, focused scope, and pragmatic choices. Clear go/no-go in Week 1.",
};

export default function ApproachPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              No Gimmicks. No Games. Just Value.
            </h1>
            <p className="text-xl text-muted-foreground">
              We Build AI Solutions That Actually Work
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground text-center">
              There&apos;s no secret sauce. No proprietary methodology with a trademark. No 47-step transformation journey. We build AI solutions quickly, pragmatically, and transparently. Here&apos;s exactly how.
            </p>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              The Honest Truth About Our Process
            </h2>

            <div className="space-y-12">
              {/* Week 0 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Week 0: The Reality Check (Free)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">What Actually Happens:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>2-hour working session (not a sales pitch)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>We understand your specific problem</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>We assess if AI can genuinely help</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>We show you exactly what we&apos;d build</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>We give you a fixed price and timeline</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">What We Won&apos;t Do:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Pretend AI solves everything</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Propose a 6-month discovery phase</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Quote hourly rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Promise magic</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">You Get:</h3>
                    <ul className="space-y-2 text-foreground">
                      <li>• Clear go/no-go recommendation</li>
                      <li>• Specific solution outline</li>
                      <li>• Fixed price quote</li>
                      <li>• Honest timeline</li>
                      <li>• No obligation to proceed</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Week 1 */}
              <Card className="border-2 border-accent">
                <CardHeader>
                  <CardTitle className="text-2xl">Week 1: The Kill Gate</CardTitle>
                  <p className="text-muted-foreground font-semibold">The Most Important Week</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground">
                    By Friday of Week 1, we make the critical decision: proceed or kill the project.
                  </p>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">What Determines Success:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Can we access the needed data?</li>
                      <li>• Is the data quality sufficient?</li>
                      <li>• Will the solution integrate with your systems?</li>
                      <li>• Is the ROI still clear?</li>
                      <li>• Can we deliver in the timeline?</li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                      <h3 className="font-semibold text-destructive mb-3">If It&apos;s a No:</h3>
                      <ul className="space-y-2 text-sm text-foreground">
                        <li>• We stop immediately</li>
                        <li>• You pay only for the week</li>
                        <li>• We document why it won&apos;t work</li>
                        <li>• We suggest alternatives if they exist</li>
                        <li>• We part as friends</li>
                      </ul>
                    </div>

                    <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                      <h3 className="font-semibold text-accent mb-3">If It&apos;s a Yes:</h3>
                      <ul className="space-y-2 text-sm text-foreground">
                        <li>• We have validated feasibility</li>
                        <li>• We&apos;ve proven the core concept</li>
                        <li>• We continue building</li>
                        <li>• Success is now probable, not possible</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Weeks 2-4 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Weeks 2-4: The Build Sprint</CardTitle>
                  <p className="text-muted-foreground font-semibold">Daily Progress, Not Weekly Reports</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">What You See Every Day:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• What we built yesterday</li>
                      <li>• What we&apos;re building today</li>
                      <li>• Any blockers or issues</li>
                      <li>• Actual working software (not mockups)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">How We Build:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Core functionality first</li>
                      <li>• Integration with your systems</li>
                      <li>• User feedback incorporated daily</li>
                      <li>• Testing with real data</li>
                      <li>• Documentation as we go</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Your Team&apos;s Involvement:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Daily 15-minute check-ins</li>
                      <li>• Hands-on system training</li>
                      <li>• Direct input on functionality</li>
                      <li>• Early access for testing</li>
                      <li>• Knowledge transfer throughout</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Week 5 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Week 5: The Handover</CardTitle>
                  <p className="text-muted-foreground font-semibold">Independence, Not Dependence</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">What You Receive:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Complete working system in production</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>All source code and models</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Comprehensive documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Trained team members</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>90-day support included</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">What You Own:</h3>
                    <ul className="space-y-2">
                      <li>• Every line of code</li>
                      <li>• All trained models</li>
                      <li>• Complete documentation</li>
                      <li>• Full intellectual property</li>
                      <li>• No licensing restrictions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why 30 Days Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Why 30 Days Isn&apos;t Crazy - It&apos;s Disciplined
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive">Traditional AI Projects Take Months Because:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• 40% is planning for scenarios that never happen</p>
                  <p>• 30% is building features nobody uses</p>
                  <p>• 20% is organizational politics</p>
                  <p>• 10% is actual valuable building</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-accent">We Deliver in 30 Days Because:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• We build the 20% that delivers 80% of value</p>
                  <p>• We use proven patterns, not experimental tech</p>
                  <p>• We integrate, not replace</p>
                  <p>• We decide fast and adjust faster</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Focused Scope</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• One problem, solved well</li>
                  <li>• Core functionality only</li>
                  <li>• Expansion comes after proof</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Proven Components</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Standard AI models (GPT, Claude, open source)</li>
                  <li>• Existing integrations (APIs, databases)</li>
                  <li>• Common patterns (we&apos;ve done this before)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Pragmatic Choices</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Good enough beats perfect</li>
                  <li>• Working beats optimal</li>
                  <li>• Deployed beats planned</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Philosophy */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Our Technology Philosophy
            </h2>
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Use What Works, Not What&apos;s Trendy
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Our Tech Choices:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong>OpenAI/Anthropic:</strong> When you need best-in-class NLP</li>
                  <li><strong>Open Source:</strong> When you need control and customization</li>
                  <li><strong>Cloud Services:</strong> When you need scale and reliability</li>
                  <li><strong>Custom Models:</strong> Only when truly necessary</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">We Don&apos;t:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Build custom what we can buy</li>
                  <li>• Complicate what should be simple</li>
                  <li>• Use AI where rules-based logic works</li>
                  <li>• Choose technology before understanding the problem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your 30-Day Sprint?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Let&apos;s discuss your biggest challenge and see if we can deliver value in 30 days.
            </p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Book Free Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
