import Image from "next/image";

const PREVIEWS = [
  {
    src: "/preview_3_levels_conflict.jpg",
    alt: "The 3 Levels of Conflict framework worksheet",
    label: "Framework 12 / 76",
    title: "The 3 Levels of Conflict",
  },
  {
    src: "/preview_where_you_are.jpg",
    alt: "Where You Are framework worksheet",
    label: "Framework 01 / 76",
    title: "Where You Are",
  },
  {
    src: "/preview_where_you_are (1).jpg",
    alt: "The Sacred Flaw worksheet",
    label: "Worksheet 02 / 76",
    title: "The Sacred Flaw",
  },
] as const;

export function PagePreviews() {
  return (
    <section id="previews" className="border-t border-line">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-12 md:py-32">
        <p className="label-caps mb-10 text-ink-muted">Inside the Workbook</p>

        <div className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {PREVIEWS.map((p) => (
            <figure
              key={p.src}
              className="group flex w-[82%] shrink-0 snap-start flex-col border border-line bg-surface md:w-auto"
            >
              <div className="relative aspect-[3/4] w-full bg-[#f4efe7]">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 82vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="border-t border-line p-5">
                <p className="label-caps text-ink-muted">{p.label}</p>
                <p className="headline-md mt-2 text-ink">{p.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="body-md mt-10 max-w-[720px] text-ink-tint">
          Every worksheet ends with a YOUR OUTPUT box. It&apos;s not a
          reflection prompt. It&apos;s a fill-in-the-blank that produces a
          usable hook, headline, pitch paragraph, or story structure. You
          walk away with something you can paste into a deck, not something
          you paste into a journal.
        </p>
      </div>
    </section>
  );
}
