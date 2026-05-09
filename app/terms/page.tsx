import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/sections/legal-shell";
import { Prose } from "@/components/sections/prose";

export const metadata: Metadata = {
  title: "Terms of Service — Story Sells",
  description:
    "Terms governing the purchase and use of the Story Sells workbook.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" lastUpdated="2026-05-09">
      <Prose>
        <blockquote>
          <p>
            <strong>The short version</strong>
          </p>
          <p>
            You&apos;re buying a fillable PDF workbook for ₹499. Once you
            download it, it&apos;s yours to use for personal or
            professional work. Don&apos;t share or resell the file. We
            make our best effort to keep the site running but can&apos;t
            guarantee perfection. Refund rules are on the{" "}
            <Link href="/refund">refund page</Link>.
          </p>
        </blockquote>

        <hr />

        <h2>1. The agreement</h2>
        <p>
          By using thatstorysells.in or buying the workbook, you agree to
          these terms. If you don&apos;t agree, please don&apos;t use the
          site.
        </p>

        <h2>2. What you&apos;re buying</h2>
        <p>
          Story Sells is a digital workbook delivered as a fillable PDF.
          For ₹499, you receive:
        </p>
        <ul>
          <li>The workbook file (currently 76 frameworks across 191 pages)</li>
          <li>Free updates as new frameworks are added</li>
          <li>
            The right to use the workbook for your own personal and
            professional storytelling work — pitches, posts, decks,
            talks, and so on
          </li>
        </ul>
        <p>
          You do not receive: ongoing coaching, calls, community access,
          guaranteed outcomes, or anything else not explicitly listed
          above.
        </p>

        <h2>3. License — what you can and cannot do</h2>

        <p>
          <strong>You can:</strong>
        </p>
        <ul>
          <li>Download the workbook and keep it on your devices</li>
          <li>Fill it in for any personal or professional project</li>
          <li>
            Use the outputs (the lines, hooks, story structures you
            create) anywhere — your work, your pitches, your content.
            The outputs are yours.
          </li>
          <li>
            Quote a single framework name and the workbook in your own
            writing, with attribution to Story / Sells
          </li>
        </ul>

        <p>
          <strong>You cannot:</strong>
        </p>
        <ul>
          <li>Share the workbook file with others</li>
          <li>
            Resell, redistribute, or republish the workbook in whole or
            in part
          </li>
          <li>
            Upload it to file-sharing services, course platforms, or any
            other public location
          </li>
          <li>
            Strip out or alter the workbook&apos;s branding and resell it
            as your own
          </li>
          <li>Use it to train any machine-learning model</li>
          <li>Use the workbook contents to build a competing product</li>
        </ul>

        <p>
          If you want to teach the frameworks in a class, run a workshop
          based on them, or use the workbook commercially beyond personal
          work, write to <strong>storythatsellsforyou@gmail.com</strong>{" "}
          and we&apos;ll talk about a license.
        </p>

        <h2>4. Payment</h2>
        <ul>
          <li>
            All prices are in Indian Rupees (₹) and include applicable
            taxes
          </li>
          <li>
            Payments are processed by Razorpay; we do not handle your
            card or banking data
          </li>
          <li>
            Once payment clears, the workbook is delivered immediately
            via download link and email
          </li>
        </ul>

        <h2>5. Refunds</h2>
        <p>
          Detailed refund terms are on the{" "}
          <Link href="/refund">refund page</Link>. Short version: refunds
          are available only for delivery failures or broken files. Once
          the file is downloaded, the sale is final.
        </p>

        <h2>6. Updates</h2>
        <p>
          We will add frameworks to the workbook over time. Buyers who
          purchase at the founding price (₹499) receive every future
          update at no extra cost, by email.
        </p>
        <p>We may at any time:</p>
        <ul>
          <li>Raise the price for new buyers</li>
          <li>Improve, edit, or restructure existing frameworks</li>
          <li>
            Remove a framework if we discover an error or attribution
            problem
          </li>
        </ul>
        <p>
          We will not retroactively remove frameworks from copies you
          already have downloaded.
        </p>

        <h2>7. Intellectual property</h2>
        <p>
          The workbook, its design, the frameworks as compiled and
          arranged, and the Story / Sells brand are owned by us.
          Individual frameworks reference work by Robert McKee, Kindra
          Hall, Matthew Dicks, and 23 other authors; their underlying
          ideas are credited to them. You&apos;re paying for the
          curation, the worksheet design, and the YOUR OUTPUT structure
          — not for the underlying public domain or third-party
          intellectual property.
        </p>

        <h2>8. No guarantees of outcome</h2>
        <p>
          We believe storytelling is a learnable skill and that this
          workbook is a good way to learn it. We cannot guarantee that
          filling it in will get you promoted, raise your funding round,
          or land your speech. Outcomes depend on you.
        </p>

        <h2>9. Site availability</h2>
        <p>
          We make reasonable efforts to keep the site online and the
          download link working. If you can&apos;t access your purchase
          due to a technical issue, email{" "}
          <strong>storythatsellsforyou@gmail.com</strong> and we&apos;ll
          resend the file.
        </p>

        <h2>10. Limitation of liability</h2>
        <p>
          To the maximum extent allowed by law, our liability to you for
          any claim related to the workbook is limited to the amount you
          paid (₹499). We are not liable for indirect or consequential
          damages.
        </p>

        <h2>11. Changes to these terms</h2>
        <p>
          If we update these terms, we&apos;ll change the &ldquo;Last
          updated&rdquo; date at the top. Continued use of the site
          after a change means you accept the new terms.
        </p>

        <h2>12. Jurisdiction</h2>
        <p>
          These terms are governed by the laws of India. Disputes are
          subject to the courts of Bengaluru, Karnataka.
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
