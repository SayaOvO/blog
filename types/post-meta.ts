import { Toc } from "./toc";

export type PostMeta = FrontMatter & {
    slug: string;
    url: string;
    readTime: string;
    toc: Toc
}

export interface FrontMatter {
    title: string;
    date: string;
    description: string;
    banner: string;
    tags: string[];
    categories: string[];

}
