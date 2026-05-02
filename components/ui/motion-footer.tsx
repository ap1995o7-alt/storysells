"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BrandLogo } from "@/components/site/brand-logo";
import { BuyButton } from "@/components/site/buy-button";

const MARQUEE_TEXT =
  "76 Frameworks · 30 Books · 191 Pages · Storytelling That Sells · Built for Indian Professionals";

const FOOTER_LINKS: { label: string; href: string }[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
];

export function MotionFooter() {
  const containerRef = useRef<HTMLElement | null>(null);

  // Curtain reveal: as the footer enters the viewport, the inner card
  // rises from below the fold. No box-shadows — purely transform-based.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["12%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.3, 1, 1]);

  return (
    <footer
      ref={containerRef}
      data-footer-root
      className="relative overflow-hidden border-t border-line bg-canvas"
      aria-label="Site footer"
    >
      {/* Marquee */}
      <div className="relative overflow-hidden border-b border-line py-6">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap label-caps text-ink-muted">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="px-6">
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>

      {/* Giant background "STORY" word */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none"
      >
        <p
          className="font-[family-name:var(--font-epilogue)] font-black tracking-tight leading-none text-ink"
          style={{
            fontSize: "clamp(120px, 28vw, 420px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(242, 240, 236, 0.07)",
            transform: "translateY(20%)",
          }}
        >
          STORY
        </p>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto w-full max-w-[1440px] px-5 pb-20 pt-24 md:px-12 md:pb-28 md:pt-32"
      >
        <div className="max-w-[720px]">
          <p className="label-caps mb-6 text-ink-muted">Story / Sells</p>
          <h2 className="display-xl text-ink">Ready to be heard?</h2>
          <p className="body-lg mt-6 max-w-[560px] text-ink-tint">
            76 frameworks. 191 pages. Built so you stop losing rooms.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <BuyButton variant="primary">Get the Workbook — ₹499</BuyButton>
            <a href="#problem" className="btn-ghost">
              Read the Manifesto
            </a>
          </div>

          <p className="label-caps mt-12 text-ink-muted">
            Support &nbsp;
            <a
              href="mailto:storythatsellsforyou@gmail.com"
              className="text-ink-tint normal-case tracking-normal hover:text-ink"
              style={{ textTransform: "none", letterSpacing: 0 }}
            >
              storythatsellsforyou@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 md:flex-row md:items-center">
          <BrandLogo size="sm" />

          <ul className="flex flex-wrap items-center gap-6">
            {FOOTER_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="label-caps text-ink-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="label-caps flex items-center gap-4 text-ink-muted">
            <span>© 2025 Story / Sells. All rights reserved.</span>
          </div>
        </div>

        <p className="label-caps mt-8 text-ink-muted">
          Built in Bengaluru 🇮🇳
        </p>
      </motion.div>
    </footer>
  );
}
