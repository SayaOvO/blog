import type { Post } from "@/types/meta";

export const getCategoriesTags = (
  posts: Post[],
): {
  categories: string[];
  tags: string[];
} => {
  const categories = Array.from(
    new Set(posts.flatMap((post) => post.meta.categories)),
  );

  const tags = Array.from(
    new Set(posts.flatMap((post) => post.meta.tags)),
  );
  return {
    categories,
    tags
  }
};
