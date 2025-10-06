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

            <section className="mb-8" id="cookies">
              <h2 className="text-2xl font-bold text-primary mb-4">6. Cookie Policy</h2>
              <p className="text-foreground mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-3 mt-6">What Are Cookies?</h3>
              <p className="text-foreground mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and allow certain features to function properly.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Types of Cookies We Use</h3>

              <div className="space-y-4 ml-4">
                <div className="border-l-4 border-l-accent pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Necessary Cookies (Always Active)</h4>
                  <p className="text-foreground mb-2">
                    These cookies are essential for the website to function and cannot be disabled. They include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Cookie consent preferences</li>
                  </ul>
                </div>

                <div className="border-l-4 border-l-gray-300 pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Analytics Cookies (Optional)</h4>
                  <p className="text-foreground mb-2">
                    These cookies help us understand how visitors interact with our website. We may use:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                    <li>Google Analytics for website usage statistics</li>
                    <li>Performance monitoring tools</li>
                    <li>Heatmaps to improve user experience</li>
                  </ul>
                  <p className="text-foreground mt-2 text-sm">
                    All analytics data is collected anonymously and aggregated.
                  </p>
                </div>

                <div className="border-l-4 border-l-gray-300 pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Marketing Cookies (Optional)</h4>
                  <p className="text-foreground mb-2">
                    These cookies track your browsing habits to deliver targeted advertising. We may use:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                    <li>Social media pixels (LinkedIn, Facebook)</li>
                    <li>Advertising networks</li>
                    <li>Remarketing and retargeting services</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Managing Your Cookie Preferences</h3>
              <p className="text-foreground mb-4">
                You can manage your cookie preferences at any time by visiting our{" "}
                <a href="/cookie-preferences" className="text-accent hover:underline font-medium">
                  Cookie Preferences page
                </a>
                . You can also control cookies through your browser settings.
              </p>

              <p className="text-foreground mb-4">
                Please note that disabling certain cookies may impact the functionality of our website.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Third-Party Cookies</h3>
              <p className="text-foreground">
                We may use third-party services that set their own cookies. These services include analytics providers, advertising networks, and social media platforms. We do not control these cookies, and you should refer to the third party&apos;s privacy policies for more information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">7. International Data Transfers</h2>
              <p className="text-foreground">
                Your information may be transferred to and maintained on servers located outside of your country. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">8. Data Retention</h2>
              <p className="text-foreground">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">9. Changes to This Policy</h2>
              <p className="text-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &ldquo;Last Updated&rdquo; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">10. Contact Us</h2>
              <p className="text-foreground">
                If you have questions about this Privacy Policy or our data practices, please contact us at{" "}
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
