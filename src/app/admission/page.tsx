import Link from "next/link";
import type { Metadata } from "next";
import { Banknote, CheckCircle2, CreditCard, Landmark, Smartphone } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { courses, formatPrice } from "@/data/courses";
import { cn } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

const enrollmentSteps = [
  {
    title: "無料体験・個別相談",
    description: "目的、経験、通学校舎、受講ペースを確認し、最適なコースをご提案します。",
  },
  {
    title: "コース決定・お申し込み",
    description: "申込内容と受講規約を確認し、初回授業日と振替方法までご案内します。",
  },
  {
    title: "お支払い・受講開始",
    description: "一括・分割など希望の支払い方法を選び、教材費なしでそのまま受講を開始できます。",
  },
];

const paymentMethods = [
  {
    title: "銀行振込",
    description: "一括払いに対応。振込先はお申し込み後にご案内します。",
    icon: Landmark,
  },
  {
    title: "クレジットカード",
    description: "主要カードでの決済に対応しています。",
    icon: CreditCard,
  },
  {
    title: "分割払い",
    description: "提携クレジットによる月々払いを選べます。",
    icon: Banknote,
  },
  {
    title: "オンライン決済",
    description: "遠方の方も来校前に手続きを進められます。",
    icon: Smartphone,
  },
];

export const metadata: Metadata = pageMetadata({
  title: "入学案内・料金 | MGA",
  description:
    "MGAの入学までの流れ、全8コースの料金、入会金・教材費なしの費用体系、支払い方法をご案内します。",
  path: "/admission",
});

export default function AdmissionPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "入学案内・料金", href: "/admission" }]} />
      <section className="bg-gradient-to-b from-white to-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <Badge className="mb-5 h-auto rounded-full bg-accent px-5 py-2 text-base text-accent-foreground">
              入会金・教材費なし
            </Badge>
            <h1 className="text-4xl font-black tracking-tight text-primary md:text-6xl">
              受講料だけで始められる、明朗な入学案内。
            </h1>
            <p className="mt-6 text-lg leading-9 text-muted-foreground">
              MGAは入会金・教材費をいただきません。必要な費用は各コースの受講料のみ。無料体験からコース選択、支払い、受講開始までスタッフが丁寧にご案内します。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="FLOW"
            title="入学までの3ステップ"
            description="初めての方でも迷わないよう、相談から受講開始までシンプルな流れにしています。"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {enrollmentSteps.map((step, index) => (
              <Card key={step.title} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary text-lg font-black text-white">
                    {index + 1}
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-primary">{step.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="PRICE"
            title="全8コース料金表"
            description="目的に合わせて選べるMGAの全コース料金です。表示価格には教材費が含まれます。"
          />
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-primary shadow-sm">
            <CheckCircle2 className="size-5 text-accent" aria-hidden />
            入会金0円・教材費0円・追加登録料なし
          </div>
          <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
            <table className="w-full min-w-[860px] text-left text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-5 py-4">コース</th>
                  <th className="px-5 py-4">受講料</th>
                  <th className="px-5 py-4">時間・形式</th>
                  <th className="px-5 py-4">習得内容</th>
                  <th className="px-5 py-4">補足</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {courses.map((course) => (
                  <tr key={course.slug}>
                    <td className="px-5 py-5 font-bold text-primary">{course.name}</td>
                    <td className="px-5 py-5 font-bold">
                      {formatPrice(course.price)}円
                    </td>
                    <td className="px-5 py-5">{course.hoursLabel}</td>
                    <td className="px-5 py-5">{course.techniques}</td>
                    <td className="px-5 py-5 text-muted-foreground">
                      {course.priceNote ?? "教材費込み"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="PAYMENT"
            title="お支払い方法"
            description="一括払いだけでなく、働きながら学びやすい分割払いにも対応しています。"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card key={method.title} className="border-0 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <Icon className="size-9 text-accent" aria-hidden />
                    <h2 className="mt-5 text-xl font-bold text-primary">
                      {method.title}
                    </h2>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold text-white/75">無料体験受付中</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              料金とコースを、あなたの目的に合わせて相談できます
            </h2>
            <p className="mt-4 leading-8 text-white/85">
              校舎、支払い方法、受講ペースまで個別にご案内します。
            </p>
          </div>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-12 rounded-full bg-accent px-8 text-base text-accent-foreground hover:bg-accent/90",
            )}
          >
            入学相談を予約する
          </Link>
        </div>
      </section>
    </>
  );
}
