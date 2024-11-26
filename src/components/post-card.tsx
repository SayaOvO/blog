import styles from "./post-card.module.css";
import type { FrontMatter } from "@/types/meta";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  meta: FrontMatter & { slug: string; readingTime: string };
}
export const PostCard = ({ meta }: PostCardProps) => {
  return (
    <article>
      <header>
        <Link href={meta.slug}>
          <div className={styles["banner-container"]}>
            <Image
              src={meta.banner}
              alt="post banner"
              fetchPriority="high"
              className="br-2"
              fill
              sizes="(max-width: 768px) 80vw, (max-width: 1376px) 50vw"
            />
          </div>
        </Link>
      </header>
      <div className="p-4 flow post-card-content">
        <h2 className="hidden-in-post-page">{meta.title}</h2>
        <h1 className="post-title">{meta.title}</h1>
        <p className="hidden-in-post-page">{meta.description}</p>
        <footer className={styles.footer}>
          <span>{meta.date}</span>|<span>{meta.categories[0]}</span>
          <a
            href={meta.slug}
            className="link colored push-right hidden-in-post-page"
            data-content="继续阅读"
          >
            继续阅读
          </a>
          <span className="push-right reading-time">{meta.readingTime}</span>
        </footer>
      </div>
    </article>
  );
};
