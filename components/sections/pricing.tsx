import { Check } from "lucide-react";
import { BuyButton } from "@/components/site/buy-button";

const INCLUDED = [
  "76 fillable frameworks across 191 pages",
  "Every framework sourced and attributed to the original book",
  "YOUR OUTPUT section on every worksheet — walk away with a usable deliverable",
  "Works on laptop, iPad, and phone",
  "Lifetime updates as new frameworks are added",
];

const BONUSES: { item: string; value: string | null }[] = [
  { item: "15 LinkedIn Hook Templates (Notion file)", value: "₹499" },
  { item: "“Pitch in 7 Minutes” Video Walkthrough", value: "₹999" },
];

const PAYMENT_METHODS = ["UPI", "GPay", "PhonePe", "Paytm", "Visa", "MC"];

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-12 md:py-32">
        <div className="max-w-[720px]">
          <p className="label-caps mb-8 text-ink-muted">The Workbook</p>
          <h2 className="headline-lg text-ink">
            For people tired of being understood too late.
          </h2>

          <blockquote
            className="mt-10 border-l-2 pl-5 body-lg text-ink"
            style={{ borderColor: "var(--accent-red)" }}
          >
            76 frameworks. One workbook. Built for the person who has the
            best idea in the room and keeps losing to the person who tells
            it better.
          </blockquote>

          <div className="mt-12 border border-line bg-surface-low p-6 md:p-10">
            <div className="flex items-baseline gap-4">
              <span className="font-[family-name:var(--font-inter)] text-base text-ink-muted line-through">
                ₹999
              </span>
              <span className="display-xl text-ink leading-none">₹499</span>
            </div>
            <p className="label-caps mt-4 text-ink-muted">
              Founding price
              <span aria-hidden="true" className="brand-slash mx-2">/</span>
              While this version is live
            </p>

            <p className="label-caps mt-10 text-ink-muted">What&apos;s included</p>
            <ul className="mt-5 space-y-4 border-t border-line pt-5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className="mt-[5px] h-4 w-4 shrink-0 text-ink"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                  <span className="body-md text-ink">{item}</span>
                </li>
              ))}
            </ul>

            <p className="label-caps mt-10 text-ink-muted">Bonuses</p>
            <ul className="mt-5 space-y-4 border-t border-line pt-5">
              {BONUSES.map((b) => (
                <li
                  key={b.item}
                  className="flex items-start justify-between gap-4"
                >
                  <span className="flex items-start gap-3">
                    <Check
                      className="mt-[5px] h-4 w-4 shrink-0 text-ink"
                      strokeWidth={2.25}
                      aria-hidden="true"
                    />
                    <span className="body-md text-ink">{b.item}</span>
                  </span>
                  {b.value && (
                    <span className="label-caps shrink-0 text-ink-muted">
                      worth {b.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-line pt-8">
              <BuyButton className="w-full">Get the Workbook — ₹499</BuyButton>
              <p className="label-caps mt-5 text-center text-ink-muted">
                Instant download
                <span aria-hidden="true" className="brand-slash mx-2">/</span>
                Razorpay Secure
                <span aria-hidden="true" className="brand-slash mx-2">/</span>
                UPI, Cards, Net Banking
              </p>

              <ul
                aria-label="Payment methods"
                className="mt-6 flex flex-wrap items-center justify-center gap-2"
              >
                {PAYMENT_METHODS.map((m) => (
                  <li
                    key={m}
                    className="label-caps border border-line px-3 py-2 text-ink-muted"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
