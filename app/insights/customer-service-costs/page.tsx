/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, TrendingDown, Users, AlertCircle, DollarSign, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Why Your Customer Service Costs Are About to Double | Charteris Partners",
  description: "The customer service crisis no one's preparing for—and what smart companies are doing about it right now.",
};

export default function CustomerServiceCostsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/shutterstock_2481137361.jpg"
            alt="Customer Service"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/insights" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-2 text-sm font-semibold bg-accent text-white rounded-full">
                Customer Experience
              </span>
              <span className="text-sm text-primary-foreground/80">4 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Why Your Customer Service Costs Are About to Double
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              The Customer Service Crisis No One's Preparing For
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
              <h2 className="text-3xl font-bold text-primary mb-6">The Perfect Storm</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Three things are happening simultaneously to customer service teams right now:
                </p>
                <ol className="space-y-3">
                  <li><strong>Ticket volumes are at all-time highs</strong> (75% of service teams reported record volumes in 2024)</li>
                  <li><strong>Finding and keeping agents is harder than ever</strong> (turnover rates hit 30-40%, costing £13 billion annually in the US)</li>
                  <li><strong>Cases are getting more complex</strong> (66% of agents report increasing case complexity)</li>
                </ol>
                <p>
                  Do the math: More tickets + fewer agents + harder problems = costs spiraling out of control.
                </p>
                <p>
                  And here's the kicker: <strong>79% of companies don't even know what their cost per support ticket is.</strong> They're flying blind into a crisis.
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
                      <p className="text-3xl font-bold text-primary mb-2">£2.70-£5.60</p>
                      <p className="text-gray-600">Average cost per call in US contact centers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <TrendingDown className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-3xl font-bold text-primary mb-2">30-40%</p>
                      <p className="text-gray-600">Annual agent turnover rate, costing $13B in the US</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cost Breakdown */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">What It Actually Costs</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 mb-8">
                <p>
                  Let's put real numbers on this. The average cost per call in US contact centers ranges from £2.70 to £5.60. That might not sound like much, but multiply it across thousands of tickets per month.
                </p>
                <p>
                  A mid-sized company handling 50,000 support tickets annually at £4 per ticket is spending £200,000 just on ticket resolution. And that's before you factor in:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <DollarSign className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">30% of salary</p>
                        <p className="text-sm text-gray-600">Cost of hiring replacements per employee</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">3-6 months</p>
                        <p className="text-sm text-gray-600">Training time for new agents to reach full productivity</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Users className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">68% of executives</p>
                        <p className="text-sm text-gray-600">Say customer retention is harder than ever</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <TrendingDown className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">3.5 fewer applications</p>
                        <p className="text-sm text-gray-600">Per job opening than before—talent pool shrinking</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Hiring Problem */}
            <div className="mb-16 bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">The Hiring Problem Is Getting Worse</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Customer service has one of the highest turnover rates of any industry. Between 30-40% of agents leave every year. That means you're constantly in hiring mode.
                </p>
                <p>
                  But here's what changed: Employers are now receiving <strong>3.5 fewer applications per job opening</strong> than before. The talent pool shrank while your need for agents grew.
                </p>
                <p>
                  And when you do find someone? It costs 30% of their annual salary just to hire and onboard them. For a £40,000/year agent, that's £12,000 in hiring costs. If they leave after a year (which 30-40% do), you're right back where you started.
                </p>
              </div>
            </div>

            {/* Impact Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Why This Matters More Than You Think</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Poor customer service doesn't just cost you money directly. It costs you customers. And those customers tell others.
                </p>
                <p>
                  When your support team is understaffed, overworked, and dealing with complex cases they're not equipped to handle, response times go up. Quality goes down. Customers leave.
                </p>
                <p className="text-xl font-semibold text-gray-900">
                  The cycle accelerates: Agents burn out from impossible workloads. They quit. You're even more understaffed. Remaining agents get even more overloaded. More quit.
                </p>
              </div>
            </div>

            {/* Solution Section */}
            <div className="mb-16 bg-accent/5 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">What Smart Companies Are Doing Right Now</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 mb-6">
                <p>
                  While most companies are stuck in this death spiral, a small group figured something out: <strong>You don't need more agents. You need better leverage.</strong>
                </p>
                <p>
                  AI-driven automation is reducing customer service costs by 30% while simultaneously:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">52% faster</p>
                        <p className="text-sm text-gray-600">Resolution times for tickets</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">13.8% more</p>
                        <p className="text-sm text-gray-600">Inquiries per hour per agent</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">Up to 80%</p>
                        <p className="text-sm text-gray-600">Of routine tasks automated</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-white rounded border-l-4 border-l-accent">
                <p className="text-gray-700 font-medium mb-2">
                  Real example: Unity reduced ticket volumes by 8,000, saving £1.3 million by deploying an AI agent. NIB Health Insurance saved £22 million through AI-driven digital assistants.
                </p>
                <p className="text-gray-700">
                  These aren't theory. These are production systems handling real customer inquiries right now.
                </p>
              </div>
            </div>

            {/* 30-Day Solution */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">What Actually Works in 30 Days</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 mb-8">
                <p>Let's be specific. Here's what's automatable in a month:</p>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Tier 1 Automation</h3>
                    <p className="text-gray-700">
                      Password resets, order status checks, basic account questions. These are 60-70% of most support queues. An AI agent can handle them instantly, 24/7, in multiple languages.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Smart Routing</h3>
                    <p className="text-gray-700">
                      The system reads incoming tickets, categorizes them, extracts key information, and routes them to the right specialist. What took 15 minutes of agent time now takes 2 seconds.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Agent Assistance</h3>
                    <p className="text-gray-700">
                      When a complex case does reach a human, AI suggests responses based on similar past tickets, pulls relevant knowledge base articles, and auto-fills forms. Agents work faster and make fewer errors.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* ROI Section */}
            <div className="mb-16 bg-accent/5 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">The Math That Actually Matters</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  If you're handling 50,000 tickets annually at £4 per ticket, that's £200,000 in annual support costs.
                </p>
                <div className="space-y-2 text-lg">
                  <p>Automate 60% of routine tickets = <strong>£120,000 saved</strong>.</p>
                  <p>Speed up remaining 40% by 50% = another <strong>£40,000 saved</strong>.</p>
                  <p>Reduce agent turnover by improving workload = <strong>£50,000+ in reduced hiring costs</strong>.</p>
                </div>
                <p className="text-xl font-semibold text-gray-900">
                  Total impact: £200,000+ annually. Investment to build it: 30 days and a fraction of that annual savings.
                </p>
              </div>
            </div>

            {/* Real Examples */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8">What This Looks Like in Practice</h2>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">E-commerce Support</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Before:</strong> Agents manually checking order statuses, processing returns, answering shipping questions.
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>After:</strong> AI handles "Where's my order?" queries instantly by checking tracking data. Returns get processed automatically if they meet policy criteria. Only exceptions reach humans.
                    </p>
                    <p className="text-accent font-semibold">Result: 70% reduction in Tier 1 ticket volume</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">SaaS Technical Support</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Before:</strong> Every "How do I..." question creates a ticket that an agent manually responds to.
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>After:</strong> AI searches knowledge base, provides step-by-step guides, and creates tickets only when it can't solve the issue.
                    </p>
                    <p className="text-accent font-semibold">Result: 65% of questions resolved without human involvement</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">B2B Customer Success</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Before:</strong> CSMs manually triaging incoming requests, gathering account context, coordinating with other teams.
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>After:</strong> AI reads the request, pulls account history, identifies the right internal team, and creates a pre-filled handoff.
                    </p>
                    <p className="text-accent font-semibold">Result: CSMs spend time solving problems, not routing tickets</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Honest Assessment */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">The Honest Truth</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Not every support operation needs AI. If you're handling 50 tickets a month, the ROI isn't there. If your tickets are all highly specialized and unique, automation won't help much.
                </p>
                <p>
                  But if you're seeing:
                </p>
                <ul className="space-y-2">
                  <li>Growing ticket volumes</li>
                  <li>High agent turnover</li>
                  <li>The same questions asked repeatedly</li>
                  <li>Agents spending time on routing and data entry instead of problem-solving</li>
                </ul>
                <p>
                  ...then the math probably makes sense.
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mb-16 bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">What Happens Next</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  We recommend picking your highest-volume, most repetitive support workflow. The one that's crushing your team's morale. The one that makes good agents quit.
                </p>
                <p>
                  We'll spend 90 minutes analyzing whether it's automatable, how we'd build it, what the ROI looks like, and—critically—whether AI is the right solution at all.
                </p>
                <p>
                  No cost. No obligation. Just an honest technical assessment.
                </p>
                <p>
                  If it makes sense, we'll build working software in 30 days. Not a chatbot demo. Real AI that handles real tickets in your real support system. Your team owns the code. It gets better over time as it learns from your data.
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
            <h2 className="text-4xl font-bold mb-6">
              Drowning in Support Tickets?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's figure out if AI can actually help—or if there's a better answer for your situation.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                Book Free 90-Minute Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-primary-foreground/70 mt-6">
              Honest technical assessment from people who build this daily
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
              <Link href="/insights/email-processing-problem" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-accent transition-colors">
                      The £2M Email Problem
                    </h3>
                    <p className="text-gray-600 mb-4">How Fortune 500 Companies Are Losing Millions to Email Processing</p>
                    <span className="text-accent font-medium inline-flex items-center">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
