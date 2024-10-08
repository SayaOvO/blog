import path from "node:path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "./rehype-slug";
import { FrontMatter, type Post } from "@/types/meta";
import { SideNote } from "@/components/sidenote";
import { extractToc } from "./extract-toc";
import readingTime from "reading-time";
import rehypeShiki from "@shikijs/rehype";
import type { Element } from "hast";
import type { ShikiTransformerContext } from "shiki/types.mjs";
import remarkGfm from "remark-gfm";
import type { ComponentProps } from "react";
import Link from "next/link";
import { HeadingLink } from "@/components/heading-link";

export const getPost = (slug: string) => {
  try {
    const filePath = path.resolve(`content/${slug}.mdx`);
    return fs.readFileSync(filePath).toString();
  } catch {
    throw new Error(`Can't read the file: ${slug}`);
  }
};

const components = {
  SideNote,
  a: (props: ComponentProps<"a">) => {
    const href = props.href;
    if (href && (href.startsWith("/") || href.startsWith("#"))) {
      return (
        <Link href={href} className="link" data-content={props.children}>
          {props.children}
        </Link>
      );
    } else {
      return (
        <a
          {...props}
          href={props.href}
          className="link colored"
          data-content={props.children}
          target="_blank"
        />
      );
    }
  },
  h2: (props: ComponentProps<"h2">) => <HeadingLink tag="h2" {...props} />,
  h3: (props: ComponentProps<"h2">) => <HeadingLink tag="h3" {...props} />,
  h4: (props: ComponentProps<"h2">) => <HeadingLink tag="h4" {...props} />,
  h5: (props: ComponentProps<"h2">) => <HeadingLink tag="h5" {...props} />,
  h6: (props: ComponentProps<"h2">) => <HeadingLink tag="h6" {...props} />,
};

export const getCompiledPost = async (slug: string): Promise<Post> => {
  const source = getPost(slug);
  const { frontmatter, content } = await compileMDX<FrontMatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          remarkGfm,
          rehypeSlug,
          [
            rehypeShiki,
            {
              themes: {
                light: "rose-pine-dawn",
                dark: "tokyo-night",
              },
              transformers: [
                {
                  pre(this: ShikiTransformerContext, node: Element) {
                    node.properties["data-language"] =
                      this.options.lang.toUpperCase();
                  },
                },
              ],
              // transformers: [
              //   {
              //     pre(node: Element) {
              //       node.properties["data-language"] =
              //         // @ts-expect-error need to figure out the type of `this`
              //         this.options.language.toUpperCase();
              //     },
              //   },
              // ],
            },
          ],
        ],
      },
    },
    components,
  });
  return {
    meta: {
      ...frontmatter,
      slug,
      toc: extractToc(source),
      readingTime: readingTime(source).text,
    },
    content,
  };
};

export const sortPosts = (posts: Post[]): Post[] => {
  return posts.sort(
    (p1, p2) => Date.parse(p2.meta.date) - Date.parse(p1.meta.date),
  );
};

export const getAllMeta = async () => {
  try {
    const p = path.resolve("content");
    const filenames = fs.readdirSync(p);
    const posts = await Promise.all(
      filenames.map((filename) =>
        getCompiledPost(filename.replace(/\.mdx$/, "")),
      ),
    );
    return sortPosts(posts);
  } catch (error: unknown) {
    throw new Error(`Can't read, ${(error as Error).message}`);
  }
};
