"use client";
import Image from "next/image";
import React, { memo } from "react";
import { Github, Send, Twitter, Mail } from "lucide-react";

import styles from "./author-card.module.css";
export const AuthorInfo = memo(() => {
  return (
    <section
      className={`center p-4 bg-accent br-1 shadow-md avatar-container ${styles.container}`}
    >
      <div className={styles.info}>
        <h3 className="uppercase letter-spacing-1">Saya</h3>
        <p>来到你身边</p>
        <div className={styles["avatar-container"]}>
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
          <a href="https://github.com/SayaOvO/" target="_blank">
            <Github size={18} />
            Github
          </a>
        </li>
        <li>
          <a href="https://t.me/sayyaOvO" target="_blank">
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
          <a href="https://x.com/sayyaOvO" target="_blank">
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
