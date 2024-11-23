import { getAllMeta } from "@/lib/get-all-meta";
import { getCategoriesTags } from "@/lib/get-categories-tags";
import { Tag } from "lucide-react";

import styles from "../../category-tag.module.css";
import { PostPreview } from "@/components/post-preview";

export default async function TagPage({
  params,
}: {
  params: {
    tag: string;
  };
}) {
  const posts = await getAllMeta();
  const tag = decodeURI(params.tag);
  const tagPosts = posts.filter((post) => post.meta.tags.includes(tag));
  return (
    <main className="main-area">
      <header className={styles.header}>
        <h1>
          <Tag className={styles.icon} />
          {tag}
        </h1>
        <span>
          {tagPosts.length}
          篇文章
        </span>
      </header>
      <div className={styles.container}>
        {tagPosts.map((post) => (
          <PostPreview post={post} key={post.meta.slug} />
        ))}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getAllMeta();
  const { tags } = getCategoriesTags(posts);

  return tags.map((tag) => ({
    tag: encodeURI(tag),
  }));
}