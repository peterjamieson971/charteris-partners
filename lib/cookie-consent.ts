/**
 * GDPR-compliant cookie consent management
 */

export type CookieCategory = 'necessary' | 'analytics' | 'marketing';

export interface CookiePreferences {
  necessary: boolean; // Always true, cannot be disabled
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const CONSENT_COOKIE_NAME = 'charteris_cookie_consent';
const CONSENT_VERSION = '1.0';

/**
 * Get current cookie preferences from localStorage
 */
export function getCookiePreferences(): CookiePreferences | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(CONSENT_COOKIE_NAME);
    if (!stored) return null;

    const data = JSON.parse(stored);
    if (data.version !== CONSENT_VERSION) return null;

    return data.preferences;
  } catch {
    return null;
  }
}

/**
 * Save cookie preferences to localStorage
 */
export function saveCookiePreferences(preferences: CookiePreferences): void {
  if (typeof window === 'undefined') return;

  const data = {
    version: CONSENT_VERSION,
    preferences: {
      ...preferences,
      necessary: true, // Always true
      timestamp: new Date().toISOString(),
    },
  };

  localStorage.setItem(CONSENT_COOKIE_NAME, JSON.stringify(data));

  // Trigger custom event for other components to react
  window.dispatchEvent(new CustomEvent('cookiePreferencesChanged', { detail: preferences }));
}

/**
 * Check if user has made a choice
 */
export function hasConsent(): boolean {
  return getCookiePreferences() !== null;
}

/**
 * Accept all cookies
 */
export function acceptAllCookies(): void {
  saveCookiePreferences({
    necessary: true,
    analytics: true,
    marketing: true,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Accept only necessary cookies
 */
export function acceptNecessaryOnly(): void {
  saveCookiePreferences({
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Check if a specific cookie category is allowed
 */
export function isCategoryAllowed(category: CookieCategory): boolean {
  const preferences = getCookiePreferences();
  if (!preferences) return false;
  return preferences[category] === true;
}

/**
 * Reset cookie preferences (for testing or user request)
 */
export function resetCookiePreferences(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(CONSENT_COOKIE_NAME);
  window.dispatchEvent(new CustomEvent('cookiePreferencesChanged', { detail: null }));
}
