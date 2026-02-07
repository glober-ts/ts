import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "var(--color-base)",
        text: "var(--color-text)",
        accent: "var(--color-accent)",
        muted: "var(--color-muted)",
        border: "var(--color-border)"
      }
    }
  },
  plugins: []
};

export default config;
