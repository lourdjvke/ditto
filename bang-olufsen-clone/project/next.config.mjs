/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export" removed — use next dev for live preview
  images: { unoptimized: true },
  reactStrictMode: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  devIndicators: false,
};
export default nextConfig;
