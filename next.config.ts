import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    // HANDOFF.md §13: "/seminary 308 → /ministries/seminary (header link
    // kept)" — the real page lives at /ministries/seminary alongside the
    // other ministry detail pages; /seminary is kept only as a short,
    // permanent alias.
    return [
      {
        source: "/:locale(en|ur)/seminary",
        destination: "/:locale/ministries/seminary",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
