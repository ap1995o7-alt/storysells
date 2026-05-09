/**
 * Section 2 — Invisible Tax
 * Single column, max-width 720px, centered.
 */
export function Problem() {
  return (
    <section
      id="problem"
      className="bg-background"
    >
      <div className="mx-auto w-full max-w-[720px] px-5 py-20 md:px-6 md:py-[120px]">
        <h2
          className="font-[family-name:var(--font-poppins)] font-bold text-foreground"
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          You&apos;ve been in this meeting.
        </h2>

        <div
          className="mt-10 space-y-6 text-[16px] md:text-[18px]"
          style={{ color: "#E4E4E7", lineHeight: 1.7, maxWidth: "65ch" }}
        >
          <p>
            You&apos;ve done the work. The numbers check out. You open
            your mouth and the room doesn&apos;t move.
          </p>
          <p>
            Two minutes later, someone else says roughly the same
            thing. The room nods. The decision moves. You sit there
            wondering what just happened.
          </p>
          <p>
            What just happened is this: they told it like a story. You
            explained it like a report. The data was identical. The
            structure wasn&apos;t.
          </p>
          <p className="font-bold text-foreground">
            That&apos;s the gap{" "}
            <span
              className="inline-block"
              style={{
                borderBottom: "2px solid var(--accent)",
                paddingBottom: "2px",
              }}
            >
              this workbook closes
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
