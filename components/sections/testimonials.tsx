const INSIGHTS = [
  {
    quote:
      "One level of conflict gets attention. Two creates tension. Three makes your story feel important. Map all three, even if you only use one at a time.",
    framework: "Framework 12 / The 3 Levels of Conflict",
    source: "from Robert McKee's Story",
  },
  {
    quote:
      "Your stories don't sound like stories to you — they sound like life. That's exactly why most people think they don't have any.",
    framework: "Framework 01 / Where You Are",
    source: "from Kindra Hall's Stories That Stick",
  },
  {
    quote:
      "The gap between “smart person with great ideas” and “the person everyone listens to” isn't intelligence, experience, or luck. It's one skill: storytelling.",
    framework: "Page 4 / Where You Are",
    source: "Story Sells",
  },
] as const;

export function Testimonials() {
  return (
    <section
      aria-label="From the workbook"
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-12 md:py-32">
        <p className="label-caps mb-12 text-ink-muted">From the workbook</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
          {INSIGHTS.map((t) => (
            <figure
              key={t.framework}
              className="flex h-full flex-col justify-between border border-line bg-surface p-6 md:p-8"
              style={{ borderLeft: "2px solid var(--accent-red)" }}
            >
              <blockquote className="body-md text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-line pt-5">
                <p className="label-caps text-ink">{t.framework}</p>
                <p className="body-md mt-2 text-ink-tint">{t.source}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
