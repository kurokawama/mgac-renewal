import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCTABar } from "@/components/MobileCTABar";
import { site } from "@/data/site";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "MGA メディカルグローアップアカデミー | ストレッチスクール",
  description: site.description,
  openGraph: {
    title: "MGA メディカルグローアップアカデミー | ストレッチスクール",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col pb-20 md:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
