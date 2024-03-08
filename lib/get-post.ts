import path from 'node:path';
import fs from 'node:fs';

export function getPost(slug: string): string {
    const filePath = path.resolve(`content/${slug}/index.mdx`);
    return fs.readFileSync(filePath).toString();
}
