import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "email-processing-problem",
    title: "The £2M Email Problem Nobody Talks About",
    excerpt: "How Fortune 500 Companies Are Losing Millions to Email Processing - And the 30-Day Fix",
    readTime: "5 min read",
    category: "Operations",
  },
  {
    slug: "customer-service-costs",
    title: "Why Your Customer Service Costs Are About to Double",
    excerpt: "The Customer Service Crisis No One's Preparing For",
    readTime: "4 min read",
    category: "Customer Experience",
  },
  {
    slug: "predictive-maintenance",
    title: "The Predictive Maintenance Revolution Hiding in Your Data",
    excerpt: "How Smart Companies Are Preventing Failures Before They Happen",
    readTime: "5 min read",
    category: "Manufacturing",
  },
  {
    slug: "revenue-from-data",
    title: "Revenue Hiding in Your Database",
    excerpt: "How Companies Are Creating New Revenue Streams From Existing Data",
    readTime: "4 min read",
    category: "Revenue Growth",
  },
  {
    slug: "document-processing",
    title: "The Document Processing Disaster Costing You Millions",
    excerpt: "Why Knowledge Workers Spend 60% of Their Time on Data Entry",
    readTime: "5 min read",
    category: "Productivity",
  },
];

export const metadata = {
  title: "AI Insights | Real-World Business Use Cases | Charteris Partners",
  description: "Practical insights on AI implementation, ROI-focused case studies, and real-world business applications from our Business Technologists.",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/shutterstock_2481137361.jpg"
            alt="AI Insights"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real-World AI Insights
            </h1>
            <p className="text-xl text-gray-200">
              No theory. No hype. Just practical insights from Business Technologists who build AI solutions every day.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group bg-white rounded-lg border border-gray-200 hover:border-accent transition-all duration-300 overflow-hidden hover:shadow-lg"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            See Yourself in These Stories?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Every problem we write about is one we&apos;ve solved. Let&apos;s discuss how we can solve yours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent/90 text-white font-medium px-8 py-3 rounded-lg transition-all"
          >
            Book Free Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}
