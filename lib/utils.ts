import { Post } from "contentlayer/generated";

export function sortPosts(posts: Post[]) {
  return posts.sort(
    (p1, p2) => new Date(p2.date).getTime() - new Date(p1.date).getTime()
  );
}

export function formatDate(date: Date) {
  const f = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return f.format(date).replaceAll("/", "-");
}

export function getTags(posts: Post[]) {
  return [...new Set(posts.flatMap((post) => post.tags))];
}

export function getCategories(posts: Post[]) {
  return [...new Set(posts.flatMap((post) => post.categories))];
}
