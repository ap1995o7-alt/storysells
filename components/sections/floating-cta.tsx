"use client";

import { useEffect, useState } from "react";
import { handleBuy } from "@/components/site/buy-button";

/**
 * Persistent CTA visible from Section 2 onwards.
 * - Desktop: pill, bottom-right corner
 * - Mobile: full-width bottom bar
 * Hidden when hero is in view AND when pricing section is in view.
 */
export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const pricing = document.getElementById("pricing");

    let heroVisible = true;
    let pricingVisible = false;

    const update = () => setVisible(!heroVisible && !pricingVisible);

    const heroObserver = new IntersectionObserver(
      (entries) => {
        heroVisible = entries[0]?.isIntersecting ?? false;
        update();
      },
      { threshold: 0.1 },
    );
    const pricingObserver = new IntersectionObserver(
      (entries) => {
        pricingVisible = entries[0]?.isIntersecting ?? false;
        update();
      },
      { threshold: 0.15 },
    );

    if (hero) heroObserver.observe(hero);
    if (pricing) pricingObserver.observe(pricing);

    return () => {
      heroObserver.disconnect();
      pricingObserver.disconnect();
    };
  }, []);

  const baseShadow = "0 12px 40px rgba(226, 75, 74, 0.35)";

  return (
    <>
      {/* Desktop pill */}
      <button
        type="button"
        onClick={handleBuy}
        aria-label="Get the workbook for ₹499"
        tabIndex={visible ? 0 : -1}
        className={`fixed bottom-6 right-6 z-40 hidden items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-[family-name:var(--font-poppins)] text-[16px] font-bold text-accent-foreground transition-all md:inline-flex ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0 pointer-events-none"
        } hover:-translate-y-0.5 hover:brightness-110`}
        style={{ boxShadow: baseShadow }}
      >
        Get the Workbook — ₹499
      </button>

      {/* Mobile bottom bar */}
      <button
        type="button"
        onClick={handleBuy}
        aria-label="Get the workbook for ₹499"
        tabIndex={visible ? 0 : -1}
        className={`fixed inset-x-4 bottom-3 z-40 flex h-14 items-center justify-center rounded-2xl bg-accent font-[family-name:var(--font-poppins)] text-[16px] font-bold text-accent-foreground transition-all md:hidden ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ boxShadow: baseShadow }}
      >
        Get the Workbook — ₹499
      </button>
    </>
  );
}
