import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "利用規約 | MGA",
  description: "MGA メディカルグローアップアカデミーの利用規約です。",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "利用規約", href: "/terms" }]} />
      <section className="bg-gradient-to-b from-white to-muted py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeader
            label="TERMS"
            title="利用規約"
            description="本ページは公開前の仮テキストです。正式な受講規約は内容確認後に掲載します。"
          />
          <Card className="border-0 bg-white shadow-sm">
            <CardContent className="space-y-6 p-6 leading-8 text-muted-foreground">
              <p>
                本規約は、MGA メディカルグローアップアカデミーが提供する講座、体験セミナー、関連サービスの利用条件を定めるものです。
              </p>
              <p>
                受講生は、申込時に案内される受講日程、支払い条件、振替、キャンセル、返金に関する規定を確認し、同意のうえでサービスを利用するものとします。
              </p>
              <p>
                講座内容、教材、動画、配布資料の無断転載、複製、第三者への共有は禁止します。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
