import Link from "next/link";
import Image from "next/image";
import { DollarSign, TrendingUp, Package, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Revenue Intelligence Platform | Turn Data Into Revenue | Charteris Partners",
  description: "Launch AI-powered products that customers actually pay for. Transform your data and expertise into sellable AI products - new revenue in 90 days.",
};

export default function RevenueIntelligencePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/services/revenue-intelligence.jpg"
            alt="Revenue Intelligence"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Revenue Share Model
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Revenue Intelligence Platform
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-200">
              Turn Your Data Into New Revenue Streams
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Launch AI-powered products that customers actually pay for. Transform your data and expertise into sellable AI products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                Explore Revenue Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            The Revenue Opportunity You&apos;re Missing
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-center">
              <DollarSign className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold mb-2">Valuable Data</h3>
              <p className="text-gray-600 text-sm">Sitting on data you&apos;re not monetizing</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold mb-2">Customer Demand</h3>
              <p className="text-gray-600 text-sm">Asking for insights you could automate</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Package className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold mb-2">New Revenue</h3>
              <p className="text-gray-600 text-sm">Without raising prices or hiring</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <DollarSign className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold mb-2">Competitive Gap</h3>
              <p className="text-gray-600 text-sm">Competitors charging for what you give free</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Transform Data Into Revenue-Generating Products
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-blue-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Customer Intelligence Products</h3>
              <p className="text-gray-200">
                Dashboards, predictions, and insights your customers will pay for.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent to-green-700 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">API Monetization</h3>
              <p className="text-gray-200">
                Package your data and models as revenue-generating APIs.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Embedded AI Features</h3>
              <p className="text-gray-200">
                Premium AI capabilities within existing products.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">White-label Solutions</h3>
              <p className="text-gray-200">
                Your expertise packaged for your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            90-Day Launch Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Opportunity Identification (Week 1-2)</h3>
                  <p className="text-gray-600">Analyze your data assets and customer needs. Identify highest-value monetization opportunities.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">MVP Development (Week 3-6)</h3>
                  <p className="text-gray-600">Build and test with pilot customers. Validate willingness to pay and refine product.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Productization (Week 7-10)</h3>
                  <p className="text-gray-600">Scale, price, and package for market. Create self-service capabilities.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Go-to-Market (Week 11-12)</h3>
                  <p className="text-gray-600">Launch assistance and optimization. Sales enablement and growth support.</p>
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
              <p className="text-gray-700 font-medium">Days to new revenue stream</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">120</div>
              <p className="text-gray-700 font-medium">Days to first paying customer</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">ARR</div>
              <p className="text-gray-700 font-medium">Significant new recurring revenue</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">100%</div>
              <p className="text-gray-700 font-medium">Product ownership & control</p>
            </div>
          </div>
          <div className="mt-12 bg-accent/10 border border-accent rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-bold text-xl mb-4 text-primary">Revenue Share Model</h3>
            <p className="text-gray-700">
              We succeed when you succeed. Our compensation is directly tied to the revenue your new product generates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create New Revenue Streams?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let&apos;s identify the revenue hiding in your data and build products customers will pay for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                Explore Revenue Opportunities
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
