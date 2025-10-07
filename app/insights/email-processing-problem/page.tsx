import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "The £2M Email Problem Nobody Talks About | Charteris Partners",
  description: "How Fortune 500 Companies Are Losing Millions to Email Processing - And the 30-Day Fix That Actually Works",
};

export default function EmailProcessingProblemPage() {
  return (
    <main className="min-h-screen">
      {/* Article Header */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/shutterstock_2481137361.jpg"
            alt="Email Processing"
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
                Operations
              </span>
              <span className="text-sm text-primary-foreground/80">5 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The £2M Email Problem Nobody Talks About
            </h1>
            <p className="text-xl text-primary-foreground/90">
              How Fortune 500 Companies Are Losing Millions to Email Processing - And the 30-Day Fix
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>The Hidden Cost in Every Inbox</h2>
            <p>
              Your finance team processes invoices from emails. Customer service copies data from customer emails into your CRM. Operations manually enters order information from supplier emails into your ERP system.
            </p>
            <p>
              It feels like normal work. Everyone does it. But here's what the numbers actually say: <strong>Manual data entry from emails costs companies an average of $28,500 per employee annually.</strong>
            </p>
            <p>
              For a team of 70 people handling email-based data entry, that's nearly £2 million a year. Gone. Not into product development. Not into customer acquisition. Into copying text from one system to another.
            </p>

            <h2>The Real Problem Isn't the Time—It's What Happens Next</h2>
            <p>
              Here's what we see when we analyze email processing workflows:
            </p>
            <ul>
              <li><strong>30-50% of working hours</strong> consumed by manual data entry tasks</li>
              <li><strong>Manual errors costing $220 per record</strong> on average</li>
              <li><strong>56% of employees experiencing burnout</strong> from repetitive data tasks</li>
              <li><strong>Employees checking email 11-36 times per hour</strong>, destroying deep work</li>
            </ul>
            <p>
              But the worst part? These aren't just productivity problems. They're retention problems. Your best people don't want to copy and paste. They want to solve real problems. So they leave.
            </p>

            <h2>Why Most Email Automation Projects Fail</h2>
            <p>
              "We tried to automate this before. It didn't work."
            </p>
            <p>
              We hear this constantly. The share of companies abandoning AI projects jumped to 42% in 2025, from just 17% the year before. Why? Because most automation projects:
            </p>
            <ul>
              <li>Take 6-12 months to deliver anything usable</li>
              <li>Require massive upfront investment</li>
              <li>Get stuck in IT backlogs</li>
              <li>Can't handle the messy reality of real business emails</li>
            </ul>
            <p>
              The problem isn't that email automation doesn't work. It's that most companies approach it as a technology project instead of a business process problem.
            </p>

            <h2>What Actually Works: The 30-Day Reality Check</h2>
            <p>
              Let's be specific about what's possible in 30 days—not in theory, but in practice:
            </p>
            <p>
              <strong>Week 1:</strong> We analyze one high-volume email process. Purchase orders, customer inquiries, invoice processing—whatever causes the most pain. We identify the exact fields that need extracting, the systems they need to flow into, and the edge cases that trip up simple automation.
            </p>
            <p>
              <strong>Week 2-3:</strong> We build and test a working AI system that:
            </p>
            <ul>
              <li>Reads incoming emails</li>
              <li>Extracts the data (even from PDFs, images, and poorly formatted text)</li>
              <li>Validates the information</li>
              <li>Routes it to your systems</li>
              <li>Flags anything that needs human review</li>
            </ul>
            <p>
              <strong>Week 4:</strong> Your team uses it in production. You own the code. It handles exceptions gracefully. It gets better over time.
            </p>

            <h2>The ROI Is Ridiculous (When You Do It Right)</h2>
            <p>
              Companies using email automation save an average of 30% on operational costs. Automated processes achieve 90% higher accuracy compared to manual entry.
            </p>
            <p>
              But the real value isn't the cost savings. It's what your people do with the time they get back.
            </p>
            <p>
              One of our clients in operations went from having their team spend 40% of their week on email data entry to less than 5%. That's not 35% more email processing. That's 35% more time solving actual operational challenges, improving processes, building relationships with suppliers.
            </p>

            <h2>What This Looks Like in Practice</h2>
            <p>
              <strong>Scenario 1: Purchase Order Processing</strong><br />
              Before: 3 people spending 2 hours daily manually entering PO data from supplier emails into the ERP system. After: AI reads the emails, extracts the data, validates it against existing records, and creates the PO automatically. Humans review only exceptions. Time saved: 85%.
            </p>
            <p>
              <strong>Scenario 2: Customer Service Intake</strong><br />
              Before: Support team manually copying customer information and issue details from emails into the ticketing system. After: System reads the email, categorizes the issue, extracts customer data, creates a properly tagged ticket, and assigns it to the right team. Time saved: 60%.
            </p>
            <p>
              <strong>Scenario 3: Invoice Processing</strong><br />
              Before: Finance team downloading invoice PDFs from emails, manually entering data into accounting system. After: AI extracts invoice data from attachments (even scanned PDFs), matches to purchase orders, flags discrepancies, routes for approval. Time saved: 75%.
            </p>

            <h2>The Honest Assessment</h2>
            <p>
              Not every email process is worth automating. Sometimes the volume is too low. Sometimes the variation is too high. Sometimes the ROI just isn't there.
            </p>
            <p>
              We'll tell you if that's the case. We reject 60% of projects that come our way because they're not a good fit.
            </p>
            <p>
              But if you have people manually copying data from emails into systems, and they do it more than a few times a week, the math probably makes sense.
            </p>

            <h2>What Happens Next</h2>
            <p>
              Here's what we recommend: Pick one email-based process that's driving you crazy. The one where people complain about doing it. The one that creates bottlenecks. The one that causes errors.
            </p>
            <p>
              We'll spend 90 minutes with you analyzing whether it's automatable, how we'd build it, what the ROI would look like, and whether AI is even the right answer.
            </p>
            <p>
              No cost. No sales pitch. Just an honest technical assessment from people who build this stuff every day.
            </p>
            <p>
              And if it makes sense to move forward, we'll have working software in your hands in 30 days. Not a demo. Not a proof of concept. Real software that processes real emails in your real systems.
            </p>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Sound Familiar?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              If your team is drowning in email processing, let's talk about whether automation makes sense for your specific situation.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Book Free 90-Minute Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-primary-foreground/70 mt-4">
              We'll give you an honest answer about whether AI can help—even if that answer is "no"
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
              <Link href="/insights/document-processing" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-accent transition-all">
                <h3 className="font-bold text-lg mb-2">The Document Processing Disaster</h3>
                <p className="text-gray-600 text-sm mb-3">Why Knowledge Workers Spend 60% of Their Time on Data Entry</p>
                <span className="text-accent text-sm font-medium">Read Article →</span>
              </Link>
              <Link href="/insights/customer-service-costs" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-accent transition-all">
                <h3 className="font-bold text-lg mb-2">Customer Service Costs Are About to Double</h3>
                <p className="text-gray-600 text-sm mb-3">The Customer Service Crisis No One's Preparing For</p>
                <span className="text-accent text-sm font-medium">Read Article →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
