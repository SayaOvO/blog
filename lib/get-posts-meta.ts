import path from "node:path";
import fs from "node:fs";
import { PostMeta } from "@/types/post-meta";
import { getPostMeta } from "@/lib/get-post-meta";

export async function getPostsMeta(): Promise<PostMeta[]> {
    const p = path.resolve('content');
    const dirs = fs.readdirSync(p);
    return await Promise.all((dirs).map((dir) => getPostMeta(dir)));
}
