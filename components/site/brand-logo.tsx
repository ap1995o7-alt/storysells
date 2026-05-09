import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

/**
 * STORY/SELLS wordmark, rendered inline.
 * Poppins Bold (800), all caps, white. Forward slash in --accent red.
 */
export function BrandLogo({ className, size = "md" }: BrandLogoProps) {
  const sizes = {
    sm: "text-[14px] leading-none",
    md: "text-[18px] leading-none", // header height ~28px
    lg: "text-[22px] leading-none",
  };

  return (
    <span
      aria-label="Story Sells"
      className={cn(
        "font-[family-name:var(--font-poppins)] font-extrabold uppercase tracking-tight text-foreground",
        sizes[size],
        className,
      )}
    >
      <span>STORY</span>
      <span
        aria-hidden="true"
        className="mx-1 font-extrabold"
        style={{ color: "var(--accent)" }}
      >
        /
      </span>
      <span>SELLS</span>
    </span>
  );
}
