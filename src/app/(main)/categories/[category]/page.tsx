import { Folder } from "lucide-react";

import { getAllMeta } from "@/lib/get-all-meta";
import { getCategoriesTags } from "@/lib/get-categories-tags";
import styles from "../../category-tag.module.css";
import { PostPreview } from "@/components/post-preview";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const posts = await getAllMeta();
  const { category: categoryURI } = await params;
  const category = decodeURI(categoryURI);
  const _posts = posts.filter((post) =>
    post.meta.categories.includes(category),
  );

  return (
    <main className="main-area">
      <header className={styles.header}>
        <h1>
          <Folder className={styles.icon} />
          {category}
        </h1>
        <span>
          {_posts.length}
          篇文章
        </span>
      </header>
      <div className={styles.container}>
        {_posts.map((post) => (
          <PostPreview post={post} key={post.meta.slug} />
        ))}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getAllMeta();
  const { categories } = getCategoriesTags(posts);
  return categories.map((cat) => ({
    category: cat,
  }));
}
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  return {
    title: `分类 - ${decodeURI(category)}`,
  };
};
