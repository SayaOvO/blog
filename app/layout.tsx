
import type { Metadata } from 'next';

import { Nav } from '@/components/nav';
import { VistorsStats } from '@/components/vistor-stats';
import { meta } from '@/lib/meta';
import * as stylex from '@stylexjs/stylex';
import { colors, globalTokens as $ } from './globalTokens.stylex';
import './globals.css';

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='zh' {...stylex.props(styles.reset)}>
      <head>
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
    lineHeight: 1.5,
    minHeight: '100%',
  },
  body: {
    backgroundImage: colors.bg,
    margin: 0,
    fontFamily: $.fontSans,
  },
});
