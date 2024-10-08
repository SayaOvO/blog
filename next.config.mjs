/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  experimental: {
    useLightningcss: true,
  },
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
};

export default nextConfig;
