import { compileMDX } from "next-mdx-remote/rsc";
import { getPost } from "@/lib/get-post"
import readingTime from "reading-time";

import { PostMeta, type FrontMatter } from "@/types/post-meta"
import { generateTocHeadings } from "./remark-toc-headings";
import rehypeSlug from "rehype-slug";

export async function getPostMeta(slug: string): Promise<PostMeta> {
    const source = getPost(slug)
    const { frontmatter } = await compileMDX<FrontMatter>({
        source,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [rehypeSlug]
            }
        }
    });
    return {
        ...frontmatter,
        slug,
        url: `/${slug}`,
        readTime: readingTime(source).text,
        toc: generateTocHeadings(source),
    }
}
