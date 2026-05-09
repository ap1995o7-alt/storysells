import type { ReactNode } from "react";
import { StickyNav } from "@/components/sections/sticky-nav";
import { FinalCTA } from "@/components/sections/final-cta";
import { MotionFooter } from "@/components/ui/motion-footer";

export function LegalShell({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <>
      <StickyNav />

      <main>
        <article className="bg-background pt-28 md:pt-32">
          <div className="mx-auto w-full max-w-[720px] px-5 pb-20 md:px-6 md:pb-[120px] md:pt-[120px]">
            <p
              className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] uppercase"
              style={{
                color: "var(--accent)",
                letterSpacing: "0.1em",
              }}
            >
              Story / Sells
            </p>

            <h1
              className="mt-6 font-[family-name:var(--font-poppins)] font-bold text-foreground"
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              {title}
            </h1>

            <p className="mt-3 text-[14px] text-muted-foreground">
              Last updated: {lastUpdated}
            </p>

            <div className="mt-12">{children}</div>
          </div>
        </article>

        <FinalCTA />
      </main>

      <MotionFooter />
    </>
  );
}
