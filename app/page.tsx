import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Card } from "@/components/card";

const featuredItems = [
  {
    title: "Signature Ring",
    description: "日常に寄り添う繊細なアームと、光を映す石座のバランス。",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Layered Necklace",
    description: "重ねても単体でも、静かな存在感を放つミニマルデザイン。",
    image:
      "https://images.unsplash.com/photo-1619994403073-2cec2f3e7d11?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Pearl Earrings",
    description: "柔らかな輝きと、耳元に沿う柔和な曲線。",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=900&q=80"
  }
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="静かに、永く。
毎日に馴染むジュエリー。"
        description="ジュエリー工房ベーネベーネは、素材選定から仕上げまで一貫して向き合い、装う人の物語に寄り添う一品をお届けします。"
        imageAlt="ベーネベーネの代表コレクション"
      />

      <Section
        eyebrow="Featured"
        title="注目コレクション"
        description="ミニマルで上質な佇まいを大切にした、ベーネベーネの定番ライン。"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {featuredItems.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </Section>
    </>
  );
}
