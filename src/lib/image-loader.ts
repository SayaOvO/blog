export default function ImageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
}) {
  if (src.endsWith(".svg"))
    return `https://img.perceptpixel.com/saya-avbpshga/${src}`;
  return `https://img.perceptpixel.com/saya-avbpshga/w_${width},h_${width}/${src}`;
}
