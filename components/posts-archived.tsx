import * as stylex from "@stylexjs/stylex";
import { formatDate } from "@/lib/utils";
import { colors, shadows, spacing, text } from "../app/globalTokens.stylex";
import Image from "next/image";
import Link from "next/link";
import { PostMeta } from "@/types/post-meta";

interface PostArchivedProps {
  postMeta: PostMeta;
}

const formatter = new Intl.DateTimeFormat("en-US", {
  month: "numeric",
  day: "numeric",
});
export function PostArchived({ postMeta }: PostArchivedProps) {
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.des)}>
        <time dateTime={postMeta.date} {...stylex.props(styles.time)}>
          {formatter.format(new Date(postMeta.date)).replace("/", "-")}
        </time>
        <p>
          <Link href={postMeta.url} {...stylex.props(styles.postTitle)}>
            {postMeta.title}
          </Link>
        </p>
      </div>
        <Link href={postMeta.url} {...stylex.props(styles.imageContainer)}>
          <Image
            src={postMeta.banner}
            fill
            alt={postMeta.banner}
            {...stylex.props(styles.img)}
          />
        </Link>
    </div>
  );
}

const styles = stylex.create({
  container: {
    backgroundColor: colors.bg1,
    marginBlock: spacing.xs,
    borderRadius: spacing.xs,
    display: "flex",
    boxShadow: shadows.main,
  },
  time: {
    fontSize: text.sm,
    color: colors.primary,
    fontWeight: 500,
  },
  postTitle: {
    fontSize: text.p,
    marginBlock: spacing.xxs,
    color: colors.title,
  },
  des: {
    paddingInline: spacing.xs,
    paddingBlock: spacing.xs,
    flex: 1,
  },
  imageContainer: {
    position: "relative",
    width: "120px",
  },
  img: {
    maxWidth: "100%",
    objectFit: "cover",
    borderTopRightRadius: spacing.xs,
    borderBottomRightRadius: spacing.xs,
  },
});
