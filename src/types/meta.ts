import type { ReactElement } from "react";
import type { Toc } from "./toc";

export interface FrontMatter {
  title: string;
  slug: string;
  date: string;
  description: string;
  banner: string;
  tags: string[];
  categories: string[];
}

export interface Post {
  meta: FrontMatter & {
    slug: string;
    toc: Toc;
    readingTime: string;
  };
  content: ReactElement;
}
