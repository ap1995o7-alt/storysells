/**
 * Section 6 — In the workbook (quotes).
 * 3 quote blocks stacked vertically with red slash decoration.
 */

const QUOTES = [
  {
    quote:
      "Your stories don't sound like stories to you — they sound like life. That's exactly why most people think they don't have any.",
    cite: "Framework 01 / Where You Are",
    source: "from Kindra Hall's Stories That Stick",
    isPlaceholder: false,
  },
  {
    quote:
      "One level of conflict gets attention. Two creates tension. Three makes your story feel important. Map all three, even if you only use one at a time.",
    cite: "Framework 12 / The 3 Levels of Conflict",
    source: "from Robert McKee's Story",
    isPlaceholder: false,
  },
  {
    quote:
      "[PLACEHOLDER — to be replaced before launch with actual workbook copy on Matthew Dicks's “The Turn” or comparable framework. Format: a single-paragraph line that names the payoff of well-told story. The user will provide this from their workbook draft.]",
    cite: "Framework 24 / The Turn",
    source: "from Matthew Dicks's Storyworthy",
    isPlaceholder: true,
  },
] as const;

export function Quotes() {
  return (
    <section
      aria-label="In the workbook"
      className="bg-background"
    >
      <div className="mx-auto w-full max-w-[900px] px-5 py-20 md:px-6 md:py-[120px]">
        <h2
          className="text-center font-[family-name:var(--font-poppins)] font-bold text-foreground"
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          In the workbook.
        </h2>

        <div className="mt-16 space-y-12 md:space-y-20">
          {QUOTES.map((q, i) => (
            <article key={i}>
              <p
                aria-hidden="true"
                className="font-[family-name:var(--font-poppins)] text-[32px] font-extrabold leading-none"
                style={{ color: "var(--accent)" }}
              >
                /
              </p>
              <blockquote
                className={`mt-4 italic ${
                  q.isPlaceholder ? "text-muted-foreground" : "text-foreground"
                }`}
                style={{
                  fontFamily:
                    "var(--font-dm-serif-display), Georgia, serif",
                  fontSize: "clamp(18px, 2.4vw, 24px)",
                  lineHeight: 1.4,
                }}
              >
                {q.quote}
              </blockquote>
              <div className="mt-6">
                <p
                  className="font-[family-name:var(--font-dm-sans)] text-[14px] font-bold uppercase text-foreground"
                  style={{ letterSpacing: "0.05em" }}
                >
                  {q.cite}
                </p>
                <p className="mt-1 italic text-[14px] text-muted-foreground">
                  {q.source}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
