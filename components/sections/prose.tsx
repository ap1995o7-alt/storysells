import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Editorial prose wrapper for legal pages.
 * Applies DM Sans body / Poppins headings / accent-red links.
 *
 * Usage:
 *   <Prose>
 *     <h2>Section title</h2>
 *     <p>Body copy…</p>
 *   </Prose>
 */
export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "prose-legal max-w-none text-[16px] leading-[1.7]",
        className,
      )}
      style={{ color: "#E4E4E7" }}
    >
      {children}
    </div>
  );
}
