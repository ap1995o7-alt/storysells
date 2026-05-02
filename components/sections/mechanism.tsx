import Image from "next/image";

const COLUMNS = [
  {
    label: "Source",
    title: "30 Books",
    body: "Distilled from the storytelling canon — McKee, Aristotle, Joseph Campbell, Donald Miller, Annette Simmons, Nancy Duarte, and 24 more. Years of reading, compressed.",
  },
  {
    label: "Method",
    title: "76 Frameworks",
    body: "Tactical models you can deploy in any context — SCQA, the Curiosity Gap, Three Levels of Conflict, the One-Line Pitch, the Ladder of Abstraction, and 71 more.",
  },
  {
    label: "Output",
    title: "Usable Outputs",
    body: "Every worksheet ends with a YOUR OUTPUT section — a real deliverable. Not theory. Not journaling. Content you can paste into your next deck, post, or pitch.",
  },
] as const;

export function Mechanism() {
  return (
    <section
      id="mechanism"
      className="border-t border-line"
    >
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

        <div className="relative mt-16 aspect-[16/9] w-full border border-line bg-surface-low md:mt-20">
          <Image
            src="/hf_20260501_142100_07c16c07-1fe7-4df3-ae18-fc71bcafd679.png"
            alt="Story Sells workbook open on a laptop showing the framework interface"
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="editorial-image object-cover"
          />
        </div>
      </div>
    </section>
  );
}
