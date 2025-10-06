export const metadata = {
  title: "Terms of Service | Charteris Partners",
  description: "Terms of Service for Charteris Partners - Read our terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-foreground">
                By accessing and using Charteris Partners&apos; services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">2. Services</h2>
              <p className="text-foreground mb-4">
                Charteris Partners provides AI consulting, implementation, and advisory services. Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>AI strategy development and consulting</li>
                <li>AI solution implementation and deployment</li>
                <li>Executive training and team enablement</li>
                <li>Custom AI application development</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">3. Client Responsibilities</h2>
              <p className="text-foreground mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>Provide accurate and complete information</li>
                <li>Cooperate with our team throughout the engagement</li>
                <li>Maintain confidentiality of proprietary information</li>
                <li>Use our services in compliance with applicable laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">4. Intellectual Property</h2>
              <p className="text-foreground mb-4">
                Upon full payment, you own all deliverables created specifically for your project, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>Custom-built AI applications and solutions</li>
                <li>Implementation documentation</li>
                <li>Training materials created for your organization</li>
              </ul>
              <p className="text-foreground mt-4">
                We retain ownership of our methodologies, frameworks, and pre-existing intellectual property.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">5. Confidentiality</h2>
              <p className="text-foreground">
                Both parties agree to maintain confidentiality of proprietary information shared during the engagement. This obligation continues beyond the term of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">6. Limitation of Liability</h2>
              <p className="text-foreground">
                To the maximum extent permitted by law, Charteris Partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">7. Termination</h2>
              <p className="text-foreground">
                Either party may terminate services with written notice as specified in the applicable service agreement. Termination does not relieve either party of obligations incurred prior to termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">8. Changes to Terms</h2>
              <p className="text-foreground">
                We reserve the right to modify these terms at any time. We will notify clients of any material changes via email or through our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">9. Contact Information</h2>
              <p className="text-foreground">
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:hello@charterispartners.com" className="text-accent hover:underline">
                  hello@charterispartners.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
