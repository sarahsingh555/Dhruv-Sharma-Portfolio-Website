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
          background: "#F4F1EA",
          color: "#171717",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 6, color: "#1F4E8C" }}>LAW · LITIGATION · LEGAL RESEARCH</div>
        <div style={{ fontSize: 132, fontFamily: "Georgia, serif", lineHeight: 1 }}>Dhruv Sharma</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#66645F", borderTop: "2px solid #D8D4CC", paddingTop: 28 }}>
          <span>B.A. LL.B. · Amity University</span>
          <span>New Delhi, India</span>
        </div>
      </div>
    ),
    size,
  );
}
