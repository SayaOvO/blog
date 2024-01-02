const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

const stylexPlugin = require("@stylexjs/nextjs-plugin");
const { withContentlayer } = require('next-contentlayer');

module.exports = stylexPlugin({
  rootDir: __dirname
})(withContentlayer(nextConfig));
