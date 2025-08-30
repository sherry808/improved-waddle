import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import Header from "@/components/landing/Header";

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
        <Header />
        <main className="min-h-screen pt-[60px]">
          {children}
        </main>
      </body>
    </html>
  );
}
