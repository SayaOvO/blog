import { Post } from "@/.contentlayer/generated";
import * as stylex from "@stylexjs/stylex";
import { Github, Mail, Send, Twitter } from "lucide-react";
import Image from "next/image";
import { colors, shadows, spacing, text } from "../../app/globalTokens.stylex";
import { Toc } from "../toc";
import { LatestPosts } from "./latest-posts";
import { TagsAndCategories } from "./tags-categories";

interface SidebarProps {
  post?: Post;
}

export function Sidebar({ post }: SidebarProps) {
  return (
    <aside {...stylex.props(styles.aside)}>
      <div {...stylex.props(styles.leftSide, !post && styles.sticky)}>
        <section {...stylex.props(styles.section)}>
          <div {...stylex.props(styles.info)}>
            <p>Saya</p>
            <div>来到你身边的博客</div>
            <Image
              src="/avatar.png"
              alt="Saya's avatar"
              width={96}
              height={96}
              priority
              {...stylex.props(styles.avatar)}
            />
          </div>
          <div {...stylex.props(styles.social)}>
            <a
              target="_blank"
              href="https://github.com/SayaOvO"
              {...stylex.props(styles.link)}
            >
              <Github {...stylex.props(styles.icon)} />
              Github
            </a>
            <a href="https://t.me/SayyaOvO" {...stylex.props(styles.link)}>
              <Send {...stylex.props(styles.icon)} />
              Telegram
            </a>
            <a
              target="_blank"
              href="mailto:sayaovo+blog@proton.me"
              {...stylex.props(styles.link)}
            >
              <Mail {...stylex.props(styles.icon)} />
              Email
            </a>
            <a
              target="_blank"
              href="https://www.twitter.com/sayyaOvO"
              {...stylex.props(styles.link)}
            >
              <Twitter {...stylex.props(styles.icon)} />
              Twitter
            </a>
          </div>
        </section>
        {!post && <TagsAndCategories />}
        {!post && (
          <div {...stylex.props(styles.latest)}>
            <LatestPosts />
          </div>
        )}
      </div>
      {post && (
        <div {...stylex.props(styles.toc)}>
          <Toc toc={post.toc} />
          <div>
            <LatestPosts />
          </div>
        </div>
      )}
    </aside>
  );
}

const styles = stylex.create({
  aside: {
    paddingBlock: spacing.md,
    marginTop: spacing.sm,
    gridColumn: {
      "@media (max-width: 768px)": "span 1",
      "@media (min-width: 769px) and (max-width: 1024px)": "span 10",
      "@media (min-width: 1025px)": "span 7",
    },
    order: {
      default: null,
      "@media (max-width: 768px)": 2,
    },
    paddingBottom: {
      "@media (max-width: 1024px)": 0,
    },
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginBlock: "auto",
    writingMode: {
      "@media (min-width: 769px)": "tb",
    },
  },
  avatar: {
    borderRadius: "96px",
    marginRight: {
      "@media (min-width: 769px)": "20px",
    },
    transform: {
      default: null,
      ":hover": "rotate(-1turn)"
    },
    transitionDuration: "1000ms",
    order: {
      "@media (max-width: 768px)": -1,
    },
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
    boxShadow: shadows.main,
    borderRadius: "6px",
    backgroundColor: colors.bg1,
    maxWidth: "350px",
  },
  sticky: {
    position: {
      "@media (min-width: 769px)": "sticky",
    },
    top: 30,
  },
  social: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "6px",
    marginTop: "16px",
  },
  link: {
    display: "flex",
    alignItems: "center",
    fontSize: text.sm,
    padding: spacing.xxs,
    backgroundColor: {
      ":hover": "#dbe5ef",
    },
    gap: 4,
    borderRadius: "6px",
    cursor: "pointer",
  },
  icon: {
    height: 18,
    width: 18,
  },
  leftSide: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  latest: {
    display: {
      default: "none",
      "@media (min-width: 769px) and (max-width: 1024px)": "block",
    },
  },
  toc: {
    position: "sticky",
    top: 30,
    marginBlock: "30px",
  },
});
