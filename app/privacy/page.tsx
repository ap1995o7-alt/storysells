import type { Metadata } from "next";
import { LegalShell } from "@/components/sections/legal-shell";
import { Prose } from "@/components/sections/prose";

export const metadata: Metadata = {
  title: "Privacy Policy — Story Sells",
  description:
    "How Story Sells collects, uses, and protects your data. Minimum data, no third-party tracking.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" lastUpdated="2026-05-09">
      <Prose>
        <blockquote>
          <p>
            <strong>The short version</strong>
          </p>
          <p>
            When you buy the workbook, we collect your email and the
            minimum payment information Razorpay needs to process the
            ₹499. We don&apos;t sell your data. We don&apos;t run ads on
            the site. If you email us, we keep that email so we can
            reply. That&apos;s it. Full details below.
          </p>
        </blockquote>

        <hr />

        <h2>1. Who we are</h2>
        <p>
          This site (thatstorysells.in) is operated by Story / Sells, an
          independent digital product based in Bengaluru, India. For any
          privacy-related question, write to{" "}
          <strong>storythatsellsforyou@gmail.com</strong>.
        </p>

        <h2>2. What we collect</h2>
        <p>We collect the smallest amount of personal data we can.</p>

        <p>
          <strong>When you buy the workbook:</strong>
        </p>
        <ul>
          <li>Your name (entered at checkout)</li>
          <li>Your email address (so we can send you the file)</li>
          <li>
            Payment details — handled entirely by Razorpay, our payment
            processor. We do not see, store, or have access to your card
            number, UPI handle, or banking information.
          </li>
        </ul>

        <p>
          <strong>When you email us:</strong>
        </p>
        <ul>
          <li>The email address you wrote from</li>
          <li>Whatever you put in the message</li>
        </ul>

        <p>
          <strong>When you visit the site:</strong>
        </p>
        <ul>
          <li>
            Standard server logs (IP address, browser type, pages visited,
            timestamps) for security and basic analytics
          </li>
          <li>
            <strong>Google Analytics 4 (GA4)</strong> — measures aggregate
            traffic, page views, and basic device/region information. GA4
            sets first-party cookies (typically <em>_ga</em> and{" "}
            <em>_ga_*</em>) and assigns each browser an anonymous client
            ID. We do not use GA4&apos;s advertising features (no Google
            Ads remarketing, no Audiences sync). IP addresses are
            truncated by Google before storage.
          </li>
          <li>
            We do <strong>not</strong> use Facebook Pixel, TikTok Pixel,
            LinkedIn Insight Tag, or any other advertising / retargeting
            trackers.
          </li>
        </ul>

        <p>
          We do not collect: phone numbers (unless you give one to us),
          location data beyond country-level, social-media profiles, or
          anything you don&apos;t actively give us.
        </p>

        <h2>3. Why we collect it</h2>
        <ul>
          <li>To deliver the workbook you paid for</li>
          <li>To answer your email if you write to us</li>
          <li>To process refunds when they qualify (see Refund Policy)</li>
          <li>To improve the site (anonymized analytics only)</li>
          <li>To comply with Indian tax law (purchase records)</li>
        </ul>

        <h2>4. How long we keep it</h2>
        <ul>
          <li>
            <strong>Purchase records:</strong> 7 years (Indian tax law
            requirement)
          </li>
          <li>
            <strong>Email correspondence:</strong> Until you ask us to
            delete it, or 3 years from last reply, whichever comes first
          </li>
          <li>
            <strong>Server logs:</strong> 90 days
          </li>
          <li>
            <strong>Analytics data:</strong> Anonymized at collection;
            aggregated reports kept indefinitely
          </li>
        </ul>

        <h2>5. Who we share it with</h2>
        <p>Four parties, only when necessary:</p>
        <ul>
          <li>
            <strong>Razorpay</strong> — payment processing. Their privacy
            policy applies to payment data:{" "}
            <a
              href="https://razorpay.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              razorpay.com/privacy
            </a>
          </li>
          <li>
            <strong>Google (via GA4)</strong> — anonymous traffic
            analytics only. Google&apos;s privacy policy applies to that
            data:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/privacy
            </a>
          </li>
          <li>
            <strong>Our email service provider</strong> — to send you the
            workbook download link
          </li>
          <li>
            <strong>Indian tax authorities</strong> — if legally required
          </li>
        </ul>
        <p>
          We do not sell your data. We do not run advertising on this
          site. We do not use your data to train AI models. We do not
          enable Google&apos;s advertising features within GA4
          (remarketing, Audiences, or Google Ads linking).
        </p>

        <h2>6. Your rights</h2>
        <p>
          Under Indian data protection law (Digital Personal Data
          Protection Act 2023) and similar regulations elsewhere, you
          have the right to:
        </p>
        <ul>
          <li>Ask us what data we hold about you</li>
          <li>Ask us to correct it</li>
          <li>
            Ask us to delete it (we will, except where tax law requires
            us to keep purchase records)
          </li>
          <li>Ask us to stop emailing you</li>
          <li>Withdraw your consent at any time</li>
        </ul>
        <p>
          Email <strong>storythatsellsforyou@gmail.com</strong> with your
          request. We respond within 7 working days.
        </p>

        <h2>7. Cookies</h2>
        <p>This site sets a small number of cookies:</p>
        <ul>
          <li>
            A session cookie to remember your purchase progress at
            checkout (deleted when you close the browser)
          </li>
          <li>
            <strong>Google Analytics first-party cookies</strong> (
            <em>_ga</em>, <em>_ga_TJ53W8VQ2P</em>) — assign your browser
            an anonymous client ID so we can count unique visits and
            measure aggregate behavior. These cookies expire after about
            two years.
          </li>
        </ul>
        <p>
          We do not use advertising cookies, retargeting pixels, or
          cross-site tracking.
        </p>

        <h2>8. Children</h2>
        <p>
          This product is not intended for users under 18. We do not
          knowingly collect data from children. If you believe a child
          has submitted information to us, email{" "}
          <strong>storythatsellsforyou@gmail.com</strong> and we will
          delete it.
        </p>

        <h2>9. Security</h2>
        <p>
          Payment data is encrypted in transit by Razorpay (PCI-DSS
          compliant). Email and purchase records are stored on encrypted
          infrastructure. No system is perfect, but we keep the data we
          hold to a minimum precisely because the safest data is the
          data we never collected.
        </p>

        <h2>10. Changes to this policy</h2>
        <p>
          If we change anything material, we will update the &ldquo;Last
          updated&rdquo; date at the top of this page and email anyone
          who has bought the workbook in the last 12 months.
        </p>

        <h2>11. Jurisdiction</h2>
        <p>
          This policy is governed by the laws of India. Disputes are
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
