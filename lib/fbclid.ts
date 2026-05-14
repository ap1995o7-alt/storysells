/**
 * Captures the `fbclid` URL parameter (set by Meta on ad clicks) and
 * persists it as the `_fbc` cookie per Meta's required format:
 *
 *     fb.{subdomain_index}.{creation_time}.{fbclid}
 *
 * The Meta Pixel script does this automatically when it loads, but if
 * the script is delayed or blocked, the first server-side event misses
 * the click ID. Running this synchronously on page mount guarantees
 * the cookie exists before any CAPI fetch reads it.
 *
 * IMPORTANT: We extract the raw fbclid from the URL string with a regex
 * rather than `URLSearchParams.get()` because the latter URL-decodes
 * the value. Meta requires the fbclid be preserved character-for-character
 * (a `%2F` in the URL must stay `%2F`, not be decoded to `/`). Same rule
 * applies when reading the resulting `_fbc` cookie back — see lib/cookies.ts.
 */

import { getCookieRaw } from "./cookies";

const FBC_COOKIE = "_fbc";
const SUBDOMAIN_INDEX = 1; // thatstorysells.in — no subdomain, root domain = 1
const COOKIE_LIFETIME_DAYS = 90;

/** Extract fbclid from the raw query string without decoding. */
function getRawFbclid(): string | null {
  if (typeof window === "undefined") return null;
  const match = window.location.search.match(/[?&]fbclid=([^&#]*)/);
  return match ? match[1] : null;
}

export function captureFbclid(): void {
  if (typeof window === "undefined") return;
  if (getCookieRaw(FBC_COOKIE)) return; // Don't overwrite existing _fbc.

  const fbclid = getRawFbclid();
  if (!fbclid) return;

  const fbc = `fb.${SUBDOMAIN_INDEX}.${Date.now()}.${fbclid}`;
  const maxAge = COOKIE_LIFETIME_DAYS * 24 * 60 * 60;
  // Write the value as-is — do NOT wrap in encodeURIComponent; Meta needs
  // the cookie value to match the format above byte-for-byte.
  document.cookie = `${FBC_COOKIE}=${fbc}; max-age=${maxAge}; path=/; SameSite=Lax`;
}
