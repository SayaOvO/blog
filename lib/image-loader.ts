interface ImageProps {
  src: string;
  width: number;
  quality: number;
}
// Docs: https://developers.cloudflare.com/images/url-format
export default function PerceptLoader({ src, width }: ImageProps) {
  const isSvg = src.endsWith(".svg");
  if (isSvg) {
    return src;
  }
  const params = [`w_${width}`, 'f_png', 'q_auto:best'];
  return `https://img.perceptpixel.com/saya-avbpshga/${params.join(',')}/${src}`;
}
