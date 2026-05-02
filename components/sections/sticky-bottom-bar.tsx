"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { handleBuy } from "@/components/site/buy-button";

export function StickyBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const footer = document.querySelector("[data-footer-root]");

    let heroVisible = true;
    let footerVisible = false;

    const update = () => setVisible(!heroVisible && !footerVisible);

    const heroObserver = new IntersectionObserver(
      (entries) => {
        heroVisible = entries[0]?.isIntersecting ?? false;
        update();
      },
      { threshold: 0.1 },
    );
    const footerObserver = new IntersectionObserver(
      (entries) => {
        footerVisible = entries[0]?.isIntersecting ?? false;
        update();
      },
      { threshold: 0.1 },
    );

    if (hero) heroObserver.observe(hero);
    if (footer) footerObserver.observe(footer);

    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  return (
    <div
      role="region"
      aria-label="Buy now"
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface transition-transform duration-300 will-change-transform ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between gap-3 px-5 md:px-12">
        <div className="flex min-w-0 items-baseline gap-3">
          <span className="font-[family-name:var(--font-epilogue)] text-sm font-extrabold uppercase tracking-tight text-ink">
            <span>STORY</span>
            <span aria-hidden="true" className="brand-slash mx-1">/</span>
            <span>SELLS</span>
          </span>
          <span className="hidden text-ink-muted sm:inline" aria-hidden="true">
            ·
          </span>
          <span className="hidden font-[family-name:var(--font-inter)] text-sm font-semibold text-ink sm:inline">
            ₹499
          </span>
          <span
            className="hidden text-xs text-ink-muted line-through sm:inline"
            aria-label="Regular price ₹999"
          >
            ₹999
          </span>
        </div>

        <button
          type="button"
          onClick={handleBuy}
          tabIndex={visible ? 0 : -1}
          className="inline-flex h-10 items-center gap-2 bg-accent px-4 font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-[#d12b21]"
        >
          Get the Workbook <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
