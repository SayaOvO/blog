import { Footer } from '@/components/footer';
import { Sidebar } from '@/components/sidebar';
import { ActiveAnchorProvider } from '@/contexts/active-anchor';
import * as stylex from '@stylexjs/stylex';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { spacing } from '../globalTokens.stylex';

export default function PostPageLayout({
  params,
  children,
}: {
  params: {
    slug: string;
  };
  children: React.ReactNode;
}) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <ActiveAnchorProvider>
      <div>
        <div {...stylex.props(styles.container)}>
          <Sidebar post={post} />
          <main {...stylex.props(styles.main)}>{children}</main>
        </div>
        <Footer path={post.url} />
      </div>
    </ActiveAnchorProvider>
  );
}

const styles = stylex.create({
  container: {
    display: 'grid',
    gridTemplateColumns: {
      '@media (max-width: 768px)': 'repeat(1, minmax(0, 1fr))',
      '@media (min-width: 769px)': 'repeat(28, minmax(0, 1fr))',
    },
    gap: spacing.md,
    paddingInline: {
      '@media (min-width: 769px)': spacing.md
    },
    maxWidth: '1576px',
    marginInline: 'auto',
  },
  main: {
    flex: 1,
    paddingBlock: {
      '@media (min-width: 769px)': spacing.md
    },
    gridColumn: {
      '@media (max-width: 768px)': 'span 1',
      '@media (min-width: 769px) and (max-width: 1024px)': 'span 18',
      '@media (min-width: 1025px)': 'span 14',
    },
  },
});
