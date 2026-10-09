import type { MetadataRoute } from "next";

import { toAbsoluteUrl } from "@/lib/metadata";

/**
 * /robots.txt: everything may be crawled. Preview deployments need no rule here because
 * Vercel already answers them with "X-Robots-Tag: noindex".
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: toAbsoluteUrl("/sitemap.xml"),
  };
}
