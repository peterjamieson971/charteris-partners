import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Why Your Customer Service Costs Are About to Double | Charteris Partners",
  description: "The customer service crisis no one's preparing for—and what smart companies are doing about it right now.",
};

export default function CustomerServiceCostsPage() {
  return (
    <main className="min-h-screen">
      {/* Article Header */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-16 overflow-hidden">
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
            <Link href="/insights" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 text-xs font-semibold bg-accent/20 text-primary-foreground rounded-full">
                Customer Experience
              </span>
              <span className="text-sm text-primary-foreground/80">4 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Why Your Customer Service Costs Are About to Double
            </h1>
            <p className="text-xl text-primary-foreground/90">
              The Customer Service Crisis No One's Preparing For
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>The Perfect Storm</h2>
            <p>
              Three things are happening simultaneously to customer service teams right now:
            </p>
            <ol>
              <li><strong>Ticket volumes are at all-time highs</strong> (75% of service teams reported record volumes in 2024)</li>
              <li><strong>Finding and keeping agents is harder than ever</strong> (turnover rates hit 30-40%, costing $13 billion annually in the US)</li>
              <li><strong>Cases are getting more complex</strong> (66% of agents report increasing case complexity)</li>
            </ol>
            <p>
              Do the math: More tickets + fewer agents + harder problems = costs spiraling out of control.
            </p>
            <p>
              And here's the kicker: <strong>79% of companies don't even know what their cost per support ticket is.</strong> They're flying blind into a crisis.
            </p>

            <h2>What It Actually Costs</h2>
            <p>
              Let's put real numbers on this. The average cost per call in US contact centers ranges from $2.70 to $5.60. That might not sound like much, but multiply it across thousands of tickets per month.
            </p>
            <p>
              A mid-sized company handling 50,000 support tickets annually at $4 per ticket is spending $200,000 just on ticket resolution. And that's before you factor in:
            </p>
            <ul>
              <li>The cost of hiring replacements (30% of an employee's salary)</li>
              <li>Training time (new agents take 3-6 months to reach full productivity)</li>
              <li>Lost customers from poor service (68% of C-level executives say retention is harder than ever)</li>
            </ul>

            <h2>The Hiring Problem Is Getting Worse</h2>
            <p>
              Customer service has one of the highest turnover rates of any industry. Between 30-40% of agents leave every year. That means you're constantly in hiring mode.
            </p>
            <p>
              But here's what changed: Employers are now receiving <strong>3.5 fewer applications per job opening</strong> than before. The talent pool shrank while your need for agents grew.
            </p>
            <p>
              And when you do find someone? It costs 30% of their annual salary just to hire and onboard them. For a $40,000/year agent, that's $12,000 in hiring costs. If they leave after a year (which 30-40% do), you're right back where you started.
            </p>

            <h2>Why This Matters More Than You Think</h2>
            <p>
              Poor customer service doesn't just cost you money directly. It costs you customers. And those customers tell others.
            </p>
            <p>
              When your support team is understaffed, overworked, and dealing with complex cases they're not equipped to handle, response times go up. Quality goes down. Customers leave.
            </p>
            <p>
              The cycle accelerates: Agents burn out from impossible workloads. They quit. You're even more understaffed. Remaining agents get even more overloaded. More quit.
            </p>

            <h2>What Smart Companies Are Doing Right Now</h2>
            <p>
              While most companies are stuck in this death spiral, a small group figured something out: <strong>You don't need more agents. You need better leverage.</strong>
            </p>
            <p>
              AI-driven automation is reducing customer service costs by 30% while simultaneously:
            </p>
            <ul>
              <li>Resolving tickets 52% faster</li>
              <li>Allowing agents to handle 13.8% more inquiries per hour</li>
              <li>Automating up to 80% of routine tasks</li>
            </ul>
            <p>
              Real example: Unity reduced ticket volumes by 8,000, saving $1.3 million by deploying an AI agent. NIB Health Insurance saved $22 million through AI-driven digital assistants.
            </p>
            <p>
              These aren't theory. These are production systems handling real customer inquiries right now.
            </p>

            <h2>What Actually Works in 30 Days</h2>
            <p>
              Let's be specific. Here's what's automatable in a month:
            </p>
            <p>
              <strong>Tier 1 Automation:</strong> Password resets, order status checks, basic account questions. These are 60-70% of most support queues. An AI agent can handle them instantly, 24/7, in multiple languages.
            </p>
            <p>
              <strong>Smart Routing:</strong> The system reads incoming tickets, categorizes them, extracts key information, and routes them to the right specialist. What took 15 minutes of agent time now takes 2 seconds.
            </p>
            <p>
              <strong>Agent Assistance:</strong> When a complex case does reach a human, AI suggests responses based on similar past tickets, pulls relevant knowledge base articles, and auto-fills forms. Agents work faster and make fewer errors.
            </p>

            <h2>The Math That Actually Matters</h2>
            <p>
              If you're handling 50,000 tickets annually at $4 per ticket, that's $200,000 in annual support costs.
            </p>
            <p>
              Automate 60% of routine tickets = $120,000 saved.<br />
              Speed up remaining 40% by 50% = another $40,000 saved.<br />
              Reduce agent turnover by improving workload = $50,000+ in reduced hiring costs.
            </p>
            <p>
              Total impact: $200,000+ annually. Investment to build it: 30 days and a fraction of that annual savings.
            </p>

            <h2>What This Looks Like in Practice</h2>
            <p>
              <strong>Scenario 1: E-commerce Support</strong><br />
              Before: Agents manually checking order statuses, processing returns, answering shipping questions. After: AI handles "Where's my order?" queries instantly by checking tracking data. Returns get processed automatically if they meet policy criteria. Only exceptions reach humans. Result: 70% reduction in Tier 1 ticket volume.
            </p>
            <p>
              <strong>Scenario 2: SaaS Technical Support</strong><br />
              Before: Every "How do I..." question creates a ticket that an agent manually responds to. After: AI searches knowledge base, provides step-by-step guides, and creates tickets only when it can't solve the issue. Result: 65% of questions resolved without human involvement.
            </p>
            <p>
              <strong>Scenario 3: B2B Customer Success</strong><br />
              Before: CSMs manually triaging incoming requests, gathering account context, coordinating with other teams. After: AI reads the request, pulls account history, identifies the right internal team, and creates a pre-filled handoff. Result: CSMs spend time solving problems, not routing tickets.
            </p>

            <h2>The Honest Truth</h2>
            <p>
              Not every support operation needs AI. If you're handling 50 tickets a month, the ROI isn't there. If your tickets are all highly specialized and unique, automation won't help much.
            </p>
            <p>
              But if you're seeing:
            </p>
            <ul>
              <li>Growing ticket volumes</li>
              <li>High agent turnover</li>
              <li>The same questions asked repeatedly</li>
              <li>Agents spending time on routing and data entry instead of problem-solving</li>
            </ul>
            <p>
              ...then the math probably makes sense.
            </p>

            <h2>What Happens Next</h2>
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
      </article>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Drowning in Support Tickets?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's figure out if AI can actually help—or if there's a better answer for your situation.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Book Free 90-Minute Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Honest technical assessment from people who build this daily
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Insights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/insights/email-processing-problem" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-accent transition-all">
                <h3 className="font-bold text-lg mb-2">The £2M Email Problem</h3>
                <p className="text-gray-600 text-sm mb-3">How Fortune 500 Companies Are Losing Millions to Email Processing</p>
                <span className="text-accent text-sm font-medium">Read Article →</span>
              </Link>
              <Link href="/insights/revenue-from-data" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-accent transition-all">
                <h3 className="font-bold text-lg mb-2">Revenue Hiding in Your Database</h3>
                <p className="text-gray-600 text-sm mb-3">How Companies Are Creating New Revenue Streams From Existing Data</p>
                <span className="text-accent text-sm font-medium">Read Article →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
