/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ui', 'shared-lib', 'config'],
};

module.exports = nextConfig;
