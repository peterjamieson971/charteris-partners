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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 pointer-events-none">
      <div className="max-w-4xl mx-auto pointer-events-auto">
        <Card className="border-2 border-primary shadow-xl">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-lg">Cookie Preferences</CardTitle>
                <CardDescription className="mt-1 text-sm">
                  We use cookies to improve your experience.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {!showDetails ? (
              <>
                <p className="text-sm text-muted-foreground">
                  We use necessary cookies to make our site work. We&apos;d also like to set optional cookies.{" "}
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-accent hover:underline font-medium"
                  >
                    Learn more
                  </button>
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-accent hover:bg-accent/90"
                  >
                    Accept All Cookies
                  </Button>
                  <Button
                    onClick={handleAcceptNecessary}
                    variant="outline"
                  >
                    Necessary Only
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-3 text-sm">
                  <div className="border-l-4 border-l-accent pl-3">
                    <h3 className="font-semibold text-foreground mb-1">Necessary Cookies (Required)</h3>
                    <p className="text-muted-foreground text-xs">
                      Essential for the website to function properly.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-gray-300 pl-3">
                    <h3 className="font-semibold text-foreground mb-1">Analytics Cookies (Optional)</h3>
                    <p className="text-muted-foreground text-xs">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-gray-300 pl-3">
                    <h3 className="font-semibold text-foreground mb-1">Marketing Cookies (Optional)</h3>
                    <p className="text-muted-foreground text-xs">
                      Track visitors to display relevant advertisements.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  Read our{" "}
                  <Link href="/privacy" className="text-accent hover:underline">
                    Privacy Policy
                  </Link>
                  {" "}and{" "}
                  <Link href="/privacy#cookies" className="text-accent hover:underline">
                    Cookie Policy
                  </Link>.
                </p>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-accent hover:bg-accent/90"
                  >
                    Accept All
                  </Button>
                  <Button
                    onClick={handleAcceptNecessary}
                    variant="outline"
                  >
                    Necessary Only
                  </Button>
                  <Button
                    onClick={() => setShowDetails(false)}
                    variant="ghost"
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
