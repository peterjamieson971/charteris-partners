import Link from "next/link";
import Image from "next/image";
import { Check, TrendingDown, Users, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Operations AI Transformation | Cut Costs 30% | Charteris Partners",
  description: "Cut operational costs by 30% without cutting people. Automate the mundane so your team can do the meaningful work.",
};

export default function OperationsTransformationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/services/operations-transformation.jpg"
            alt="Operations Transformation"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Performance-Based Pricing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Operations AI Transformation
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-200">
              Cut Costs by 30% Without Cutting People
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Automate the mundane so your team can do the meaningful. Comprehensive operational automation that enhances capabilities, not replaces them.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                Start Transformation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            The Challenge
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-center">
              <TrendingDown className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Shrinking Margins</h3>
              <p className="text-gray-600 text-sm">While headcount is frozen and costs keep rising</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Drowning Teams</h3>
              <p className="text-gray-600 text-sm">Spending time on repetitive tasks, not value work</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <TrendingDown className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Service Costs</h3>
              <p className="text-gray-600 text-sm">Customer service expenses eating into profits</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Manual Processes</h3>
              <p className="text-gray-600 text-sm">Causing delays, errors, and customer frustration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Our Comprehensive Solution
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-blue-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Intelligent Document Processing</h3>
              <p className="text-gray-200 mb-4">
                Automate data extraction, validation, and routing from any document type.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Invoice processing and validation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Contract analysis and routing</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Application processing automation</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-accent to-green-700 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Customer Service Automation</h3>
              <p className="text-gray-200 mb-4">
                AI handling 70% of queries with better satisfaction scores.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>24/7 customer support coverage</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Intelligent query routing</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sentiment-based escalation</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Workflow Optimization</h3>
              <p className="text-gray-200 mb-4">
                Smart routing, automated approvals, exception handling.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automated approval workflows</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Intelligent task routing</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Exception detection & handling</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Predictive Operations</h3>
              <p className="text-gray-200 mb-4">
                Anticipate issues before they occur, optimize resource allocation.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Demand forecasting & planning</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Resource optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Issue prediction & prevention</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Implementation Approach
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Process Mining</h3>
                  <p className="text-gray-600">Identify highest-impact automation opportunities through data analysis and process mapping.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Pilot & Prove</h3>
                  <p className="text-gray-600">Start with one process, demonstrate measurable value, build organizational confidence.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Scale & Optimize</h3>
                  <p className="text-gray-600">Roll out across operations with continuous improvement and performance monitoring.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Enable & Transfer</h3>
                  <p className="text-gray-600">Your team owns and operates everything - complete knowledge transfer and independence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivered Outcomes */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Delivered Outcomes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">30%</div>
              <p className="text-gray-700 font-medium">Cost reduction in 6 months</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">50%</div>
              <p className="text-gray-700 font-medium">Faster process completion</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">90%</div>
              <p className="text-gray-700 font-medium">Reduction in manual data entry</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">0</div>
              <p className="text-gray-700 font-medium">Redundancies required</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">↑</div>
              <p className="text-gray-700 font-medium">Employee satisfaction</p>
            </div>
          </div>
          <div className="mt-12 bg-accent/10 border border-accent rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-bold text-xl mb-4 text-primary">Performance-Based Pricing</h3>
            <p className="text-gray-700">
              We get paid from the savings we generate. Our success is directly tied to your cost reduction - typically 6-8 week implementation timeline.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Cut Costs Without Cutting People?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let&apos;s identify your highest-impact automation opportunities and build a performance-based engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                Start Transformation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
