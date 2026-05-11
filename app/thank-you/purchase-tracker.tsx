"use client";

import { useEffect } from "react";
import { trackPurchase } from "@/lib/analytics";

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp("(^|;\\s*)" + name + "=([^;]+)"),
  );
  return match ? decodeURIComponent(match[2]) : null;
}

/**
 * Fires the Meta `Purchase` event on both the browser Pixel and CAPI
 * (server-side) — sharing one `event_id` so Meta deduplicates.
 *
 * Gated by a real Razorpay `payment_id` in the URL so test visits or
 * direct links to /thank-you don't pollute conversion data.
 */
export function PurchaseTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentId =
      params.get("razorpay_payment_id") ??
      params.get("razorpay_payment_link_id") ??
      params.get("razorpay_payment_link_reference_id");

    if (!paymentId) return;

    const eventId = crypto.randomUUID();

    // Browser pixel.
    trackPurchase(eventId);

    // CAPI — fire-and-forget; browser pixel already covered the event if this fails.
    fetch("/api/meta-capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: "Purchase",
        event_id: eventId,
        event_source_url: window.location.href,
        fbp: getCookie("_fbp"),
        fbc: getCookie("_fbc"),
      }),
      keepalive: true,
    }).catch(() => {
      // Intentionally swallowed — see comment above.
    });
  }, []);

  return null;
}
