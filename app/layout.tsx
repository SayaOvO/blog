import { Nav } from "@/components/nav";
import type { Metadata } from "next";
import "./globals.css";
import * as stylex from "@stylexjs/stylex";
import { colors, globalTokens as $ } from "./globalTokens.stylex";
import { meta } from "@/lib/meta";

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" {...stylex.props(styles.reset)}>
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
    minHeight: "100%"
  },
  body: {
    backgroundImage: colors.bg,
    margin: 0,
    fontFamily: $.fontSans
  }
})