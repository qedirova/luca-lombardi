import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "www.instyle.com" },
      { protocol: "https", hostname: "cdn2.emporium.az" },
      { protocol: "https", hostname: "ciszere.com" },
      { protocol: "https", hostname: "www.lulus.com" },
      { protocol: "https", hostname: "i.pinimg.com" },
    ],
  },
};

export default nextConfig;
