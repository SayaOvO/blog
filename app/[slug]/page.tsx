import { PostCard } from '@/components/post-card';
import horizon from '@/lib/horizon-bright.json';
import * as stylex from '@stylexjs/stylex';
import { Code } from 'bright';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import {
  colors,
  globalTokens as $,
  shadows,
  spacing,
  text,
} from '../globalTokens.stylex';

export const revalidate = 60;

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) {
    notFound();
  }
  return {
    // baseurl not work here
    metadataBase: new URL('https://blog.sayya.moe'),
    title: `${post.title} | Saya`,
    description: post.description,
    keywords: post.categories.join(','),
    openGraph: {
      title: `${post.title} | Saya`,
      url: `${post.url}`,
      description: post.description,
      images: [{
        url: `https://blog.sayya.moe${post.banner}`,
      }],
    },
  };
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div {...stylex.props(styles.contaner)}>
      <PostCard post={post} type='post' />
      <article {...stylex.props(styles.article)}>
        <MDXContent components={{ pre: CustomizeCode }} />
      </article>
    </div>
  );
}

function CustomizeCode({ children }: { children?: ReactNode }): ReactNode {
  return (
    <Code lineNumbers theme={horizon} {...stylex.props(preStyles.pre)}>
      {children}
    </Code>
  );
}

const preStyles = stylex.create({
  pre: {
    boxShadow: shadows.main,
    fontFamily: $.fontMono,
    fontSize: text.sm,
  },
});

const styles = stylex.create({
  contaner: {
    marginTop: spacing.sm,
  },
  article: {
    background: colors.bg1,
    padding: spacing.md,
    fontSize: text.p,
  },
});
