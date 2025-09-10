import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import AppWrapper from "@/components/common/AppWrapper";
import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mili Bajaj",
  description: "Portfolio website of Mili Bajaj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
