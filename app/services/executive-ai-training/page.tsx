import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Executive AI Training | Strategic AI Literacy for Leadership | Charteris Partners",
  description: "Transform your C-suite and board from AI-curious to AI-confident with practical, business-focused training.",
};

export default function ExecutiveAITrainingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/services/executive-training.jpg"
            alt="Executive AI Training"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Leadership Essential
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Executive AI Training
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-200">
              Strategic AI Literacy for Leadership
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Transform your C-suite and board from AI-curious to AI-confident with practical, business-focused training.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                Book Executive Training
              </Link>
              <Link
                href="/approach"
                className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                See Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Training Options */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Training Format Options
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-accent transition-colors">
              <div className="text-accent font-bold text-sm mb-2">2 HOURS</div>
              <h3 className="font-bold text-xl mb-3">Board Presentation</h3>
              <p className="text-gray-600">AI literacy for board oversight and governance decisions</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-accent transition-colors">
              <div className="text-accent font-bold text-sm mb-2">1 DAY</div>
              <h3 className="font-bold text-xl mb-3">Executive Intensive</h3>
              <p className="text-gray-600">Deep dive for C-suite with hands-on demonstrations</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-accent bg-accent/5">
              <div className="text-accent font-bold text-sm mb-2">4 SESSIONS</div>
              <h3 className="font-bold text-xl mb-3">Leadership Series</h3>
              <p className="text-gray-600">Comprehensive program with homework and projects</p>
              <div className="mt-3 text-xs text-accent font-semibold">MOST POPULAR</div>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-accent transition-colors">
              <div className="text-accent font-bold text-sm mb-2">2 DAYS</div>
              <h3 className="font-bold text-xl mb-3">Strategy Retreat</h3>
              <p className="text-gray-600">Full team alignment and AI roadmap planning</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            What Leadership Will Master
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-bold text-xl mb-6 text-primary">Core Topics</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">AI Strategy Workshop</div>
                    <div className="text-gray-600 text-sm">Half-day intensive on AI's real business impact</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Use Case Identification</div>
                    <div className="text-gray-600 text-sm">Workshop to identify your specific AI opportunities</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Vendor Navigation</div>
                    <div className="text-gray-600 text-sm">How to evaluate AI solutions and avoid snake oil</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-bold text-xl mb-6 text-primary">Advanced Modules</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Risk & Governance</div>
                    <div className="text-gray-600 text-sm">Understanding AI risks and mitigation strategies</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Competitive Intelligence</div>
                    <div className="text-gray-600 text-sm">What your competitors are really doing with AI</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Hands-On Demonstrations</div>
                    <div className="text-gray-600 text-sm">Touch and feel real AI, not just hear about it</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            What Makes This Different
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-3">Business-First Focus</h3>
              <p className="text-gray-600">No technical jargon, pure business value. We speak boardroom, not server room.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-3">Interactive Learning</h3>
              <p className="text-gray-600">Build an AI in the session, see immediate results. Experience, not lectures.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-3">Industry-Specific</h3>
              <p className="text-gray-600">Examples from your sector, not generic cases. Relevant, actionable insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivered Outcomes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Delivered Outcomes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-center">
              <Check className="w-12 h-12 text-accent mx-auto mb-3" />
              <p className="font-semibold">Leadership confident in AI decisions</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Check className="w-12 h-12 text-accent mx-auto mb-3" />
              <p className="font-semibold">Board equipped for AI governance</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Check className="w-12 h-12 text-accent mx-auto mb-3" />
              <p className="font-semibold">Clear organizational AI strategy</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Check className="w-12 h-12 text-accent mx-auto mb-3" />
              <p className="font-semibold">Identified quick wins</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Check className="w-12 h-12 text-accent mx-auto mb-3" />
              <p className="font-semibold">Cultural readiness for AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make Your Leadership AI-Confident?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss the right training format for your executive team and board.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                Schedule Training
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
