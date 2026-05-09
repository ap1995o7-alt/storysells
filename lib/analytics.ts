/**
 * Analytics helpers for Meta Pixel.
 *
 * These wrap calls to the global `fbq` (set up by the Pixel base code
 * in app/layout.tsx) and quietly no-op if the script hasn't loaded
 * yet — so calling them is always safe.
 */

declare global {
  interface Window {
    fbq?: (
      event: string,
      action: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

export const META_PIXEL_ID = "950228787793124";

const PRICE_INR = 499.0;
const CURRENCY = "INR";

/** Fire when the user clicks any "Get the Workbook" CTA. */
export function trackInitiateCheckout(): void {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq("track", "InitiateCheckout", {
    value: PRICE_INR,
    currency: CURRENCY,
  });
}

/** Fire when the user lands on the thank-you page after a real Razorpay redirect. */
export function trackPurchase(): void {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq("track", "Purchase", {
    value: PRICE_INR,
    currency: CURRENCY,
  });
}

export {};
