"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/site/brand-logo";
import { BuyButton } from "@/components/site/buy-button";

const NAV_ITEMS = [
  { label: "Workbook", href: "#mechanism" },
  { label: "Manifesto", href: "#problem" },
  { label: "Archive", href: "#previews" },
];

export function StickyNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-canvas/95 backdrop-blur supports-[backdrop-filter]:bg-canvas/80 transition-colors ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between px-5 md:h-16 md:px-12"
      >
        <a href="#top" className="shrink-0">
          <BrandLogo />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="label-caps text-ink-tint transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <BuyButton variant="compact">Get Access — ₹499</BuyButton>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-ink md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-canvas md:hidden">
          <ul className="flex flex-col px-5 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="border-b border-line last:border-0">
                <a
                  href={item.href}
                  className="label-caps block py-4 text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <BuyButton
                variant="primary"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Get Access — ₹499
              </BuyButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
