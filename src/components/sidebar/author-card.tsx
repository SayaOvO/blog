"use client";
import Image from "next/image";
import React, { memo, type RefObject } from "react";
import { Github, Send, Twitter, Mail } from "lucide-react";

import styles from "./author-card.module.css";
import { useAvatar } from "@/contexts/avatar-context";

export const AuthorInfo = memo(() => {
  const { avatarRef, isSticky } = useAvatar();
  return (
    <section
      className={`center p-4 bg-accent br-1 shadow-md avatar-container ${styles.container}`}
    >
      <div className={styles.info} ref={avatarRef as RefObject<HTMLDivElement>}>
        <h3 className="uppercase letter-spacing-1">Saya</h3>
        <p>来到你身边</p>
        <div
          className={`${styles["avatar-container"]} ${isSticky && styles.sticky}`}
        >
          <Image
            src="me.webp"
            alt=""
            className={styles.avatar}
            priority
            width={96}
            height={96}
          />
        </div>
      </div>
      <ul
        role="list"
        aria-labelledby="social links"
        className={styles["social-links"]}
      >
        <li>
          <a href="#" target="_blank">
            <Github size={18} />
            Github
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Send size={18} />
            Telegram
          </a>
        </li>
        <li>
          <a href="mailto:me@sayya.moe" target="_blank">
            <Mail size={18} />
            Email
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Twitter size={18} />
            Twitter
          </a>
        </li>
      </ul>
    </section>
  );
});

if (process.env.NODE_ENV === "development") {
  AuthorInfo.displayName = "Author";
}
