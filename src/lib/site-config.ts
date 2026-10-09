/** Accepts "https://example.com", "https://example.com/" or "example.com" and keeps only the origin. */
function parseSiteUrl(value: string, variableName: string): URL {
  const valueWithScheme = /^https?:\/\//i.test(value)
    ? value
    : `https://${value}`;

  try {
    return new URL(new URL(valueWithScheme).origin);
  } catch {
    throw new Error(
      `${variableName} must be a URL such as https://example.com (received "${value}")`,
    );
  }
}

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
  if (configuredUrl) return parseSiteUrl(configuredUrl, "NEXT_PUBLIC_SITE_URL");

  const vercelProductionHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProductionHost) {
    return parseSiteUrl(vercelProductionHost, "VERCEL_PROJECT_PRODUCTION_URL");
  }

  return new URL("http://localhost:3000");
}

export const siteUrl = resolveSiteUrl();
