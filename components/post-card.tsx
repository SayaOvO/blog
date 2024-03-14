import { formatDate } from "@/lib/utils";
import { colors, shadows, spacing, text } from "../app/globalTokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { PostMeta } from "@/types/post-meta"
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  postMeta: PostMeta;
  type: "front" | "post";
}

const IMAGE_URL = "https://img.perceptpixel.com/saya-avbpshga/"

export function PostCard({ postMeta, type }: PostCardProps) {

  return (
    <div {...stylex.props(styles.container, type === "front" && styles.bottomRadius)}>
      <Link href={`${postMeta.url}`}>
        <div {...stylex.props(styles.bannerContainer)}>
            <Image
              priority
              src={postMeta.banner}
              alt={postMeta.title}
              fill
              {...stylex.props(styles.banner)}
            />
        </div>
      </Link>
      <article {...stylex.props(styles.content)}>
        <h2 {...stylex.props(styles.title)}>{postMeta.title}</h2>
        {type === "front" && (
          <p {...stylex.props(styles.desc)}>{postMeta.description}</p>
        )}
        <footer {...stylex.props(styles.footer)}>
          <span>
            {formatDate(new Date(postMeta.date))}
            <span {...stylex.props(styles.category)}>| {postMeta.categories[0]}</span>
          </span>
          {type === "front" && <Link href={postMeta.url}>继续阅读</Link>}
          {type === "post" && <span>{postMeta.readTime}</span>}
        </footer>
      </article>
    </div>
  );
}

const styles = stylex.create({
  container: {
    boxShadow: shadows.main,
    backgroundColor: colors.bg1,
    borderTopLeftRadius: spacing.xs,
    borderTopRightRadius: spacing.xs,
  },
  banner: {
    maxWidth: "100%",
    objectFit: "cover",
    overflow: "hidden",
  },
  bannerContainer: {
    position: "relative",
    aspectRatio: {
      '@media (max-width: 768px)': '1/0.45',
      '@media (min-width: 769px)': '3/1',
    },
  },
  content: {
    padding: spacing.sm
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
