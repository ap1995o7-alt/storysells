"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

type ShimmerTextProps = {
  children: ReactNode;
  /** Animation duration in seconds */
  duration?: number;
  /** Delay before first run (s) once visible */
  delay?: number;
  /** Pause between repeats (s) */
  repeatDelay?: number;
  /** Visual variant */
  variant?: "default";
  className?: string;
  /** When false, plays on mount instead of waiting for in-view */
  inView?: boolean;
  /** Wrapping element — defaults to span. Use "block" for a full-width block. */
  as?: "span" | "div" | "h1" | "h2";
};

/**
 * Animated gradient shimmer that sweeps across the text.
 *
 * Pure framer-motion + CSS gradient — no extra deps.
 * Respects prefers-reduced-motion via globals.css `.shimmer-text-anim` rule.
 */
export function ShimmerText({
  children,
  duration = 2.0,
  delay = 0,
  repeatDelay = 1.5,
  className,
  inView = true,
  as = "span",
}: ShimmerTextProps) {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { once: false, amount: 0.5 });
  const shouldRun = inView ? visible : true;

  const Component = motion[as] as typeof motion.span;

  // Gradient: muted base color, white highlight that sweeps L→R.
  const gradient =
    "linear-gradient(110deg, var(--foreground) 0%, var(--foreground) 35%, #FFFFFF 50%, var(--foreground) 65%, var(--foreground) 100%)";

  const style: CSSProperties = {
    backgroundImage: gradient,
    backgroundSize: "250% 100%",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  };

  return (
    <Component
      ref={ref as never}
      className={cn("shimmer-text-anim inline-block", className)}
      style={style}
      initial={{ backgroundPosition: "200% 0" }}
      animate={
        shouldRun ? { backgroundPosition: "-100% 0" } : { backgroundPosition: "200% 0" }
      }
      transition={{
        duration,
        delay,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay,
      }}
    >
      {children}
    </Component>
  );
}
