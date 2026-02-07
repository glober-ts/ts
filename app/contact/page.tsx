import { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Contact",
  description: "お問い合わせ・ご相談フォーム案内。"
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="お問い合わせ"
      description="オーダー・リフォーム・修理のご相談は、以下の窓口よりお気軽にお問い合わせください。"
    >
      <div className="grid gap-6 border border-border p-6 md:grid-cols-2">
        <div className="space-y-2 text-sm text-text/80">
          <p>メール: support@bene-bene.jp</p>
          <p>電話: 00-0000-0000（平日 10:00 - 18:00）</p>
          <p>所在地: 東京都台東区（ショールーム予約制）</p>
        </div>
        <div className="space-y-3 text-sm text-text/75">
          <p>※ 本実装ではフォーム連携は未接続です。必要に応じて Formspree / HubSpot / API Route に接続してください。</p>
          <p>※ 返信までに2〜3営業日いただく場合がございます。</p>
        </div>
      </div>
    </Section>
  );
}
