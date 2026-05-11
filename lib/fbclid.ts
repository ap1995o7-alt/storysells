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
 * Doesn't overwrite an existing `_fbc` (per Meta's "preserve cookie
 * value format" guidance).
 */

const FBC_COOKIE = "_fbc";
const SUBDOMAIN_INDEX = 1; // thatstorysells.in — no subdomain, root domain = 1
const COOKIE_LIFETIME_DAYS = 90;

function hasFbcCookie(): boolean {
  if (typeof document === "undefined") return false;
  return /(^|;\s*)_fbc=/.test(document.cookie);
}

export function captureFbclid(): void {
  if (typeof window === "undefined") return;
  if (hasFbcCookie()) return;

  const params = new URLSearchParams(window.location.search);
  const fbclid = params.get("fbclid");
  if (!fbclid) return;

  const fbc = `fb.${SUBDOMAIN_INDEX}.${Date.now()}.${fbclid}`;
  const maxAge = COOKIE_LIFETIME_DAYS * 24 * 60 * 60;
  document.cookie = `${FBC_COOKIE}=${fbc}; max-age=${maxAge}; path=/; SameSite=Lax`;
}
