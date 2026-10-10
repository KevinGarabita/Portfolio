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
    // Candidate widths of every srcset. The largest source image is 1600 px wide, so the
    // default 2048 and 3840 only re-sent the original. 480 and 1440 fill the gaps where
    // the hero photo and the screenshots fell between two candidates and downloaded one
    // far too large. See "Rendimiento y accesibilidad" in docs/decisions.md.
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [256, 384, 480],
  },
  experimental: {
    // The root layout lives under app/[lang], so unknown URLs need a 404 page of their own
    // (app/global-not-found.tsx). See docs/decisions.md for why Cache Components stays off.
    globalNotFound: true,
  },
};

export default nextConfig;
