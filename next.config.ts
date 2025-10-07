import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [], // Explicitly define allowed image domains
  },
  // Enable compression
  compress: true,
  // Disable X-Powered-By header
  poweredByHeader: false,
  // Strict mode for better security
  reactStrictMode: true,
  // Body size limit for API routes (10MB)
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
};

export default nextConfig;
