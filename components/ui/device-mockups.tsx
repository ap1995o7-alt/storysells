import type { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * Apple-style device chrome components.
 * Each renders an empty bezel with a content area; pass the
 * worksheet markup as children.
 *
 * No images, no SVG bezels — pure HTML/Tailwind chrome.
 */

type DeviceProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/** MacBook — landscape 16:10 with thin bezel + bottom hinge bar */
export function Macbook({ children, className, style }: DeviceProps) {
  return (
    <div
      className={cn("relative w-full", className)}
      style={style}
    >
      {/* Screen + bezel */}
      <div
        className="relative aspect-[16/10] rounded-[14px] bg-[#1a1918] p-[6px] shadow-2xl"
        style={{
          boxShadow:
            "0 30px 60px -20px rgba(0,0,0,0.7), 0 8px 20px -8px rgba(0,0,0,0.4)",
        }}
      >
        {/* Top notch */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[6px] z-10 h-[3px] w-12 -translate-x-1/2 rounded-b-md bg-black"
        />
        {/* Screen content */}
        <div className="h-full w-full overflow-hidden rounded-[8px] bg-[#f7f3ec]">
          {children}
        </div>
      </div>

      {/* Hinge / base hint */}
      <div
        aria-hidden="true"
        className="mx-auto mt-[3px] h-[6px] w-[55%] rounded-b-[6px] bg-[#1a1918]"
      />
      <div
        aria-hidden="true"
        className="mx-auto mt-[1px] h-[2px] w-[18%] rounded-b-md bg-[#0a0a0a]"
      />
    </div>
  );
}

/** iPad — portrait 3:4 with rounded bezel */
export function IPad({ children, className, style }: DeviceProps) {
  return (
    <div
      className={cn("relative w-full", className)}
      style={style}
    >
      <div
        className="relative aspect-[3/4] rounded-[20px] bg-[#1a1918] p-[8px]"
        style={{
          boxShadow:
            "0 24px 48px -16px rgba(0,0,0,0.7), 0 6px 16px -6px rgba(0,0,0,0.4)",
        }}
      >
        {/* Tiny camera dot */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[3px] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-[#3a3a3a]"
        />
        <div className="h-full w-full overflow-hidden rounded-[14px] bg-[#f7f3ec]">
          {children}
        </div>
      </div>
    </div>
  );
}

/** iPhone — portrait 9:19 with Dynamic Island */
export function IPhone({ children, className, style }: DeviceProps) {
  return (
    <div
      className={cn("relative w-full", className)}
      style={style}
    >
      <div
        className="relative aspect-[9/19] rounded-[28px] bg-[#1a1918] p-[5px]"
        style={{
          boxShadow:
            "0 18px 36px -12px rgba(0,0,0,0.7), 0 4px 12px -4px rgba(0,0,0,0.4)",
        }}
      >
        {/* Dynamic Island */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[8px] z-10 h-[8px] w-[28%] -translate-x-1/2 rounded-full bg-black"
        />
        <div className="h-full w-full overflow-hidden rounded-[24px] bg-[#f7f3ec]">
          {children}
        </div>
      </div>
    </div>
  );
}
