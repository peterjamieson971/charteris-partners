/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, TrendingDown, AlertCircle, DollarSign, FileText, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "The Document Processing Disaster Costing You Millions",
  description: "Why Knowledge Workers Spend 60% of Their Time on Data Entry—and the 30-day fix that actually works.",
  alternates: {
    canonical: "https://charterispartners.com/insights/document-processing",
  },
  openGraph: {
    title: "The Document Processing Disaster Costing You Millions",
    description: "Why Knowledge Workers Spend 60% of Their Time on Data Entry—and the 30-day fix that actually works.",
    url: "https://charterispartners.com/insights/document-processing",
    type: "article",
    images: [
      {
        url: "https://charterispartners.com/images/shutterstock_2481137361.jpg",
        width: 1200,
        height: 630,
        alt: "Document Processing Automation AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Document Processing Disaster Costing You Millions",
    description: "Why Knowledge Workers Spend 60% of Their Time on Data Entry",
    images: ["https://charterispartners.com/images/shutterstock_2481137361.jpg"],
  },
};

export default function DocumentProcessingPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "The Document Processing Disaster Costing You Millions",
    "description": "Why Knowledge Workers Spend 60% of Their Time on Data Entry—and the 30-day fix that actually works.",
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
      "@id": "https://charterispartners.com/insights/document-processing"
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
          <Image src="/images/shutterstock_2481137361.jpg" alt="Intelligent document processing system using OCR and AI to automate data entry" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/insights" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Insights
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-2 text-sm font-semibold bg-accent text-white rounded-full">Productivity</span>
              <span className="text-sm text-primary-foreground/80">5 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">The Document Processing Disaster Costing You Millions</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">Why Knowledge Workers Spend 60% of Their Time on Data Entry</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">The Silent Productivity Killer</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
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
                  <strong>Manual data entry can consume up to 40% of an office worker's day.</strong> And poor data quality from manual entry? That costs organizations an average of <strong>£15 million per year</strong> according to Gartner.
                </p>
              </div>
            </div>

            {/* Key Statistics */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-3xl font-bold text-primary mb-2">40%</p>
                      <p className="text-gray-600">Of an office worker's day consumed by manual data entry</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <DollarSign className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-3xl font-bold text-primary mb-2">£15M</p>
                      <p className="text-gray-600">Average annual cost from poor data quality due to manual entry (Gartner)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Problem Section */}
            <div className="mb-16 bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Why This Got So Bad</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Here's the frustrating part: The information is already digital. It's in PDFs, scanned documents, emails, images. It's right there on the screen.
                </p>
                <p>
                  But it's locked in formats your systems can't read. So humans become the translation layer. They read the PDF with their eyes, process it with their brain, and type it into a system with their fingers.
                </p>
                <p className="text-xl font-semibold text-gray-900">
                  We've spent decades digitizing documents—scanning paper, creating PDFs, enabling paperless workflows. But we didn't automate the last mile. We just changed where humans do the copying.
                </p>
              </div>
            </div>

            {/* Solution Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">What Actually Works Now</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 mb-8">
                <p>
                  AI-powered document processing can extract data from any document format—PDFs, images, scanned documents, handwritten forms—with 90%+ accuracy. More importantly:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">80-90% reduction</p>
                        <p className="text-sm text-gray-600">In processing time</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <FileText className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">Works on unstructured documents</p>
                        <p className="text-sm text-gray-600">Not just perfect forms</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">Handles variations and exceptions</p>
                        <p className="text-sm text-gray-600">Different formats, poor scans, handwriting</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <TrendingDown className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">Gets better over time</p>
                        <p className="text-sm text-gray-600">Learns from corrections</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-accent/5 rounded border-l-4 border-l-accent">
                <p className="text-gray-700 font-medium">
                  This isn't OCR from 2010. This is AI that understands context, handles messy real-world documents, and actually works.
                </p>
              </div>
            </div>

            {/* Real Examples */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8">Real-World Examples</h2>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Invoice Processing</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Before:</strong> AP team manually entering data from 200 invoices daily. 15 minutes per invoice. 50 hours/week of pure data entry.
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>After:</strong> AI extracts vendor, amount, line items, and tax details automatically. System routes for approval. Humans verify exceptions only.
                    </p>
                    <p className="text-accent font-semibold">Time saved: 85%. Error rate: Cut by 90%.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Contract Review</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Before:</strong> Legal team manually reading contracts, copying key terms (renewal dates, payment terms, liability clauses) into a tracking spreadsheet.
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>After:</strong> AI reads contracts, identifies key clauses, extracts terms, populates the database. Humans review AI-flagged risks.
                    </p>
                    <p className="text-accent font-semibold">Time saved: 70%. Nothing falls through cracks.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Customer Onboarding</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Before:</strong> Team manually entering customer information from application forms (some digital, some scanned, some handwritten).
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>After:</strong> AI reads all formats, extracts customer data, populates CRM, flags incomplete information. Humans handle exceptions only.
                    </p>
                    <p className="text-accent font-semibold">Onboarding time: Cut by 60%.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Expense Management</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Before:</strong> Employees manually entering receipt data. Finance team verifying and correcting.
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>After:</strong> Photo of receipt gets processed instantly. AI extracts date, vendor, amount, category. Expense report auto-populated.
                    </p>
                    <p className="text-accent font-semibold">Time saved per expense: 5 minutes. Multiply across thousands of expenses monthly.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 30-Day Solution */}
            <div className="mb-16 bg-accent/5 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">What This Looks Like in 30 Days</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 mb-8">
                <p>
                  We're not trying to automate every document type in your company. We're solving one specific, high-volume problem.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Week 1: Analysis</h3>
                    <p className="text-gray-700">
                      Pick your biggest document processing pain point. Invoices? Contracts? Purchase orders? Customer forms? We analyze the document types, identify what needs extracting, and determine the downstream systems that need the data.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Week 2-3: Build</h3>
                    <p className="text-gray-700 mb-4">We build a system that:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Reads your specific document types (even poorly scanned or inconsistent formats)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Extracts the fields you need</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Validates the data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Routes it to your systems (accounting software, ERP, CRM, whatever you use)</span>
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
                      Your team uses it in production. Real documents. Real systems. Real time saved.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* ROI Section */}
            <div className="mb-16 bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">The Math That Matters</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Let's be specific. Company processes 5,000 invoices monthly. Each takes 10 minutes of manual data entry. That's 833 hours per month, or roughly 5 full-time employees worth of work.
                </p>
                <div className="space-y-2 text-lg">
                  <p>Automate 85% of that = <strong>708 hours saved monthly</strong> = 4.25 FTEs redirected to higher-value work.</p>
                  <p>At £40K/year per employee = <strong>£170K annually in redirected productivity</strong>.</p>
                  <p>Reduce data entry errors by 90% = <strong>Fewer payment errors, better vendor relationships, cleaner books</strong>.</p>
                </div>
                <p className="text-xl font-semibold text-gray-900">
                  Investment: 30-day build. Ongoing AI costs based on volume (pennies per document).
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">How It Actually Works</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Step 1: Document Ingestion</h3>
                    <p className="text-gray-700">
                      Documents arrive via email, upload portal, or integration with your existing systems. PDFs, images, scans—format doesn't matter.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Step 2: AI Extraction</h3>
                    <p className="text-gray-700">
                      The system reads the document, identifies key fields (invoice number, vendor, amount, dates, line items), extracts the data, and validates it against business rules.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Step 3: System Integration</h3>
                    <p className="text-gray-700">
                      Extracted data flows directly into your accounting software, ERP, CRM, or database. No manual entry required.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Step 4: Exception Handling</h3>
                    <p className="text-gray-700">
                      If the system isn't confident about a field, it flags it for human review. Humans correct it. The system learns from the correction.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-3">Step 5: Continuous Improvement</h3>
                    <p className="text-gray-700">
                      Over time, accuracy improves as the system learns from your specific document formats and business rules.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Limitations */}
            <div className="mb-16 bg-accent/5 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">What It Doesn't Do</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 mb-6">
                <p>
                  Let's be clear about limitations:
                </p>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span>It won't be 100% accurate on day one (nothing is)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span>It needs humans to review exceptions and edge cases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span>It works best on repetitive document types (hundreds or thousands of similar documents)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span>It's not worth building for document types you only process occasionally</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-white rounded border-l-4 border-l-accent">
                <p className="text-gray-700 font-medium">
                  If you're processing the same type of document repeatedly, in high volume, and it requires manual data entry, automation probably makes sense.
                </p>
              </div>
            </div>

            {/* Honest Assessment */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">The Honest Assessment</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
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

          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Drowning in Documents?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's figure out if AI can actually free your team from manual data entry.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                Book Free 90-Minute Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-primary-foreground/70 mt-6">
              Honest analysis of whether automation makes sense for your documents
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
              <Link href="/insights/customer-service-costs" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-accent transition-colors">
                      Customer Service Costs Doubling
                    </h3>
                    <p className="text-gray-600 mb-4">The Crisis No One's Preparing For</p>
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
