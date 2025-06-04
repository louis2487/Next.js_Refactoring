import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },  
}

export default nextConfig;
