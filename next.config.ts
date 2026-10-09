import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keeps `next dev` from writing AGENTS.md when it detects an AI coding agent.
  agentRules: false,
  experimental: {
    // The root layout lives under app/[lang], so unknown URLs need a 404 page of their own
    // (app/global-not-found.tsx). See docs/decisions.md for why Cache Components stays off.
    globalNotFound: true,
  },
};

export default nextConfig;
