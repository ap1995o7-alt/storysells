import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export function BrandLogo({ className, size = "md" }: BrandLogoProps) {
  const sizes = {
    sm: "text-[14px]",
    md: "text-[16px]",
    lg: "text-[20px]",
  };

  return (
    <span
      className={cn(
        "font-[family-name:var(--font-epilogue)] font-extrabold tracking-tight uppercase",
        sizes[size],
        className,
      )}
      aria-label="Story Sells"
    >
      <span>STORY</span>
      <span aria-hidden="true" className="brand-slash mx-1.5">/</span>
      <span>SELLS</span>
    </span>
  );
}
