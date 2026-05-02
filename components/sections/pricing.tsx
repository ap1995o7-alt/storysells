import { Check } from "lucide-react";
import { BuyButton } from "@/components/site/buy-button";

const BONUSES = [
  { item: "76 Fillable Frameworks (191 pages)", value: null },
  { item: "15 LinkedIn Hook Templates (Notion file)", value: "₹499" },
  { item: "“Pitch in 7 Minutes” Video Walkthrough", value: "₹999" },
  { item: "Lifetime updates", value: null },
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
            76 frameworks. One workbook. A new way to make people feel what
            you mean.
          </blockquote>

          {/* Pricing card */}
          <div className="mt-12 border border-line bg-surface-low p-6 md:p-10">
            <div className="flex items-baseline gap-4">
              <span className="font-[family-name:var(--font-inter)] text-base text-ink-muted line-through">
                ₹999
              </span>
              <span className="display-xl text-ink leading-none">₹499</span>
            </div>
            <p className="label-caps mt-4 text-ink-muted">
              Founding member price
              <span aria-hidden="true" className="brand-slash mx-2">
                /
              </span>
              First 500 buyers
            </p>

            <ul className="mt-10 space-y-4 border-t border-line pt-8">
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
              <BuyButton className="w-full">Get Access Now</BuyButton>
              <p className="label-caps mt-5 text-center text-ink-muted">
                Instant digital delivery
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
