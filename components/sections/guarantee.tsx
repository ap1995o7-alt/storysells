export function Guarantee() {
  return (
    <section
      aria-label="Guarantee"
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-20 md:px-12 md:py-24">
        <div
          className="max-w-[720px] border border-line bg-surface-low p-6 md:p-10"
          style={{ borderLeft: "2px solid var(--accent-red)" }}
        >
          <p className="label-caps mb-6 text-ink-muted">7-day guarantee</p>

          <div className="body-lg space-y-5 text-ink">
            <p>
              Try it for 7 days. Fill in one framework. If you don&apos;t
              think the output was worth ₹499, message me on WhatsApp and
              I&apos;ll send the money back.
            </p>
            <p>No form. No reason needed. No guilt.</p>
            <p>
              The workbook is that good. And if it&apos;s not, I want to
              know why.
            </p>
          </div>

          <p className="mt-8 font-[family-name:var(--font-inter)] text-base font-semibold text-ink">
            — Anirudh
          </p>
        </div>
      </div>
    </section>
  );
}
