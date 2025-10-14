// next.config.js or next.config.mjs (if using .mjs)

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow external images from specific domains
  images: {
    domains: ["res.cloudinary.com"], // Add more domains if needed
  },

  // Rewrites API requests to backend
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:4013/api/:path*",
      },
    ];
  },
};

export default nextConfig;
