import Link from "next/link";
import Image from "next/image";
import { Check, X, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Enterprise AI Strategy System™ | Your Personal McKinsey | Charteris Partners",
  description: "Get 100+ PhD-level AI strategists working 24/7 for less than one junior consultant. Replace millions in consulting spend with a permanent AI strategy team.",
};

export default function EnterpriseAIStrategyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/services/enterprise-strategy.jpg"
            alt="AI Strategy"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Most Cost-Effective Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Enterprise AI Strategy System™
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-200">
              Your Personal McKinsey - At 10% of the Cost
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Get 100+ PhD-level AI strategists working 24/7 for less than one junior consultant. Replace millions in consulting spend with a permanent AI strategy team.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                Get Your AI Strategy Team
              </Link>
              <Link
                href="/approach"
                className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                See Our Process
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
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg border-l-4 border-red-500">
                <h3 className="font-bold text-xl mb-4 text-red-600">You're Facing:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Spending millions on consultants who leave you with PDFs</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Strategic decisions taking weeks when markets move in hours</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Institutional knowledge walking out the door with every consultant</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Paying repeatedly to solve the same problems</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg border-l-4 border-accent">
                <h3 className="font-bold text-xl mb-4 text-accent">What You Need:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Strategy team that stays with your organization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Real-time analysis and decision support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Knowledge that compounds instead of disappearing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>90% cost reduction in consulting spend</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
            Our Enterprise AI Strategy System™
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We build a complete AI strategy team that becomes a permanent part of your organization
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-blue-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">100+ Specialized AI Analysts</h3>
              <p className="text-gray-200">
                Each trained on specific domains from financial modeling to competitive intelligence. Available 24/7, analyzing your business in real-time.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent to-green-700 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Automated Consulting Frameworks</h3>
              <p className="text-gray-200">
                Porter's Five Forces, BCG Matrix, McKinsey 7S - all analyzing your business continuously, not just quarterly.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Living Intelligence System</h3>
              <p className="text-gray-200">
                Daily strategic alerts, automatic opportunity identification, competitive move tracking - strategy that adapts as your market moves.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Execution Tracking</h3>
              <p className="text-gray-200">
                Ensures strategy becomes reality with automated project tracking and daily action items. No more strategy documents gathering dust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            What Makes This Different
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start">
                <Check className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">You Own the Entire System Forever</h3>
                  <p className="text-gray-600">No subscriptions, no licenses, no dependencies. Your strategy team is yours.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start">
                <Check className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Gets Smarter Over Time</h3>
                  <p className="text-gray-600">Learns your business deeply, understanding context and nuance that consultants never could.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start">
                <Check className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Knowledge Compounds</h3>
                  <p className="text-gray-600">Instead of disappearing with consultants, insights build on each other continuously.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start">
                <Check className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Real-Time Analysis</h3>
                  <p className="text-gray-600">Strategy happens in hours, not quarterly cycles. Decisions backed by current data.</p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">90%</div>
              <p className="text-gray-700 font-medium">Reduction in consulting spend</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">24/7</div>
              <p className="text-gray-700 font-medium">Strategic analysis availability</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">30 Days</div>
              <p className="text-gray-700 font-medium">To ROI identification</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">100%</div>
              <p className="text-gray-700 font-medium">Independence from consultants</p>
            </div>
          </div>
          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-bold text-xl mb-4 text-primary">Timeline: 8-12 Weeks</h3>
            <p className="text-gray-700">
              Full deployment of your AI strategy team, trained on your business, integrated with your systems, and actively delivering insights.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Replace Consulting Spend With Permanent Capability?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss how an AI strategy team can transform your decision-making and eliminate consulting dependency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                Book Free Assessment
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <p className="mt-8 text-primary-foreground/80">
              <strong>We only take 5 clients per quarter.</strong> If this isn't right for you, we'll tell you immediately and suggest the right approach.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
