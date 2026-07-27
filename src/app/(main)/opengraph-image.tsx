import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logoData = readFileSync(join(process.cwd(), "public/logo-mark.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #050507 0%, #0f0f1a 60%, #1a1230 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: "50%",
              overflow: "hidden",
              backgroundImage: `url(${logoBase64})`,
              backgroundSize: "140%",
              backgroundPosition: "center",
            }}
          />
          <div style={{ display: "flex", fontSize: 30, fontWeight: 600 }}>
            {siteConfig.name}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 58, fontWeight: 700, maxWidth: 980, lineHeight: 1.15 }}>
          Des sites web qui convertissent vos visiteurs en clients
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#9ca3af", marginTop: 28 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
