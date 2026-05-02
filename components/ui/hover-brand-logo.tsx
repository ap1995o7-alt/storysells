"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Editorial Noir trust strip.
 *
 * On hover, the brand wordmark shifts from muted grey to primary ink,
 * and the company name slides in below. Sharp corners. No shadows.
 */

type Brand = {
  name: string;
  /** Optional rendering hint, e.g. a brand color note rendered as a tint */
  accent?: string;
};

const DEFAULT_BRANDS: Brand[] = [
  { name: "Swiggy" },
  { name: "Razorpay" },
  { name: "Cred" },
  { name: "Flipkart" },
  { name: "Zomato" },
  { name: "Deloitte" },
  { name: "TCS" },
];

export function HoverBrandLogo({
  heading = "Used by professionals at",
  brands = DEFAULT_BRANDS,
  className,
}: {
  heading?: string;
  brands?: Brand[];
  className?: string;
}) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      aria-label="Used by professionals at leading Indian companies"
      className={cn("border-y border-line", className)}
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 md:px-12 md:py-20">
        <p className="label-caps mb-10 text-ink-muted">{heading}</p>

        <ul className="grid grid-cols-2 items-stretch gap-px bg-line sm:grid-cols-3 md:grid-cols-7">
          {brands.map((brand, i) => {
            const isActive = active === i;
            return (
              <li
                key={brand.name}
                className="bg-canvas"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
              >
                <span
                  tabIndex={0}
                  className="group flex h-20 cursor-default flex-col items-center justify-center px-3 text-center transition-colors hover:bg-surface-low focus:bg-surface-low focus:outline-none md:h-24"
                  aria-label={brand.name}
                >
                  <span
                    className={cn(
                      "font-[family-name:var(--font-epilogue)] font-extrabold uppercase tracking-tight transition-colors",
                      "text-base md:text-lg",
                      isActive ? "text-ink" : "text-ink-muted",
                    )}
                  >
                    {brand.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "label-caps mt-1 text-ink-muted transition-opacity duration-200",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  >
                    {brand.accent ?? "Story Sells"}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export { DEFAULT_BRANDS as INDIAN_BRANDS };
