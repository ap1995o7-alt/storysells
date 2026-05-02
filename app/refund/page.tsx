import type { Metadata } from "next";
import { LegalShell } from "@/components/sections/legal-shell";

export const metadata: Metadata = {
  title: "Refund Policy — Story Sells",
  description:
    "Story Sells offers a 7-day no-questions refund. Message on WhatsApp and we'll refund within 48 hours.",
};

export default function RefundPage() {
  return (
    <LegalShell title="Refund Policy">
      <p className="body-lg text-ink">
        Try it for 7 days. If you don&apos;t think Story Sells is worth
        ₹499, message us on WhatsApp and we&apos;ll refund 100% of your
        payment to your original payment method within 48 hours.
      </p>

      <section>
        <h2 className="label-caps mt-12 mb-4 text-ink-muted">How it works</h2>
        <ul className="mt-6 space-y-4 border-t border-line pt-6">
          <li className="flex flex-col gap-1 border-b border-line pb-4">
            <span className="label-caps text-ink">Window</span>
            <span className="body-md text-ink-tint">
              7 calendar days from the time of purchase. Counted from the
              Razorpay payment timestamp.
            </span>
          </li>
          <li className="flex flex-col gap-1 border-b border-line pb-4">
            <span className="label-caps text-ink">How to request</span>
            <span className="body-md text-ink-tint">
              Send a WhatsApp message to{" "}
              <span className="text-ink">+91 XXXXX XXXXX</span> or email{" "}
              <a
                href="mailto:storythatsellsforyou@gmail.com"
                className="text-ink hover:underline"
              >
                storythatsellsforyou@gmail.com
              </a>{" "}
              with your Razorpay payment ID. No form. No reason required.
            </span>
          </li>
          <li className="flex flex-col gap-1 border-b border-line pb-4">
            <span className="label-caps text-ink">Turnaround</span>
            <span className="body-md text-ink-tint">
              Refunds are processed within 48 hours of the request being
              received. The amount lands in your original payment method
              (UPI, card, net banking) according to that provider&apos;s
              standard timelines.
            </span>
          </li>
          <li className="flex flex-col gap-1 pb-1">
            <span className="label-caps text-ink">After 7 days</span>
            <span className="body-md text-ink-tint">
              Refunds are no longer available, except in cases of duplicate
              payment, a verified delivery failure on our side, or where
              required by applicable law.
            </span>
          </li>
        </ul>
      </section>
    </LegalShell>
  );
}
