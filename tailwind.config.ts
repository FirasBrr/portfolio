import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ---------- Base surfaces ---------- */
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        dim: "rgb(var(--color-dim) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",

        /* ---------- Text ---------- */
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",

        /* ---------- Primary accent — sky blue ---------- */
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-2": "rgb(var(--color-accent-2) / <alpha-value>)",

        /* ---------- Extended palette ---------- */
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          container: "rgb(var(--color-primary-container) / <alpha-value>)",
          dim: "rgb(var(--color-primary-dim) / <alpha-value>)",
        },

        /* ---------- Semantic status ---------- */
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",

        /* ---------- Container hierarchy ---------- */
        "surface-lowest": "rgb(var(--color-surface-lowest) / <alpha-value>)",
        "surface-low": "rgb(var(--color-surface-low) / <alpha-value>)",
        "surface-high": "rgb(var(--color-surface-high) / <alpha-value>)",
        "surface-highest": "rgb(var(--color-surface-highest) / <alpha-value>)",
      },

      fontFamily: {
        display: ["Syne", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      boxShadow: {
        "glow-primary": "0 0 24px rgba(56, 189, 248, 0.15)",
        "glow-primary-lg": "0 0 40px rgba(56, 189, 248, 0.25)",
      },

      animation: {
        "pulse-primary": "pulsePrimary 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      keyframes: {
        pulsePrimary: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(56, 189, 248, 0.6)" },
          "50%": { boxShadow: "0 0 0 6px rgba(56, 189, 248, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;