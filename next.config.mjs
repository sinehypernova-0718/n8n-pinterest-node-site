/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [{ source: "/docs", destination: "/docs/introduction", permanent: false }];
  },
};

export default nextConfig;
