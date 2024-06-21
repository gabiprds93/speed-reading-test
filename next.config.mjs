/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  basePath: debug ? "" : "https://gabrielaparedes.com/speed-reading-test",
  assetPrefix: debug ? "" : "https://gabrielaparedes.com/speed-reading-test/",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
