/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/playbox' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
