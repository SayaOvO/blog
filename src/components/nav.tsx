import Link from "next/link";
import styles from "./nav.module.css";
import { Rss } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export const Nav = () => {
  return (
    <header className={`p-4 shadow-md ${styles.header}`}>
      <div className="container flex nav-container navbar-container">
        <Link href="/">Saya&apos;s blog</Link>
        <nav className="flex main-nav">
          <ul className="flex">
            <li>
              <a href="#" className="link" data-content="归档">
                归档
              </a>
            </li>
            <li>
              <a href="#" className="link" data-content="分享">
                分享
              </a>
            </li>
            <li>
              <a href="#" className="link" data-content="关于">
                关于
              </a>
            </li>
          </ul>

          <ul className="flex push-right">
            <li>
              <a
                href="
                /atom"
                target="_blank"
              >
                <Rss className="icon" />
              </a>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
