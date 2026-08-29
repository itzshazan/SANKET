export const GA_MEASUREMENT_ID = "G-RLP8DK74LH";

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getStoredConsent(): "granted" | "denied" | null {
  if (typeof window === "undefined") return null;

  const value = window.localStorage.getItem("analytics_consent");
  return value === "granted" || value === "denied" ? value : null;
}

export function hasAnalyticsConsent(): boolean {
  return getStoredConsent() === "granted";
}

export function initAnalyticsState() {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  const consent = getStoredConsent();
  const analyticsConsent = consent === "granted" ? "granted" : "denied";

  window.gtag("consent", "default", {
    ad_storage: analyticsConsent,
    analytics_storage: analyticsConsent,
  });
}

export function setAnalyticsConsent(granted: boolean) {
  if (typeof window === "undefined") return;

  const value = granted ? "granted" : "denied";
  window.localStorage.setItem("analytics_consent", value);

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      ad_storage: value,
      analytics_storage: value,
    });
  }
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return;

  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, {
    page_location: window.location.href,
    ...params,
  });
}

export function trackCtaClick(label: string, location: string) {
  trackEvent("cta_click", {
    event_category: "engagement",
    event_label: label,
    cta_location: location,
  });
}

export function trackContactSubmit(service?: string) {
  trackEvent("contact_form_submit", {
    event_category: "lead",
    event_label: service || "general_contact",
    service,
  });
}
