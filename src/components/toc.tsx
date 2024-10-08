"use client";
import { useActiveAnchor } from "@/contexts/active-anchor";
import styles from "./toc.module.css";
import type { Toc as TocType } from "@/types/toc";
import Link from "next/link";
import { useRef, useEffect } from "react";
import scrollIntoView from "scroll-into-view-if-needed";

export const Toc = ({ toc }: { toc: TocType }) => {
  const activeLink = useActiveAnchor(toc);
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeLink) return;
    const anchor = tocRef?.current?.querySelector(
      `a[href="#${activeLink.id}"]`,
    );

    if (anchor) {
      scrollIntoView(anchor, {
        behavior: "smooth",
        block: "center",
        inline: "center",
        scrollMode: "always",
        boundary: tocRef.current,
      });
    }
  }, [activeLink]);
  return (
    <nav
      className={`flow bg-accent p-4 br-1 shadow-md ${styles.toc}`}
      ref={tocRef}
    >
      <h3 className="section-label">目录</h3>
      <ul>
        {toc.map((heading) => (
          <li
            key={heading.id}
            className={`${styles[`depth-${heading.depth}`]} ${styles.heading} ${activeLink?.id === heading.id ? styles.active : ""}`}
          >
            <Link href={`#${heading.id}`}>{heading.content}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
