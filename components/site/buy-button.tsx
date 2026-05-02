"use client";

import { cn } from "@/lib/utils";
import type { ReactNode, MouseEventHandler } from "react";

/**
 * Single source of truth for "GET ACCESS" buttons across the page.
 * Redirects to the Razorpay hosted Payment Page.
 */
const RAZORPAY_PAYMENT_PAGE = "https://rzp.io/rzp/StorySells";

export function handleBuy() {
  if (typeof window !== "undefined") {
    window.location.href = RAZORPAY_PAYMENT_PAGE;
  }
}

type BuyButtonProps = {
  children?: ReactNode;
  variant?: "primary" | "ghost" | "compact";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
};

export function BuyButton({
  children = "Get Access — ₹499",
  variant = "primary",
  className,
  onClick,
  ariaLabel,
}: BuyButtonProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
    if (!e.defaultPrevented) handleBuy();
  };

  const base =
    variant === "primary"
      ? "btn-primary"
      : variant === "ghost"
      ? "btn-ghost"
      : "inline-flex items-center justify-center gap-2 bg-accent text-white font-[family-name:var(--font-space-grotesk)] font-semibold uppercase tracking-[0.1em] text-[11px] px-4 h-10 hover:bg-[#d12b21] transition-colors";

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel ?? (typeof children === "string" ? children : "Get access")}
      className={cn(base, className)}
    >
      {children}
    </button>
  );
}
