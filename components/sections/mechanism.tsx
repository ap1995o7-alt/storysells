const COLUMNS = [
  {
    label: "Source",
    title: "30 Books",
    body:
      "I read McKee, Aristotle, Campbell, Duarte, Kindra Hall, Will Storr, Matthew Dicks, and 23 more. 18 months. Roughly 8,000 pages. I took notes on everything that actually worked — not in a classroom, but in a pitch, a LinkedIn post, a Slack message, a sales call.",
  },
  {
    label: "Method",
    title: "76 Frameworks",
    body:
      "Each framework is a deployable tool. The Curiosity Gap. The SCQA. Three Levels of Conflict. The One-Line Pitch. The Ladder of Abstraction. You don't study them. You fill them in for YOUR audience, YOUR product, YOUR next presentation. 15 minutes per framework.",
  },
  {
    label: "Output",
    title: "Usable Outputs",
    body:
      "Every worksheet ends with a red-bordered box called YOUR OUTPUT. That box is the whole point. It's a hook, a headline, a pitch paragraph, or a story you can paste directly into your deck, your post, or your email. Not theory. Not journaling. A deliverable.",
  },
] as const;

export function Mechanism() {
  return (
    <section id="mechanism" className="border-t border-line">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-12 md:py-32">
        <p className="label-caps mb-12 text-ink-muted">The Mechanism</p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {COLUMNS.map((c) => (
            <div key={c.title} className="border-t border-surface-variant pt-8">
              <p className="label-caps mb-4 text-ink-muted">{c.label}</p>
              <h3 className="headline-md text-ink">{c.title}</h3>
              <p className="body-md mt-5 text-ink-tint">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
