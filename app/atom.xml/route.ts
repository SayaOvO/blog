/* https://www.ietf.org/rfc/rfc4287.txt */

import { getPostsMeta } from "@/lib/get-posts-meta";
import { sortPosts } from "@/lib/utils";
import { NextResponse } from "next/server";


export async function GET() {

  const posts = await getPostsMeta();
  const metas = sortPosts(posts);
  const headers = {
    "Content-Type": "application/xml",
  };

  const rss = `
   <feed xmlns="http://www.w3.org/2005/Atom">
     <title type="text">Saya 的个人博客</title>
     <updated>${posts[0].date}</updated>
     <id>Saya</id>
     <link rel="alternate" type="text/html"
      hreflang="en" href="https://blog.sayya.moe"/>
     <link rel="self" type="application/atom+xml"
      href="https://blog.sayya.moe/atom.xml"/>
     <rights>Copyright 2023 ©Saya</rights>
     <generator>
        Next.js
     </generator>
     ${metas.map(
       (meta) => `<entry>
            <title type="html">${meta.title}</title>
            <link href="${meta.url}" />
            <summary>
              ${meta.description}
            </summary>
            <content type="html">
            <p>
              ${meta.description}
            </p>
              <span>请前往 <a>${`https://blog.sayya.moe${meta.url}`}</a> 阅读全文</span>
            </content>
            <published>${meta.date}</published>
          </entry>`
     ).join('')}
   </feed>
  `;
 
  return new NextResponse(rss, { headers });
}
