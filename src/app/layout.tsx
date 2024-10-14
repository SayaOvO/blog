import type { Metadata } from "next";

import "./globals.css";
import React from "react";
import { Nav } from "@/components/nav";
import { AvatarProvider } from "@/contexts/avatar-context";
import { BackToTop } from "@/components/back-to-top";
import { metaData } from "@/lib/metadata";
import { ActiveAnchorProvider } from "@/contexts/active-anchor";
import ThemeScript from "@/lib/ThemeScript";

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
      <AvatarProvider>
        <ActiveAnchorProvider>
          <body>
            <Nav />
            <BackToTop />
            {children}
          </body>
        </ActiveAnchorProvider>
      </AvatarProvider>
    </html>
  );
}
