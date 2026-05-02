import { Check, X } from "lucide-react";

const FOR_LIST = [
  "You present, pitch, or write for a living — and it's not landing the way it should.",
  "You've been told you “need to communicate better” without anyone showing you how.",
  "You want a tool you can pull out before a meeting, not a 6-week course.",
  "You're a marketer, PM, salesperson, founder, consultant, or freelancer.",
  "You'd rather fill in a framework in 15 minutes than read another 300-page book.",
];

const NOT_FOR_LIST = [
  "You're looking for fiction writing or creative writing craft.",
  "You want calls, community, and hand-holding.",
  "You expect to read this like a book and feel productive — this is a workbook, you have to do the work.",
  "You think storytelling is fluff and you just need “better data.”",
];

export function WhoItsFor() {
  return (
    <section
      aria-label="Who it's for"
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="border border-line bg-surface-low p-6 md:p-10">
            <p className="label-caps mb-8 text-ink-muted">This is for you if…</p>
            <ul className="space-y-5">
              {FOR_LIST.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <Check
                    className="mt-[6px] h-4 w-4 shrink-0 text-ink"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                  <span className="body-md text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-line bg-surface-low p-6 md:p-10">
            <p className="label-caps mb-8 text-ink-muted">This is not for you if…</p>
            <ul className="space-y-5">
              {NOT_FOR_LIST.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <X
                    className="mt-[6px] h-4 w-4 shrink-0 text-ink-muted"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                  <span className="body-md text-ink-tint">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
