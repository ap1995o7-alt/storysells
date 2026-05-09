import { Check } from "lucide-react";
import { BuyButton } from "@/components/site/buy-button";

const INCLUDED = [
  "76 fillable frameworks across 191 pages",
  "Every framework sourced to the book it came from",
  "The red YOUR OUTPUT box at the bottom of every worksheet",
  "Reads on laptop, iPad, phone",
  "Free updates as new frameworks are added — first buyers get every future addition",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-background"
    >
      <div className="mx-auto w-full max-w-[1100px] px-5 py-20 md:px-6 md:py-[120px]">
        <div className="mx-auto max-w-[640px] rounded-3xl border border-border bg-card p-8 md:p-16">
          <h2
            className="text-center font-[family-name:var(--font-poppins)] font-extrabold text-foreground"
            style={{
              fontSize: "clamp(56px, 9vw, 80px)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            ₹499.
          </h2>

          <p
            className="mt-2 text-center font-[family-name:var(--font-poppins)] font-bold text-foreground"
            style={{
              fontSize: "clamp(22px, 3.2vw, 28px)",
              lineHeight: 1.2,
            }}
          >
            Less than dinner. Worth more than the next promotion.
          </p>

          <p
            className="mt-12 text-center font-[family-name:var(--font-jetbrains-mono)] text-[12px] font-medium uppercase"
            style={{
              color: "var(--accent)",
              letterSpacing: "0.1em",
            }}
          >
            What you get
          </p>

          <ul className="mx-auto mt-6 max-w-[480px] space-y-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check
                  aria-hidden="true"
                  className="mt-[5px] h-4 w-4 shrink-0"
                  strokeWidth={2.5}
                  style={{ color: "var(--accent)" }}
                />
                <span className="text-[16px] leading-[1.6] text-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex items-baseline justify-center gap-4">
            <span
              className="text-[24px] text-muted-foreground line-through"
              aria-label="Original price ₹999"
            >
              ₹999
            </span>
            <span
              className="font-[family-name:var(--font-poppins)] font-bold text-foreground"
              style={{ fontSize: "32px" }}
            >
              ₹499
            </span>
          </div>

          <p className="mt-2 text-center text-[14px] italic text-muted-foreground">
            founding price. Goes up as more frameworks ship.
          </p>

          <div className="mt-8 flex flex-col items-center">
            <BuyButton
              variant="primary"
              size="lg"
              className="w-full md:w-[320px]"
            >
              Get the Workbook — ₹499
            </BuyButton>
            <p className="mt-4 text-center text-[13px] text-muted-foreground">
              Instant download · Razorpay secure · UPI, GPay, PhonePe, Paytm,
              Visa, Mastercard
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
