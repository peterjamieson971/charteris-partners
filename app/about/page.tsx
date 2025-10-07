import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Business Technologists Who Build",
  description: "We're not consultants. We're Business Technologists who understand spreadsheets AND codebases, boardroom AND server room. 15+ years building AI systems.",
  alternates: {
    canonical: "https://charterispartners.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/shutterstock_2430517031.jpg"
            alt="Professional Team"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Technologists Who Build
            </h1>
            <p className="text-xl text-gray-200">
              We&apos;re Not Consultants. We&apos;re Business Technologists.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <p className="text-lg text-foreground mb-4">
                We understand spreadsheets AND codebases. We speak boardroom AND server room. We know that technology without business context is expensive art, and strategy without implementation is expensive fiction.
              </p>
              <p className="text-lg text-foreground">
                <strong>Business Technologists</strong> bridge the gap between what&apos;s possible and what&apos;s profitable. We don&apos;t just understand AI - we understand margins, market pressure, and Monday morning reality.
              </p>
            </div>

            {/* Our Story */}
            <div className="pt-12 border-t">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Built From Frustration</h3>
              <p className="text-lg text-muted-foreground mb-6">
                After 15+ years building AI systems in enterprise environments, we kept seeing the same pattern:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Companies spending millions on AI strategies they never implement</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Technical teams building brilliant solutions to the wrong problems</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Business leaders buying magic beans from vendors</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">The gap between PowerPoint and production growing wider</span>
                </li>
              </ul>
              <p className="text-lg text-foreground">
                We started Charteris Partners with a simple belief: <strong>Business leaders deserve builders who understand business.</strong>
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                Not technologists who need translators. Not consultants who can&apos;t code. Business Technologists who can sit in your board meeting at 9 AM and deploy production code by 5 PM.
              </p>
            </div>

            {/* What Makes Us Different */}
            <div className="pt-12 border-t">
              <h2 className="text-3xl font-bold text-primary mb-6">What Makes Us Different</h2>
              <h3 className="text-2xl font-semibold text-foreground mb-6">We&apos;ve Lived Your Challenges</h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">We&apos;ve been in your meetings:</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• Fighting for budget while competitors pull ahead</p>
                    <p>• Explaining why the &quot;simple&quot; change takes six months</p>
                    <p>• Watching consultants present your own ideas back to you</p>
                    <p>• Seeing AI pilots die in the valley of death</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">We&apos;ve built the solutions:</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• AI systems processing millions in transactions</p>
                    <p>• Automation saving thousands of hours</p>
                    <p>• Predictive models preventing costly failures</p>
                    <p>• Revenue platforms creating new business models</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">We&apos;ve learned what works:</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• Start small, deliver fast, scale what works</p>
                    <p>• Perfect is the enemy of deployed</p>
                    <p>• Ownership beats rental every time</p>
                    <p>• Your team&apos;s adoption determines success</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Our Philosophy */}
            <div className="pt-12 border-t">
              <h2 className="text-3xl font-bold text-primary mb-8">Our Philosophy</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Business First, Technology Second</h3>
                  <p className="text-muted-foreground">
                    Every line of code we write starts with a business case. Every model we train targets a KPI. Every system we build pays for itself.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Speed Is a Feature</h3>
                  <p className="text-muted-foreground">
                    In the time it takes to plan the perfect solution, we&apos;ve built, tested, and improved a good one. 30-day sprints aren&apos;t aggressive - they&apos;re pragmatic.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Independence Is the Goal</h3>
                  <p className="text-muted-foreground">
                    We succeed when you don&apos;t need us anymore. Every engagement includes knowledge transfer. Every system includes training. Every solution becomes yours completely.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Honesty Before Revenue</h3>
                  <p className="text-muted-foreground">
                    We reject 60% of potential projects. If the ROI isn&apos;t clear, if the timeline isn&apos;t realistic, if the problem isn&apos;t suited for AI - we&apos;ll tell you immediately. Our reputation matters more than any single sale.
                  </p>
                </div>
              </div>
            </div>

            {/* Who We Serve */}
            <div className="pt-12 border-t">
              <h2 className="text-3xl font-bold text-primary mb-6">Who We Serve</h2>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Leaders Who Value Action Over Analysis</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">You&apos;re our ideal partner if you:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Need results this quarter, not next year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Value ownership over rental</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Prefer builders to advisors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Measure success in outcomes, not outputs</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-4">We work best with organizations that:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Are ready to move quickly once we validate feasibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Have team members who can participate in the build process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Understand that AI is powerful but has realistic limitations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Want to build internal capability, not just outsource indefinitely</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Our Commitment */}
            <div className="pt-12 border-t">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Commitment</h2>
              <h3 className="text-2xl font-semibold text-foreground mb-6">To Every Client</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle>Transparency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We&apos;ll tell you what we&apos;re building, how we&apos;re building it, and why we&apos;re building it that way. No black boxes. No tech mysticism.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle>Speed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      30 days to production isn&apos;t a gimmick - it&apos;s a discipline. We&apos;ll show progress daily, not quarterly.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle>Ownership</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Everything we build becomes yours. Every model. Every line of code. Every piece of documentation. No subscriptions. No licenses. No dependencies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle>Honesty</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      If it won&apos;t work, we&apos;ll tell you immediately. If it&apos;s harder than expected, you&apos;ll know same day. If there&apos;s a better way, we&apos;ll recommend it even if it means less revenue for us.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Builders?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Let&apos;s discuss your AI opportunity. No sales pitch. Just honest assessment.
            </p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Get Free Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
