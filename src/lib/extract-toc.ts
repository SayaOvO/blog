import GithubSlug from "github-slugger";
import { fromMarkdown } from "mdast-util-from-markdown";
import type { Toc } from "@/types/toc";
import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import { pinyin } from "pinyin-pro";

export function extractToc(markdown: string): Toc {
  const toc: Toc = [];
  const tree = fromMarkdown(markdown);

  visit(tree, "heading", (node) => {
    const slugs = new GithubSlug();
    toc.push({
      content: toString(node),
      depth: node.depth,
      id: slugs.slug(
        pinyin(toString(node), {
          toneType: "none",
          nonZh: "consecutive",
        }).replaceAll(/ +/g, " "),
      ),
    });
  });
  return toc;
}
