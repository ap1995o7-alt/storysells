import { NextRequest, NextResponse } from "next/server";

const META_API_VERSION = "v22.0";
const PRICE_INR = 499.0;
const CURRENCY = "INR";

type IncomingEvent = {
  event_name: "Purchase" | "PageView" | "InitiateCheckout";
  event_id: string;
  event_source_url: string;
  fbp?: string | null;
  fbc?: string | null;
};

export async function POST(req: NextRequest) {
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  const pixelId = process.env.META_PIXEL_ID;
  const testEventCode = process.env.META_CAPI_TEST_EVENT_CODE;

  if (!token || !pixelId) {
    console.error("Meta CAPI: missing META_CAPI_ACCESS_TOKEN or META_PIXEL_ID");
    return NextResponse.json({ error: "CAPI not configured" }, { status: 500 });
  }

  let body: IncomingEvent;
  try {
    body = (await req.json()) as IncomingEvent;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.event_name || !body.event_id || !body.event_source_url) {
    return NextResponse.json(
      { error: "event_name, event_id, event_source_url required" },
      { status: 400 },
    );
  }

  // Meta's spec: client_ip_address and client_user_agent are sent in PLAIN TEXT,
  // not hashed. Hashing them breaks Meta's match algorithm and would silently
  // tank attribution quality.
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    undefined;
  const userAgent = req.headers.get("user-agent") || undefined;

  const event: Record<string, unknown> = {
    event_name: body.event_name,
    event_time: Math.floor(Date.now() / 1000),
    event_id: body.event_id,
    event_source_url: body.event_source_url,
    action_source: "website",
    user_data: {
      client_ip_address: ip,
      client_user_agent: userAgent,
      fbp: body.fbp ?? undefined,
      fbc: body.fbc ?? undefined,
    },
  };

  if (body.event_name === "Purchase" || body.event_name === "InitiateCheckout") {
    event.custom_data = {
      value: PRICE_INR,
      currency: CURRENCY,
    };
  }

  const payload: Record<string, unknown> = { data: [event] };
  if (testEventCode) {
    payload.test_event_code = testEventCode;
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/${META_API_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(token)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );

    const data = await res.json();
    if (!res.ok) {
      console.error("Meta CAPI rejected event", res.status, data);
      return NextResponse.json(
        { error: "CAPI rejected", status: res.status, details: data },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, meta: data });
  } catch (err) {
    console.error("Meta CAPI fetch failed", err);
    return NextResponse.json({ error: "CAPI fetch failed" }, { status: 502 });
  }
}
