import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandLogo } from "@/components/site/brand-logo";
import { ReceiptId } from "./receipt-id";

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
    title: "Start with Section 1",
    body: "Don't try to read it cover-to-cover. Open Framework 01 (the One-Line Pitch), apply it to whatever you're writing this week, and watch what changes.",
  },
] as const;

export default function ThankYouPage() {
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
            <ArrowLeft className="h-3.5 w-3.5" /> Back to home
          </Link>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-12 md:py-32">
        <div className="max-w-[840px]">
          <p className="label-caps mb-8 text-ink-muted">
            Order received
            <span aria-hidden="true" className="brand-slash mx-2">/</span>
            ₹499
          </p>

          <h1 className="display-xl text-ink">You&apos;re in.</h1>

          <p className="body-lg mt-8 max-w-[640px] text-ink-tint">
            Your payment has been received. Your workbook is ready below.
          </p>

          {/* Primary CTA: download the workbook */}
          <div
            className="mt-12 border border-line bg-surface-low p-6 md:p-10"
            style={{ borderLeft: "2px solid var(--accent-red)" }}
          >
            <p className="label-caps mb-4 text-ink-muted">Your workbook</p>
            <p className="headline-md text-ink">
              Story Sells — 76 Frameworks, 191 Pages
            </p>
            {/*
              TODO: Replace `#` below with the actual signed download URL or
              a path to the PDF in /public (e.g. "/workbook/story-sells.pdf").
              Consider gating delivery via a signed URL or short-lived token
              if you want to deter sharing.
            */}
            <a
              href="#"
              download
              className="btn-primary mt-8 inline-flex"
              aria-label="Download Story Sells workbook"
            >
              Download Workbook (PDF)
            </a>
            <p className="body-md mt-5 text-ink-muted">
              Save a copy locally. You can fill it in directly inside any PDF
              reader.
            </p>
            <p className="body-md mt-6 border-t border-line pt-5 text-ink-tint">
              Trouble downloading? Email{" "}
              <a
                href="mailto:storythatsellsforyou@gmail.com"
                className="text-ink hover:underline"
              >
                storythatsellsforyou@gmail.com
              </a>
              .
            </p>
          </div>

          {/* What happens next */}
          <div className="mt-20">
            <p className="label-caps mb-6 text-ink-muted">What happens next</p>
            <ol className="border-t border-line">
              {STEPS.map((s) => (
                <li
                  key={s.label}
                  className="grid grid-cols-1 gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8"
                >
                  <p className="label-caps text-ink-muted md:col-span-3">
                    {s.label}
                  </p>
                  <div className="md:col-span-9">
                    <h2 className="headline-md text-ink">{s.title}</h2>
                    <p className="body-md mt-3 text-ink-tint">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <ReceiptId />
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start justify-between gap-4 px-5 py-8 md:flex-row md:items-center md:px-12">
          <BrandLogo size="sm" />
          <ul className="flex flex-wrap items-center gap-6">
            <li>
              <Link
                href="/privacy"
                className="label-caps text-ink-muted hover:text-ink"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="label-caps text-ink-muted hover:text-ink"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                href="/refund"
                className="label-caps text-ink-muted hover:text-ink"
              >
                Refund
              </Link>
            </li>
          </ul>
          <p className="label-caps text-ink-muted">© 2025 Story / Sells</p>
        </div>
      </footer>
    </main>
  );
}
