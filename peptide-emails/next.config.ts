import type { NextConfig } from "next";

// Multi-Zones: the blog is served under peptideemails.com/blog via a rewrite on the
// main site. basePath makes every page AND asset live under /blog (incl. /blog/_next),
// so the single rewrite `/blog/:path*` catches everything.
const nextConfig: NextConfig = {
  basePath: "/blog",
};

export default nextConfig;
