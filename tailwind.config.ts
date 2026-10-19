import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { background: "var(--color-background)", "background-elevated": "var(--color-background-elevated)", surface: "var(--color-surface)", "surface-hover": "var(--color-surface-hover)", "border-subtle": "var(--color-border-subtle)", "border-strong": "var(--color-border-strong)", "text-primary": "var(--color-text-primary)", "text-secondary": "var(--color-text-secondary)", "text-tertiary": "var(--color-text-tertiary)", "accent-cool": "var(--color-accent-cool)", "accent-warm": "var(--color-accent-warm)", "accent-red": "var(--color-accent-red)", "accent-pink": "var(--color-accent-pink)", "accent-lavender": "var(--color-accent-lavender)" },
    fontFamily: { display: ["var(--font-display)","system-ui","sans-serif"], sans: ["var(--font-sans)","system-ui","sans-serif"], mono: ["var(--font-mono)","ui-monospace","monospace"] }
  } },
  plugins: [],
};
export default config;
