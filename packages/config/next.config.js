/** @type {import('next').NextConfig} */
const { merge } = require('webpack-merge');

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ui', 'config'],
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return merge(config, {
      module: {
        rules: [
          {
            test: /\.svg$/i,
            issuer: fileLoaderRule.issuer,
            resourceQuery: {
              not: [...fileLoaderRule.resourceQuery.not, /url/],
            }, // exclude if *.svg?url
            use: ['@svgr/webpack'],
          },
        ],
      },
    });
  },
};

module.exports = nextConfig;
