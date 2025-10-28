import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    // Apply noindex headers to ALL pages on this old domain
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'x-robots-tag',
            value: 'noindex, nofollow, noarchive, nosnippet',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
