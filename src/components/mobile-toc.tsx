"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import type { Toc as TocType } from "@/types/toc";
import { memo, useEffect, useState } from "react";
import { Toc } from "./toc";
import styles from "./mobile-toc.module.css";
import { List } from "lucide-react";

export const MobileToc = memo(({ toc }: { toc: TocType }) => {
  const [descriptionVisibile, setIsDescriptionVisibile] = useState(true);
  const [descriptionMounted, setDescriptionMounted] = useState(true);

  useEffect(() => {
    const toggle = () => {
      if (window.scrollY < 100) {
        setIsDescriptionVisibile(true);
        setDescriptionMounted(true);
      } else {
        setIsDescriptionVisibile(false);
      }
    };
    window.addEventListener("scroll", toggle);
    return () => {
      window.removeEventListener("scroll", toggle);
    };
  }, []);

  const handleAnimationEnd = () => {
    setDescriptionMounted(descriptionVisibile);
  };

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className={`${styles["toggle-toc-btn"]} flex br-1 bg-accent shadow-md`}
        >
          {descriptionMounted && (
            <span
              onTransitionEnd={handleAnimationEnd}
              className={styles.description}
              style={{
                opacity: descriptionVisibile ? 1 : 0,
              }}
            >
              显示目录
            </span>
          )}
          <List size={18} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={4}>
          <Toc toc={toc} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
});

if (process.env.NODE_ENV === "development") {
  MobileToc.displayName = "MobileToc";
}
