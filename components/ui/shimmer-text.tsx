"use client";

import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

type ShimmerTextProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  /** Pause between repeats (s) */
  repeatDelay?: number;
  /** Override the wrapping element. Defaults to span. */
  as?: "span" | "div";
};

/**
 * Animated shimmer that sweeps a brand-red band through white text.
 *
 * Gradient: white → red → red → white over 200% width, sliding from
 * positionX 200% to -100% so the red band passes once per cycle.
 */
export function ShimmerText({
  children,
  className,
  duration = 2.5,
  delay = 1.0,
  repeatDelay = 3,
}: ShimmerTextProps) {
  const style: CSSProperties = {
    WebkitTextFillColor: "transparent",
    background:
      "linear-gradient(to right, #FFFFFF 0%, rgba(226,75,74,0.85) 40%, rgba(226,75,74,0.85) 60%, #FFFFFF 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    backgroundRepeat: "no-repeat",
    backgroundSize: "200% 100%",
    /* Avoid descender clipping when the background-clip is on text */
    paddingBottom: "0.06em",
  };

  return (
    <motion.span
      className={cn("inline-block shimmer-text-anim", className)}
      style={style}
      initial={{ backgroundPositionX: "200%" }}
      animate={{ backgroundPositionX: ["200%", "-100%"] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}

export default ShimmerText;
