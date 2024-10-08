import type { Post } from "@/types/meta";
import { Toc } from "@/components/toc";
import { AuthorInfo } from "./author-card";
import { LatestPost } from "./latest-posts";
import { CategoriesAndTags } from "./categories-tags";

interface SidebarProps {
  post?: Post;
  categoriesTags?: {
    categories: string[];
    tags: string[];
  };
}
export const Sidebar = ({ post, categoriesTags }: SidebarProps) => {
  return (
    <aside className="left-side">
      <AuthorInfo />
      <LatestPost />
      {post && <Toc toc={post.meta.toc} />}
      {categoriesTags && <CategoriesAndTags categoriesTags={categoriesTags} />}
    </aside>
  );
};
