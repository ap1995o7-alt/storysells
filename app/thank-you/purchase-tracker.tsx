"use client";

import { useEffect } from "react";
import { trackPurchase } from "@/lib/analytics";

/**
 * Fires the Meta Pixel `Purchase` event ONCE on mount, but only when
 * there's a real Razorpay payment_id in the URL — so test visits or
 * direct links to /thank-you don't pollute the conversion data.
 */
export function PurchaseTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentId =
      params.get("razorpay_payment_id") ??
      params.get("razorpay_payment_link_id") ??
      params.get("razorpay_payment_link_reference_id");

    if (paymentId) {
      trackPurchase();
    }
  }, []);

  return null;
}
