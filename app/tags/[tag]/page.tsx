import { allPosts } from "contentlayer/generated";
import { MainLayout } from "@/components/main-layout";
import { PostCard } from "@/components/post-card";
import { sortPosts } from "@/lib/utils";
import { Tag } from "lucide-react";
import { useMemo } from "react";
import { text } from "../../globalTokens.stylex";
import * as stylex from "@stylexjs/stylex";

interface TagPageProps {
  params: {
    tag: string;
  };
}

export default function TagPage({ params }: TagPageProps) {
  const filteredPosts = useMemo(
    () =>
      sortPosts(allPosts).filter((post) =>
        post.tags.includes(decodeURI(params.tag))
      ),
    [params.tag]
  );

  return (
    <MainLayout>
      <h1 {...stylex.props(styles.h1)}>
        <Tag />
        {decodeURI(params.tag)}
      </h1>
      <h2 {...stylex.props(styles.h2)}>共 {filteredPosts.length} 篇文章</h2>
      <div>
        {filteredPosts.map((post, idx) => (
          <PostCard post={post} key={idx} type="front" />
        ))}
      </div>
    </MainLayout>
  );
}

const styles = stylex.create({
  h1: {
    fontSize: text.h4,
    display: "flex",
    gap: 4,
    alignItems: "center",
  },
  h2: {
    fontSize: text.h5,
  },
});
