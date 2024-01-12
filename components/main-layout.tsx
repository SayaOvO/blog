import * as stylex from "@stylexjs/stylex";
import { spacing } from "../app/globalTokens.stylex"
import { Sidebar } from "./sidebar";
import { Footer } from "./footer";
import { LatestPosts } from "./sidebar/latest-posts";

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({
  children
}: MainLayoutProps) {

  return (
    <div>
      <div {...stylex.props(styles.container)}>
        <Sidebar />
        <main {...stylex.props(styles.main)}>
          {children}
        </main>
        <div {...stylex.props(styles.latest)}>
          <LatestPosts />
        </div>
      </div>
      <Footer />
    </div>
  )
}

const styles = stylex.create({
  container: {
    display: "grid",
    gridTemplateColumns: {
      "@media (max-width: 768px)": "repeat(1, minmax(0, 1fr))",
      "@media (min-width: 769px)": "repeat(28, minmax(0, 1fr))"
    },
    gap: spacing.md,
    paddingInline: spacing.md,
    maxWidth: "1576px",
    marginInline: "auto"
  },
  main: {
    flex: 1,
    paddingBlock: spacing.md,
    marginBlock: spacing.sm,
    gridColumn: {
      '@media (max-width: 768px)': 'span 1',
      '@media (min-width: 769px) and (max-width: 1024px)': 'span 17',
      '@media (min-width: 1025px)': 'span 14'
    }
  },
  latest: {
    display: {
      default: "block",
      "@media (min-width: 769px) and (max-width: 1024px)": "none",
    },
    order: {
      "@media (max-width: 768px)": 1,
    },
    gridColumn: {
      default: "span 1",
      "@media (min-width: 769px) and (max-width: 1024px)": "span 11",
      "@media (min-width: 1025px)": "span 7",
    },
    marginTop: {
      default: 0,
      "@media (min-width: 1025px)": spacing.sm
    },
  paddingBlock: {
      default: 0,
      "@media (min-width: 1025px)": spacing.md,
    },
    
  }
});
