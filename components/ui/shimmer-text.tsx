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
  /** Override the highlight color (CSS color string). Defaults to brand red. */
  highlightColor?: string;
  /** Override the base text color. Defaults to white. */
  baseColor?: string;
  className?: string;
  /** When false, plays on mount instead of waiting for in-view */
  inView?: boolean;
  /** Wrapping element */
  as?: "span" | "div" | "h1" | "h2";
};

/**
 * Animated gradient shimmer that sweeps across the text.
 *
 * Default: white text with a brand-red highlight that sweeps L→R.
 * Pure framer-motion + CSS gradient — no extra deps.
 */
export function ShimmerText({
  children,
  duration = 2.5,
  delay = 0,
  repeatDelay = 1.5,
  className,
  inView = true,
  highlightColor = "rgba(226, 75, 74, 0.95)",
  baseColor = "#FFFFFF",
  as = "span",
}: ShimmerTextProps) {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { once: false, amount: 0.4 });
  const shouldRun = inView ? visible : true;

  const Component = motion[as] as typeof motion.span;

  // Most of the gradient is the base color; a narrow highlight band
  // moves through. The 250% backgroundSize lets the band sweep fully
  // off-screen, giving a clean repeat.
  const gradient = `linear-gradient(110deg, ${baseColor} 0%, ${baseColor} 40%, ${highlightColor} 50%, ${baseColor} 60%, ${baseColor} 100%)`;

  const style: CSSProperties = {
    backgroundImage: gradient,
    backgroundSize: "250% 100%",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
    /* prevent layout shift / weird ascender clipping */
    paddingBottom: "0.06em",
  };

  return (
    <Component
      ref={ref as never}
      className={cn("shimmer-text-anim inline-block", className)}
      style={style}
      initial={{ backgroundPosition: "200% 0" }}
      animate={
        shouldRun
          ? { backgroundPosition: "-100% 0" }
          : { backgroundPosition: "200% 0" }
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
