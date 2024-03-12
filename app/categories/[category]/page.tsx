import {MainLayout} from "@/components/main-layout";
import {PostCard} from "@/components/post-card";
import {getCategories, sortPosts} from "@/lib/utils";
import {Folder} from "lucide-react";
import {text} from "../../globalTokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { getPostsMeta } from "@/lib/get-posts-meta";

interface TagPageProps {
  params: {
    category: string;
  };
}

export const generateStaticParams =async () => {
  const allMetas = await getPostsMeta();
  const allCategories = getCategories(allMetas)
    return allCategories.map((category) => ({
      category
  }));
}

export default async function CategoryPage({ params }: TagPageProps) {
  const allMetas = await getPostsMeta();
  const filteredMetas = sortPosts(allMetas).filter((post) =>
    post.categories.includes(decodeURI(params.category)));
  return (
    <MainLayout>
      <h1 {...stylex.props(styles.h1)}>
        <Folder />
        {decodeURI(params.category)}
      </h1>
      <h2 {...stylex.props(styles.h2)}>共 {filteredMetas.length} 篇文章</h2>
      <div>
        {filteredMetas.map((meta, idx) => (
          <PostCard postMeta={meta} key={idx} type="front" />
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
