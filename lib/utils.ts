import { compileMDX } from "next-mdx-remote/rsc";
import fs from 'node:fs';
import path from 'node:path';
import readingTime from "reading-time";
import { generateTocHeadings } from "./remark-toc-headings";
import { PostMeta } from "@/types/post-meta";

export function sortPosts(postsMeta: PostMeta[]) {
  return postsMeta.sort((p1, p2) =>
    new Date(p2.date).getTime() - new Date(p1.date).getTime());
}

export function formatDate(date: Date) {
  const f = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return f.format(date).replaceAll("/", "-");
}

export function getTags(metas: PostMeta[]) {
  return [...new Set(metas.flatMap((meta) => meta.tags))];
}

export function getCategories(metas: PostMeta[]) {
  return [...new Set(metas.flatMap((meta) => meta.categories))];
}
