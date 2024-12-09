import type { NextConfig } from "next";
import { withNextVideo } from "next-video/process";
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
module.exports = withNextVideo(nextConfig);
