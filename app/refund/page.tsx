import type { Metadata } from "next";
import { LegalShell } from "@/components/sections/legal-shell";

export const metadata: Metadata = {
  title: "Refund Policy — Story Sells",
  description:
    "Refunds are available for delivery issues, broken files, or duplicate payments. Once the workbook is downloaded, the sale is final.",
};

export default function RefundPage() {
  return (
    <LegalShell title="Refund Policy">
      <p
        className="text-[18px] leading-[1.6]"
        style={{ color: "var(--foreground)" }}
      >
        Story Sells is a digital product. Once the workbook PDF is
        downloaded, the sale is final — refunds are available only in
        the limited cases listed below.
      </p>

      <section>
        <h2
          className="mt-12 mb-4 font-[family-name:var(--font-jetbrains-mono)] text-[12px] font-medium uppercase"
          style={{ color: "var(--accent)", letterSpacing: "0.1em" }}
        >
          Eligible refund situations
        </h2>
        <ul className="mt-6 space-y-4 border-t border-border pt-6">
          <li className="flex flex-col gap-1 border-b border-border pb-4">
            <span
              className="font-[family-name:var(--font-poppins)] text-[14px] font-bold uppercase"
              style={{ letterSpacing: "0.05em" }}
            >
              Duplicate payment
            </span>
            <span
              className="text-[16px] leading-[1.6]"
              style={{ color: "var(--muted-foreground)" }}
            >
              You were charged more than once for the same order.
            </span>
          </li>
          <li className="flex flex-col gap-1 border-b border-border pb-4">
            <span
              className="font-[family-name:var(--font-poppins)] text-[14px] font-bold uppercase"
              style={{ letterSpacing: "0.05em" }}
            >
              Failed delivery
            </span>
            <span
              className="text-[16px] leading-[1.6]"
              style={{ color: "var(--muted-foreground)" }}
            >
              You did not receive access to the workbook due to a
              verified technical issue on our side, and the issue is
              not resolved within a reasonable period after it is raised.
            </span>
          </li>
          <li className="flex flex-col gap-1 border-b border-border pb-4">
            <span
              className="font-[family-name:var(--font-poppins)] text-[14px] font-bold uppercase"
              style={{ letterSpacing: "0.05em" }}
            >
              Broken file
            </span>
            <span
              className="text-[16px] leading-[1.6]"
              style={{ color: "var(--muted-foreground)" }}
            >
              The PDF file is corrupted or unreadable, and a replacement
              cannot be supplied.
            </span>
          </li>
          <li className="flex flex-col gap-1 pb-1">
            <span
              className="font-[family-name:var(--font-poppins)] text-[14px] font-bold uppercase"
              style={{ letterSpacing: "0.05em" }}
            >
              Required by law
            </span>
            <span
              className="text-[16px] leading-[1.6]"
              style={{ color: "var(--muted-foreground)" }}
            >
              Where applicable consumer-protection law requires a refund
              regardless of the above.
            </span>
          </li>
        </ul>
      </section>

      <section>
        <h2
          className="mt-12 mb-4 font-[family-name:var(--font-jetbrains-mono)] text-[12px] font-medium uppercase"
          style={{ color: "var(--accent)", letterSpacing: "0.1em" }}
        >
          How to raise an issue
        </h2>
        <p
          className="text-[16px] leading-[1.6]"
          style={{ color: "var(--muted-foreground)" }}
        >
          Email{" "}
          <a
            href="mailto:storythatsellsforyou@gmail.com"
            className="underline underline-offset-2 hover:no-underline"
            style={{ color: "var(--foreground)" }}
          >
            storythatsellsforyou@gmail.com
          </a>{" "}
          with your Razorpay payment ID and a short description of the
          issue. Refunds, when granted, are processed to the original
          payment method within 7 business days.
        </p>
      </section>
    </LegalShell>
  );
}
