"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  hasConsent,
  acceptAllCookies,
  acceptNecessaryOnly,
  getCookiePreferences,
} from "@/lib/cookie-consent";

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasUserConsent = hasConsent();
    setShowBanner(!hasUserConsent);
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    acceptNecessaryOnly();
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none">
      <div className="max-w-2xl mx-auto pointer-events-auto">
        <Card className="border-2 border-primary shadow-2xl">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-xl">Cookie Preferences</CardTitle>
                <CardDescription className="mt-2">
                  We use cookies to improve your experience and analyze site traffic.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {!showDetails ? (
              <>
                <p className="text-sm text-muted-foreground">
                  We use necessary cookies to make our site work. We&apos;d also like to set optional cookies to help us improve our website.
                  These cookies won&apos;t be set unless you choose to enable them.{" "}
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-accent hover:underline font-medium"
                  >
                    Learn more
                  </button>
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-accent hover:bg-accent/90"
                    size="lg"
                  >
                    Accept All Cookies
                  </Button>
                  <Button
                    onClick={handleAcceptNecessary}
                    variant="outline"
                    size="lg"
                  >
                    Necessary Only
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-4 text-sm">
                  <div className="border-l-4 border-l-accent pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Necessary Cookies (Required)</h3>
                    <p className="text-muted-foreground">
                      These cookies are essential for the website to function properly. They enable basic features like page navigation and access to secure areas.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-gray-300 pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Analytics Cookies (Optional)</h3>
                    <p className="text-muted-foreground">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-gray-300 pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Marketing Cookies (Optional)</h3>
                    <p className="text-muted-foreground">
                      These cookies are used to track visitors across websites to display relevant advertisements.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  For more information, please read our{" "}
                  <Link href="/privacy" className="text-accent hover:underline">
                    Privacy Policy
                  </Link>
                  {" "}and{" "}
                  <Link href="/privacy#cookies" className="text-accent hover:underline">
                    Cookie Policy
                  </Link>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-accent hover:bg-accent/90"
                    size="lg"
                  >
                    Accept All
                  </Button>
                  <Button
                    onClick={handleAcceptNecessary}
                    variant="outline"
                    size="lg"
                  >
                    Necessary Only
                  </Button>
                  <Button
                    onClick={() => setShowDetails(false)}
                    variant="ghost"
                    size="lg"
                  >
                    Back
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
