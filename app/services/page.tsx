import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, GraduationCap, Rocket, Cog, TrendingUp, Package, Wrench, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Services | Enterprise AI Solutions | Charteris Partners",
  description: "From 30-day AI sprints to enterprise AI strategy systems. We build working AI solutions, not PowerPoints. 8 proven services to transform your business.",
};

const services = [
  {
    title: "Enterprise AI Strategy System™",
    description: "Your Personal McKinsey - At 10% of the Cost",
    longDescription: "Get 100+ PhD-level AI strategists working 24/7 for less than one junior consultant. Replace millions in consulting spend with a permanent AI strategy team.",
    icon: Zap,
    href: "/services/enterprise-ai-strategy",
    timeline: "8-12 weeks",
    outcome: "90% reduction in consulting spend",
  },
  {
    title: "Executive AI Training",
    description: "Strategic AI Literacy for Leadership",
    longDescription: "Transform your C-suite and board from AI-curious to AI-confident with practical, business-focused training.",
    icon: GraduationCap,
    href: "/services/executive-ai-training",
    timeline: "2 hours - 2 days",
    outcome: "Leadership confident in AI decisions",
  },
  {
    title: "30-Day AI Sprint",
    description: "From Idea to Working Solution in 4 Weeks",
    longDescription: "Build and deploy production-ready AI in 30 days flat. No proof-of-concept paralysis. Real solutions in production.",
    icon: Rocket,
    href: "/services/30-day-sprint",
    timeline: "30 days",
    outcome: "Working solution in production",
  },
  {
    title: "Operations AI Transformation",
    description: "Cut Costs by 30% Without Cutting People",
    longDescription: "Automate the mundane so your team can do the meaningful. Comprehensive operational automation that enhances capabilities.",
    icon: Cog,
    href: "/services/operations-transformation",
    timeline: "6-8 weeks",
    outcome: "30% cost reduction in 6 months",
  },
  {
    title: "Revenue Intelligence Platform",
    description: "Turn Your Data Into New Revenue Streams",
    longDescription: "Launch AI-powered products that customers actually pay for. Transform your data and expertise into sellable AI products.",
    icon: TrendingUp,
    href: "/services/revenue-intelligence",
    timeline: "90 days",
    outcome: "New revenue stream live",
  },
  {
    title: "AI Applications Suite",
    description: "Enterprise-Ready AI Applications That Just Work",
    longDescription: "Deploy proven AI applications like AI Receptionists and document processors that solve real business problems from day one.",
    icon: Package,
    href: "/services/ai-applications",
    timeline: "2-4 weeks",
    outcome: "24/7 AI operations",
  },
  {
    title: "AI Rescue Service",
    description: "Fix Your Failed AI Project in 6 Weeks",
    longDescription: "Stop throwing good money after bad - we'll fix it or kill it fast. Honest assessment and rapid rebuild if viable.",
    icon: Wrench,
    href: "/services/ai-rescue",
    timeline: "6 weeks",
    outcome: "Clear decision in week one",
  },
  {
    title: "Team AI Enablement",
    description: "Make Your Existing Team AI-Powerful",
    longDescription: "Transform your team into AI builders, not just users. Intensive, hands-on program that builds real capability.",
    icon: Users,
    href: "/services/team-enablement",
    timeline: "12 weeks",
    outcome: "Team building AI independently",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/shutterstock_2678609641.jpg"
            alt="AI Services"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Services That Actually Deliver
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We&apos;re not management consultants. We&apos;re AI builders who deliver working solutions, not PowerPoints. Every engagement produces software you own, outcomes you can measure, and capabilities that stay with you forever.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.href} className="hover:shadow-xl transition-all border-2 hover:border-accent/50">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <Icon className="h-12 w-12 text-accent" />
                        <Link href={service.href}>
                          <Button variant="ghost" size="sm" className="text-secondary hover:text-secondary/80">
                            Learn More <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-foreground">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        {service.longDescription}
                      </p>
                      <div className="pt-4 border-t space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Timeline:</span>
                          <span className="font-semibold text-foreground">{service.timeline}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Key Outcome:</span>
                          <span className="font-semibold text-accent">{service.outcome}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              How We&apos;re Different
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>You Own Everything</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Every line of code. Every model. Every piece of documentation. No subscriptions. No licenses. No vendor lock-in.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>30-Day Sprints</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  See results this quarter, not next year. Working solutions in production within weeks, not months.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Honest Assessment</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  We reject 60% of projects. If the ROI isn&apos;t clear or AI isn&apos;t the answer, we&apos;ll tell you immediately.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Not Sure Which Service You Need?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Book a free assessment. We&apos;ll identify your highest-impact AI opportunity and recommend the right approach.
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
