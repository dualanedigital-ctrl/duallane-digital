import path from "node:path";
import type { NextConfig } from "next";

// Scoped to exactly what this app loads: self-hosted fonts/scripts/styles,
// Unsplash portfolio images, and the Google Maps iframe embedded on demo
// contact sections. Verified locally against Earth/WebGL, the lazy-loaded
// portfolio modal, and the Maps iframe with zero console violations.
const SECURITY_HEADERS = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com; font-src 'self' data:; frame-src https://www.google.com; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none';",
  },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // netlify.toml's [[headers]] only reliably reach static assets under
  // @netlify/plugin-nextjs — every page here is served through the Next.js
  // server function, so the headers have to be set here to actually land on
  // production responses (verified: they were silently dropped via
  // netlify.toml alone).
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
