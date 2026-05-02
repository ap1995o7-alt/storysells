"use client";

import { useEffect, useState } from "react";

/**
 * Reads the Razorpay redirect query params (razorpay_payment_id,
 * razorpay_payment_link_id, etc.) on the client so the page can stay
 * fully statically prerendered.
 */
export function ReceiptId() {
  const [paymentId, setPaymentId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id =
      params.get("razorpay_payment_id") ??
      params.get("razorpay_payment_link_id") ??
      params.get("razorpay_payment_link_reference_id");
    if (id) setPaymentId(id);
  }, []);

  if (!paymentId) return null;

  return (
    <div className="mt-12 border border-line bg-surface-low p-5">
      <p className="label-caps mb-2 text-ink-muted">Payment reference</p>
      <p
        className="font-[family-name:var(--font-space-grotesk)] text-sm text-ink"
        style={{ wordBreak: "break-all" }}
      >
        {paymentId}
      </p>
      <p className="body-md mt-3 text-ink-tint">
        Save this ID. Quote it if you ever need to contact support.
      </p>
    </div>
  );
}
