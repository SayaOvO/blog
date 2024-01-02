import { formatDate } from "@/lib/utils";
import { colors, shadows, spacing, text } from "../app/globalTokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: Post;
  type: "front" | "post";
}

export function PostCard({ post, type }: PostCardProps) {
  return (
    <div {...stylex.props(styles.container)}>
      <Link href={`${post.url}`}>
        <div {...stylex.props(styles.bannerContainer)}>
          <Image
            src={post.banner}
            alt={post.title}
            fill
            {...stylex.props(styles.banner)}
          />
        </div>
      </Link>
      <article {...stylex.props(styles.content, type === "front" && styles.bottomRadius)}>
        <h2 {...stylex.props(styles.title)}>{post.title}</h2>
        {type === "front" && (
          <p {...stylex.props(styles.desc)}>{post.description}</p>
        )}
        <footer {...stylex.props(styles.footer)}>
          <span>
            {formatDate(new Date(post.date))}
            <span {...stylex.props(styles.category)}>| {post.categories[0]}</span>
          </span>
          {type === "front" && <Link href={post.url}>继续阅读</Link>}
          {type === "post" && <span>{post.readingTime.text}</span>}
        </footer>
      </article>
    </div>
  );
}

const styles = stylex.create({
  container: {
    boxShadow: shadows.main,
  },
  banner: {
    maxWidth: "100%",
    objectFit: "cover",
    overflow: "hidden",
    borderTopLeftRadius: spacing.xs,
    borderTopRightRadius: spacing.xs,
  },
  bannerContainer: {
    position: "relative",
    aspectRatio: "3/1",
  },
  content: {
    padding: "20px 12px",
    backgroundColor: colors.bg1,
  },
  bottomRadius: {
    borderBottomLeftRadius: spacing.xs,
    borderBottomRightRadius: spacing.xs,
  },
  title: {
    fontSize: text.p,
    color: colors.title,
    fontWeight: 400,
  },
  desc: {
    color: colors.primary,
    fontSize: text.p,
  },
  footer: {
    display: "flex",
    fontSize: text.sm,
    color: colors.secondary,
    marginTop: "20px",
    justifyContent: "space-between",
  },
  category: {
    marginInline: "4px"
  }
});