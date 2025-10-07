/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, TrendingDown, Users, AlertCircle, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "The £2M Email Problem Nobody Talks About | Charteris Partners",
  description: "How Fortune 500 Companies Are Losing Millions to Email Processing - And the 30-Day Fix That Actually Works",
};

export default function EmailProcessingProblemPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/shutterstock_2481137361.jpg" alt="Email Processing" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/insights" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Insights
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-2 text-sm font-semibold bg-accent text-white rounded-full">Operations</span>
              <span className="text-sm text-primary-foreground/80">5 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">The £2M Email Problem Nobody Talks About</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              How Fortune 500 Companies Are Losing Millions to Email Processing - And the 30-Day Fix
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">The Hidden Cost in Every Inbox</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Your finance team processes invoices from emails. Customer service copies data from customer emails into your CRM. Operations manually enters order information from supplier emails into your ERP system.
                </p>
                <p>
                  It feels like normal work. Everyone does it. But here's what the numbers actually say:
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
                      <p className="text-3xl font-bold text-primary mb-2">£28,500</p>
                      <p className="text-gray-600">Average annual cost per employee for manual data entry from emails</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <TrendingDown className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-3xl font-bold text-primary mb-2">£2M</p>
                      <p className="text-gray-600">Annual cost for a team of 70 people handling email-based data entry</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 mb-16">
              <p>
                For a team of 70 people handling email-based data entry, that's nearly £2 million a year. Gone. Not into product development. Not into customer acquisition. Into copying text from one system to another.
              </p>
            </div>

            {/* Problem Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">The Real Problem Isn't the Time—It's What Happens Next</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 mb-8">
                <p>Here's what we see when we analyze email processing workflows:</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">30-50% of working hours</p>
                        <p className="text-sm text-gray-600">Consumed by manual data entry tasks</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">£220 per record</p>
                        <p className="text-sm text-gray-600">Average cost of manual errors</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Users className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">56% of employees</p>
                        <p className="text-sm text-gray-600">Experience burnout from repetitive data tasks</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <TrendingDown className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">11-36 times per hour</p>
                        <p className="text-sm text-gray-600">Employees check email, destroying deep work</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  But the worst part? These aren't just productivity problems. They're retention problems. Your best people don't want to copy and paste. They want to solve real problems. So they leave.
                </p>
              </div>
            </div>

            {/* Why Projects Fail */}
            <div className="mb-16 bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Why Most Email Automation Projects Fail</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 mb-6">
                <p className="text-xl font-semibold text-gray-900">"We tried to automate this before. It didn't work."</p>
                <p>
                  We hear this constantly. The share of companies abandoning AI projects jumped to 42% in 2025, from just 17% the year before. Why? Because most automation projects:
                </p>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span>Take 6-12 months to deliver anything usable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span>Require massive upfront investment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span>Get stuck in IT backlogs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span>Can't handle the messy reality of real business emails</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-white rounded border-l-4 border-l-accent">
                <p className="text-gray-700 font-medium">
                  The problem isn't that email automation doesn't work. It's that most companies approach it as a technology project instead of a business process problem.
                </p>
              </div>
            </div>

            {/* 30-Day Solution */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">What Actually Works: The 30-Day Reality Check</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 mb-8">
                <p>Let's be specific about what's possible in 30 days—not in theory, but in practice:</p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Week 1: Analysis</h3>
                    <p className="text-gray-700">
                      We analyze one high-volume email process. Purchase orders, customer inquiries, invoice processing—whatever causes the most pain. We identify the exact fields that need extracting, the systems they need to flow into, and the edge cases that trip up simple automation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Week 2-3: Build</h3>
                    <p className="text-gray-700 mb-4">We build and test a working AI system that:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Reads incoming emails</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Extracts the data (even from PDFs, images, and poorly formatted text)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Validates the information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Routes it to your systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Flags anything that needs human review</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Week 4: Production</h3>
                    <p className="text-gray-700">
                      Your team uses it in production. You own the code. It handles exceptions gracefully. It gets better over time.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* ROI Section */}
            <div className="mb-16 bg-accent/5 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">The ROI Is Ridiculous (When You Do It Right)</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Companies using email automation save an average of 30% on operational costs. Automated processes achieve 90% higher accuracy compared to manual entry.
                </p>
                <p>
                  But the real value isn't the cost savings. It's what your people do with the time they get back.
                </p>
                <p className="text-xl font-semibold text-gray-900">
                  One of our clients in operations went from having their team spend 40% of their week on email data entry to less than 5%. That's not 35% more email processing. That's 35% more time solving actual operational challenges, improving processes, building relationships with suppliers.
                </p>
              </div>
            </div>

            {/* Real Examples */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8">What This Looks Like in Practice</h2>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Purchase Order Processing</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Before:</strong> 3 people spending 2 hours daily manually entering PO data from supplier emails into the ERP system.
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>After:</strong> AI reads the emails, extracts the data, validates it against existing records, and creates the PO automatically. Humans review only exceptions.
                    </p>
                    <p className="text-accent font-semibold">Time saved: 85%</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Customer Service Intake</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Before:</strong> Support team manually copying customer information and issue details from emails into the ticketing system.
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>After:</strong> System reads the email, categorizes the issue, extracts customer data, creates a properly tagged ticket, and assigns it to the right team.
                    </p>
                    <p className="text-accent font-semibold">Time saved: 60%</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Invoice Processing</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Before:</strong> Finance team downloading invoice PDFs from emails, manually entering data into accounting system.
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>After:</strong> AI extracts invoice data from attachments (even scanned PDFs), matches to purchase orders, flags discrepancies, routes for approval.
                    </p>
                    <p className="text-accent font-semibold">Time saved: 75%</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Honest Assessment */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">The Honest Assessment</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Not every email process is worth automating. Sometimes the volume is too low. Sometimes the variation is too high. Sometimes the ROI just isn't there.
                </p>
                <p>
                  We'll tell you if that's the case. We reject 60% of projects that come our way because they're not a good fit.
                </p>
                <p>
                  But if you have people manually copying data from emails into systems, and they do it more than a few times a week, the math probably makes sense.
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
            <h2 className="text-4xl font-bold mb-6">Sound Familiar?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              If your team is drowning in email processing, let's talk about whether automation makes sense for your specific situation.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                Book Free 90-Minute Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-primary-foreground/70 mt-6">
              We'll give you an honest answer about whether AI can help—even if that answer is "no"
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
              <Link href="/insights/document-processing" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-accent transition-colors">
                      The Document Processing Disaster
                    </h3>
                    <p className="text-gray-600 mb-4">Why Knowledge Workers Spend 60% of Their Time on Data Entry</p>
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
                      Customer Service Costs Are About to Double
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
