import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, Zap, Target, Users, X } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charteris Partners | AI Solutions in 30 Days",
  description: "We don't just recommend—we deliver. Strategy, software, implementation, and support. From boardroom vision to operational reality, we transform your business with AI solutions that drive measurable ROI.",
  alternates: {
    canonical: "https://charterispartners.com",
  },
  openGraph: {
    title: "AI Solutions in 30 Days | Charteris Partners",
    description: "Business Technologists who build AI solutions in 30 days, not PowerPoints. Real software that cuts costs by 30%, creates new revenue streams.",
    url: "https://charterispartners.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <Image
            src="/images/shutterstock_2499055659.jpg"
            alt="Enterprise AI Solutions and Business Technology Innovation"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-blue-900/70"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-tight">
              <span className="block text-white">AI Advisors Who Actually Implement.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed">
              We don&apos;t just recommend—we deliver. Strategy, software, implementation, and support. From boardroom vision to operational reality, we transform your business with AI solutions that drive measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                Get Free AI Assessment
              </Link>
              <Link
                href="/services"
                className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                See Our Services
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2 text-gray-200">
                <Check className="h-5 w-5 text-accent" />
                <span>15+ Years Building AI</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-200">
                <Check className="h-5 w-5 text-accent" />
                <span>Enterprise Experience</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-200">
                <Check className="h-5 w-5 text-accent" />
                <span>30-Day Delivery</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-200">
                <Check className="h-5 w-5 text-accent" />
                <span>You Own Everything</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Still Waiting for AI to Transform Your Business?
            </h2>
            <p className="text-lg text-foreground mb-4 text-center">
              <strong>You&apos;re not alone.</strong> 70% of enterprise AI projects fail because consultants strategize, vendors overcomplicate, and no one actually builds.
            </p>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-destructive">
                <CardHeader>
                  <CardTitle className="text-primary text-xl">You&apos;re Facing:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Your costs keep rising while margins shrink</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Competitors move faster with AI-powered operations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Your team drowns in work machines should do</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">That expensive AI pilot is still just a pilot</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-accent/10 border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="text-xl">What You Need:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">AI solutions that work in 30 days</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">No discovery phases or transformation theatre</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Working solutions you own completely</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Builders focused on outcomes, not billable hours</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-20 bg-muted/30">
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
                  <CardTitle>Your System, Your Choice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We build solutions you own completely—source code, documentation, infrastructure access. Have a technical team? We&apos;ll train them. Need ongoing support? We&apos;re here. Want to bring in someone else? No problem. You&apos;re never trapped.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Impact Section */}
      <section className="py-12 md:py-20 bg-background">
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
                    src="/images/shutterstock_2509003051.jpg"
                    alt="AI-powered data analytics and machine learning visualization showing business intelligence insights"
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
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How We Can Help</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader className="flex-1">
                <CardTitle className="text-lg mb-3">Enterprise AI Strategy System</CardTitle>
                <CardDescription className="text-sm">
                  Replace millions in consulting spend with 100+ AI strategists working 24/7
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link
                  href="/services/enterprise-ai-strategy"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader className="flex-1">
                <CardTitle className="text-lg mb-3">Executive AI Training</CardTitle>
                <CardDescription className="text-sm">
                  Transform leadership from AI-curious to AI-confident with practical training
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link
                  href="/services/executive-ai-training"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader className="flex-1">
                <CardTitle className="text-lg mb-3">30-Day AI Sprint</CardTitle>
                <CardDescription className="text-sm">
                  From idea to production in 4 weeks flat. Guaranteed.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link
                  href="/services/30-day-sprint"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader className="flex-1">
                <CardTitle className="text-lg mb-3">Operations AI Transformation</CardTitle>
                <CardDescription className="text-sm">
                  Cut costs by 30% without cutting people. Pay from the savings.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link
                  href="/services/operations-transformation"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader className="flex-1">
                <CardTitle className="text-lg mb-3">Revenue Intelligence Platform</CardTitle>
                <CardDescription className="text-sm">
                  Turn your data into products customers pay for. New revenue in 90 days.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link
                  href="/services/revenue-intelligence"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader className="flex-1">
                <CardTitle className="text-lg mb-3">AI Applications Suite</CardTitle>
                <CardDescription className="text-sm">
                  Deploy proven AI applications like AI Receptionists that work from day one.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link
                  href="/services/ai-applications"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader className="flex-1">
                <CardTitle className="text-lg mb-3">AI Rescue Service</CardTitle>
                <CardDescription className="text-sm">
                  Fix your failed AI project in 6 weeks or we&apos;ll tell you to kill it.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link
                  href="/services/ai-rescue"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader className="flex-1">
                <CardTitle className="text-lg mb-3">Team AI Enablement</CardTitle>
                <CardDescription className="text-sm">
                  Transform your team into AI builders. Stop paying contractors premium rates.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link
                  href="/services/team-enablement"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose Charteris Partners:
            </h2>
            <div className="space-y-4">
              <ul className="space-y-4 text-lg text-primary-foreground/90">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <span>Application expertise meets AI innovation—we build, not just consult</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <span>Production experience at scale—we know what works beyond the demo</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <span>Business outcomes first—ROI matters more than technology trends</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <span>Full-stack capability—strategy through implementation and support</span>
                </li>
              </ul>
              <p className="text-lg font-semibold mt-8 pt-8 border-t border-primary-foreground/20">
                Our Commitment: Every engagement delivers working software and measurable value. You&apos;ll see progress in weeks, not quarters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Your Competitors Aren&apos;t Waiting.
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              In 90 minutes, we&apos;ll show you exactly where AI can transform your business—and how to make it happen.
            </p>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Complimentary AI Opportunity Assessment</CardTitle>
                <CardDescription className="text-base">
                  90 minutes. No cost. Real strategic value.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-left">
                  <p className="font-semibold text-foreground mb-4">What you&apos;ll get:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Analysis of your highest-impact AI opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Technical approach and implementation roadmap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Fixed pricing and realistic timeline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Clear ROI projections</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  No sales pitch. No obligation. Just actionable intelligence you can use to make informed decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
                    <Link href="/contact">Book Your 90-Minute Assessment</Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground pt-4 border-t text-center">
                  We&apos;re honest about fit. If AI isn&apos;t your best investment right now, we&apos;ll tell you—and suggest what might work better.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
