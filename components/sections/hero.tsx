import { BuyButton } from "@/components/site/buy-button";
import { ShimmerText } from "@/components/ui/shimmer-text";

/**
 * Hero — simple, no cinematic, no pinned scroll.
 * Two-column on desktop. Stacked on mobile (text first, mockup below).
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:min-h-[100vh] md:pt-32"
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center px-5 pb-20 md:min-h-[calc(100vh-6rem)] md:px-12 md:pb-24">
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          {/* Left — text */}
          <div className="md:col-span-7">
            <p
              className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] font-medium uppercase"
              style={{
                color: "var(--accent)",
                letterSpacing: "0.1em",
              }}
            >
              The Storytelling Workbook
            </p>

            <h1
              className="mt-6 font-[family-name:var(--font-poppins)] font-extrabold text-foreground"
              style={{
                fontSize: "clamp(40px, 7vw, 80px)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
              }}
            >
              <span className="block">Smart got you hired.</span>
              <span className="mt-2 block">
                <ShimmerText duration={2.0} delay={1.5} as="span">
                  Storytelling gets you promoted.
                </ShimmerText>
              </span>
            </h1>

            <p className="mt-8 max-w-[600px] text-[16px] leading-[1.6] text-muted-foreground md:text-[18px]">
              The fastest-growing job title on LinkedIn isn&apos;t AI
              Engineer. It&apos;s Storyteller. Postings doubled in 2025 —
              Microsoft, Google, Notion, Amazon all hiring. In 2004,
              Bezos banned PowerPoint at Amazon and replaced it with
              stories. The skill nobody taught you in college is now the
              highest-paid one on the market.
            </p>

            <p className="mt-6 font-bold text-[16px] text-foreground">
              76 frameworks. 30 books. One ₹499 workbook.
            </p>

            <div className="mt-8">
              <BuyButton
                variant="primary"
                size="md"
                scroll
                className="w-full md:w-[280px]"
              >
                Get the Workbook — ₹499
              </BuyButton>
              <p className="mt-3 text-[13px] text-muted-foreground">
                Instant download · Fillable PDF · Works on laptop, iPad, phone
              </p>
            </div>
          </div>

          {/* Right — coded worksheet mockup (NOT a photo) */}
          <div className="md:col-span-5">
            <WorksheetMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Stylized device mockup with a fillable worksheet inside.
 * Pure HTML/Tailwind — no photo, no AI image.
 */
function WorksheetMockup() {
  return (
    <div className="mx-auto w-full max-w-[420px] md:max-w-none">
      {/* Device chrome — laptop-style bezel */}
      <div className="rounded-2xl border border-border bg-[#1a1918] p-2 shadow-2xl">
        {/* Top bar with traffic-light dots */}
        <div className="mb-2 flex items-center gap-1.5 px-3 pt-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
        </div>

        {/* Document */}
        <div className="rounded-xl bg-[#f7f3ec] p-5 md:p-7">
          {/* Framework header */}
          <p
            className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] font-medium uppercase tracking-wider"
            style={{ color: "#8a8680", letterSpacing: "0.08em" }}
          >
            Framework 12 / 76 — The 3 Levels of Conflict
          </p>

          <div className="mt-5 h-px w-full bg-[#e0d9cd]" />

          {/* Fillable inputs */}
          <div className="mt-5 space-y-4">
            <FieldRow
              label="Inner conflict"
              placeholder="What does the character want internally?"
            />
            <FieldRow
              label="Personal conflict"
              placeholder="What does the character want from someone else?"
            />
            <FieldRow
              label="External conflict"
              placeholder="What stands in the way of all of it?"
            />
          </div>

          {/* YOUR OUTPUT box */}
          <div
            className="mt-6 rounded-lg p-4"
            style={{
              border: "2px solid var(--accent)",
              backgroundColor: "rgba(226, 75, 74, 0.08)",
            }}
          >
            <p
              className="font-[family-name:var(--font-poppins)] text-[11px] font-bold uppercase tracking-wider"
              style={{ color: "var(--accent)" }}
            >
              Your Output
            </p>
            <p
              className="mt-2 italic"
              style={{
                fontFamily: "var(--font-dm-serif-display), Georgia, serif",
                color: "#1a1918",
                fontSize: "15px",
                lineHeight: 1.4,
              }}
            >
              Map all three. Even if you only use one at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldRow({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        className="block font-[family-name:var(--font-poppins)] text-[11px] font-bold uppercase tracking-wider"
        style={{ color: "#1a1918", letterSpacing: "0.08em" }}
      >
        {label}
      </label>
      <div
        className="mt-1.5 rounded-md border bg-white px-3 py-2 text-[13px] italic"
        style={{
          borderColor: "#e0d9cd",
          color: "#a09a91",
          minHeight: "36px",
        }}
      >
        {placeholder}
      </div>
    </div>
  );
}
