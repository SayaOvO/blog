import { Sidebar } from "@/components/sidebar";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing } from "../globalTokens.stylex";
import { allPosts } from "contentlayer/generated";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";


export default function PostPageLayout({
  params,
  children,
}: {
  params: {
    slug: string;
  };
  children: React.ReactNode;
}) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <div {...stylex.props(styles.container)}>
        <Sidebar post={post} />
        <main {...stylex.props(styles.main)}>{children}</main>
      </div>
      <Footer path={post.url} />
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: "grid",
    gridTemplateColumns: {
      "@media (max-width: 768px)": "repeat(1, minmax(0, 1fr))",
      "@media (min-width: 769px)": "repeat(28, minmax(0, 1fr))",
    },
    gap: spacing.md,
    paddingInline: spacing.md,
    maxWidth: "1576px",
    marginInline: "auto",
  },
  main: {
    flex: 1,
    paddingBlock: spacing.md,
    gridColumn: {
      "@media (max-width: 768px)": "span 1",
      "@media (min-width: 769px) and (max-width: 1024px)": "span 18",
      "@media (min-width: 1025px)": "span 14",
    },
  },
});
