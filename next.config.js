/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // async rewrites() {
  //   return [
  //     {
  //       source: "/rss",
  //       destination: "/atom.xml"
  //     },
  //     {
  //       source: "/rss.xml",
  //       destination: "/atom.xml"
  //     }
  //   ]
  // }
}

const stylexPlugin = require("@stylexjs/nextjs-plugin");
const { withContentlayer } = require('next-contentlayer');

module.exports = stylexPlugin({
  rootDir: __dirname
})(withContentlayer(nextConfig));
