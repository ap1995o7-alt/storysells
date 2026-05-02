import { Check, X } from "lucide-react";

const FOR_LIST = [
  "You have good ideas but struggle to make people care.",
  "You write decks, posts, or emails every week.",
  "You want frameworks, not theory.",
  "You're a marketer, PM, salesperson, founder, or consultant.",
  "You want to fill it in for YOUR business — not a hypothetical case study.",
];

const NOT_FOR_LIST = [
  "You're looking for fiction writing craft.",
  "You want a course with calls and a community.",
  "You expect to read it passively like a book.",
  "You need hand-holding — this is self-serve.",
];

export function WhoItsFor() {
  return (
    <section
      aria-label="Who it's for"
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {/* For */}
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

          {/* Not for */}
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
