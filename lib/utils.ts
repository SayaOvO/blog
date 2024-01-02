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
  return posts.reduce((acc: string[], post) => {
    let tags = acc;
    post.tags.forEach((tag: string) =>
      !acc.includes(tag) ? tags.push(tag) : null
    );

    return tags;
  }, []);
}


export function getCategories(posts: Post[]) {
  return posts.reduce((acc: string[], post) => {
    let categories = acc;
    post.categories.forEach((category: string) =>
      !acc.includes(category) ? categories.push(category) : null
    );

    return categories;
  }, []);
}
