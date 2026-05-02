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
    <main className="min-h-screen bg-canvas">
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-5 md:px-12">
          <Link href="/" aria-label="Story Sells home">
            <BrandLogo />
          </Link>
          <Link
            href="/"
            className="label-caps inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </Link>
        </div>
      </header>

      <article className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-12 md:py-32">
        <div className="max-w-[720px]">
          <p className="label-caps mb-8 text-ink-muted">Story / Sells</p>
          <h1 className="headline-lg text-ink">{title}</h1>
          <div className="mt-10 space-y-6">{children}</div>
        </div>
      </article>
    </main>
  );
}
