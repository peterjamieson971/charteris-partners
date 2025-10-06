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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <Card className="border border-primary shadow-lg">
          <CardContent className="p-4">
            {!showDetails ? (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
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
                <div className="flex gap-2 flex-shrink-0">
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-accent hover:bg-accent/90 h-9 px-4 text-sm"
                  >
                    Accept All
                  </Button>
                  <Button
                    onClick={handleAcceptNecessary}
                    variant="outline"
                    className="h-9 px-4 text-sm"
                  >
                    Necessary Only
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="border-l-2 border-l-accent pl-2">
                    <p className="font-semibold text-foreground">Necessary (Required)</p>
                  </div>
                  <div className="border-l-2 border-l-gray-300 pl-2">
                    <p className="font-semibold text-foreground">Analytics (Optional)</p>
                  </div>
                  <div className="border-l-2 border-l-gray-300 pl-2">
                    <p className="font-semibold text-foreground">Marketing (Optional)</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p className="text-xs text-muted-foreground">
                    <Link href="/privacy" className="text-accent hover:underline">Privacy</Link>
                    {" | "}
                    <Link href="/privacy#cookies" className="text-accent hover:underline">Cookies</Link>
                  </p>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleAcceptAll}
                      className="bg-accent hover:bg-accent/90 h-9 px-4 text-sm"
                    >
                      Accept All
                    </Button>
                    <Button
                      onClick={handleAcceptNecessary}
                      variant="outline"
                      className="h-9 px-4 text-sm"
                    >
                      Necessary Only
                    </Button>
                    <Button
                      onClick={() => setShowDetails(false)}
                      variant="ghost"
                      className="h-9 px-4 text-sm"
                    >
                      Back
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
