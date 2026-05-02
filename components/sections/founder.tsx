export function Founder() {
  return (
    <section
      aria-label="From the founder"
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-12 md:py-32">
        <div className="max-w-[720px]">
          <p className="label-caps mb-8 text-ink-muted">From the desk of</p>

          <div className="mb-8 flex items-center gap-4">
            <div
              className="h-12 w-12 rounded-full border border-line bg-surface text-ink-tint flex items-center justify-center font-[family-name:var(--font-epilogue)] font-extrabold text-base"
              aria-hidden="true"
            >
              AK
            </div>
            <div>
              <p className="font-[family-name:var(--font-inter)] text-base font-semibold text-ink">
                Ankur K.
              </p>
              <p className="label-caps text-ink-muted">Founder, Story Sells</p>
            </div>
          </div>

          <div className="body-lg space-y-6 text-ink">
            <p>
              I spent 6 years in marketing and product. Got passed over for two
              promotions because I &ldquo;didn&apos;t communicate impact well.&rdquo;
            </p>
            <p>
              So I read 30 books on storytelling, took 18 months of notes, and
              built the system I wish someone had handed me on day one.
            </p>
            <p>
              2,000+ professionals have used Story Sells to stop losing rooms
              and start getting heard.
            </p>
            <p className="font-semibold text-ink">— Ankur</p>
          </div>
        </div>
      </div>
    </section>
  );
}
