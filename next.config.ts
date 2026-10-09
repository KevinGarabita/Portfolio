import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Keeps `next dev` from writing AGENTS.md when it detects an AI coding agent.
  agentRules: false,
};

export default nextConfig;
