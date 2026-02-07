import { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Craftsmanship",
  description: "ベーネベーネのものづくりと品質へのこだわり。"
};

const points = [
  "素材ごとの特性を活かした設計",
  "熟練職人による微細な仕上げ",
  "着用感を重視した最終調整"
];

export default function CraftsmanshipPage() {
  return (
    <Section
      eyebrow="Craftsmanship"
      title="ものづくり"
      description="見た目の美しさだけでなく、長く愛用できる耐久性と着け心地を追求しています。"
    >
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden border border-border">
          <Image
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80"
            alt="職人の作業風景"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <ul className="space-y-4 text-sm leading-relaxed text-text/80">
          {points.map((point) => (
            <li key={point} className="border-l-2 border-accent pl-4">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
