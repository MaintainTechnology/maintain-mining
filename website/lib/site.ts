// Absolute site URL, resolved for wherever the build is running.
//
// metadataBase, the sitemap and robots.txt all need a real origin. Hard-coding
// a localhost fallback is fine locally but ships broken absolute URLs to
// production and to every preview deployment, so this reads Vercel's own
// environment first.
//
// Resolution order:
//   1. NEXT_PUBLIC_SITE_URL   — the canonical custom domain, once one exists.
//      Always wins, so a custom domain never gets overridden by a *.vercel.app.
//   2. Production on Vercel   — VERCEL_PROJECT_PRODUCTION_URL, the project's
//      stable production hostname (not the per-deployment one).
//   3. Preview on Vercel      — VERCEL_URL, unique to this deployment, so a
//      preview's canonicals and sitemap point at that preview.
//   4. Local development.
//
// All four are read on the server (metadata, sitemap, robots are server-only),
// so no secret or deployment detail reaches the client bundle.
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  if (process.env.VERCEL_ENV === "production" && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

/** True only on a real production deployment. Preview builds must not be indexed. */
export const isProduction = process.env.VERCEL_ENV === "production";
