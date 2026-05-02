import Image from "next/image";

const PREVIEWS = [
  {
    src: "/preview_3_levels_conflict.jpg",
    alt: "Three Levels of Conflict framework worksheet preview",
    label: "Framework 14 / 76",
    title: "Three Levels of Conflict",
  },
  {
    src: "/preview_where_you_are.jpg",
    alt: "Where You Are framework worksheet preview",
    label: "Framework 27 / 76",
    title: "Where You Are",
  },
  {
    src: "/preview_where_you_are (1).jpg",
    alt: "Where You Are extended worksheet preview",
    label: "Framework 28 / 76",
    title: "Where You Are — Pt. II",
  },
] as const;

export function PagePreviews() {
  return (
    <section
      id="previews"
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-12 md:py-32">
        <p className="label-caps mb-10 text-ink-muted">Inside the Workbook</p>

        {/* Mobile: horizontal scroll. Desktop: 3-column grid. */}
        <div
          className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0"
        >
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
          Every worksheet ends with a YOUR OUTPUT section — a specific
          deliverable. Not theory. Not exercises. Content you can copy-paste
          into your next deck, post, or pitch.
        </p>
      </div>
    </section>
  );
}
