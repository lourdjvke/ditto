/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  devIndicators: false,
  allowedDevOrigins: ["127.0.0.1", "localhost", "*.replit.dev", "*.repl.co"],
};
export default nextConfig;
