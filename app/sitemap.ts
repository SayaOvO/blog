import { sortPosts } from "@/lib/utils";
import { MetadataRoute } from "next";
import { getPostsMeta } from "@/lib/get-posts-meta";

export default async function sitemap() {

  const metas = await getPostsMeta()

  const _posts = sortPosts(metas);

  return _posts.map((post) => ({
    url: `https://blog.sayya.moe${post.url}`,
    lastModified: post.date
  }))
}
