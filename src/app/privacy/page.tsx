import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "プライバシーポリシー | MGA",
  description:
    "MGA メディカルグローアップアカデミーのプライバシーポリシーです。",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "プライバシーポリシー", href: "/privacy" }]} />
      <section className="bg-gradient-to-b from-white to-muted py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeader
            label="PRIVACY"
            title="プライバシーポリシー"
            description="本ページは公開前の仮テキストです。正式な個人情報保護方針は内容確認後に掲載します。"
          />
          <Card className="border-0 bg-white shadow-sm">
            <CardContent className="space-y-6 p-6 leading-8 text-muted-foreground">
              <p>
                MGA メディカルグローアップアカデミーは、お問い合わせ、体験予約、受講手続きにおいて取得する個人情報を、利用目的の範囲内で適切に取り扱います。
              </p>
              <p>
                取得した情報は、受講案内、連絡、サービス改善、法令に基づく対応のために利用し、本人の同意なく第三者へ提供しません。ただし、法令により開示が求められる場合を除きます。
              </p>
              <p>
                個人情報の開示、訂正、削除等をご希望の場合は、お問い合わせ窓口までご連絡ください。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
