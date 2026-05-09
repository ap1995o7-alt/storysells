import { BuyButton } from "@/components/site/buy-button";
import { ShimmerText } from "@/components/ui/shimmer-text";

/**
 * Section 10 — Final CTA block before footer.
 * ShimmerText on line 2.
 */
export function FinalCTA() {
  return (
    <section
      aria-label="Final call to action"
      className="bg-background"
    >
      <div className="mx-auto w-full max-w-[800px] px-5 py-20 text-center md:px-6 md:py-[120px]">
        <h2
          className="font-[family-name:var(--font-poppins)] font-extrabold text-foreground"
          style={{
            fontSize: "clamp(40px, 6.5vw, 64px)",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
          }}
        >
          <span className="block">Smart got you hired.</span>
          <span className="mt-2 block">
            <ShimmerText duration={2.5} delay={1.0}>
              Storytelling gets you the next thing.
            </ShimmerText>
          </span>
        </h2>

        <div className="mt-12 flex flex-col items-center">
          <BuyButton
            variant="primary"
            size="lg"
            className="w-full md:w-[320px]"
          >
            Get the Workbook — ₹499
          </BuyButton>
          <p className="mt-4 text-[13px] text-muted-foreground">
            Instant download · Fillable PDF · Works on laptop, iPad, phone
          </p>
        </div>
      </div>
    </section>
  );
}
