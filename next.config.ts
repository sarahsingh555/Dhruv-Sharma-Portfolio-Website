import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/notes", destination: "/thoughts", permanent: true },
      { source: "/notes/:slug", destination: "/thoughts/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
