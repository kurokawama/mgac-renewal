"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-lg font-black text-white">
            MGA
          </span>
          <span className="hidden text-sm font-bold leading-tight text-primary sm:block">
            メディカルグローアップ
            <br />
            アカデミー
          </span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {site.navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  render={<Link href={item.href} />}
                  className="text-foreground hover:text-primary"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-3 md:flex">
          <a className="text-sm font-bold text-primary" href={`tel:${site.phone}`}>
            {site.phone}
          </a>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-12 rounded-full bg-accent px-8 text-base text-white hover:bg-accent/90",
            )}
          >
            無料体験
          </Link>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-full border text-primary md:hidden"
                aria-label="メニューを開く"
              />
            }
          >
            <Menu className="size-5" aria-hidden />
          </SheetTrigger>
          <SheetContent className="bg-white">
            <SheetHeader>
              <SheetTitle className="text-primary">MGA メニュー</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-2 px-4">
              {site.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-base font-bold text-foreground hover:bg-muted hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "mt-4 h-12 rounded-full bg-accent px-8 text-base text-white hover:bg-accent/90",
                )}
              >
                無料体験を予約
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
