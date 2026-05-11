import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import { Resend } from "resend";

const WORKBOOK_PDF_URL =
  "https://bantmwbrzszcyn6a.public.blob.vercel-storage.com/story_sells_complete_v2.pdf";

const FROM_ADDRESS = "Story Sells <onboarding@resend.dev>";
const REPLY_TO = "storythatsellsforyou@gmail.com";
const SUBJECT = "Your Story Sells workbook is ready 📖";

/**
 * Razorpay webhook listener.
 *
 * - Verifies the HMAC-SHA256 signature against RAZORPAY_WEBHOOK_SECRET
 *   using timing-safe comparison (raw request body, not the parsed JSON,
 *   because any whitespace change would invalidate the digest).
 * - Acts on `payment.captured` only; every other event type is acked
 *   with 200 so Razorpay stops retrying.
 * - Emails the buyer their download link via Resend.
 * - Returns 200 to Razorpay even if the email send fails — Razorpay
 *   retries non-200 responses, and we don't want retry storms on transient
 *   Resend errors. Failures are logged for manual recovery.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const resendKey = process.env.RESEND_API_KEY;

  if (!secret) {
    console.error("razorpay-webhook: RAZORPAY_WEBHOOK_SECRET not set");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const signature = req.headers.get("x-razorpay-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 401 });
  }

  // Raw body for HMAC verification — DO NOT use req.json() before this,
  // it normalizes whitespace and breaks the digest.
  const rawBody = await req.text();

  const expected = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

  const expectedBuf = Buffer.from(expected, "hex");
  const receivedBuf = Buffer.from(signature, "hex");

  if (
    expectedBuf.length !== receivedBuf.length ||
    !crypto.timingSafeEqual(expectedBuf, receivedBuf)
  ) {
    console.warn("razorpay-webhook: signature mismatch");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let event: RazorpayWebhookPayload;
  try {
    event = JSON.parse(rawBody) as RazorpayWebhookPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Only act on payment.captured. Ack everything else so Razorpay
  // doesn't retry events we don't care about.
  if (event.event !== "payment.captured") {
    return NextResponse.json({ ok: true, ignored: event.event });
  }

  const payment = event.payload?.payment?.entity;
  if (!payment) {
    console.error("razorpay-webhook: payment.entity missing", event);
    return NextResponse.json({ ok: true, error: "payment entity missing" });
  }

  const email = payment.email;
  if (!email) {
    console.error("razorpay-webhook: no email on payment", payment.id);
    return NextResponse.json({ ok: true, error: "no buyer email" });
  }

  // Best-effort name extraction. Razorpay Payment Pages put custom
  // form fields under `notes`; older flows sometimes use `customer.name`.
  const name =
    payment.notes?.name ||
    payment.notes?.Name ||
    payment.customer?.name ||
    null;

  if (!resendKey) {
    console.error("razorpay-webhook: RESEND_API_KEY not set; cannot deliver");
    return NextResponse.json({ ok: true, error: "resend not configured" });
  }

  try {
    const resend = new Resend(resendKey);
    const result = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [email],
      replyTo: REPLY_TO,
      subject: SUBJECT,
      html: buildEmailHtml(name),
    });

    if (result.error) {
      console.error("razorpay-webhook: resend error", payment.id, result.error);
    } else {
      console.log("razorpay-webhook: emailed", email, "for", payment.id);
    }
  } catch (err) {
    console.error("razorpay-webhook: resend threw", payment.id, err);
  }

  return NextResponse.json({ ok: true });
}

function buildEmailHtml(name: string | null): string {
  const greeting = name ? `Hi ${escapeHtml(name)},` : "Hi,";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Story Sells workbook is ready</title>
</head>
<body style="margin:0;padding:0;background:#F5F2EB;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#0F0E0D;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F5F2EB;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#FFFFFF;border-radius:16px;">
          <tr>
            <td style="padding:48px 40px;">
              <p style="margin:0 0 32px;font-family:'JetBrains Mono',Consolas,monospace;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#E24B4A;">Story / Sells &nbsp;·&nbsp; Order received / ₹499</p>
              <h1 style="margin:0 0 20px;font-size:40px;font-weight:800;line-height:1.05;letter-spacing:-0.02em;color:#0F0E0D;">You're in.</h1>
              <p style="margin:0 0 32px;font-size:17px;line-height:1.6;color:#3F3F46;">${greeting}<br><br>Your payment is confirmed. Your workbook — 76 frameworks, 191 pages — is ready below.</p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" bgcolor="#E24B4A" style="background:#E24B4A;border-radius:12px;">
                    <a href="${WORKBOOK_PDF_URL}" target="_blank" rel="noopener" style="display:inline-block;padding:18px 36px;color:#FFFFFF;text-decoration:none;font-size:16px;font-weight:700;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">Download Workbook (PDF)</a>
                  </td>
                </tr>
              </table>
              <p style="margin:32px 0 0;font-size:14px;line-height:1.6;color:#71717A;">Open in <strong>Adobe Acrobat Reader</strong> on desktop, or the Adobe Acrobat app on mobile, so your answers save. Browsers and default PDF viewers won't preserve form data.</p>
              <div style="height:1px;background:#E4E4E7;margin:36px 0;"></div>
              <p style="margin:0;font-size:14px;line-height:1.6;color:#71717A;">Just reply to this email if you need help.</p>
            </td>
          </tr>
        </table>
        <p style="margin:24px 0 0;font-size:12px;color:#A1A1AA;">Story / Sells &nbsp;·&nbsp; Bengaluru, India</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type RazorpayWebhookPayload = {
  event: string;
  payload?: {
    payment?: {
      entity?: {
        id: string;
        email?: string;
        contact?: string;
        notes?: Record<string, string>;
        customer?: { name?: string };
      };
    };
  };
};
