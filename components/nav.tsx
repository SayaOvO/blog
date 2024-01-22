import Link from "next/link";
import { colors, shadows, spacing, text } from "../app/globalTokens.stylex";
import * as stylex from "@stylexjs/stylex";

export function Nav() {
  return (
    <header {...stylex.props(styles.header)}>
      <h1 {...stylex.props(styles.h1)}>
        <Link href="/" {...stylex.props(styles.link)}>
          Saya&apos;s <span {...stylex.props(styles.span)}>blog</span>
        </Link>
      </h1>
      <nav {...stylex.props(styles.nav)}>
        <ul {...stylex.props(styles.ul)}>
          <li>
            <Link href="/archives">归档</Link>
          </li>
          <li>
            <Link href="/friends">友链</Link>
          </li>
          <li>
            <a href="/atom.xml" target="_blank">
              订阅
            </a>
          </li>
          <li>
            <Link href="/about">关于</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = stylex.create({
  header: {
    paddingBlock: spacing.sm,
    paddingInline: spacing.lg,
    display: "flex",
    top: 0,
    left: 0,
    right: 0,
    background: colors.bg1,
    boxShadow: shadows.bottom,
    position: "relative",
  },
  h1: {
    fontSize: "1rem",
    margin: 0,
  },
  nav: {
    marginLeft: "auto",
  },
  ul: {
    display: "flex",
    listStyleType: "none",
    gap: spacing.sm,
    margin: 0,
  },
  link: {
    textDecoration: "none",
    ":hover span": {
      transform: "rotate(0deg)",
    },
    color: "black",
  },
  span: {
    display: "inline-block",
    fontSize: text.xs,
    padding: "4px",
    backgroundColor: "black",
    color: "white",
    borderRadius: spacing.xxxs,
    transform: {
      default: "rotate(-45deg) translate(5px, -5px)",
    },
    transitionDuration: "100ms",
  },
});
