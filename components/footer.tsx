import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-muted">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-serif text-lg">{siteConfig.name}</h2>
          <p className="mt-3 text-sm leading-relaxed text-text/75">{siteConfig.description}</p>
        </div>
        <div className="md:justify-self-end">
          <p className="text-sm font-medium">SNS</p>
          <div className="mt-3 flex gap-4 text-sm">
            <Link href={siteConfig.social.instagram} target="_blank" className="hover:text-accent">
              Instagram
            </Link>
            <Link href={siteConfig.social.x} target="_blank" className="hover:text-accent">
              X
            </Link>
          </div>
          <p className="mt-6 text-xs text-text/60">© {new Date().getFullYear()} Bene Bene</p>
        </div>
      </div>
    </footer>
  );
}
