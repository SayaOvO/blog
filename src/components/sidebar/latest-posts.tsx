import styles from "./latest-posts.module.css";
import { getAllMeta } from "@/lib/get-all-meta";
import Link from "next/link";
import React from "react";

export const LatestPost = async () => {
  const posts = await getAllMeta();

  return (
    <section className="latest-posts bg-accent p-4 br-1 flow shadow-md">
      <h3 className="fw-bold">最近文章</h3>
      {posts.slice(0, 4).map((post) => (
        <div key={post.meta.title}>
          <time className="fs-sm">{post.meta.date}</time>
          <Link
            href={post.meta.slug}
            data-content={post.meta.title}
            className={`${styles["post-title"]} link colored`}
          >
            {post.meta.title}
          </Link>
        </div>
      ))}
    </section>
  );
};
