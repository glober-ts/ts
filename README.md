# ジュエリー工房ベーネベーネ ブランドサイト

Next.js（App Router + TypeScript）と Tailwind CSS で構築した、オフィシャルブランドサイト実装です。

## フォルダ構成

```bash
.
├── app/
│   ├── collection/page.tsx
│   ├── craftsmanship/page.tsx
│   ├── contact/page.tsx
│   ├── custom-repair/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── card.tsx
│   ├── cta-buttons.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   └── section.tsx
├── config/
│   └── site.ts
├── public/
│   └── og-image.svg
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## ローカル起動方法

1. 依存関係をインストール

```bash
npm install
```

2. 開発サーバー起動

```bash
npm run dev
```

3. ブラウザで確認

```txt
http://localhost:3000
```

4. 本番ビルド確認

```bash
npm run build
npm run start
```

## デプロイ方法（Vercel想定）

1. GitHub にこのリポジトリを push
2. Vercel で `New Project` → 対象リポジトリを選択
3. Framework Preset が `Next.js` であることを確認
4. `Deploy` を実行
5. 必要に応じて独自ドメインを設定

## 文言・画像・色の差し替え箇所

- サイト名、説明、URL、SNS、テーマカラー、CTA文言
  - `config/site.ts`
- 各ページ本文
  - `app/page.tsx`
  - `app/collection/page.tsx`
  - `app/craftsmanship/page.tsx`
  - `app/custom-repair/page.tsx`
  - `app/contact/page.tsx`
- 画像
  - `components/hero.tsx`
  - `components/card.tsx`
  - `app/craftsmanship/page.tsx`
- OGP画像
  - `public/og-image.svg`

## 補足

- すべて TypeScript 実装
- `next/image` を使用
- Google Fonts（Playfair Display / Noto Sans JP）を `app/layout.tsx` で設定
- SEO 基本設定（metadata / OGP / Twitter Card）対応済み
