import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignoring TypeScript errors during build
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'loremflickr.com'],
  },
  eslint: {
    // Ignoring ESLint errors during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
