import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandLogo } from "@/components/site/brand-logo";
import { ReceiptId } from "./receipt-id";
import { PurchaseTracker } from "./purchase-tracker";

export const metadata: Metadata = {
  title: "You're in — Story Sells",
  description: "Your Story Sells workbook order is confirmed.",
  robots: { index: false, follow: false },
};

const STEPS = [
  {
    label: "Step 01",
    title: "Receipt on the way",
    body: "Razorpay will send a payment receipt to the address you used at checkout. It usually arrives within a couple of minutes.",
  },
  {
    label: "Step 02",
    title: "Download your workbook",
    body: "Use the link below to download the 191-page fillable PDF. Save a copy locally — you'll fill it in directly inside any PDF reader (Adobe Acrobat, Preview, browser).",
  },
  {
    label: "Step 03",
    title: "Start with Framework 01",
    body: "Don't try to read it cover-to-cover. Open Framework 01 (Where You Are), apply it to whatever you're writing this week, and watch what changes.",
  },
] as const;

export default function ThankYouPage() {
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
            <ArrowLeft className="h-3.5 w-3.5" /> Back to home
          </Link>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1200px] px-5 py-20 md:px-6 md:py-[120px]">
        <div className="max-w-[840px]">
          <p
            className="mb-6 font-[family-name:var(--font-jetbrains-mono)] text-[12px] uppercase"
            style={{ color: "var(--accent)", letterSpacing: "0.1em" }}
          >
            Order received / ₹499
          </p>

          <h1
            className="font-[family-name:var(--font-poppins)] font-extrabold text-foreground"
            style={{
              fontSize: "clamp(48px, 8vw, 80px)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            You&apos;re in.
          </h1>

          <p className="mt-8 max-w-[640px] text-[18px] leading-[1.6] text-muted-foreground">
            Your payment has been received. Your workbook is ready below.
          </p>

          {/* Primary CTA: download the workbook */}
          <div
            className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-10"
            style={{ borderLeft: "2px solid var(--accent)" }}
          >
            <p
              className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] uppercase text-muted-foreground"
              style={{ letterSpacing: "0.1em" }}
            >
              Your workbook
            </p>
            <p className="mt-2 font-[family-name:var(--font-poppins)] text-[24px] font-bold text-foreground">
              Story Sells — 76 Frameworks, 191 Pages
            </p>
            <a
              href="/story-sells-workbook.pdf"
              download="Story-Sells-Workbook.pdf"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 font-[family-name:var(--font-poppins)] text-[16px] font-bold text-accent-foreground transition-all hover:brightness-110"
              aria-label="Download Story Sells workbook"
            >
              Download Workbook (PDF)
            </a>
            <p className="mt-4 text-[14px] text-muted-foreground">
              Open in Adobe Acrobat Reader on desktop, or in the Adobe Acrobat
              app on mobile, so your answers save. Browsers and most default
              PDF viewers won&apos;t save form data.
            </p>
            <p className="mt-6 border-t border-border pt-5 text-[14px] text-muted-foreground">
              Trouble downloading? Email{" "}
              <a
                href="mailto:storythatsellsforyou@gmail.com"
                className="hover:underline"
                style={{ color: "var(--foreground)" }}
              >
                storythatsellsforyou@gmail.com
              </a>
              .
            </p>
          </div>

          {/* What happens next */}
          <div className="mt-20">
            <p
              className="mb-6 font-[family-name:var(--font-jetbrains-mono)] text-[12px] uppercase text-muted-foreground"
              style={{ letterSpacing: "0.1em" }}
            >
              What happens next
            </p>
            <ol className="border-t border-border">
              {STEPS.map((s) => (
                <li
                  key={s.label}
                  className="grid grid-cols-1 gap-4 border-b border-border py-8 md:grid-cols-12 md:gap-8"
                >
                  <p
                    className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] uppercase text-muted-foreground md:col-span-3"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {s.label}
                  </p>
                  <div className="md:col-span-9">
                    <h2 className="font-[family-name:var(--font-poppins)] text-[22px] font-bold leading-[1.2] text-foreground md:text-[24px]">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-[16px] leading-[1.6] text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <ReceiptId />
          <PurchaseTracker />
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-4 px-5 py-8 md:flex-row md:items-center md:px-6">
          <BrandLogo size="sm" />
          <ul className="flex flex-wrap items-center gap-2 text-[13px] text-muted-foreground">
            <li><Link href="/privacy" className="hover:text-foreground">Privacy</Link></li>
            <li aria-hidden="true">·</li>
            <li><Link href="/terms" className="hover:text-foreground">Terms</Link></li>
            <li aria-hidden="true">·</li>
            <li><Link href="/refund" className="hover:text-foreground">Refund</Link></li>
          </ul>
          <p className="text-[13px] text-muted-foreground">© 2025 Story / Sells</p>
        </div>
      </footer>
    </main>
  );
}
