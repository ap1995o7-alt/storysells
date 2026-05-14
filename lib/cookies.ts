/**
 * Read a cookie value WITHOUT URL-decoding it.
 *
 * Meta requires _fbp and _fbc to be preserved character-for-character
 * when forwarded to CAPI — `decodeURIComponent` would normalize any
 * `%XX` sequences and silently mutate the value Meta uses for matching.
 *
 * Use this for any cookie that gets forwarded to a third party that
 * cares about exact byte equality (Meta, Google, etc.).
 */
export function getCookieRaw(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp("(?:^|;\\s*)" + name + "=([^;]+)"),
  );
  return match ? match[1] : null;
}
