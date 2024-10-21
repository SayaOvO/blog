"use client";

import { useState, memo, useEffect } from "react";
import styles from "./theme-toggle.module.css";

export const ThemeToggle = memo(() => {
  const [theme, setTheme] = useState(global.window?.__theme || "light");
  const [isMounted, setIsMounted] = useState(false);

  const isDark = theme === "dark";

  const switchTheme = () => {
    global.window?.__setPreferredTheme(isDark ? "light" : "dark");
  };
  const toggle = () => {
    if (!document.startViewTransition) {
      switchTheme();
      return;
    }
    document.startViewTransition(() => switchTheme());
  };

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // opt-out ssr
  if (!isMounted) {
    return <div className={styles.placeholder}>Loading...</div>;
  }
  return (
    <div className={styles[theme]}>
      <button className={styles["theme-toggle"]} onClick={toggle}>
        <svg
          className={`${styles["sun-moon"]} icon`}
          aria-hidden="true"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <mask className={styles["moon"]} id="moon-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <circle cx="24" cy="10" r="6" fill="#2f3032" />
          </mask>
          <circle
            className={styles["sun"]}
            cx="12"
            cy="12"
            r="6"
            mask="url(#moon-mask)"
            fill="currentColor"
          />
          <g className={styles["sun-beams"]} stroke="currentColor">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
      </button>
    </div>
  );
});

if (process.env.NODE_ENV === "development") {
  ThemeToggle.displayName = "ThemeToggle";
}
