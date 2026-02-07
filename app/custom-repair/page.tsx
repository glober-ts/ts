import { Metadata } from "next";
import { Section } from "@/components/section";
import { CTAButtons } from "@/components/cta-buttons";

export const metadata: Metadata = {
  title: "Custom & Repair",
  description: "オーダーメイド・リフォーム・修理のご相談ページ。"
};

const services = [
  {
    title: "オーダーメイド",
    description: "ご希望の石やデザインイメージをもとに、世界にひとつのジュエリーを制作します。"
  },
  {
    title: "リフォーム",
    description: "譲り受けたジュエリーを、今のライフスタイルに合うデザインへ再構築します。"
  },
  {
    title: "修理・メンテナンス",
    description: "石留め調整、磨き直し、サイズ調整など、長く使うためのケアをご提案します。"
  }
];

export default function CustomRepairPage() {
  return (
    <Section
      eyebrow="Consultation"
      title="オーダー・リフォーム・修理"
      description="専任スタッフがヒアリングから仕上げまで丁寧に伴走します。"
    >
      <div className="space-y-5">
        {services.map((service) => (
          <article key={service.title} className="border border-border p-5">
            <h3 className="font-serif text-2xl">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text/75">{service.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <CTAButtons />
      </div>
    </Section>
  );
}
