import { HeadingLink } from '@/components/heading-link';
import { PostCard } from '@/components/post-card';
import horizon from '@/lib/horizon-bright.json';
import * as stylex from '@stylexjs/stylex';
import { Code } from 'bright';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ComponentProps, ReactNode } from 'react';
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeSlug from "rehype-slug";

import { getPost } from '@/lib/get-post';
import {
  colors,
  globalTokens as $,
  spacing,
  text,
} from '../globalTokens.stylex';
import { generateTocHeadings } from '@/lib/remark-toc-headings';
import { FrontMatter, PostMeta } from '@/types/post-meta';
import readingTime from 'reading-time';
import { getPostsMeta } from '@/lib/get-posts-meta';
import { getPostMeta } from '@/lib/get-post-meta';

export const generateStaticParams = async () => {
  const allPostsMeta = await getPostsMeta();
  return allPostsMeta.map((meta) => ({ slug: meta.slug }))
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const meta = await getPostMeta(params.slug)
  if (!meta) {
    notFound();
  }
  return {
    // baseurl not work here
    metadataBase: new URL('https://blog.sayya.moe'),
    title: `${meta.title} | Saya`,
    description: meta.description,
    keywords: meta.categories.join(','),
    openGraph: {
      title: `${meta.title} | Saya`,
      url: `${meta.url}`,
      description: meta.description,
      images: [{
        url: `https://blog.sayya.moe${meta.banner}`,
      }],
    },
  };
};

const components = {
  pre: (props: ComponentProps<'pre'>) => <CustomizeCode {...props} />,
  h2: (props: ComponentProps<'h2'>) => <HeadingLink tag='h2' {...props} />,
  h3: (props: ComponentProps<'h2'>) => <HeadingLink tag='h3' {...props} />,
  h4: (props: ComponentProps<'h2'>) => <HeadingLink tag='h4' {...props} />,
  h5: (props: ComponentProps<'h2'>) => <HeadingLink tag='h5' {...props} />,
  h6: (props: ComponentProps<'h2'>) => <HeadingLink tag='h6' {...props} />,
};

export default async function PostPage({ params }: { params: { slug: string } }) {
  const source = getPost(params.slug)
  if (!source) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<FrontMatter>({
    source,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeSlug]
      }
    }
  })

  const postMeta: PostMeta = {
    ...frontmatter,
    slug: params.slug,
    toc: generateTocHeadings(source),
    url: `/${params.slug}`,
    readTime: readingTime(source).text
  }

  return (
      <div {...stylex.props(styles.container)}>
        <PostCard postMeta={postMeta} type='post' />
        <article {...stylex.props(styles.article)}>
          {content}
        </article>
      </div>
  );
}

function CustomizeCode({ children, className }: { children?: ReactNode, className?: string }): ReactNode {
  return (
    <Code
      lineNumbers
      theme={horizon}
      className={className}
      {...stylex.props(preStyles.pre)}
    >
      {children}
    </Code>
  );
}

const preStyles = stylex.create({
  "pre": {
    // boxShadow: shadows.main,
    fontFamily: $.fontMono,
    fontSize: text.sm,
  },
});

const styles = stylex.create({
  container: {
    marginTop: {
      '@media (min-width: 769px)': spacing.sm
    }
  },
  article: {
    background: colors.bg1,
    padding: spacing.md,
    fontSize: text.p,
  },
});
