import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Ensure Turbopack uses the `code` folder as the project root
    root: __dirname,
  },
};

export default nextConfig;
