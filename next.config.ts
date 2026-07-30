import type { NextConfig } from "next";

// R2 public host for next/image (safe if the env var is unset or malformed)
const r2PublicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;
let r2Hostname: string | null = null;
try {
  r2Hostname = r2PublicUrl ? new URL(r2PublicUrl).hostname : null;
} catch {
  console.warn("Invalid NEXT_PUBLIC_R2_PUBLIC_URL — R2 host not whitelisted");
}

const nextConfig: NextConfig = {
  serverExternalPackages: ["mariadb", "@prisma/adapter-mariadb"],

  // Quiet the dev server terminal — disables the "GET /path 200 in Xms"
  // request lines and the "└─ ƒ actionName(...)" server-function lines.
  logging: {
    incomingRequests: false,
    serverFunctions: false,
  },

  images: {
    remotePatterns: [
      ...(r2Hostname
        ? [
            {
              protocol: "https" as const,
              hostname: r2Hostname,
              pathname: "/**",
            },
          ]
        : []),
      {
        protocol: "https" as const,
        hostname: "*.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;