import Link from "next/link";

import { campuses } from "@/data/campuses";
import { courses } from "@/data/courses";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const courseLinks = courses.slice(0, 5);

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-lg font-black text-white">
              MGA
            </span>
            <span className="font-bold text-primary">
              メディカルグローアップアカデミー
            </span>
          </Link>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            医学的根拠に基づくストレッチ技術を、家族ケアから独立開業まで支えるスクールです。
          </p>
        </div>
        <div>
          <h2 className="mb-4 font-bold text-primary">講座</h2>
          <ul className="space-y-2 text-sm">
            {courseLinks.map((course) => (
              <li key={course.slug}>
                <Link href={`/courses/${course.slug}`} className="hover:text-primary">
                  {course.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/courses" className="font-bold text-primary">
                すべての講座
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 font-bold text-primary">校舎</h2>
          <ul className="space-y-2 text-sm">
            {campuses.map((campus) => (
              <li key={campus.slug}>
                <Link href={`/campus/${campus.slug}`} className="hover:text-primary">
                  {campus.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 font-bold text-primary">お問い合わせ</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`tel:${site.phone}`} className="font-bold text-primary">
                {site.phone}
              </a>
            </li>
            <li>{site.address}</li>
            <li>
              <Link href="/privacy" className="hover:text-primary">
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-primary">
                利用規約
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-5 text-center text-xs text-muted-foreground">
        © {year} MGA メディカルグローアップアカデミー. All rights reserved.
      </div>
    </footer>
  );
}
