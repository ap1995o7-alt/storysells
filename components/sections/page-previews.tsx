import Image from "next/image";

const PREVIEWS = [
  {
    src: "/preview_where_you_are.jpg",
    alt: "Where You Are framework worksheet",
    caption:
      "For the next time someone asks “tell me about yourself” and you go blank.",
    subline: "Framework 01 / 76 — Where You Are",
  },
  {
    src: "/preview_3_levels_conflict.jpg",
    alt: "The 3 Levels of Conflict framework worksheet",
    caption:
      "For the Monday update that keeps getting nodded at and forgotten.",
    subline: "Framework 12 / 76 — The 3 Levels of Conflict",
  },
  {
    src: "/preview_where_you_are (1).jpg",
    alt: "The Sacred Flaw worksheet",
    caption: "For when your story sounds too rehearsed to be real.",
    subline: "Worksheet 02 / 76 — The Sacred Flaw",
  },
] as const;

/**
 * Section 5 — Worksheet previews.
 * 3 columns desktop, stacked on mobile.
 */
export function PagePreviews() {
  return (
    <section id="previews" className="bg-background">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 md:px-6 md:py-[120px]">
        <h2
          className="text-center font-[family-name:var(--font-poppins)] font-bold text-foreground"
          style={{
            fontSize: "clamp(32px, 4.5vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          What you fill. What you keep.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {PREVIEWS.map((p) => (
            <figure key={p.src} className="flex flex-col">
              <div
                className="relative w-full overflow-hidden rounded-xl bg-[#f4efe7]"
                style={{ aspectRatio: "1 / 1.4" }}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  style={{
                    boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
                  }}
                />
              </div>
              <figcaption className="mt-6">
                <p className="font-[family-name:var(--font-dm-sans)] text-[16px] font-bold leading-[1.4] text-foreground md:text-[18px]">
                  {p.caption}
                </p>
                <p
                  className="mt-2 font-[family-name:var(--font-jetbrains-mono)] text-[12px] uppercase text-muted-foreground"
                  style={{ letterSpacing: "0.05em" }}
                >
                  {p.subline}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p
          className="mx-auto mt-16 max-w-[720px] text-center italic leading-[1.6] text-muted-foreground"
          style={{ fontSize: "16px" }}
        >
          Three frameworks of seventy-six. The other seventy-three handle
          the LinkedIn post that flopped, the deck that died on slide 3,
          the wedding toast you&apos;ve been avoiding, and the apology
          you can&apos;t get right.
        </p>
      </div>
    </section>
  );
}
