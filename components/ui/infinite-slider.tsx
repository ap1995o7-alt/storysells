"use client";

import { Children, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type InfiniteSliderProps = {
  children: ReactNode;
  /** Gap between items in px */
  gap?: number;
  /** Speed: pixels per second-ish (lower = slower) */
  speed?: number;
  /** Speed when hovered (only used if non-zero) */
  speedOnHover?: number;
  /** Reverse direction */
  reverse?: boolean;
  className?: string;
};

/**
 * Continuously scrolling horizontal track. Duplicates children twice and
 * translates from 0 to -50% for a seamless loop.
 */
export function InfiniteSlider({
  children,
  gap = 32,
  speed = 60,
  speedOnHover,
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [hover, setHover] = useState(false);
  const items = Children.toArray(children);

  // Lower "speed" should mean slower → larger duration.
  // Approx: duration = 100 / speed seconds (gives ~ reasonable loop length)
  const baseDuration = Math.max(8, 800 / speed);
  const hoverDuration = speedOnHover
    ? Math.max(8, 800 / speedOnHover)
    : baseDuration;
  const duration = hover && speedOnHover ? hoverDuration : baseDuration;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        className="flex w-max items-center"
        style={{ gap: `${gap}px` }}
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration,
          repeat: Infinity,
        }}
      >
        {items.map((child, i) => (
          <div
            key={`a-${i}`}
            className="shrink-0"
            style={{ marginRight: 0 }}
          >
            {child}
          </div>
        ))}
        {items.map((child, i) => (
          <div
            key={`b-${i}`}
            className="shrink-0"
            aria-hidden="true"
          >
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
