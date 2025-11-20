import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  redirects: async () => [
    {
      source: "/:path*",
      has: [{ type: "host", value: "www.crisyteban.love" }],
      destination: "https://crisyteban.love/:path*",
      permanent: true,
    }
  ]
};

export default nextConfig;
