export default function ImageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
}) {
  return `https://img.perceptpixel.com/saya-avbpshga/w_${width},h_${width}/${src}`;
}
