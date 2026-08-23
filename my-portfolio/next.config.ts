import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disables image optimization errors on local static files
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

