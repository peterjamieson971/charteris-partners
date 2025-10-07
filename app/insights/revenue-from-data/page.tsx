/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, TrendingUp, Database, DollarSign, Package, BarChart3, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Revenue Hiding in Your Database | Charteris Partners",
  description: "How Companies Are Creating New Revenue Streams From Existing Data—without selling customer information.",
};

export default function RevenueFromDataPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/shutterstock_2481137361.jpg" alt="Data Revenue" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/insights" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Insights
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-2 text-sm font-semibold bg-accent text-white rounded-full">Revenue Growth</span>
              <span className="text-sm text-primary-foreground/80">4 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Revenue Hiding in Your Database</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">How Companies Are Creating New Revenue Streams From Existing Data</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">The Data You're Already Collecting</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Your systems collect data every day. Customer behavior, operational metrics, transaction patterns, quality measurements, supply chain timing, equipment performance—it's all there.
                </p>
                <p>
                  Most companies use this data for basic reporting. How many sales this month? What's our defect rate? Where are the bottlenecks?
                </p>
                <p>
                  But here's what we see: Top-performing organizations attribute <strong>11% of their revenue to data monetization</strong>—over five times more than lower-performing peers. Some high-performers see data contributing more than <strong>20% to company profitability.</strong>
                </p>
                <p>
                  They're not selling customer lists. They're using data they already have to create entirely new revenue streams.
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
                      <p className="text-3xl font-bold text-primary mb-2">11%</p>
                      <p className="text-gray-600">Average revenue from data monetization for top performers—5x more than lower performers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-3xl font-bold text-primary mb-2">20%+</p>
                      <p className="text-gray-600">Contribution to company profitability from data for high-performers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* What It Means */}
            <div className="mb-16 bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">What Data Monetization Actually Means</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 mb-8">
                <p>
                  Let's be clear: This isn't about selling customer data or violating privacy. It's about using insights from your operations to create value in ways you haven't considered.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Example 1: Manufacturing Expertise as a Product</h3>
                    <p className="text-gray-700">
                      A manufacturer collects years of process data—temperature curves, cycle times, material properties, quality outcomes. They build an AI model that optimizes production for other manufacturers using similar equipment. They license it as "intelligence-as-a-product." New revenue stream without building new factories.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Example 2: Supply Chain Intelligence</h3>
                    <p className="text-gray-700">
                      A logistics company tracks delivery timing, route efficiency, and demand patterns across thousands of shipments. They package these insights into predictive tools for customers, helping them optimize inventory. They charge for the intelligence, not just the delivery.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Example 3: Service Optimization Insights</h3>
                    <p className="text-gray-700">
                      A field service company analyzes millions of service calls to identify patterns in equipment failure, technician efficiency, and customer satisfaction. They white-label this as a diagnostic tool for equipment manufacturers. New revenue with zero additional field work.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Three Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">The Three Types of Data Revenue</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Database className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                      <h3 className="font-bold text-xl text-primary">1. Direct Monetization: Selling Insights</h3>
                    </div>
                    <p className="text-gray-700">
                      Package your domain expertise into APIs, dashboards, or analytical tools that others will pay for. This works when you have unique data advantages—access to rare information, deep historical context, or proprietary measurement systems.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <BarChart3 className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                      <h3 className="font-bold text-xl text-primary">2. Indirect Monetization: Improve Core Business</h3>
                    </div>
                    <p className="text-gray-700">
                      Use your data to reduce costs, improve productivity, or develop better products. This doesn't create a new revenue line but dramatically improves margins on existing revenue. Example: Using quality data to predict defects before they happen, reducing waste by 20%.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Package className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                      <h3 className="font-bold text-xl text-primary">3. Hybrid Approach: Value-Added Services</h3>
                    </div>
                    <p className="text-gray-700">
                      Bundle data-driven insights with your core offering. Equipment manufacturers adding predictive maintenance monitoring. Distributors adding demand forecasting tools. Logistics providers adding supply chain optimization. The data makes your core service more valuable and defensible.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 30-Day Approach */}
            <div className="mb-16 bg-accent/5 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">What This Looks Like in 30 Days</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 mb-8">
                <p>
                  We're not talking about massive data infrastructure projects. We're talking about finding one high-value use case and building it fast.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Week 1: Analysis</h3>
                    <p className="text-gray-700">
                      We analyze what data you're collecting that others would pay for. What unique insights do you have? What problems could they solve? What's the clearest path to revenue?
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Week 2-3: Build</h3>
                    <p className="text-gray-700">
                      We build a working prototype. An API that delivers insights. A dashboard that visualizes intelligence. A tool that makes predictions. Something tangible that demonstrates value.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Week 4: Test</h3>
                    <p className="text-gray-700">
                      We test it with real users. Get feedback. Prove the value. Identify what they'd actually pay for.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-white rounded border-l-4 border-l-accent">
                <p className="text-gray-700 font-medium">
                  At the end of 30 days, you have a working product you can sell, or clear evidence that there's no market for it (which saves you from spending months building the wrong thing).
                </p>
              </div>
            </div>

            {/* Real Examples */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8">Real Examples of Data Revenue</h2>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Case 1: Equipment Performance Benchmarking</h3>
                    <p className="text-gray-700">
                      A company with 200+ similar machines across multiple facilities built a system that benchmarks performance—energy efficiency, throughput, quality, downtime. They now sell access to other companies with the same equipment. They anonymize the data, provide industry benchmarks, and charge a subscription. New revenue with data they were already collecting.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Case 2: Customer Behavior Insights</h3>
                    <p className="text-gray-700">
                      An e-commerce platform analyzed buying patterns and built a demand forecasting tool for their suppliers. Suppliers pay for insights into what's trending, what's declining, and how to optimize inventory. The platform now has two revenue streams: transaction fees AND data subscriptions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Case 3: Process Optimization Models</h3>
                    <p className="text-gray-700">
                      A food manufacturer spent 15 years optimizing recipes for cost, taste, and shelf life. They built an AI model that encodes this expertise and now license it to smaller manufacturers who can't afford their own R&D teams. They monetized decades of institutional knowledge.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Honest Reality */}
            <div className="mb-16 bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">The Honest Reality</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Not every company has monetizable data. Here's when it probably makes sense:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-primary mb-3">When It Makes Sense:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>You have unique access to data others can't easily get</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Your industry has common problems your data could solve</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>You've been collecting data for years and have meaningful historical context</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Your insights could save others significant time or money</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-primary mb-3">When It Doesn't:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">×</span>
                      <span>Your data is easily available elsewhere</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">×</span>
                      <span>You don't have enough volume or variety to extract meaningful patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">×</span>
                      <span>The market for your insights is too small to justify the effort</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Where to Start */}
            <div className="mb-16 bg-accent/5 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Where to Start</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Pick one question your customers or partners frequently ask you. "How do you achieve that quality level?" "How do you predict demand so accurately?" "How do you minimize downtime?"
                </p>
                <p>
                  If the answer involves data and expertise you've accumulated over years, that's potentially monetizable.
                </p>
                <p>
                  We'll spend 90 minutes analyzing whether it's viable. What unique data advantages you have. What the market might pay for. Whether AI can package your expertise into something sellable. What the realistic revenue potential is.
                </p>
                <p>
                  No sales pitch. Just an honest assessment of whether there's a business model hiding in your database.
                </p>
                <p>
                  If there is, we'll build a working prototype in 30 days. Real software that delivers real insights. You'll test it with real customers. You'll know quickly if it has market fit.
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
            <h2 className="text-4xl font-bold mb-6">Sitting on Valuable Data?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's figure out if there's actually a revenue opportunity hiding in your database.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                Book Free 90-Minute Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-primary-foreground/70 mt-6">
              Honest analysis of your data monetization potential
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
              <Link href="/insights/predictive-maintenance" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-accent transition-colors">
                      The Predictive Maintenance Revolution
                    </h3>
                    <p className="text-gray-600 mb-4">How Smart Companies Are Preventing Failures Before They Happen</p>
                    <span className="text-accent font-medium inline-flex items-center">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/insights/customer-service-costs" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-accent transition-colors">
                      Customer Service Costs Doubling
                    </h3>
                    <p className="text-gray-600 mb-4">The Customer Service Crisis No One's Preparing For</p>
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
