import { ImageResponse } from "next/og";

export const alt = "Maintain Mining: maintenance, ahead of failure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#131416",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "280px",
            height: "10px",
            background: "#FFB800",
            borderRadius: "2px",
          }}
        />
        <div
          style={{
            marginTop: "48px",
            fontSize: "88px",
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: 1.05,
          }}
        >
          Maintenance, ahead of failure.
        </div>
        <div
          style={{
            marginTop: "32px",
            fontSize: "34px",
            color: "rgba(255,255,255,0.72)",
          }}
        >
          Maintain Mining
        </div>
      </div>
    ),
    size,
  );
}
