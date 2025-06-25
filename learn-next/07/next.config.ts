import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // experimental: {
  //   staleTimes: {
  //     dynamic: 60,
  //     static: 10,
  //   },
  // },
};

export default nextConfig;
