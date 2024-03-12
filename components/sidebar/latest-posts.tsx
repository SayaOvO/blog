import { formatDate, sortPosts } from "@/lib/utils";
import * as stylex from "@stylexjs/stylex";
import Link from "next/link";
import { colors, shadows, spacing, text } from "../../app/globalTokens.stylex";
import { getPostsMeta } from "@/lib/get-posts-meta";

export async function LatestPosts() {
  const posts = await getPostsMeta();
  const _posts = sortPosts(posts).slice(0, 4);

  return (
    <aside {...stylex.props(styles.aside)}>
      <section {...stylex.props(styles.section, styles.sticky)}>
        <div {...stylex.props(styles.label)}>最近文章</div>
        {_posts.map((post) => (
          <div key={post.url}>
            <time {...stylex.props(styles.time)}>
              {formatDate(new Date(post.date))}
            </time>
            <p {...stylex.props(styles.p)}>
              <Link href={post.url} {...stylex.props(styles.link)}>
                {post.title}
              </Link>
            </p>
          </div>
        ))}
      </section>
    </aside>
  );
}

const styles = stylex.create({
  aside: {
    borderRadius: "6px",
    paddingBlock: 0,
  },
  section: {
    maxWidth: "350px",
    backgroundColor: colors.bg1,
    padding: "16px",
    boxShadow: shadows.main,
    borderRadius: "6px",
    marginInline: {
      "@media (max-width: 768px)": spacing.xxl
    }
  },
  p: {
    marginTop: 0,
    padding: 0,
    color: colors.primary,
  },
  time: {
    fontSize: text.xs,
  },
  label: {
    marginBottom: spacing.xs,
  },
  link: {
    textDecoration: "underline",
  },
  sticky: {
    position: {
      "@media (min-width: 769px)": "sticky",
    },
    top: 30,
  },
});
