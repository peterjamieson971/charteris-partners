import Link from "next/link";
import Image from "next/image";
import { Check, X, AlertTriangle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "AI Rescue Service | Fix Failed AI Projects | Charteris Partners",
  description: "Fix your failed AI project in 6 weeks or we'll tell you to kill it. Stop throwing good money after bad - honest assessment and rapid rebuild if viable.",
};

export default function AIRescuePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/services/ai-rescue.jpg"
            alt="AI Rescue"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Honest Assessment Guaranteed
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI Rescue Service
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-200">
              Fix Your Failed AI Project in 6 Weeks
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Stop throwing good money after bad - we&apos;ll fix it or kill it fast. Honest assessment and rapid rebuild if viable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                Get Rescue Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Failed AI Projects We Rescue
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
              <AlertTriangle className="w-10 h-10 text-red-500 mb-3" />
              <h3 className="font-bold mb-2">The Money Pit</h3>
              <p className="text-gray-600 text-sm">Spent hundreds of thousands with nothing to show</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
              <AlertTriangle className="w-10 h-10 text-red-500 mb-3" />
              <h3 className="font-bold mb-2">Pilot Paralysis</h3>
              <p className="text-gray-600 text-sm">AI pilot worked but won&apos;t scale to production</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
              <AlertTriangle className="w-10 h-10 text-red-500 mb-3" />
              <h3 className="font-bold mb-2">Lost Knowledge</h3>
              <p className="text-gray-600 text-sm">Original team gone, no one understands the system</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
              <AlertTriangle className="w-10 h-10 text-red-500 mb-3" />
              <h3 className="font-bold mb-2">Vendor Lock-In</h3>
              <p className="text-gray-600 text-sm">Trapped with mounting costs and poor performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Rescue Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Our Honest Rescue Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gradient-to-br from-primary to-blue-900 text-white p-8 rounded-lg">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Week 1: Forensic Assessment</h3>
                  <p className="text-gray-200 mb-4">Determine if the project is salvageable or should be killed</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Technical architecture review</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Data pipeline analysis</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Model performance evaluation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cost-benefit analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Go/No-Go Decision</h3>
              <p className="text-gray-700 mb-4">Honest recommendation to fix or kill - no sugarcoating</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                  <div className="flex items-start">
                    <Check className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-bold mb-2">If Fixable:</div>
                      <p className="text-sm text-gray-600">We provide detailed rebuild plan with fixed cost and timeline</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-start">
                    <X className="w-6 h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-bold mb-2">If Not Viable:</div>
                      <p className="text-sm text-gray-600">We document why it won&apos;t work and suggest alternatives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent to-green-700 text-white p-8 rounded-lg">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Weeks 2-6: Rapid Rebuild (if viable)</h3>
                  <p className="text-gray-200 mb-4">Complete reconstruction with improved architecture and your team&apos;s involvement</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Rebuild core functionality with modern architecture</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Eliminate vendor dependencies</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive documentation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Full knowledge transfer to your team</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Framework */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Our Assessment Framework
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 text-primary">Technical Review</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Architecture analysis</li>
                <li>• Model performance</li>
                <li>• Scalability assessment</li>
                <li>• Integration quality</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 text-primary">Business Analysis</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cost-benefit review</li>
                <li>• ROI viability</li>
                <li>• Alternative solutions</li>
                <li>• Risk assessment</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 text-primary">Team Capability</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Knowledge gaps</li>
                <li>• Skill requirements</li>
                <li>• Training needs</li>
                <li>• Support structure</li>
              </ul>
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
              <div className="text-5xl font-bold text-accent mb-4">1</div>
              <p className="text-gray-700 font-medium">Week to clear decision</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">6</div>
              <p className="text-gray-700 font-medium">Weeks to working solution</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">50%</div>
              <p className="text-gray-700 font-medium">Cost reduction vs. current</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">0</div>
              <p className="text-gray-700 font-medium">Vendor lock-in</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop Wasting Money on a Failed AI Project
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get an honest assessment. We&apos;ll tell you if it can be fixed or if you should cut your losses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                Get Rescue Assessment
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
              <strong>Honest guarantee:</strong> If we can&apos;t fix it in 6 weeks, we&apos;ll tell you to kill it and document why.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
