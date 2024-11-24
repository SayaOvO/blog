import type { Post } from "@/types/meta";
import styles from "./post-archive.module.css";
import Link from "next/link";
import Image from "next/image";

const formatter = new Intl.DateTimeFormat("en-US", {
  month: "numeric",
  day: "numeric",
});

export function PostArchive({ post }: { post: Post }) {
  return (
    <article key={post.meta.slug} className={styles.card}>
      <div className={styles.description}>
        <time dateTime={post.meta.date}>
          {formatter.format(new Date(post.meta.date)).replace("/", "-")}
        </time>
        <h3 className={styles.title}>
          <Link href={`/${post.meta.slug}`}>{post.meta.title}</Link>
        </h3>
      </div>
      <div className={styles["image-container"]}>
        <Image
          src={post.meta.banner}
          alt={post.meta.title}
          fill
          className={styles.image}
        />
      </div>
    </article>
  );
}
