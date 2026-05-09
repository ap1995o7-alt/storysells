"use client";

import { InfiniteSlider } from "./infinite-slider";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type LogoCloud3Props = {
  logos: ReactNode[];
  className?: string;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  reverse?: boolean;
};

export function LogoCloud3({
  logos,
  className,
  gap = 42,
  speed = 80,
  speedOnHover = 25,
  reverse = true,
}: LogoCloud3Props) {
  return (
    <div className={cn("relative", className)}>
      {/* Edge fade masks for clean entry/exit */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-24" />

      <InfiniteSlider
        gap={gap}
        speed={speed}
        speedOnHover={speedOnHover}
        reverse={reverse}
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="flex h-7 items-center text-foreground/80 transition-opacity hover:text-foreground md:h-8"
            aria-hidden="true"
          >
            {logo}
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
