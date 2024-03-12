import GithubSlugger from 'github-slugger'
import { Heading } from "mdast";
import { visit } from "unist-util-visit"
import {fromMarkdown} from 'mdast-util-from-markdown'
import { toString } from 'mdast-util-to-string'
import { Toc } from '@/types/toc';


export function generateTocHeadings(markdown: string) {
  const toc: Toc = [];

  const tree = fromMarkdown(markdown);

  visit(tree, 'heading', (node: Heading) => {
    const slugger = new GithubSlugger()
    const textContent = toString(node).trim();
    toc.push({
      value: textContent,
      slug: slugger.slug(textContent),
      depth: node.depth
    })
  });
  return toc;
}
