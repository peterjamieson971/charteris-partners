/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, TrendingDown, AlertCircle, DollarSign, Activity, Zap, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "The Predictive Maintenance Revolution Hiding in Your Data",
  description: "How Smart Companies Are Preventing Failures Before They Happen—and saving millions in the process.",
  alternates: {
    canonical: "https://charterispartners.com/insights/predictive-maintenance",
  },
  openGraph: {
    title: "The Predictive Maintenance Revolution Hiding in Your Data",
    description: "How Smart Companies Are Preventing Failures Before They Happen—and saving millions in the process.",
    url: "https://charterispartners.com/insights/predictive-maintenance",
    type: "article",
    images: [
      {
        url: "https://charterispartners.com/images/shutterstock_2481137361.jpg",
        width: 1200,
        height: 630,
        alt: "Predictive Maintenance AI Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Predictive Maintenance Revolution Hiding in Your Data",
    description: "How Smart Companies Are Preventing Failures Before They Happen",
    images: ["https://charterispartners.com/images/shutterstock_2481137361.jpg"],
  },
};

export default function PredictiveMaintenancePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "The Predictive Maintenance Revolution Hiding in Your Data",
    "description": "How Smart Companies Are Preventing Failures Before They Happen—and saving millions in the process.",
    "image": "https://charterispartners.com/images/shutterstock_2481137361.jpg",
    "author": {
      "@type": "Organization",
      "name": "Charteris Partners"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Charteris Partners",
      "logo": {
        "@type": "ImageObject",
        "url": "https://charterispartners.com/images/Transparent_Navy_Blue__1_.png"
      }
    },
    "datePublished": "2024-10-06",
    "dateModified": "2024-10-06",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://charterispartners.com/insights/predictive-maintenance"
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Article Header */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/shutterstock_2481137361.jpg" alt="Predictive maintenance AI monitoring industrial equipment sensors and preventing failures" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/insights" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Insights
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-2 text-sm font-semibold bg-accent text-white rounded-full">Manufacturing</span>
              <span className="text-sm text-primary-foreground/80">5 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">The Predictive Maintenance Revolution Hiding in Your Data</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">How Smart Companies Are Preventing Failures Before They Happen</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">The $125,000-Per-Hour Problem</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Manufacturing downtime costs a median of <strong>$125,000 per hour.</strong> For a single production line. For a single hour.
                </p>
                <p>
                  Now multiply that across multiple lines, multiple facilities, and the reality that most factories lose between <strong>5-20% of their manufacturing capacity</strong> to equipment failure and downtime.
                </p>
                <p>
                  The traditional approach? Reactive maintenance (fix it when it breaks) or preventive maintenance (fix it on a schedule whether it needs it or not).
                </p>
                <p>
                  Both are expensive. Both cause unnecessary downtime. And neither prevents the catastrophic failures that shut down production for days.
                </p>
              </div>
            </div>

            {/* Key Statistics */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <DollarSign className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-3xl font-bold text-primary mb-2">$125,000</p>
                      <p className="text-gray-600">Median cost per hour of manufacturing downtime</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <TrendingDown className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-3xl font-bold text-primary mb-2">5-20%</p>
                      <p className="text-gray-600">Manufacturing capacity lost to equipment failure and downtime</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* What's Possible */}
            <div className="mb-16 bg-accent/5 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">What's Actually Possible Now</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 mb-6">
                <p>
                  Here's what changed: Your equipment is already generating massive amounts of data. Vibration sensors, temperature monitors, pressure readings, cycle counts, power consumption—it's all there.
                </p>
                <p>
                  The data's been sitting there for years. Most companies collect it but don't use it. They're sitting on a gold mine and scheduling maintenance based on a calendar.
                </p>
                <p>
                  Companies implementing AI-driven predictive maintenance are seeing:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">70% reduction</p>
                        <p className="text-sm text-gray-600">In equipment breakdowns</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <DollarSign className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">25% decrease</p>
                        <p className="text-sm text-gray-600">In maintenance costs</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Activity className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">20-40% increase</p>
                        <p className="text-sm text-gray-600">In equipment lifespan</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Zap className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">10x ROI</p>
                        <p className="text-sm text-gray-600">Within 2-3 years (27% achieve payback in 12 months)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-white rounded border-l-4 border-l-accent">
                <p className="text-gray-700 font-medium">
                  Real example: One global manufacturer monitoring 10,000+ machines reported <strong>millions of dollars in savings with ROI in three months.</strong>
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">How It Actually Works</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Step 1: Connect to Your Data</h3>
                    <p className="text-gray-700">
                      We tap into the data your equipment is already generating. Sensor readings, performance metrics, maintenance logs, quality data. We don't need new hardware—we use what you have.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Step 2: Build the Model</h3>
                    <p className="text-gray-700">
                      AI analyzes patterns leading up to past failures. What did vibration look like 48 hours before that bearing failed? How did temperature trends change before the motor burned out? The system learns what "normal" looks like and what predicts failure.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Step 3: Predict and Prevent</h3>
                    <p className="text-gray-700">
                      The system continuously monitors your equipment and flags anomalies before they become failures. "Bearing #3 on Line 2 will likely fail in the next 7-10 days based on vibration patterns." Now you schedule maintenance during planned downtime, not emergency shutdowns.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Real Examples */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8">Real-World Examples</h2>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Food Manufacturing</h3>
                    <p className="text-gray-700 mb-3">
                      A production facility was experiencing unplanned downtime from conveyor motor failures. By monitoring vibration and temperature data, we built a system that predicted motor failures 5-7 days in advance.
                    </p>
                    <p className="text-accent font-semibold">Result: Zero emergency shutdowns, 40% reduction in maintenance costs, maintenance scheduled during off-shifts</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Packaging Equipment</h3>
                    <p className="text-gray-700 mb-3">
                      A company was replacing sealing heads on a preventive schedule every 3 months whether they needed it or not. Predictive maintenance showed some lasted 5-6 months while others needed replacement at 2 months.
                    </p>
                    <p className="text-accent font-semibold">Result: 30% reduction in parts costs, improved line reliability</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">HVAC Systems</h3>
                    <p className="text-gray-700 mb-3">
                      Commercial facility with 50+ HVAC units was experiencing 2-3 emergency failures per month. Predictive system analyzed compressor performance, refrigerant pressures, and power consumption to predict failures.
                    </p>
                    <p className="text-accent font-semibold">Result: 85% reduction in emergency service calls, $200K annual savings</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 30-Day Approach */}
            <div className="mb-16 bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">What's Different About the 30-Day Approach</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 mb-6">
                <p>
                  Traditional predictive maintenance projects take 12-18 months and cost hundreds of thousands of dollars. Here's what we do differently:
                </p>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span><strong>Pick One Critical Asset.</strong> The production line that costs the most when it fails. The equipment that's approaching end-of-life. The machine that's already causing problems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span><strong>Build a Focused Solution.</strong> We're not trying to monitor your entire facility. We're solving one specific, high-value problem. One machine. One failure mode. One clear ROI.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span><strong>Use Your Existing Data.</strong> We connect to what you already have—PLCs, SCADA systems, sensor networks. No massive infrastructure buildout required.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span><strong>Deliver Working Software in 30 Days.</strong> Not a proof of concept. Not a pilot. Production-ready software making real predictions on your real equipment.</span>
                </li>
              </ul>
            </div>

            {/* ROI Section */}
            <div className="mb-16 bg-accent/5 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">The Math That Matters</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Let's use a real scenario: A critical production line that generates $500K revenue per day. It experiences unplanned downtime averaging 2 days per quarter due to equipment failure. That's $4M in lost revenue annually.
                </p>
                <div className="space-y-2 text-lg">
                  <p>Predictive maintenance reduces unplanned downtime by 70% = <strong>$2.8M in recovered revenue</strong>.</p>
                  <p>Maintenance costs drop 25% = <strong>$150K saved on parts and labor</strong>.</p>
                  <p>Equipment lifespan extends 30% = <strong>Defer $500K capital replacement for 2+ years</strong>.</p>
                </div>
                <p className="text-xl font-semibold text-gray-900">
                  Total annual impact: $3M+. Investment: 30-day build plus ongoing monitoring costs.
                </p>
              </div>
            </div>

            {/* Limitations */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">What It Doesn't Do</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 mb-6">
                <p>
                  Let's be clear about limitations:
                </p>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span>It can't predict failures on equipment that doesn't generate data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span>It needs historical data to learn from (at minimum, a few months of sensor readings)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span>It won't replace your maintenance team—it makes them more effective</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span>It's not cost-effective for equipment with minimal downtime impact</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-gray-50 rounded border-l-4 border-l-accent">
                <p className="text-gray-700 font-medium">
                  If your critical equipment generates data and failures cost significant money, predictive maintenance probably makes sense. If not, there are better solutions.
                </p>
              </div>
            </div>

            {/* Honest Assessment */}
            <div className="mb-16 bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">The Honest Assessment</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  We recommend starting with one piece of equipment. The one that hurts the most when it fails. The one where you're already collecting data but not using it. The one where even a small improvement in uptime has massive financial impact.
                </p>
                <p>
                  We'll spend 90 minutes analyzing your situation: What data you have, what failures cost you, whether AI can actually help, and what the realistic ROI looks like.
                </p>
                <p>
                  No sales pitch. Just an honest technical assessment.
                </p>
                <p>
                  If it makes sense, we'll build it in 30 days. You'll have working software predicting failures on your actual equipment. Your team owns it. It improves as it learns from your data.
                </p>
              </div>
            </div>

          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Tired of Emergency Shutdowns?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's figure out if predictive maintenance can actually prevent your most expensive failures.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                Book Free 90-Minute Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-primary-foreground/70 mt-6">
              Honest analysis of whether AI can help your specific equipment
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary">Related Insights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/insights/revenue-from-data" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-accent transition-colors">
                      Revenue Hiding in Your Database
                    </h3>
                    <p className="text-gray-600 mb-4">How Companies Are Creating New Revenue Streams From Existing Data</p>
                    <span className="text-accent font-medium inline-flex items-center">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/insights/email-processing-problem" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-accent transition-colors">
                      The £2M Email Problem
                    </h3>
                    <p className="text-gray-600 mb-4">How Companies Are Losing Millions to Email Processing</p>
                    <span className="text-accent font-medium inline-flex items-center">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
