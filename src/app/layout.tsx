
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageMotion from "@/components/PageMotion";

export const metadata: Metadata = {
  title: {
    default: "AzureMoon® — Digital Experiences Beyond Limits",
    template: "%s | AzureMoon",
  },
  description:
    "AzureMoon is a creative digital agency crafting exceptional digital experiences, immersive websites, and modern digital products.",
  applicationName: "AzureMoon",
  keywords: [
    "AzureMoon",
    "Digital Agency",
    "Creative Agency",
    "Web Design",
    "Next.js Development",
    "GSAP Animation",
    "Digital Experiences",
  ],
  openGraph: {
    title: "AzureMoon® — Digital Experiences Beyond Limits",
    description:
      "We create distinctive digital experiences through design, technology, and motion.",
    siteName: "AzureMoon",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080B14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <div id="top">
            <SiteHeader />
          </div>

          <main>
            <PageMotion>{children}</PageMotion>
          </main>

          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
