import type { Metadata } from "next";
import { LegalShell } from "@/components/sections/legal-shell";
import { Prose } from "@/components/sections/prose";

export const metadata: Metadata = {
  title: "Refund Policy — Story Sells",
  description:
    "Refunds are available only for delivery failures, broken files, or duplicate payments. Once the workbook is downloaded, the sale is final.",
};

export default function RefundPage() {
  return (
    <LegalShell title="Refund Policy" lastUpdated="2026-05-09">
      <Prose>
        <blockquote>
          <p>
            <strong>The short version</strong>
          </p>
          <p>
            Once you download the workbook, it&apos;s yours and the sale
            is final. Refunds are available only if the file fails to
            download, arrives broken, or you accidentally bought twice.
            Email us within 48 hours of purchase and we&apos;ll fix it.
          </p>
        </blockquote>

        <hr />

        <h2>1. Why we don&apos;t offer change-of-mind refunds</h2>
        <p>
          The workbook is a digital file. Once you download it, we have
          no way to &ldquo;take it back.&rdquo; If we offered general
          refunds, anyone could buy, download, and refund. That makes
          the product unsustainable. So we don&apos;t.
        </p>
        <p>
          This is the same policy used by most digital workbook and
          ebook sellers (Stripe Atlas, Notion, most Substack
          subscriptions, most Gumroad creators). It&apos;s not personal
          — it&apos;s the only policy that works for digital files.
        </p>

        <h2>2. When we will refund you</h2>
        <p>
          We will refund the full ₹499, no questions asked, in any of
          these situations:
        </p>
        <ul>
          <li>
            <strong>The file failed to download.</strong> The link
            didn&apos;t work, the email didn&apos;t arrive, the file you
            got is corrupted, or the PDF won&apos;t open.
          </li>
          <li>
            <strong>You were charged but didn&apos;t receive a download
            link.</strong> Sometimes payment clears but delivery fails on
            our end. Tell us and we&apos;ll either resend or refund.
          </li>
          <li>
            <strong>You accidentally bought the workbook twice.</strong>{" "}
            Duplicate purchases of the same digital product are
            refunded automatically.
          </li>
          <li>
            <strong>You were charged the wrong amount.</strong> Razorpay
            overcharge, currency conversion error, anything off-spec
            from the listed ₹499 — we&apos;ll refund the difference.
          </li>
        </ul>

        <h2>3. When we will not refund you</h2>
        <p>We cannot refund you in these situations:</p>
        <ul>
          <li>&ldquo;I changed my mind.&rdquo;</li>
          <li>
            &ldquo;I didn&apos;t think it was useful.&rdquo; (Once
            it&apos;s downloaded, it&apos;s downloaded. We have no way
            to verify you haven&apos;t used it.)
          </li>
          <li>
            &ldquo;I didn&apos;t realize it was a workbook and not a
            course.&rdquo; (The product page is clear about this; please
            read before buying.)
          </li>
          <li>
            &ldquo;I didn&apos;t end up doing the worksheets.&rdquo;
            (Books and workbooks bought and not used are not a
            refund-able problem.)
          </li>
          <li>
            &ldquo;I bought it more than 7 days ago.&rdquo; (After 7
            days, no refunds for any reason except a Razorpay billing
            error.)
          </li>
        </ul>

        <h2>4. How to request a refund</h2>
        <p>
          Email <strong>storythatsellsforyou@gmail.com</strong> within 48
          hours of purchase. Include:
        </p>
        <ul>
          <li>The email address you bought with</li>
          <li>
            Your Razorpay transaction / payment ID (in your purchase
            email)
          </li>
          <li>A one-line description of the problem</li>
        </ul>
        <p>
          We respond within 2 working days. If approved, the refund is
          processed by Razorpay and lands in your original payment
          method within 5–7 working days.
        </p>

        <h2>5. Razorpay disputes</h2>
        <p>
          If you raise a chargeback or dispute through Razorpay or your
          bank without contacting us first, we&apos;ll respond to the
          dispute with this refund policy as our reference. We always
          try to resolve issues directly first — please email us before
          going through your bank.
        </p>

        <h2>6. Partial refunds</h2>
        <p>
          We don&apos;t issue partial refunds. The product is one
          workbook at one price. Either it was delivered or it
          wasn&apos;t.
        </p>

        <h2>7. Changes to this policy</h2>
        <p>
          If we update this policy, the &ldquo;Last updated&rdquo; date
          at the top of this page changes. The policy in effect on the
          day you bought the workbook is the one that applies to your
          purchase.
        </p>

        <hr />

        <p>
          <em>
            Questions? Email{" "}
            <a href="mailto:storythatsellsforyou@gmail.com">
              storythatsellsforyou@gmail.com
            </a>
            .
          </em>
        </p>
      </Prose>
    </LegalShell>
  );
}
