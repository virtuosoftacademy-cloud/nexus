import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   experimental: {
    globalNotFound: true,
  },  
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
