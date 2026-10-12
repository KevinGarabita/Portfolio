import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keeps `next dev` from writing AGENTS.md when it detects an AI coding agent.
  agentRules: false,
  // proxy.ts removes a trailing slash in the same redirect that adds the language, so
  // /projects/ reaches /en/projects in one hop. Without this, Next.js strips the slash
  // first with a redirect of its own and the visitor goes through two.
  skipTrailingSlashRedirect: true,
  images: {
    // AVIF first (lighter than WebP at the same quality), WebP for browsers without it.
    formats: ["image/avif", "image/webp"],
    // Candidate widths of every srcset: Next.js's defaults plus 480 and 1440, which fill
    // the gaps where the hero photo and the screenshots fell between two candidates and
    // downloaded one far too large. Every default width stays, even the ones no layout
    // needs (the largest source image is 1600 px wide): Google keeps the image URLs it
    // has crawled, and the optimizer answers a width that is not listed here with a 400,
    // which Search Console reports as "other 4xx". A browser picks the smallest candidate
    // that covers the drawn size, so the extra ones cost nothing to download.
    // See "Rendimiento y accesibilidad" in docs/decisions.md.
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 480],
  },
  experimental: {
    // The root layout lives under app/[lang], so unknown URLs need a 404 page of their own
    // (app/global-not-found.tsx). See docs/decisions.md for why Cache Components stays off.
    globalNotFound: true,
  },
};

export default nextConfig;
