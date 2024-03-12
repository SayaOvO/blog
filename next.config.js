/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: './lib/image-loader.ts',
    // unoptimized: true
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.perceptpixel.com'
      }
    ]
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

module.exports = stylexPlugin({
  rootDir: __dirname
})(nextConfig);
