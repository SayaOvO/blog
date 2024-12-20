import type { Post } from "@/types/meta";
import styles from "./post-preview.module.css";
import Link from "next/link";

export function PostPreview({ post }: { post: Post }) {
  return (
    <article key={post.meta.slug} className={styles.card}>
      <h2>
        <Link href={post.meta.slug} className={styles.link}>
          {post.meta.title}
        </Link>
      </h2>
      <p>{post.meta.description}</p>
      <div className={styles["read-more"]}>
        <Link href={`/${post.meta.slug}`}>阅读更多</Link>
        <div className={styles["indicators-container"]}>
          <svg
            width="36"
            height="12"
            viewBox="0 0 36 12"
            fill="none"
            className={styles.indicators}
          >
            <path
              d="M0.75 6H11.25 M6 0.75L11.25 6L6 11.25"
              // style="opacity: 0; transition: opacity 125ms;"
            ></path>
            <path
              d="M15 10L19.5 5.5L15 1"
              // style="opacity: 0; transition: opacity 125ms;"
            ></path>
            <path
              d="M23 10L27.5 5.5L23 1"
              stroke-opacity="0.66"
              // style="opacity: 0; transition: opacity 125ms 125ms;"
            ></path>
            <path d="M31 10L35.5 5.5L31 1" stroke-opacity="0.35"></path>
          </svg>
        </div>
      </div>
    </article>
  );
}
