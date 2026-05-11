/**
 * Analytics helpers for Meta Pixel.
 *
 * These wrap calls to the global `fbq` (set up by the Pixel base code
 * in app/layout.tsx) and quietly no-op if the script hasn't loaded
 * yet — so calling them is always safe.
 *
 * When firing events that also send a server-side CAPI counterpart,
 * pass the same `eventId` to both so Meta deduplicates.
 */

declare global {
  interface Window {
    fbq?: (
      event: string,
      action: string,
      params?: Record<string, unknown>,
      options?: { eventID?: string },
    ) => void;
  }
}

export const META_PIXEL_ID = "950228787793124";

const PRICE_INR = 499.0;
const CURRENCY = "INR";

/** Fire when the user clicks any "Get the Workbook" CTA. */
export function trackInitiateCheckout(eventId?: string): void {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq(
    "track",
    "InitiateCheckout",
    { value: PRICE_INR, currency: CURRENCY },
    eventId ? { eventID: eventId } : undefined,
  );
}

/** Fire when the user lands on the thank-you page after a real Razorpay redirect. */
export function trackPurchase(eventId?: string): void {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq(
    "track",
    "Purchase",
    { value: PRICE_INR, currency: CURRENCY },
    eventId ? { eventID: eventId } : undefined,
  );
}

/** Fire a PageView manually (we removed the auto-PageView from Pixel init
 * so we can dedupe with the CAPI counterpart). */
export function trackPageView(eventId?: string): void {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq(
    "track",
    "PageView",
    undefined,
    eventId ? { eventID: eventId } : undefined,
  );
}

export {};
