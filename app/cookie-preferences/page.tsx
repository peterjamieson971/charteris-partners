"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  getCookiePreferences,
  saveCookiePreferences,
  resetCookiePreferences,
  type CookiePreferences,
} from "@/lib/cookie-consent";
import { Check } from "lucide-react";

export default function CookiePreferencesPage() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: new Date().toISOString(),
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const current = getCookiePreferences();
    if (current) {
      setPreferences(current);
    }
  }, []);

  const handleSave = () => {
    saveCookiePreferences(preferences);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    resetCookiePreferences();
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Cookie Preferences</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Manage your cookie preferences and control how we use cookies on our website.
          </p>

          {saved && (
            <div className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg flex items-center gap-3">
              <Check className="h-5 w-5 text-accent" />
              <span className="text-accent font-medium">Your preferences have been saved</span>
            </div>
          )}

          <div className="space-y-6">
            {/* Necessary Cookies */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle>Necessary Cookies</CardTitle>
                    <CardDescription className="mt-2">
                      These cookies are essential for the website to function properly and cannot be disabled.
                    </CardDescription>
                  </div>
                  <Switch
                    checked={true}
                    disabled
                    className="ml-4"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <strong>Examples:</strong> Session management, security features, accessibility features
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Storage:</strong> localStorage, sessionStorage
                </p>
              </CardContent>
            </Card>

            {/* Analytics Cookies */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle>Analytics Cookies</CardTitle>
                    <CardDescription className="mt-2">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </CardDescription>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={(checked) =>
                      setPreferences({ ...preferences, analytics: checked })
                    }
                    className="ml-4"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <strong>Purpose:</strong> Understand user behavior, improve website performance, measure effectiveness
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Examples:</strong> Google Analytics, heatmaps, page view tracking
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Data collected:</strong> Page views, session duration, bounce rate, device information (anonymized)
                </p>
              </CardContent>
            </Card>

            {/* Marketing Cookies */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle>Marketing Cookies</CardTitle>
                    <CardDescription className="mt-2">
                      These cookies are used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.
                    </CardDescription>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={(checked) =>
                      setPreferences({ ...preferences, marketing: checked })
                    }
                    className="ml-4"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <strong>Purpose:</strong> Deliver targeted advertising, measure campaign effectiveness, retargeting
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Examples:</strong> Ad networks, social media pixels, remarketing tags
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Third parties:</strong> Google Ads, LinkedIn Insight, Facebook Pixel (when enabled)
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleSave}
              size="lg"
              className="bg-accent hover:bg-accent/90"
            >
              Save Preferences
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              size="lg"
            >
              Reset to Default
            </Button>
          </div>

          {/* Additional Information */}
          <Card className="mt-8 bg-muted/30">
            <CardHeader>
              <CardTitle className="text-lg">Your Data Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Under GDPR and other privacy regulations, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-4">
                To exercise these rights or for any privacy-related questions, please contact us at{" "}
                <a href="mailto:hello@charterispartners.com" className="text-accent hover:underline">
                  hello@charterispartners.com
                </a>
              </p>
            </CardContent>
          </Card>

          {preferences.timestamp && (
            <p className="text-xs text-muted-foreground mt-6">
              Last updated: {new Date(preferences.timestamp).toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
