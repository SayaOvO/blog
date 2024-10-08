/* 修改版 rehype-slug ? */
import GithubSlug from "github-slugger";
import { pinyin } from "pinyin-pro";
import type { Root } from "hast";
import { headingRank } from "hast-util-heading-rank";
import { toString } from "hast-util-to-string";
import { visit } from "unist-util-visit";

const rehypeSlug = () => {
  return function (tree: Root) {
    // slugs.reset();

    visit(tree, "element", (node) => {
      const slugs = new GithubSlug();
      const depth = headingRank(node);
      if (depth && !node.properties.id) {
        const id = pinyin(toString(node), {
          toneType: "none",
          nonZh: "consecutive",
        }).replaceAll(/ +/g, " ");
        node.properties.id = slugs.slug(id);
      }
    });
  };
};

export default rehypeSlug;
