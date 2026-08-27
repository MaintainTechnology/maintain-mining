import type { MetadataRoute } from "next";
import { isProduction, siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Preview deployments get a blanket disallow: every branch push produces a
  // public *.vercel.app URL, and without this they compete with the real site
  // in search results.
  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
