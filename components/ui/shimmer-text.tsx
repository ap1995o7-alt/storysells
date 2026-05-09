"use client";

import type { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

type ShimmerTextProps = {
  children: ReactNode;
  className?: string;
  /** Kept for API compatibility; unused now that the gradient is static. */
  duration?: number;
  delay?: number;
  repeatDelay?: number;
};

/**
 * Static gradient text — white at the edges, brand red through the middle.
 *
 * The animated version was causing layout bugs (inline-block didn't wrap,
 * animation kept the gradient stuck in pinkish end-state). This static
 * version keeps the visual treatment but renders as a normal inline span
 * that wraps cleanly across lines.
 */
export function ShimmerText({ children, className }: ShimmerTextProps) {
  const style: CSSProperties = {
    background:
      "linear-gradient(to right, #FFFFFF 0%, rgba(226, 75, 74, 0.85) 50%, #FFFFFF 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
    /* Allow wrapping — no inline-block trap */
    boxDecorationBreak: "clone",
    WebkitBoxDecorationBreak: "clone",
  };

  return (
    <span className={cn(className)} style={style}>
      {children}
    </span>
  );
}

export default ShimmerText;
