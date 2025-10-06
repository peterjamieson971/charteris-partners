import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, Zap, Target, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shutterstock_2499055659.jpg"
            alt="AI Technology Background"
            fill
            className="object-cover opacity-5"
            priority
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6">
              Your Competitors Are Using AI.
              <br />
              <span className="text-foreground">Their Consultants Aren&apos;t Building It.</span>
              <br />
              <span className="text-secondary">We Are.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We build and deploy working AI solutions in 30 days. Not PowerPoints. Not proposals. Real software that cuts costs by 30%, creates new revenue streams, and stays with you forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Get Free AI Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">See Our Services</Link>
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Check className="h-5 w-5 text-accent" />
                <span>15+ Years Building AI</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Check className="h-5 w-5 text-accent" />
                <span>Enterprise Experience</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Check className="h-5 w-5 text-accent" />
                <span>30-Day Delivery</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Check className="h-5 w-5 text-accent" />
                <span>You Own Everything</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Still Waiting for AI to Transform Your Business?
            </h2>
            <p className="text-lg text-foreground mb-4 text-center">
              <strong>You&apos;re not alone.</strong> 70% of enterprise AI projects fail because consultants strategize, vendors overcomplicate, and no one actually builds.
            </p>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive">Meanwhile:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Your costs keep rising while margins shrink</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Competitors move faster with AI-powered operations</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Your team drowns in work machines should do</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>That expensive AI pilot is still just a pilot</span>
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>We Build AI That Works. In 30 Days.</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    No discovery phases. No transformation theatre. Just builders who deliver working solutions you own completely.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-accent mb-2" />
                  <CardTitle>Sprint, Don&apos;t Marathon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pick your biggest pain point. We&apos;ll build an AI solution that&apos;s live in 30 days. If it won&apos;t work, we&apos;ll know by day 5 and kill it.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Target className="h-10 w-10 text-accent mb-2" />
                  <CardTitle>Pay for Results, Not Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Clear deliverables. Performance-based options. If you don&apos;t see value, you don&apos;t pay full price.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-accent mb-2" />
                  <CardTitle>Your Team, Your System</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We build WITH you, not for you. When we leave, you own everything and can run it yourself.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Impact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Real AI. Real Results. Real Fast.
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  While others talk about AI transformation, we&apos;re shipping production code. Our approach combines deep technical expertise with business acumen to deliver solutions that work.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Proven Track Record</p>
                      <p className="text-sm text-muted-foreground">100+ production AI systems deployed</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Measurable Impact</p>
                      <p className="text-sm text-muted-foreground">Average 30% cost reduction, 5-10x ROI</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Complete Ownership</p>
                      <p className="text-sm text-muted-foreground">You own all code, models, and IP forever</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/shutterstock_2642134339.jpg"
                    alt="AI Technology and Data Analytics"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How We Can Help</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Enterprise AI Strategy System™</CardTitle>
                <CardDescription>
                  Replace millions in consulting spend with 100+ AI strategists working 24/7
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="p-0 h-auto text-secondary">
                  <Link href="/services/enterprise-ai-strategy">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Executive AI Training</CardTitle>
                <CardDescription>
                  Transform leadership from AI-curious to AI-confident with practical training
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="p-0 h-auto text-secondary">
                  <Link href="/services/executive-ai-training">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">30-Day AI Sprint</CardTitle>
                <CardDescription>
                  From idea to production in 4 weeks flat. Guaranteed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="p-0 h-auto text-secondary">
                  <Link href="/services/30-day-sprint">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Operations AI Transformation</CardTitle>
                <CardDescription>
                  Cut costs by 30% without cutting people. Pay from the savings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="p-0 h-auto text-secondary">
                  <Link href="/services/operations-transformation">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Revenue Intelligence Platform</CardTitle>
                <CardDescription>
                  Turn your data into products customers pay for. New revenue in 90 days.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="p-0 h-auto text-secondary">
                  <Link href="/services/revenue-intelligence">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">AI Applications Suite</CardTitle>
                <CardDescription>
                  Deploy proven AI applications like AI Receptionists that work from day one.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="p-0 h-auto text-secondary">
                  <Link href="/services/ai-applications">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">AI Rescue Service</CardTitle>
                <CardDescription>
                  Fix your failed AI project in 6 weeks or we&apos;ll tell you to kill it.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="p-0 h-auto text-secondary">
                  <Link href="/services/ai-rescue">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Team AI Enablement</CardTitle>
                <CardDescription>
                  Transform your team into AI builders. Stop paying contractors premium rates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="p-0 h-auto text-secondary">
                  <Link href="/services/team-enablement">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              New Company. Experienced Builders.
            </h2>
            <p className="text-lg mb-4 text-primary-foreground/90">
              <strong>We&apos;re new because AI done right is new.</strong> Our team has spent 15+ years building AI systems at leading companies, deploying 100+ production systems, and watching millions get wasted on consultancy theater.
            </p>
            <div className="mt-8 space-y-4">
              <p className="text-lg font-semibold">We started Charteris Partners because:</p>
              <ul className="space-y-3 text-primary-foreground/90">
                <li className="flex items-start gap-2">
                  <Check className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <span>We&apos;ve seen what works (and what doesn&apos;t)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <span>We&apos;re tired of companies getting PowerPoints instead of products</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <span>We believe AI implementation shouldn&apos;t take 18 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <span>We know building beats strategizing every time</span>
                </li>
              </ul>
              <p className="text-lg font-semibold mt-8 pt-8 border-t border-primary-foreground/20">
                Our Promise: Judge us on our first sprint. If we can&apos;t deliver value in 30 days, you pay nothing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Your Competitors Aren&apos;t Waiting.
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              In the time it takes McKinsey to deliver a strategy deck, we&apos;ll have built, deployed, and proven ROI on your first AI system.
            </p>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Free AI Opportunity Assessment</CardTitle>
                <CardDescription className="text-base">
                  2 hours. No cost. Real value.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-left text-muted-foreground">
                  We&apos;ll identify your highest-impact AI opportunity, show exactly how we&apos;d build it, and give you a fixed price and timeline. No obligation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
                    <Link href="/contact">Book Your Assessment</Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground pt-4 border-t">
                  <strong>We only take 5 clients per quarter. We reject 60% of projects.</strong>
                  <br />
                  If the ROI isn&apos;t clear, we won&apos;t waste your time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
