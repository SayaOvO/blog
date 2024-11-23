import Link from "next/link";
import { Folder } from "lucide-react";

import { getAllMeta } from "@/lib/get-all-meta";
import { getCategoriesTags } from "@/lib/get-categories-tags";
import styles from "../../page-shared.module.css";
import { PostPreview } from "@/components/post-preview";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const posts = await getAllMeta();
  const category = decodeURI(params.category);
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
    category: encodeURI(cat),
  }));
}
