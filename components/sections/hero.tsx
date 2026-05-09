"use client";

import ShimmerText from "@/components/ui/shimmer-text";
import { handleBuy } from "@/components/site/buy-button";

/**
 * Hero — atmospheric red-glow background, frosted "New" pill,
 * centered headline with shimmer, single CTA.
 *
 * Background is pure CSS:
 *   - Layer 0: Off-center radial glow in brand red
 *   - Layer 1: Volumetric light beams (vertical striations inside
 *              the glow, masked to the glow's footprint)
 *   - Layer 2: Soft edge vignette to deepen the corners
 *
 * No video, no images. Loads instantly even on slow 4G.
 */
export function Hero() {
  // Defining the glow shape once so the mask matches exactly.
  const glowShape =
    "ellipse 55% 100% at 22% 50%";

  return (
    <section
      id="top"
      className="relative w-full min-h-screen overflow-hidden bg-background"
    >
      {/* Layer 0 — atmospheric red glow column on the left */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(${glowShape}, rgba(226, 75, 74, 0.40) 0%, rgba(226, 75, 74, 0.12) 35%, transparent 75%)`,
        }}
      />

      {/* Layer 1 — volumetric light beams (vertical striations
          inside the glow only, mimicking dust caught in a beam) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(88deg, transparent 0px, transparent 14px, rgba(0,0,0,0.22) 14px, rgba(0,0,0,0.22) 16px)",
          maskImage: `radial-gradient(${glowShape}, black 0%, black 30%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(${glowShape}, black 0%, black 30%, transparent 70%)`,
        }}
      />

      {/* Layer 2 — soft edge vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(15,14,13,0.7) 100%)",
        }}
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
          <button
            type="button"
            onClick={handleBuy}
            aria-label="Get the workbook for ₹499"
            className="rounded-xl px-10 py-4 font-[family-name:var(--font-poppins)] text-base font-bold text-white transition-all hover:brightness-110 active:translate-y-px"
            style={{
              backgroundColor: "#E24B4A",
              boxShadow: "0 12px 40px rgba(226,75,74,0.4)",
            }}
          >
            Get the Workbook — ₹499
          </button>
          <p className="font-[family-name:var(--font-dm-sans)] text-xs text-white/50">
            Instant download · Fillable PDF · Works on laptop, iPad, phone
          </p>
        </div>
      </div>
    </section>
  );
}

export const StorySellsHero = Hero;
