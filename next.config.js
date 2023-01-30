/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'jsx'],
  experimental: {
    appDir: true,
    mdxRs: true,
  }
};

module.exports = (nextConfig);