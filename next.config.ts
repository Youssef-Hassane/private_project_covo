import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignoring TypeScript errors during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignoring ESLint errors during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
