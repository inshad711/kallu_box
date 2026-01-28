import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**", // Wildcard for all hostnames
      },
      {
        protocol: "https",
        hostname: "**", // Wildcard for all hostnames
      },
    ],
  },
};

export default nextConfig;
