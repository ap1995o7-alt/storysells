"use client";

import { useEffect, useState } from "react";

/**
 * Reads the Razorpay redirect query params on the client so the page
 * stays fully statically prerendered.
 */
export function ReceiptId() {
  const [paymentId, setPaymentId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id =
      params.get("razorpay_payment_id") ??
      params.get("razorpay_payment_link_id") ??
      params.get("razorpay_payment_link_reference_id");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: reads browser-only URL state on hydration to keep page static
    if (id) setPaymentId(id);
  }, []);

  if (!paymentId) return null;

  return (
    <div className="mt-12 rounded-xl border border-border bg-card p-5">
      <p
        className="mb-2 font-[family-name:var(--font-jetbrains-mono)] text-[12px] uppercase text-muted-foreground"
        style={{ letterSpacing: "0.1em" }}
      >
        Payment reference
      </p>
      <p
        className="font-[family-name:var(--font-jetbrains-mono)] text-[14px] text-foreground"
        style={{ wordBreak: "break-all" }}
      >
        {paymentId}
      </p>
      <p className="mt-3 text-[14px] text-muted-foreground">
        Save this ID. Quote it if you ever need to contact support.
      </p>
    </div>
  );
}
