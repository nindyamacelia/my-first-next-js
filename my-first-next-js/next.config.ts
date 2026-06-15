import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "food.detik.com",
        pathname:"/**"
      }
    ]
  }
};

export default nextConfig;
