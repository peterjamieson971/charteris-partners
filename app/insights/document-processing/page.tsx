import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "The Document Processing Disaster Costing You Millions | Charteris Partners",
  description: "Why Knowledge Workers Spend 60% of Their Time on Data Entry—and the 30-day fix that actually works.",
};

export default function DocumentProcessingPage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/shutterstock_2481137361.jpg" alt="Document Processing" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/insights" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Insights
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 text-xs font-semibold bg-accent/20 text-primary-foreground rounded-full">Productivity</span>
              <span className="text-sm text-primary-foreground/80">5 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">The Document Processing Disaster Costing You Millions</h1>
            <p className="text-xl text-primary-foreground/90">Why Knowledge Workers Spend 60% of Their Time on Data Entry</p>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>The Silent Productivity Killer</h2>
            <p>
              Watch your accounts payable team for an hour. Here's what you'll see:
            </p>
            <p>
              They receive an invoice PDF via email. They open it. They manually type the vendor name into the accounting system. They type the invoice number. They type the amount. They type the line items. They save it. They move to the next invoice.
            </p>
            <p>
              Repeat 50 times a day. Repeat every day. Forever.
            </p>
            <p>
              This isn't unique to AP. Contract review teams manually copying terms into spreadsheets. Operations teams transferring purchase order details from PDFs to the ERP. HR teams entering resume data into the hiring system.
            </p>
            <p>
              <strong>Manual data entry can consume up to 40% of an office worker's day.</strong> And poor data quality from manual entry? That costs organizations an average of <strong>$15 million per year</strong> according to Gartner.
            </p>

            <h2>Why This Got So Bad</h2>
            <p>
              Here's the frustrating part: The information is already digital. It's in PDFs, scanned documents, emails, images. It's right there on the screen.
            </p>
            <p>
              But it's locked in formats your systems can't read. So humans become the translation layer. They read the PDF with their eyes, process it with their brain, and type it into a system with their fingers.
            </p>
            <p>
              We've spent decades digitizing documents—scanning paper, creating PDFs, enabling paperless workflows. But we didn't automate the last mile. We just changed where humans do the copying.
            </p>

            <h2>What Actually Works Now</h2>
            <p>
              AI-powered document processing can extract data from any document format—PDFs, images, scanned documents, handwritten forms—with 90%+ accuracy. More importantly:
            </p>
            <ul>
              <li><strong>80-90% reduction in processing time</strong></li>
              <li><strong>Works on unstructured documents</strong> (not just perfect forms)</li>
              <li><strong>Handles variations and exceptions</strong> (different invoice formats, poor scans, handwriting)</li>
              <li><strong>Gets better over time</strong> as it learns from corrections</li>
            </ul>
            <p>
              This isn't OCR from 2010. This is AI that understands context, handles messy real-world documents, and actually works.
            </p>

            <h2>Real-World Examples</h2>
            <p>
              <strong>Invoice Processing</strong><br />
              Before: AP team manually entering data from 200 invoices daily. 15 minutes per invoice. 50 hours/week of pure data entry. After: AI extracts vendor, amount, line items, and tax details automatically. System routes for approval. Humans verify exceptions only. Time saved: 85%. Error rate: Cut by 90%.
            </p>
            <p>
              <strong>Contract Review</strong><br />
              Before: Legal team manually reading contracts, copying key terms (renewal dates, payment terms, liability clauses) into a tracking spreadsheet. After: AI reads contracts, identifies key clauses, extracts terms, populates the database. Humans review AI-flagged risks. Time saved: 70%. Nothing falls through cracks.
            </p>
            <p>
              <strong>Customer Onboarding</strong><br />
              Before: Team manually entering customer information from application forms (some digital, some scanned, some handwritten). After: AI reads all formats, extracts customer data, populates CRM, flags incomplete information. Humans handle exceptions only. Onboarding time: Cut by 60%.
            </p>
            <p>
              <strong>Expense Management</strong><br />
              Before: Employees manually entering receipt data. Finance team verifying and correcting. After: Photo of receipt gets processed instantly. AI extracts date, vendor, amount, category. Expense report auto-populated. Time saved per expense: 5 minutes. Multiply across thousands of expenses monthly.
            </p>

            <h2>What This Looks Like in 30 Days</h2>
            <p>
              We're not trying to automate every document type in your company. We're solving one specific, high-volume problem.
            </p>
            <p>
              <strong>Week 1:</strong> Pick your biggest document processing pain point. Invoices? Contracts? Purchase orders? Customer forms? We analyze the document types, identify what needs extracting, and determine the downstream systems that need the data.
            </p>
            <p>
              <strong>Week 2-3:</strong> We build a system that:
            </p>
            <ul>
              <li>Reads your specific document types (even poorly scanned or inconsistent formats)</li>
              <li>Extracts the fields you need</li>
              <li>Validates the data</li>
              <li>Routes it to your systems (accounting software, ERP, CRM, whatever you use)</li>
              <li>Flags anything that needs human review</li>
            </ul>
            <p>
              <strong>Week 4:</strong> Your team uses it in production. Real documents. Real systems. Real time saved.
            </p>

            <h2>The Math That Matters</h2>
            <p>
              Let's be specific. Company processes 5,000 invoices monthly. Each takes 10 minutes of manual data entry. That's 833 hours per month, or roughly 5 full-time employees worth of work.
            </p>
            <p>
              Automate 85% of that = 708 hours saved monthly = 4.25 FTEs redirected to higher-value work.<br />
              At $40K/year per employee = $170K annually in redirected productivity.<br />
              Reduce data entry errors by 90% = Fewer payment errors, better vendor relationships, cleaner books.
            </p>
            <p>
              Investment: 30-day build. Ongoing AI costs based on volume (pennies per document).
            </p>

            <h2>What It Doesn't Do</h2>
            <p>
              Let's be clear about limitations:
            </p>
            <ul>
              <li>It won't be 100% accurate on day one (nothing is)</li>
              <li>It needs humans to review exceptions and edge cases</li>
              <li>It works best on repetitive document types (hundreds or thousands of similar documents)</li>
              <li>It's not worth building for document types you only process occasionally</li>
            </ul>
            <p>
              If you're processing the same type of document repeatedly, in high volume, and it requires manual data entry, automation probably makes sense.
            </p>

            <h2>How It Actually Works</h2>
            <p>
              <strong>Step 1: Document Ingestion</strong><br />
              Documents arrive via email, upload portal, or integration with your existing systems. PDFs, images, scans—format doesn't matter.
            </p>
            <p>
              <strong>Step 2: AI Extraction</strong><br />
              The system reads the document, identifies key fields (invoice number, vendor, amount, dates, line items), extracts the data, and validates it against business rules.
            </p>
            <p>
              <strong>Step 3: System Integration</strong><br />
              Extracted data flows directly into your accounting software, ERP, CRM, or database. No manual entry required.
            </p>
            <p>
              <strong>Step 4: Exception Handling</strong><br />
              If the system isn't confident about a field, it flags it for human review. Humans correct it. The system learns from the correction.
            </p>
            <p>
              <strong>Step 5: Continuous Improvement</strong><br />
              Over time, accuracy improves as the system learns from your specific document formats and business rules.
            </p>

            <h2>The Honest Assessment</h2>
            <p>
              We recommend starting with one document type. The one that's crushing your team's morale. The one where errors cause the most pain. The one with the clearest ROI.
            </p>
            <p>
              We'll spend 90 minutes analyzing your situation: What documents you're processing, how much time it's consuming, whether AI can handle the variations, what the realistic accuracy will be, and what the ROI looks like.
            </p>
            <p>
              No sales pitch. Just an honest technical assessment.
            </p>
            <p>
              If it makes sense, we'll build working software in 30 days. It'll process your actual documents in your actual systems. Your team will use it immediately. You'll know within weeks if the ROI is real.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Drowning in Documents?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's figure out if AI can actually free your team from manual data entry.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Book Free 90-Minute Assessment<ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-primary-foreground/70 mt-4">Honest analysis of whether automation makes sense for your documents</p>
          </div>
        </div>
      </section>

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
              <Link href="/insights/customer-service-costs" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-accent transition-all">
                <h3 className="font-bold text-lg mb-2">Customer Service Costs Doubling</h3>
                <p className="text-gray-600 text-sm mb-3">The Crisis No One's Preparing For</p>
                <span className="text-accent text-sm font-medium">Read Article →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
