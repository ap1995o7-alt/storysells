import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandLogo } from "@/components/site/brand-logo";

export function LegalShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 md:px-6">
          <Link href="/" aria-label="Story Sells home">
            <BrandLogo />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-jetbrains-mono)] text-[12px] uppercase text-muted-foreground transition-colors hover:text-foreground"
            style={{ letterSpacing: "0.1em" }}
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </Link>
        </div>
      </header>

      <article className="mx-auto w-full max-w-[1200px] px-5 py-20 md:px-6 md:py-[120px]">
        <div className="max-w-[720px]">
          <p
            className="mb-6 font-[family-name:var(--font-jetbrains-mono)] text-[12px] uppercase text-muted-foreground"
            style={{ letterSpacing: "0.1em" }}
          >
            Story / Sells
          </p>
          <h1
            className="font-[family-name:var(--font-poppins)] font-bold text-foreground"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>
          <div className="mt-8 space-y-6">{children}</div>
        </div>
      </article>
    </main>
  );
}
