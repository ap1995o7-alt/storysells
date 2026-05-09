import { ImageResponse } from "next/og";

/**
 * Story Sells favicon — generated at build time.
 *
 * Black circle, white "S", red dot at lower-right (matching the
 * brand mark). Rendered via Satori (next/og); no image file needed.
 *
 * To override with a static PNG: delete this file and place
 * `app/icon.png` (or `app/icon.svg`) in the same directory.
 */

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1A1918",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            position: "relative",
          }}
        >
          {/* The S */}
          <span
            style={{
              fontSize: 360,
              fontWeight: 800,
              color: "#FFFFFF",
              fontFamily: "sans-serif",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              display: "flex",
            }}
          >
            S
          </span>
          {/* Red dot */}
          <span
            style={{
              width: 56,
              height: 56,
              background: "#E24B4A",
              borderRadius: "50%",
              marginLeft: 6,
              marginBottom: 28,
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
