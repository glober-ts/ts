import Link from "next/link";
import { siteConfig } from "@/config/site";

const navItems = [
  { href: "/collection", label: "Collection" },
  { href: "/craftsmanship", label: "Craftsmanship" },
  { href: "/custom-repair", label: "Custom & Repair" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="border-b border-border/70 bg-base/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link href="/" className="font-serif text-xl tracking-wide text-text">
          {siteConfig.name}
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm text-text/80 sm:gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
