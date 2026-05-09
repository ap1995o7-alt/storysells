import { ShimmerText } from "@/components/ui/shimmer-text";

const COLUMNS = [
  {
    eyebrow: "Today",
    title: "You walk into meetings with strong data and weak delivery.",
    body: "Your point lands when someone else repeats it. Your post gets two likes. Your deck gets nodded at, then forgotten.",
    highlighted: false,
  },
  {
    eyebrow: "The Workbook",
    title: "76 fillable frameworks from 30 books.",
    body: "McKee, Aristotle, Campbell, Duarte, Kindra Hall, Will Storr, Matthew Dicks, and 23 more — distilled into worksheets you fill in for your audience, your product, your next pitch. ~15 minutes each. The framework does the thinking; you do the typing.",
    highlighted: true,
  },
  {
    eyebrow: "Four Weeks In",
    title: "You walk in with the same data and a different shape.",
    body: "Three frameworks a week. Your point lands the first time. Your posts get forwarded. Your decks make it to the next meeting.",
    bodyAccent: "Not theory. Not journaling. A deliverable.",
    highlighted: false,
  },
] as const;

export function Mechanism() {
  return (
    <section id="mechanism" className="bg-background">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 md:px-6 md:py-[120px]">
        <h2
          className="text-center font-[family-name:var(--font-poppins)] font-bold text-foreground"
          style={{
            fontSize: "clamp(40px, 5.5vw, 56px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          <ShimmerText duration={2.0} delay={0.5} as="span">
            This isn&apos;t talent. It&apos;s a system.
          </ShimmerText>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-3">
          {COLUMNS.map((c) => (
            <div
              key={c.title}
              className={
                c.highlighted
                  ? "rounded-2xl border border-border bg-card p-8"
                  : ""
              }
              style={
                c.highlighted
                  ? { borderTop: "2px solid var(--accent)" }
                  : undefined
              }
            >
              <p
                className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] font-medium uppercase"
                style={{
                  color: "var(--accent)",
                  letterSpacing: "0.1em",
                }}
              >
                {c.eyebrow}
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-[22px] font-bold leading-[1.2] text-foreground md:text-[24px]">
                {c.title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.6] text-muted-foreground">
                {c.body}
              </p>
              {"bodyAccent" in c && c.bodyAccent && (
                <p className="mt-4 text-[16px] leading-[1.6] text-foreground">
                  <span
                    className="inline-block"
                    style={{
                      borderBottom: "2px solid var(--accent)",
                      paddingBottom: "2px",
                    }}
                  >
                    {c.bodyAccent}
                  </span>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
