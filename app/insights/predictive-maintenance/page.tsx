import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "The Predictive Maintenance Revolution Hiding in Your Data | Charteris Partners",
  description: "How Smart Companies Are Preventing Failures Before They Happen—and saving millions in the process.",
};

export default function PredictiveMaintenancePage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/shutterstock_2481137361.jpg" alt="Predictive Maintenance" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/insights" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Insights
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 text-xs font-semibold bg-accent/20 text-primary-foreground rounded-full">Manufacturing</span>
              <span className="text-sm text-primary-foreground/80">5 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">The Predictive Maintenance Revolution Hiding in Your Data</h1>
            <p className="text-xl text-primary-foreground/90">How Smart Companies Are Preventing Failures Before They Happen</p>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>The $125,000-Per-Hour Problem</h2>
            <p>
              Manufacturing downtime costs a median of <strong>$125,000 per hour.</strong> For a single production line. For a single hour.
            </p>
            <p>
              Now multiply that across multiple lines, multiple facilities, and the reality that most factories lose between <strong>5-20% of their manufacturing capacity</strong> to equipment failure and downtime.
            </p>
            <p>
              The traditional approach? Reactive maintenance (fix it when it breaks) or preventive maintenance (fix it on a schedule whether it needs it or not).
            </p>
            <p>
              Both are expensive. Both cause unnecessary downtime. And neither prevents the catastrophic failures that shut down production for days.
            </p>

            <h2>What's Actually Possible Now</h2>
            <p>
              Here's what changed: Your equipment is already generating massive amounts of data. Vibration sensors, temperature monitors, pressure readings, cycle counts, power consumption—it's all there.
            </p>
            <p>
              The data's been sitting there for years. Most companies collect it but don't use it. They're sitting on a gold mine and scheduling maintenance based on a calendar.
            </p>
            <p>
              Companies implementing AI-driven predictive maintenance are seeing:
            </p>
            <ul>
              <li><strong>70% reduction in equipment breakdowns</strong></li>
              <li><strong>25% decrease in maintenance costs</strong></li>
              <li><strong>20-40% increase in equipment lifespan</strong></li>
              <li><strong>10x ROI within 2-3 years</strong> (27% achieve full payback in 12 months)</li>
            </ul>
            <p>
              Real example: One global manufacturer monitoring 10,000+ machines reported <strong>millions in savings with ROI in three months.</strong>
            </p>

            <h2>How It Actually Works</h2>
            <p>
              <strong>Step 1: Connect to Your Data</strong><br />
              We tap into the data your equipment is already generating. Sensor readings, performance metrics, maintenance logs, quality data. We don't need new hardware—we use what you have.
            </p>
            <p>
              <strong>Step 2: Build the Model</strong><br />
              AI analyzes patterns leading up to past failures. What did vibration look like 48 hours before that bearing failed? How did temperature trends change before the motor burned out? The system learns what "normal" looks like and what predicts failure.
            </p>
            <p>
              <strong>Step 3: Predict and Prevent</strong><br />
              The system continuously monitors your equipment and flags anomalies before they become failures. "Bearing #3 on Line 2 will likely fail in the next 7-10 days based on vibration patterns." Now you schedule maintenance during planned downtime, not emergency shutdowns.
            </p>

            <h2>Real-World Examples</h2>
            <p>
              <strong>Food Manufacturing:</strong> A production facility was experiencing unplanned downtime from conveyor motor failures. By monitoring vibration and temperature data, we built a system that predicted motor failures 5-7 days in advance. Result: Zero emergency shutdowns, 40% reduction in maintenance costs, maintenance scheduled during off-shifts.
            </p>
            <p>
              <strong>Packaging Equipment:</strong> A company was replacing sealing heads on a preventive schedule every 3 months whether they needed it or not. Predictive maintenance showed some lasted 5-6 months while others needed replacement at 2 months. Result: 30% reduction in parts costs, improved line reliability.
            </p>
            <p>
              <strong>HVAC Systems:</strong> Commercial facility with 50+ HVAC units was experiencing 2-3 emergency failures per month. Predictive system analyzed compressor performance, refrigerant pressures, and power consumption to predict failures. Result: 85% reduction in emergency service calls, $200K annual savings.
            </p>

            <h2>What's Different About the 30-Day Approach</h2>
            <p>
              Traditional predictive maintenance projects take 12-18 months and cost hundreds of thousands of dollars. Here's what we do differently:
            </p>
            <p>
              <strong>Pick One Critical Asset.</strong> The production line that costs the most when it fails. The equipment that's approaching end-of-life. The machine that's already causing problems.
            </p>
            <p>
              <strong>Build a Focused Solution.</strong> We're not trying to monitor your entire facility. We're solving one specific, high-value problem. One machine. One failure mode. One clear ROI.
            </p>
            <p>
              <strong>Use Your Existing Data.</strong> We connect to what you already have—PLCs, SCADA systems, sensor networks. No massive infrastructure buildout required.
            </p>
            <p>
              <strong>Deliver Working Software in 30 Days.</strong> Not a proof of concept. Not a pilot. Production-ready software making real predictions on your real equipment.
            </p>

            <h2>The Math That Matters</h2>
            <p>
              Let's use a real scenario: A critical production line that generates $500K revenue per day. It experiences unplanned downtime averaging 2 days per quarter due to equipment failure. That's $4M in lost revenue annually.
            </p>
            <p>
              Predictive maintenance reduces unplanned downtime by 70% = $2.8M in recovered revenue.<br />
              Maintenance costs drop 25% = $150K saved on parts and labor.<br />
              Equipment lifespan extends 30% = Defer $500K capital replacement for 2+ years.
            </p>
            <p>
              Total annual impact: $3M+.<br />
              Investment: 30-day build plus ongoing monitoring costs.
            </p>

            <h2>What It Doesn't Do</h2>
            <p>
              Let's be clear about limitations:
            </p>
            <ul>
              <li>It can't predict failures on equipment that doesn't generate data</li>
              <li>It needs historical data to learn from (at minimum, a few months of sensor readings)</li>
              <li>It won't replace your maintenance team—it makes them more effective</li>
              <li>It's not cost-effective for equipment with minimal downtime impact</li>
            </ul>
            <p>
              If your critical equipment generates data and failures cost significant money, predictive maintenance probably makes sense. If not, there are better solutions.
            </p>

            <h2>The Honest Assessment</h2>
            <p>
              We recommend starting with one piece of equipment. The one that hurts the most when it fails. The one where you're already collecting data but not using it. The one where even a small improvement in uptime has massive financial impact.
            </p>
            <p>
              We'll spend 90 minutes analyzing your situation: What data you have, what failures cost you, whether AI can actually help, and what the realistic ROI looks like.
            </p>
            <p>
              No sales pitch. Just an honest technical assessment.
            </p>
            <p>
              If it makes sense, we'll build it in 30 days. You'll have working software predicting failures on your actual equipment. Your team owns it. It improves as it learns from your data.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Tired of Emergency Shutdowns?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's figure out if predictive maintenance can actually prevent your most expensive failures.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Book Free 90-Minute Assessment<ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-primary-foreground/70 mt-4">Honest analysis of whether AI can help your specific equipment</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Insights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/insights/revenue-from-data" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-accent transition-all">
                <h3 className="font-bold text-lg mb-2">Revenue Hiding in Your Database</h3>
                <p className="text-gray-600 text-sm mb-3">How Companies Are Creating New Revenue Streams From Existing Data</p>
                <span className="text-accent text-sm font-medium">Read Article →</span>
              </Link>
              <Link href="/insights/email-processing-problem" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-accent transition-all">
                <h3 className="font-bold text-lg mb-2">The £2M Email Problem</h3>
                <p className="text-gray-600 text-sm mb-3">How Companies Are Losing Millions to Email Processing</p>
                <span className="text-accent text-sm font-medium">Read Article →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
