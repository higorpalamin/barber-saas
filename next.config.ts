import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
    ],
  },
  allowedDevOrigins: ["192.168.15.6"],
}

export default nextConfig
