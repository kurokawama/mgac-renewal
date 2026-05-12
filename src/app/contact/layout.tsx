import type { Metadata } from "next";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "お問い合わせ | MGA",
  description:
    "MGAの無料体験、入学相談、コース選択、校舎見学に関するお問い合わせフォームです。",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
