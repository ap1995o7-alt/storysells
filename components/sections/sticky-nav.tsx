"use client";

import { BrandLogo } from "@/components/site/brand-logo";
import { scrollToPricing } from "@/components/site/buy-button";

export function StickyNav() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-border/60 backdrop-blur-md"
      style={{ backgroundColor: "rgba(15, 14, 13, 0.85)" }}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-3 md:px-6 md:py-4"
      >
        <a
          href="#top"
          className="shrink-0"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <BrandLogo />
        </a>

        <button
          type="button"
          onClick={scrollToPricing}
          aria-label="Get the workbook for ₹499"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-3 py-2 font-[family-name:var(--font-poppins)] text-[14px] font-bold text-accent-foreground transition-all hover:brightness-110 md:px-4"
        >
          {/* Mobile: just price. Desktop: full label. */}
          <span className="md:hidden">₹499</span>
          <span className="hidden md:inline">Get the Workbook</span>
        </button>
      </nav>
    </header>
  );
}
