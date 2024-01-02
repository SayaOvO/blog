import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import readingTime from "reading-time";
import { generateTocHeadings } from "./lib/remark-toc-headings";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    banner: { type: "string", required: true },
    tags: { type: "json", required: true },
    categories: { type: "json", required: true }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    readingTime: {
      type: "json",
      resolve: (post) => readingTime(post.body.raw)
    },
    toc: {
      type: "json",
      resolve: (post) => generateTocHeadings(post.body.raw)
    }
  },
}));

export default makeSource({ 
  contentDirPath: "content", 
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug]
  }
 });
