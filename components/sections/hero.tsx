"use client";

import ShimmerText from "@/components/ui/shimmer-text";

/**
 * Hero — full-bleed silent video background, frosted "New" pill,
 * centered headline with red shimmer sweep, single CTA.
 *
 * The video is a Pexels stock placeholder; replace with brand
 * footage once available. /public/hero-poster.jpg covers the
 * buffering window.
 */
const VIDEO_URL =
  "https://videos.pexels.com/video-files/3209828/3209828-uhd_3840_2160_25fps.mp4";

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 h-full w-full object-cover"
        poster="/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Dark overlay — keeps white text legible over any video */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[5] bg-gradient-to-b from-black/70 via-black/60 to-black/85"
      />

      {/* Centered content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-28 text-center md:pt-32">
        {/* Eyebrow pill */}
        <div
          className="mb-10 inline-flex h-[38px] items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.08] px-4 backdrop-blur-xl"
          style={{
            boxShadow:
              "0 0 20px rgba(226,75,74,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          <span
            className="rounded-md px-2.5 py-1 font-bold uppercase text-white"
            style={{
              fontSize: "11px",
              letterSpacing: "0.1em",
              backgroundColor: "#E24B4A",
              boxShadow: "0 0 12px rgba(226,75,74,0.45)",
            }}
          >
            New
          </span>
          <span className="font-[family-name:var(--font-dm-sans)] text-sm font-medium tracking-wide text-white/95">
            The Storytelling Workbook
          </span>
        </div>

        {/* Headline */}
        <h1
          className="max-w-5xl font-[family-name:var(--font-poppins)] text-5xl font-bold tracking-[-0.02em] text-white lg:text-[64px]"
          style={{ lineHeight: 1.05 }}
        >
          Smart got you hired.
          <br />
          <ShimmerText className="font-bold" duration={2.5} delay={1.2}>
            Storytelling gets you promoted.
          </ShimmerText>
        </h1>

        {/* Subhead */}
        <p
          className="mt-8 max-w-[680px] font-[family-name:var(--font-dm-sans)] text-base font-normal text-white/75 lg:text-lg"
          style={{ lineHeight: 1.6 }}
        >
          The fastest-growing job title on LinkedIn isn&apos;t AI Engineer.
          It&apos;s Storyteller. Postings doubled in 2025 — Microsoft,
          Google, Notion, Amazon all hiring. The skill nobody taught you
          in college is now the highest-paid one on the market.
        </p>

        {/* Spec line */}
        <p className="mt-6 font-[family-name:var(--font-dm-sans)] text-base font-bold text-white">
          76 frameworks. 30 books. One ₹499 workbook.
        </p>

        {/* Single CTA */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#pricing")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-xl px-10 py-4 font-[family-name:var(--font-poppins)] text-base font-bold text-white transition-all hover:brightness-110"
            style={{
              backgroundColor: "#E24B4A",
              boxShadow: "0 12px 40px rgba(226,75,74,0.4)",
            }}
          >
            Get the Workbook — ₹499
          </a>
          <p className="font-[family-name:var(--font-dm-sans)] text-xs text-white/50">
            Instant download · Fillable PDF · Works on laptop, iPad, phone
          </p>
        </div>
      </div>
    </section>
  );
}

/** Alias the component to the spec's name. */
export const StorySellsHero = Hero;
