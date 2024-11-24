import type { Metadata } from "next";

import "./globals.css";
import React from "react";
import { Nav } from "@/components/nav";
import { BackToTop } from "@/components/back-to-top";
import { metaData } from "@/lib/metadata";
import { ActiveAnchorProvider } from "@/contexts/active-anchor";
import ThemeScript from "@/lib/ThemeScript";
import { Footer } from "@/components/footer";

export const metadata: Metadata = metaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <ActiveAnchorProvider>
        <body>
          <Nav />
          <BackToTop />
          {children}
          <Footer />
        </body>
      </ActiveAnchorProvider>
    </html>
  );
}
