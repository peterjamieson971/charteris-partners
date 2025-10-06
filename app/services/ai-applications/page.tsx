import Link from "next/link";
import Image from "next/image";
import { Check, Clock, Phone, FileText, Brain, ArrowRight } from "lucide-react";

export const metadata = {
  title: "AI Applications Suite | AI Receptionist & More | Charteris Partners",
  description: "Deploy proven AI applications that solve real business problems from day one. 24/7 AI Receptionists, document processing, predictive analytics, and more.",
};

export default function AIApplicationsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/services/ai-applications.jpg"
            alt="AI Applications"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Fastest Time to Value
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI Applications Suite
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-200">
              Enterprise-Ready AI Applications That Just Work
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Deploy proven AI applications like AI Receptionists, document processors, and predictive analytics that solve real business problems from day one.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                Deploy AI Applications
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

      {/* AI Receptionist - Featured */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-accent to-green-700 text-white p-10 rounded-2xl mb-12">
              <div className="flex items-center mb-6">
                <Phone className="w-12 h-12 mr-4" />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">AI Receptionist & Voice Agents</h2>
                  <p className="text-xl text-gray-100">Never Miss Another Call, Lead, or Customer</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-xl mb-4">Core Capabilities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>24/7 availability - answers every call, every time</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Natural conversations indistinguishable from humans</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Instant lead capture & appointment booking</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>CRM integration (Salesforce, HubSpot, any CRM)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Multi-language support (50+ languages)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-4">Business Impact</h3>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-2xl font-bold">90%</div>
                      <div className="text-sm">Lower than traditional staffing costs</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-2xl font-bold">3x</div>
                      <div className="text-sm">More leads captured after hours</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-2xl font-bold">Zero</div>
                      <div className="text-sm">Wait time, ever</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Additional AI Applications
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-accent transition-colors">
              <FileText className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-4">Intelligent Document Processing</h3>
              <p className="text-gray-600 mb-4">Turn documents into data in seconds</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Invoice processing & validation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Contract analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Application processing</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Email triage & routing</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-accent transition-colors">
              <Clock className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-4">Predictive Analytics Platform</h3>
              <p className="text-gray-600 mb-4">See problems before they happen</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Demand forecasting</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Churn prevention</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Maintenance prediction</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Risk assessment</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-accent transition-colors">
              <Brain className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-4">Knowledge Assistant</h3>
              <p className="text-gray-600 mb-4">Your team's AI-powered second brain</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Instant answers from company knowledge</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Document generation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Research automation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Training support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            4-Week Implementation
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold mb-4">1</div>
              <h3 className="font-bold mb-2">Configuration</h3>
              <p className="text-sm text-gray-600">Set up for your specific needs and workflows</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold mb-4">2</div>
              <h3 className="font-bold mb-2">Integration</h3>
              <p className="text-sm text-gray-600">Connect to your CRM/ERP/phone system</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold mb-4">3</div>
              <h3 className="font-bold mb-2">Testing</h3>
              <p className="text-sm text-gray-600">Run parallel, fine-tune, train your team</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold mb-4">4</div>
              <h3 className="font-bold mb-2">Launch</h3>
              <p className="text-sm text-gray-600">Go live with full support & monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Applications Win */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Why Our AI Applications Win
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="font-bold text-lg mb-3">Pre-Built but Customizable</h3>
              <p className="text-gray-600">Start with proven templates, customize for your exact needs. No starting from scratch.</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-3">Enterprise-Ready</h3>
              <p className="text-gray-600">SOC 2 compliant, GDPR ready, 99.9% uptime SLA, full audit trails.</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-3">Immediate ROI</h3>
              <p className="text-gray-600">Deploy in days, not months. Payback period typically &lt; 60 days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Deploy AI That Works From Day One?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss which AI applications can deliver immediate value to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                Deploy AI Applications
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
