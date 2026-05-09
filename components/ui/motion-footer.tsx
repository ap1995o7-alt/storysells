"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BrandLogo } from "@/components/site/brand-logo";

const FOOTER_LINKS: { label: string; href: string }[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
];

const EMAIL = "storythatsellsforyou@gmail.com";
const INSTAGRAM_HANDLE = "@thatstorysells";
const INSTAGRAM_URL = "https://instagram.com/thatstorysells";

export function MotionFooter() {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["8%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.3, 1, 1]);

  return (
    <footer
      ref={containerRef}
      data-footer-root
      className="relative overflow-hidden border-t border-border bg-background"
      aria-label="Site footer"
    >
      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto w-full max-w-[1200px] px-5 pb-16 pt-20 md:px-6 md:pb-20 md:pt-24"
      >
        <div className="flex flex-col gap-3">
          <BrandLogo size="md" />
          <p className="text-[14px] text-muted-foreground">
            Built for the people who have the best idea in the room.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p
              className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] font-medium uppercase text-muted-foreground"
              style={{ letterSpacing: "0.1em" }}
            >
              Contact
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-[15px] text-foreground hover:underline"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-foreground hover:underline"
                >
                  Instagram {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <ul className="flex flex-wrap items-center gap-2 text-[13px] text-muted-foreground">
            {FOOTER_LINKS.map((l, i) => (
              <li key={l.href} className="flex items-center gap-2">
                <a href={l.href} className="hover:text-foreground">
                  {l.label}
                </a>
                {i < FOOTER_LINKS.length - 1 && (
                  <span aria-hidden="true">·</span>
                )}
              </li>
            ))}
          </ul>
          <p className="text-[13px] text-muted-foreground">
            © 2025 Story / Sells. Built in Bengaluru 🇮🇳
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
