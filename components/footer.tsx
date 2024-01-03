import Image from "next/image";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "../app/globalTokens.stylex";
import Link from "next/link";
import { Github, Rss } from "lucide-react";

interface FooterProps {
  path?: string;
}

const url = `https://www.github.com/SayaOvO/blog`;

export function Footer({ path }: FooterProps) {
  return (
    <footer {...stylex.props(styles.footer)}>
      <p {...stylex.props(styles.p)}>
        <Link href="https://nextjs.org/" {...stylex.props(styles.link)}>
          <span {...stylex.props(styles.span)}>Built with</span>
          <Image
            src="/nextjs.svg"
            alt="nextjs icon"
            width={24}
            height={24}
            {...stylex.props(styles.icon)}
          />
        </Link>
      </p>
      <p {...stylex.props(styles.p)}>
        <a 
          href={path ? `${url}/blob/main/content${path}/index.mdx?plain=1` : url}
          target="_blank"
          {...stylex.props(styles.link)}
        >
          <span {...stylex.props(styles.span)}>
            {path
              ? "View & edit source code of this page on"
              : "Open sourced on"}
          </span>
          <Github {...stylex.props(styles.icon)} />
          <span {...stylex.props(styles.span)}>Github</span>
        </a>
      </p>

      <p {...stylex.props(styles.p)}>
        <a href="/atom.xml" target="_blank" {...stylex.props(styles.link)}>
          <span {...stylex.props(styles.span)}>&copy;Saya 2023</span>
          <Rss {...stylex.props(styles.icon)} />
          <span {...stylex.props(styles.span)}>RSS</span>
        </a>
      </p>
    </footer>
  );
}

const styles = stylex.create({
  p: {
    textAlign: "center",
    marginBlock: spacing.xxxs,
    lineHeight: 1,
  },
  link: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    color: colors.primary,
  },
  icon: {
    width: text.sm,
    height: text.sm,
  },
  span: {
    fontSize: text.sm,
  },
  footer: {
    marginBlock: spacing.md,
  },
});
