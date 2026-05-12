import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

import { site } from "@/data/site";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t bg-white p-3 shadow-lg md:hidden">
      <a
        href={`tel:${site.phone}`}
        className="flex h-12 items-center justify-center rounded-full border border-primary text-sm font-bold text-primary"
      >
        <Phone className="mr-2 size-4" aria-hidden />
        電話相談
      </a>
      <Link
        href="/contact"
        className="flex h-12 items-center justify-center rounded-full bg-accent text-sm font-bold text-white"
      >
        <CalendarCheck className="mr-2 size-4" aria-hidden />
        無料体験
      </Link>
    </div>
  );
}
