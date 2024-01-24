import { Nav } from '@/components/nav';
import type { Metadata } from 'next';
import './globals.css';
import { VistorsStats } from '@/components/vistor-stats';
import { meta } from '@/lib/meta';
import * as stylex from '@stylexjs/stylex';
import { colors, globalTokens as $ } from './globalTokens.stylex';

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='zh' {...stylex.props(styles.reset)}>
      <head>
        <link
          rel='preload'
          as='image'
          href='https://img.perceptpixel.com/saya-avbpshga/w_3840,f_png,q_auto:best//post-01-banner.png'
          imageSizes='50 50'
          imageSrcSet='https://img.perceptpixel.com/saya-avbpshga/w_16,f_png,q_auto:best//post-01-banner.png 16w, https://img.perceptpixel.com/saya-avbpshga/w_32,f_png,q_auto:best//post-01-banner.png 32w, https://img.perceptpixel.com/saya-avbpshga/w_48,f_png,q_auto:best//post-01-banner.png 48w, https://img.perceptpixel.com/saya-avbpshga/w_64,f_png,q_auto:best//post-01-banner.png 64w, https://img.perceptpixel.com/saya-avbpshga/w_96,f_png,q_auto:best//post-01-banner.png 96w, https://img.perceptpixel.com/saya-avbpshga/w_128,f_png,q_auto:best//post-01-banner.png 128w, https://img.perceptpixel.com/saya-avbpshga/w_256,f_png,q_auto:best//post-01-banner.png 256w, https://img.perceptpixel.com/saya-avbpshga/w_384,f_png,q_auto:best//post-01-banner.png 384w, https://img.perceptpixel.com/saya-avbpshga/w_640,f_png,q_auto:best//post-01-banner.png 640w, https://img.perceptpixel.com/saya-avbpshga/w_750,f_png,q_auto:best//post-01-banner.png 750w, https://img.perceptpixel.com/saya-avbpshga/w_828,f_png,q_auto:best//post-01-banner.png 828w, https://img.perceptpixel.com/saya-avbpshga/w_1080,f_png,q_auto:best//post-01-banner.png 1080w, https://img.perceptpixel.com/saya-avbpshga/w_1200,f_png,q_auto:best//post-01-banner.png 1200w, https://img.perceptpixel.com/saya-avbpshga/w_1920,f_png,q_auto:best//post-01-banner.png 1920w, https://img.perceptpixel.com/saya-avbpshga/w_2048,f_png,q_auto:best//post-01-banner.png 2048w, https://img.perceptpixel.com/saya-avbpshga/w_3840,f_png,q_auto:best//post-01-banner.png 3840w'
        />
      </head>
      <body {...stylex.props(styles.body)}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

const styles = stylex.create({
  reset: {
    lineHeight: 1.15,
    minHeight: '100%',
  },
  body: {
    backgroundImage: colors.bg,
    margin: 0,
    fontFamily: $.fontSans,
  },
});
