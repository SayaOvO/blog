import { getAllMeta, getPost } from "@/lib/get-all-meta";
import { Feed } from "feed";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await getAllMeta();
  const headers = {
    "Content-Type": "application/xml",
  };
  const feed = new Feed({
    title: "Saya 的个人博客",
    description: "此 RSS 提供本人博客文章:)",
    id: "https://blog.sayya.moe",
    link: "https://blog.sayya.moe",
    language: "zh",
    favicon: "https://blog.sayya.moe/favicon.ico",
    copyright: "All rights reserved 2024, Saya",
    updated: new Date(posts[0].meta.date),
    generator: "Next.js",
    feedLinks: {
      atom: "https://blog.sayya.moe/atom",
    },
    author: {
      name: "Saya",
      email: "me.sayya.moe",
    },
  });
  posts.forEach(({ meta }) => {
    feed.addItem({
      title: meta.title,
      id: meta.slug,
      link: `blog.sayya.moe/${meta.slug}`,
      description: meta.description,
      content: getPost(meta.slug),
      date: new Date(meta.date),
      image: `https://img.perceptpixel.com/saya-avbpshga/${meta.banner}`,
    });
  });
  return new NextResponse(feed.atom1(), { headers });
}
