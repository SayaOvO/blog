interface ImageProps {
  src: string;
  width: number;
  quality: number;
}
// Docs: https://developers.cloudflare.com/images/url-format
export default function PerceptLoader({ src, width }: ImageProps) {
  return `https://img.perceptpixel.com/saya-avbpshga/${src}`;
}
