"use client";

import { type FormEvent, useState } from "react";
import { CheckCircle2, Mail, Phone } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { courses } from "@/data/courses";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const phonePattern = "^[0-9+\\-\\s()]{10,}$";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setIsSubmitted(false);
      form.reportValidity();
      return;
    }

    setIsSubmitted(true);
    form.reset();
  }

  return (
    <>
      <Breadcrumbs items={[{ label: "お問い合わせ", href: "/contact" }]} />
      <section className="bg-gradient-to-b from-white to-muted py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              label="CONTACT"
              title="無料体験・入学相談"
              description="コース選び、校舎、料金、支払い方法までお気軽にご相談ください。フォーム送信後、担当者よりご連絡します。"
            />
            <div className="grid gap-4">
              <Card className="border-0 bg-white shadow-sm">
                <CardContent className="flex items-center gap-4 p-5">
                  <Phone className="size-8 text-accent" aria-hidden />
                  <div>
                    <p className="text-sm text-muted-foreground">電話で相談</p>
                    <a href={site.phoneHref} className="text-xl font-bold text-primary">
                      {site.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white shadow-sm">
                <CardContent className="flex items-center gap-4 p-5">
                  <Mail className="size-8 text-accent" aria-hidden />
                  <div>
                    <p className="text-sm text-muted-foreground">メール</p>
                    <a href={`mailto:${site.email}`} className="font-bold text-primary">
                      {site.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border-0 bg-white shadow-sm">
            <CardContent className="p-6 md:p-8">
              {isSubmitted && (
                <div
                  className="mb-6 flex gap-3 rounded-xl bg-primary/10 p-4 text-primary"
                  role="status"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                  <p className="font-bold">
                    送信ありがとうございます。担当者より確認のうえご連絡します。
                  </p>
                </div>
              )}
              <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
                <Field label="お名前" htmlFor="name" required>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={inputClassName}
                    placeholder="山田 太郎"
                  />
                </Field>

                <Field label="電話番号" htmlFor="phone" required>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    pattern={phonePattern}
                    className={inputClassName}
                    placeholder="050-5491-2929"
                    title="10桁以上の電話番号を入力してください。ハイフン、スペース、括弧、+ が使用できます。"
                  />
                </Field>

                <Field label="メールアドレス" htmlFor="email" required>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClassName}
                    placeholder="example@example.com"
                  />
                </Field>

                <Field label="相談したいコース" htmlFor="course">
                  <select id="course" name="course" className={inputClassName} defaultValue="">
                    <option value="">未定・相談したい</option>
                    {courses.map((course) => (
                      <option key={course.slug} value={course.slug}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="お問い合わせ内容" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className={cn(inputClassName, "h-auto resize-y py-3")}
                    placeholder="受講目的、希望校舎、相談したい内容などをご記入ください。"
                  />
                </Field>

                <Button
                  type="submit"
                  className="h-12 rounded-full bg-accent px-8 text-base text-white hover:bg-accent/90"
                >
                  送信する
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block font-bold text-primary">
        {label}
        {required && <span className="ml-1 text-accent">必須</span>}
      </label>
      {children}
    </div>
  );
}

const inputClassName =
  "h-12 w-full rounded-xl border border-border bg-white px-4 text-base outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/20";
