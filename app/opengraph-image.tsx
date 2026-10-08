import { ImageResponse } from "next/og";

export const alt = "Dhruv Sharma — Law | Legal Research | Litigation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0F2347",
          color: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 6, color: "#9DB8E8" }}>LAW · LITIGATION · LEGAL RESEARCH</div>
        <div style={{ fontSize: 128, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>Dhruv Sharma</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#B9C6DC", borderTop: "2px solid rgba(255,255,255,.35)", paddingTop: 28 }}>
          <span>B.A. LL.B. · Amity University</span>
          <span>New Delhi, India</span>
        </div>
      </div>
    ),
    size,
  );
}
