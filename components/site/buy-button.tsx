"use client";

import { cn } from "@/lib/utils";
import type { ReactNode, MouseEventHandler } from "react";

const RAZORPAY_PAYMENT_PAGE = "https://rzp.io/rzp/StorySells";

/**
 * Single source of truth for "Get the Workbook" buttons across the page.
 * Redirects to the Razorpay hosted Payment Page.
 *
 * Spec calls this `handleCheckout()` — exporting both names.
 */
export function handleBuy() {
  if (typeof window !== "undefined") {
    window.location.href = RAZORPAY_PAYMENT_PAGE;
  }
}

export const handleCheckout = handleBuy;

/** Smooth-scroll to a section by id (used by header / floating CTA) */
export function scrollToPricing() {
  if (typeof window === "undefined") return;
  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
}

type BuyButtonProps = {
  children?: ReactNode;
  /** "primary" = full red CTA. "header" = compact red. "scroll" = scrolls to #pricing instead of Razorpay redirect. */
  variant?: "primary" | "header" | "pill";
  size?: "sm" | "md" | "lg";
  /** When true, click scrolls to #pricing. Otherwise redirects to Razorpay. */
  scroll?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
};

const variantClass: Record<NonNullable<BuyButtonProps["variant"]>, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground font-[family-name:var(--font-poppins)] font-bold transition-all hover:brightness-110 active:translate-y-px",
  header:
    "inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground font-[family-name:var(--font-poppins)] font-bold text-[14px] px-4 py-2 transition-all hover:brightness-110",
  pill:
    "inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground font-[family-name:var(--font-poppins)] font-bold text-[16px] px-6 py-4 transition-all hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0",
};

const sizeClass: Record<NonNullable<BuyButtonProps["size"]>, string> = {
  sm: "h-10 px-4 text-[14px]",
  md: "h-14 px-6 text-[16px]",
  lg: "h-16 px-8 text-[18px]",
};

export function BuyButton({
  children = "Get the Workbook — ₹499",
  variant = "primary",
  size = "md",
  scroll = false,
  className,
  onClick,
  ariaLabel,
}: BuyButtonProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (scroll) scrollToPricing();
    else handleBuy();
  };

  const sizeC = variant === "header" ? "" : sizeClass[size];

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel ?? (typeof children === "string" ? children : "Get the workbook")}
      className={cn(variantClass[variant], sizeC, className)}
      style={
        variant === "pill"
          ? { boxShadow: "0 12px 40px rgba(226, 75, 74, 0.35)" }
          : undefined
      }
    >
      {children}
    </button>
  );
}
