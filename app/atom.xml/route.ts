/* https://www.ietf.org/rfc/rfc4287.txt */
import { allPosts } from "contentlayer/generated";
import { sortPosts } from "@/lib/utils";
import { NextResponse } from "next/server";

export function GET() {
  const posts = sortPosts(allPosts);
  const headers = {
    "Content-Type": "application/xml",
  };

  const rss = `
   <feed xmlns="http://www.w3.org/2005/Atom">
     <title type="text">Saya 的个人博客</title>
     <updated>${posts[0].date}</updated>
     <id>Saya</id>
     <link rel="alternate" type="text/html"
      hreflang="en" href="http://example.org/"/>
     <link rel="self" type="application/atom+xml"
      href="http://example.org/feed.atom"/>
     <rights>Copyright 2023 ©Saya</rights>
     <generator>
        Next.js
     </generator>
     ${posts.map(
       (post) => `<entry>
            <title type="html">${post.title}</title>
            <link href="${post.url}" />
            <summary>
              ${post.description}
            </summary>
            <content type="html">
            <p>
              ${post.description}
            </p>
              <span>请前往 <a>${post.url}</a> 阅读全文</span>
            </content>
            <published>${post.date}</published>
          </entry>`
     ).join('')}
   </feed>
  `;

  console.log("rss:", rss);
 
  return new NextResponse(rss, { headers });
}
