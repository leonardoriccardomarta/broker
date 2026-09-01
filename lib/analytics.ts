type GtagFn = (
  command: "event" | "config" | "js",
  target: string | Date,
  params?: Record<string, string>,
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export function trackEvent(
  name: string,
  params?: Record<string, string>,
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", name, params);
}
