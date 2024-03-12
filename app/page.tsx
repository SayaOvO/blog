import { MainLayout } from "@/components/main-layout";
import { PostCard } from "@/components/post-card";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "./globalTokens.stylex";
import { getPostsMeta } from "@/lib/get-posts-meta";

export default async function Home() {
  const posts = await getPostsMeta();

  return (
    <MainLayout>
      <div {...stylex.props(styles.posts)}>
        {
          posts.map((meta, idx) => (
          <PostCard postMeta={meta} key={idx} type="front"/>
          ))
        }
      </div>
    </MainLayout>
  )

}

const styles = stylex.create({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(28, minmax(0, 1fr))",
    gap: spacing.xs,
    paddingInline: spacing.md,
    maxWidth: "1576px",
    marginInline: "auto"
  },
  main: {
    flex: 1,
    height: "1000px",
    paddingBlock: spacing.md,
    marginBlock: spacing.sm,
    gridColumn: {
      '@media (max-width: 768px)': 'span 28',
      '@media (max-width: 1024px)': 'span 17',
      '@media (min-width: 1024px)': 'span 14'
    }
  },
  posts: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.sm
  }
});
