import type { MetadataRoute } from "next";

import { profile } from "@/content/profile";
import { defaultLocale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import { brandColors } from "@/lib/brand-colors";

/**
 * /manifest.webmanifest: the name, icons and colours a phone uses when the site is added
 * to the home screen, and that the browser uses to tint its bars. In English, the
 * default language (proxy.ts); start_url is the English home page, which answers 200.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.displayName} | ${localize(profile.role, defaultLocale)}`,
    short_name: profile.displayName,
    description: localize(profile.role, defaultLocale),
    start_url: `/${defaultLocale}`,
    display: "browser",
    background_color: brandColors.blackDeep,
    theme_color: brandColors.blackDeep,
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  };
}
