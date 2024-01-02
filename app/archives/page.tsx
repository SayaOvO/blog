import * as stylex from "@stylexjs/stylex";
import { colors, spacing } from "../globalTokens.stylex";
import { Sidebar } from "@/components/sidebar";
import { Fragment, useMemo } from "react";
import { sortPosts } from "@/lib/utils";
import { allPosts } from "@/.contentlayer/generated";
import { PostArchived } from "@/components/posts-archived";
import { MainLayout } from "@/components/main-layout";

export default function ArchivePage() {
  const sortedPosts = useMemo(() => sortPosts(allPosts), []);
  const _posts = useMemo(() => {
    let prev_year = 0;
    let _posts = [];

    for (let post of sortedPosts) {
      const year = new Date(post.date).getFullYear();
      let isAnotherYear = year !== prev_year;
      if (isAnotherYear) {
        prev_year = year;
        _posts.push(
          <Fragment key={post._id}>
            <h3>{year}</h3>
            <PostArchived post={post} />
          </Fragment>
        );
      } else {
        _posts.push(<PostArchived post={post} key={post._id} />);
      }
    }
    return _posts;
  }, [sortedPosts]);

  return (
    <MainLayout>
      <h2>归档</h2>
      {_posts}
    </MainLayout>
  );
}

const styles = stylex.create({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(28, minmax(0, 1fr))",
    gap: spacing.xs,
    paddingInline: spacing.md,
    maxWidth: "1576px",
    marginInline: "auto",
  },
  main: {
    flex: 1,
    paddingBlock: spacing.md,
    marginBlock: spacing.sm,
    gridColumn: {
      "@media (max-width: 768px)": "span 28",
      "@media (max-width: 1024px)": "span 17",
      "@media (min-width: 1024px)": "span 14",
    },
  },
});
