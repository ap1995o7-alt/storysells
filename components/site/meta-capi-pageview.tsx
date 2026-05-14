"use client";

import { useEffect } from "react";
import { trackPageView } from "@/lib/analytics";
import { captureFbclid } from "@/lib/fbclid";
import { getCookieRaw } from "@/lib/cookies";

/**
 * Fires a deduplicated PageView on every page load — browser Pixel + CAPI
 * with a shared `event_id`.
 *
 * The Pixel base code in layout.tsx no longer auto-fires PageView; we fire
 * it here so we can attach an eventID that matches the CAPI POST.
 *
 * Polls briefly for `fbq` because the Pixel script loads `afterInteractive`
 * and may not be ready at first mount.
 */
export function MetaCapiPageView() {
  useEffect(() => {
    // Promote ?fbclid=... to the _fbc cookie before any event reads it.
    captureFbclid();

    let cancelled = false;

    const send = (eventId: string) => {
      fetch("/api/meta-capi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event_name: "PageView",
          event_id: eventId,
          event_source_url: window.location.href,
          fbp: getCookieRaw("_fbp"),
          fbc: getCookieRaw("_fbc"),
        }),
        keepalive: true,
      }).catch(() => {
        // Best-effort.
      });
    };

    const attempt = (retries: number) => {
      if (cancelled) return;
      const eventId = crypto.randomUUID();
      if (typeof window.fbq === "function") {
        trackPageView(eventId);
        send(eventId);
        return;
      }
      if (retries <= 0) {
        // Pixel never loaded (blocker / network). Still send CAPI so we get
        // server-side coverage; no dedup possible in this case.
        send(eventId);
        return;
      }
      setTimeout(() => attempt(retries - 1), 200);
    };

    attempt(15); // up to ~3 seconds

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
