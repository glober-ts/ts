import Image from "next/image";
import { CTAButtons } from "@/components/cta-buttons";

type HeroProps = {
  title: string;
  description: string;
  imageAlt: string;
};

export function Hero({ title, description, imageAlt }: HeroProps) {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-2 lg:px-8 lg:pt-16">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Official Brand Site</p>
        <h1 className="font-serif text-4xl leading-tight text-text sm:text-5xl">{title}</h1>
        <p className="max-w-prose text-sm leading-relaxed text-text/75 sm:text-base">{description}</p>
        <CTAButtons />
      </div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border">
        <Image
          src="https://images.unsplash.com/photo-1543295204-8e6d2f26a4d5?auto=format&fit=crop&w=1200&q=80"
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
