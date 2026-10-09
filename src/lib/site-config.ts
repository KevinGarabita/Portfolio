/**
 * Base URL of the site, used for metadataBase, canonical URLs, the sitemap and structured data.
 *
 * Order of preference:
 * 1. NEXT_PUBLIC_SITE_URL, set in Vercel once the final domain is connected.
 * 2. The production domain Vercel exposes (VERCEL_PROJECT_PRODUCTION_URL, without a scheme).
 * 3. The local development server.
 */
function resolveSiteUrl(): URL {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configuredUrl) return new URL(configuredUrl);

  const vercelProductionHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProductionHost) return new URL(`https://${vercelProductionHost}`);

  return new URL("http://localhost:3000");
}

export const siteUrl = resolveSiteUrl();
