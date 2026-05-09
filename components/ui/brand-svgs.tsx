/**
 * Inline brand-mark SVG components.
 *
 * No external CDN. Each renders as `currentColor` so it picks up
 * its parent's text color (we set white on a dark background).
 *
 * These are simplified, recognizable marks — not pixel-exact
 * brand-guideline reproductions. Used here for editorial purposes
 * only ("companies hiring storytellers").
 */

type LogoProps = {
  className?: string;
  height?: number;
  "aria-label"?: string;
};

/** Microsoft — 4-square mark + wordmark */
export function MicrosoftMark({ className, height = 28 }: LogoProps) {
  return (
    <svg
      role="img"
      aria-label="Microsoft"
      viewBox="0 0 200 32"
      height={height}
      fill="currentColor"
      className={className}
    >
      {/* Four squares */}
      <rect x="0" y="2" width="13" height="13" />
      <rect x="15" y="2" width="13" height="13" />
      <rect x="0" y="17" width="13" height="13" />
      <rect x="15" y="17" width="13" height="13" />
      {/* "Microsoft" wordmark */}
      <text
        x="36"
        y="23"
        fontFamily="Segoe UI, Arial, sans-serif"
        fontSize="20"
        fontWeight="600"
      >
        Microsoft
      </text>
    </svg>
  );
}

/** Amazon — wordmark with smile arrow underneath */
export function AmazonMark({ className, height = 28 }: LogoProps) {
  return (
    <svg
      role="img"
      aria-label="Amazon"
      viewBox="0 0 130 36"
      height={height}
      fill="currentColor"
      className={className}
    >
      <text
        x="0"
        y="22"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="-1"
      >
        amazon
      </text>
      {/* Smile arrow below "amazon" — curve from below 'a' to below 'n' */}
      <path
        d="M 6 28 Q 60 38 116 28 L 110 30 L 113 26 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Google — wordmark, single-color */
export function GoogleMark({ className, height = 28 }: LogoProps) {
  return (
    <svg
      role="img"
      aria-label="Google"
      viewBox="0 0 110 32"
      height={height}
      fill="currentColor"
      className={className}
    >
      <text
        x="0"
        y="24"
        fontFamily="Arial, sans-serif"
        fontSize="28"
        fontWeight="500"
        letterSpacing="-1"
      >
        Google
      </text>
    </svg>
  );
}

/** Nike — swoosh */
export function NikeMark({ className, height = 28 }: LogoProps) {
  return (
    <svg
      role="img"
      aria-label="Nike"
      viewBox="0 0 100 36"
      height={height}
      fill="currentColor"
      className={className}
    >
      <path
        d="
          M 5 25
          Q 25 8 65 18
          L 95 8
          L 65 28
          Q 35 33 15 27
          Z
        "
      />
    </svg>
  );
}

/** IBM — striped wordmark (8 horizontal stripes carved into letters) */
export function IbmMark({ className, height = 28 }: LogoProps) {
  // Render with 8 horizontal stripes; mask the letterforms by using
  // rectangles that approximate I, B, M shapes.
  return (
    <svg
      role="img"
      aria-label="IBM"
      viewBox="0 0 90 36"
      height={height}
      fill="currentColor"
      className={className}
    >
      <defs>
        <mask id="ibm-stripes">
          {/* White areas show through */}
          {Array.from({ length: 8 }).map((_, i) => (
            <rect
              key={i}
              x="0"
              y={i * 4.5}
              width="90"
              height="3"
              fill="white"
            />
          ))}
        </mask>
      </defs>
      {/* I */}
      <rect x="2" y="0" width="14" height="36" mask="url(#ibm-stripes)" />
      {/* B */}
      <rect x="22" y="0" width="14" height="36" mask="url(#ibm-stripes)" />
      <rect x="22" y="6" width="20" height="24" mask="url(#ibm-stripes)" />
      {/* M (rendered as block) */}
      <rect x="50" y="0" width="14" height="36" mask="url(#ibm-stripes)" />
      <rect x="64" y="0" width="14" height="36" mask="url(#ibm-stripes)" />
      <rect x="50" y="6" width="28" height="6" mask="url(#ibm-stripes)" />
    </svg>
  );
}

/** Notion — N letter in a rounded square */
export function NotionMark({ className, height = 28 }: LogoProps) {
  return (
    <svg
      role="img"
      aria-label="Notion"
      viewBox="0 0 110 32"
      height={height}
      fill="currentColor"
      className={className}
    >
      {/* Rounded square logomark */}
      <rect x="0" y="4" width="24" height="24" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M 6 22 V 10 L 18 22 V 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
      />
      {/* "Notion" wordmark */}
      <text
        x="32"
        y="22"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize="20"
        fontWeight="600"
        letterSpacing="-0.5"
      >
        Notion
      </text>
    </svg>
  );
}
