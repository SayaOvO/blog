import { getAllMeta } from "@/lib/get-all-meta";
import styles from "./archive.module.css";
import { Fragment } from "react";
import { PostArchive } from "@/components/post-archive";
export default async function ArchivePage() {
  const posts = await getAllMeta();
  let pre_year = 0;
  const _posts = [];
  for (const post of posts) {
    const year = new Date(post.meta.date).getFullYear();
    const isAnotherYear = year !== pre_year;
    if (isAnotherYear) {
      pre_year = year;
      _posts.push(
        <Fragment key={post.meta.slug}>
          <h2>{year}</h2>
          <PostArchive post={post} />
        </Fragment>,
      );
    } else {
      _posts.push(<PostArchive key={post.meta.slug} post={post} />);
    }
  }
  return (
    <main className="main-area">
      <h1 className={styles.heading}>归档</h1>
      <div className="flow">{_posts}</div>
    </main>
  );
}
