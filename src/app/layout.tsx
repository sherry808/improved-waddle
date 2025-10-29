import AppWrapper from "@/components/common/AppWrapper";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { generateFontPreloadLinks } from "@/lib/font-optimization";
import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
        color: "#D2ADCE",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontPreloadLinks = generateFontPreloadLinks();

  return (
    <html lang="en">
      <head>
        {fontPreloadLinks.map((link, index) => (
          <link key={index} {...link} />
        ))}
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
      </head>
      <body suppressHydrationWarning>
        <AppWrapper>
          <Header />
          <main className="min-h-screen pt-[60px]">{children}</main>
          <Footer />
        </AppWrapper>
      </body>
    </html>
  );
}
