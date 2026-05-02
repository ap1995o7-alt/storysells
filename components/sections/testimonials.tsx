const TESTIMONIALS = [
  {
    quote:
      "Used the SCQA framework in my Q3 review. My skip-level said it was the clearest update she'd seen. Got promoted two months later.",
    name: "Priya M.",
    meta: "Product Manager · Flipkart",
  },
  {
    quote:
      "LinkedIn went from 200 impressions to 12K on a single post using the Curiosity Gap framework. Same insight — different packaging.",
    name: "Rahul S.",
    meta: "Growth Marketer · Cred",
  },
  {
    quote:
      "Close rate went from 2/10 to 4/10 after Story Sells. The One-Line Pitch framework alone was worth 10x.",
    name: "Ananya K.",
    meta: "Sales Lead · Razorpay",
  },
] as const;

export function Testimonials() {
  return (
    <section
      aria-label="Testimonials"
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-12 md:py-32">
        <p className="label-caps mb-12 text-ink-muted">Field reports</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col justify-between border border-line bg-surface p-6 md:p-8"
            >
              <blockquote className="body-md italic text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-line pt-5">
                <p className="font-[family-name:var(--font-inter)] text-base font-semibold text-ink">
                  {t.name}
                </p>
                <p className="label-caps mt-1 text-ink-muted">{t.meta}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
