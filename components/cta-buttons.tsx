import Link from "next/link";
import { siteConfig } from "@/config/site";

export function CTAButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link
        href="/collection"
        className="inline-flex items-center justify-center border border-accent bg-accent px-6 py-3 text-sm text-white transition hover:opacity-90"
      >
        {siteConfig.ctas.collection}
      </Link>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center border border-text px-6 py-3 text-sm text-text transition hover:border-accent hover:text-accent"
      >
        {siteConfig.ctas.consultation}
      </Link>
    </div>
  );
}
