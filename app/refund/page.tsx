import type { Metadata } from "next";
import { LegalShell } from "@/components/sections/legal-shell";

export const metadata: Metadata = {
  title: "Refund Policy — Story Sells",
  description:
    "Story Sells is a digital product. All sales are final, with limited exceptions for duplicate payments and verified delivery failures.",
};

export default function RefundPage() {
  return (
    <LegalShell title="Refund Policy / No Refunds">
      <p className="body-lg text-ink">
        All sales are final. Story Sells is a digital product, delivered
        instantly or made accessible immediately after purchase, and is
        non-refundable once the transaction is completed.
      </p>

      <section>
        <h2 className="label-caps mt-12 mb-4 text-ink-muted">
          Limited Exceptions
        </h2>
        <p className="body-md text-ink-tint">
          Refunds will only be considered in the following situations:
        </p>
        <ul className="mt-6 space-y-4 border-t border-line pt-6">
          <li className="flex flex-col gap-1 border-b border-line pb-4">
            <span className="label-caps text-ink">Duplicate payment</span>
            <span className="body-md text-ink-tint">
              You were charged more than once for the same order.
            </span>
          </li>
          <li className="flex flex-col gap-1 border-b border-line pb-4">
            <span className="label-caps text-ink">Failed delivery</span>
            <span className="body-md text-ink-tint">
              You did not receive access to the product due to a verified
              technical issue on our side, and the issue is not resolved
              within a reasonable period after it is raised.
            </span>
          </li>
          <li className="flex flex-col gap-1 pb-1">
            <span className="label-caps text-ink">Material discrepancy</span>
            <span className="body-md text-ink-tint">
              The product delivered is materially different from what was
              described at the time of purchase, where required by applicable
              law.
            </span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="label-caps mt-12 mb-4 text-ink-muted">Acknowledgment</h2>
        <p className="body-md text-ink-tint">
          By purchasing Story Sells, you acknowledge that you are buying a
          digital product and agree that the product is non-refundable except
          in the limited cases stated above.
        </p>
      </section>

      <section>
        <h2 className="label-caps mt-12 mb-4 text-ink-muted">
          Raising an issue
        </h2>
        <p className="body-md text-ink-tint">
          To raise a duplicate-payment or delivery issue, email{" "}
          <a
            href="mailto:storythatsellsforyou@gmail.com"
            className="text-ink hover:underline"
          >
            storythatsellsforyou@gmail.com
          </a>{" "}
          with your Razorpay payment ID.
        </p>
      </section>
    </LegalShell>
  );
}
