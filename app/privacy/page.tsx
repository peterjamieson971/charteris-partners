export const metadata = {
  title: "Privacy Policy | Charteris Partners",
  description: "Privacy Policy for Charteris Partners - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
              <p className="text-foreground mb-4">
                We collect information you provide directly to us when you use our services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>Contact information (name, email, phone number)</li>
                <li>Company information</li>
                <li>Communications and correspondence</li>
                <li>Service usage information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
              <p className="text-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">3. Information Sharing</h2>
              <p className="text-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist in our operations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
              <p className="text-foreground">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">5. Your Rights</h2>
              <p className="text-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">6. Contact Us</h2>
              <p className="text-foreground">
                If you have questions about this Privacy Policy, please contact us at{" "}
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
