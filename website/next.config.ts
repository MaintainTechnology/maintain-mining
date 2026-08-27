import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The design system lives one level up (design-system/tokens.css is imported
  // by app/globals.css); widen the Turbopack root to the repo root so the
  // single source of truth stays importable.
  turbopack: {
    root: path.join(__dirname, ".."),
  },
  // Stock photography placeholders (DESIGN.md §10: to be replaced with real
  // site photography). Every photo renders through the .photo-graphite
  // treatment so imagery stays desaturated charcoal per the brand.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
