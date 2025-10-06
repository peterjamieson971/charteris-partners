import Link from "next/link";
import Image from "next/image";
import { Check, Users, TrendingUp, Award, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Team AI Enablement | Make Your Team AI-Powerful | Charteris Partners",
  description: "Transform your team into AI builders, not just users. Intensive, hands-on program that builds real capability - team building AI independently in 90 days.",
};

export default function TeamEnablementPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/services/team-enablement.jpg"
            alt="Team Enablement"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Build Internal Capability
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Team AI Enablement
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-200">
              Make Your Existing Team AI-Powerful
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Transform your team into AI builders, not just users. Intensive, hands-on program that builds real capability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                Enable Your Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            The AI Talent Challenge
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-center">
              <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Can&apos;t Hire</h3>
              <p className="text-gray-600 text-sm">AI talent at competitive salaries is impossible to find</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Team Fear</h3>
              <p className="text-gray-600 text-sm">Your people scared of being replaced by AI</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Contractor Dependency</h3>
              <p className="text-gray-600 text-sm">Expensive external contractors with no knowledge transfer</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">No Capability</h3>
              <p className="text-gray-600 text-sm">Zero internal AI expertise or understanding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
            Build AI Capability That Stays
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Intensive, hands-on program that transforms your existing team into AI builders
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-blue-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Learn by Doing</h3>
              <p className="text-gray-200 mb-4">
                Build real solutions for your actual use cases, not theoretical exercises.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Real business problems as training ground</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Production-ready code from day one</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Deliver value while learning</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-accent to-green-700 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Supported Independence</h3>
              <p className="text-gray-200 mb-4">
                We guide, you build, you own. Path to complete self-sufficiency.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Daily mentorship and code review</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Decreasing support over time</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Independence by week 12</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Custom AI Tools</h3>
              <p className="text-gray-200 mb-4">
                AI tools designed for your specific needs and workflows.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Tailored to your tech stack</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Templates for common patterns</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Reusable components library</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ongoing Mentorship</h3>
              <p className="text-gray-200 mb-4">
                6 months of support as you scale your AI capabilities.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Weekly office hours</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Architecture review sessions</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Best practice guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            12-Week Program Structure
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold mr-6 flex-shrink-0">1-2</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Foundation (Weeks 1-2)</h3>
                  <p className="text-gray-600 mb-3">AI fundamentals, tool familiarization, project selection</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• AI/ML fundamentals for practitioners</li>
                    <li>• Development environment setup</li>
                    <li>• Select first real-world project</li>
                    <li>• Define success metrics</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold mr-6 flex-shrink-0">3-8</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Build Together (Weeks 3-8)</h3>
                  <p className="text-gray-600 mb-3">Develop first production AI with our guidance</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Daily stand-ups and code reviews</li>
                    <li>• Pair programming sessions</li>
                    <li>• Deploy to production by week 8</li>
                    <li>• Measure real business impact</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold mr-6 flex-shrink-0">9-12</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Independent Project (Weeks 9-12)</h3>
                  <p className="text-gray-600 mb-3">Team builds second solution with light support</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Your team leads the build</li>
                    <li>• We provide architecture review</li>
                    <li>• Deploy second production system</li>
                    <li>• Validate independent capability</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
              <div className="flex items-start">
                <Award className="w-12 h-12 text-primary mr-6 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Certification & Scaling</h3>
                  <p className="text-gray-600 mb-3">Validate skills, plan expansion, ongoing support</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Team certification assessment</li>
                    <li>• Center of Excellence planning</li>
                    <li>• 6 months ongoing mentorship</li>
                    <li>• Scale AI across organization</li>
                  </ul>
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
              <div className="text-5xl font-bold text-accent mb-4">90</div>
              <p className="text-gray-700 font-medium">Days to team independence</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">2</div>
              <p className="text-gray-700 font-medium">Production AI systems delivered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">75%</div>
              <p className="text-gray-700 font-medium">Reduction in external AI spend</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">↑</div>
              <p className="text-gray-700 font-medium">Productivity from month one</p>
            </div>
          </div>
          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-bold text-xl mb-4 text-primary">Certified AI-Capable Team</h3>
            <p className="text-gray-700">
              Your team earns certification and becomes your internal AI center of excellence. Build, deploy, and maintain AI independently.
            </p>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Perfect For
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <Check className="w-10 h-10 text-accent mb-3" />
              <h3 className="font-bold text-lg mb-2">Organizations Wanting AI Independence</h3>
              <p className="text-gray-600 text-sm">Stop renting capability, start building it internally</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Check className="w-10 h-10 text-accent mb-3" />
              <h3 className="font-bold text-lg mb-2">Teams Facing AI Disruption</h3>
              <p className="text-gray-600 text-sm">Turn existential threat into competitive advantage</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Check className="w-10 h-10 text-accent mb-3" />
              <h3 className="font-bold text-lg mb-2">Companies Tired of Contractor Dependence</h3>
              <p className="text-gray-600 text-sm">Build permanent capability instead of temporary solutions</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Check className="w-10 h-10 text-accent mb-3" />
              <h3 className="font-bold text-lg mb-2">Building Internal Centers of Excellence</h3>
              <p className="text-gray-600 text-sm">Create the foundation for organization-wide AI adoption</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Permanent AI Capability?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let&apos;s discuss how we can transform your team into AI builders who deliver independently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                Enable Your Team
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
