import { Metadata } from "next";

export const meta: Metadata = {
  metadataBase: new URL("https://blog.sayya.moe"),
  title: "首页 | Saya's blog",
  description: "Saya 的个人博客，主要记录学习中的碰到觉得有意思的技术，目前偏前端方面的知识",
  applicationName: "Saya's blog",
  authors: [{
    name: "Saya",
    url: "https://www.github.com/SayaOvO"
  }],
  generator: "Next.js",
  keywords: "frontend, blog",
  creator: "Saya",
  publisher: "Vercel",
  robots: "index, follow",
  alternates: {
    canonical: "/",
    types: {
      'application/atom+xml': [
        {
          url: "/atom.xml",
          title: "Atom RSS of Saya's blog"
        }
      ]
    }
  },
  openGraph: {
    title: "首页 | Saya 的个人博客",
    url: "/",
    description: "Saya 的个人博客，主要记录学习中的碰到觉得有意思的技术，目前偏前端方面的知识",
    siteName: "Saya's blog",
    type: "website",
    locale: "zh-Hans",
    images: [{
      url: "/avatar.jpg"
    }]
  },
  twitter: {
    creator: "@SayyaOvO",
    site: "@SayyaOvO"
  },
  appleWebApp: {
    capable: true,
    title: "首页 | Saya 的个人博客",
    statusBarStyle: "default"
  }
};