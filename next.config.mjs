/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/speed-reading-test",
  assetPrefix: '/speed-reading-test/',
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
