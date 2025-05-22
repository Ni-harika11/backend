import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode:true, //enalbes React Strict Mode.
  swcMinify:true,      //uses the SWC compiler for faster builds.
  images:{
    domains:['example.com'] // if you're using next/image, you must whitelist external image sources.
  },
};

export default nextConfig;
