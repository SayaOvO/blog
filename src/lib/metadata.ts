import type { Metadata } from "next";

export const metaData: Metadata = {
  title: {
    template: "%s | Saya",
    default: "Saya's blog",
  },
  description: "Saya 的个人博客，主要用来记录和分享学习过程中遇到的有趣的知识",
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["React", "JavaScript", "Frontend", "Next.js"],
  creator: "Saya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://blog.sayya.moe"),
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Saya's 博客",
    description: "Saya 的个人博客",
    creator: "@SayyaOvO",
    creatorId: "@SayyaOvO",
  },
  alternates: {
    canonical: "/",
    types: {
      "application/atom+xml": [
        {
          url: "/atom.xml",
          title: "Atom RSS of Saya's blog",
        },
      ],
    },
  },
};
