import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/timlen-fitness",
  images: { unoptimized: true },
};

export default nextConfig;
