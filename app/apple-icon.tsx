import { ImageResponse } from "next/og";

/**
 * Apple touch icon — used when the user pins the site to iOS Home Screen.
 * Apple expects a square (180×180) image without rounded corners; iOS
 * masks the rounded shape itself.
 */

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1A1918",
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
          <span
            style={{
              fontSize: 130,
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
          <span
            style={{
              width: 20,
              height: 20,
              background: "#E24B4A",
              borderRadius: "50%",
              marginLeft: 2,
              marginBottom: 10,
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
