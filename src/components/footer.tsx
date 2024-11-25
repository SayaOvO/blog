import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import { Github } from "lucide-react";
import { CurrentYear } from "./current-year";
import { VisitorsStats } from "./visitor-stats";

export function Footer() {
  return (
    <footer className={styles.container}>
      <p className={styles.item}>
        <Link href="https://www.nextjs.org" target="_blank">
          <span className={styles.text}>Build with</span>
          <Image src="next.svg" alt="" width={12} height={12} />
          <span className={styles.text}>Next.js</span>
        </Link>
      </p>
      <p className={styles.item}>
        <Link href="https://github.com/sayaOvO/blog" target="_blank">
          <span className={styles.text}>Open sourced on</span>
          <Github size={12} />
          <span className={styles.text}>Github</span>
        </Link>
      </p>
      <p className={styles.item}>
        <span className={styles.text}>&copy; Saya </span>
        <CurrentYear />
      </p>
      <VisitorsStats />
    </footer>
  );
}
