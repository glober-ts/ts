import { Metadata } from "next";
import { Card } from "@/components/card";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Collection",
  description: "ベーネベーネのリング、ネックレス、ピアスコレクション。"
};

const collections = [
  {
    title: "Ring Collection",
    description: "細身からボリュームまで、指先を美しく見せるバランス設計。",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Necklace Collection",
    description: "首元に自然に溶け込む長さと、繊細なチェーンワーク。",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Earrings Collection",
    description: "軽さと安定感を両立し、日常で心地よく使える設計。",
    image:
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=900&q=80"
  }
];

export default function CollectionPage() {
  return (
    <Section
      eyebrow="Collection"
      title="コレクション"
      description="季節や装いに合わせて楽しめる、ベーネベーネのラインナップ。"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {collections.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
