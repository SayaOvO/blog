import { allPosts } from "contentlayer/generated";
import { sortPosts } from "@/lib/utils";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  const _posts = sortPosts(allPosts);

  return _posts.map((post) => ({
    url: `https://blog.sayya.moe${post.url}`,
    lastModified: post.date
  }))
}