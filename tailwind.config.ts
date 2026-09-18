import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ---------- Base surfaces (Obsidian) ---------- */
        bg: "#0b0e15",
        surface: "#10131a",
        dim: "#191b23",
        border: "#1e2230",

        /* ---------- Text ---------- */
        muted: "#8891a0",

        /* ---------- Primary accent — sky blue (#38BDF8 seed) ---------- */
        accent: "#38bdf8",
        "accent-2": "#bae6fd",

        /* ---------- Extended palette ---------- */
        primary: {
          DEFAULT: "#8ed5ff",
          container: "#38bdf8",
          dim: "#7bd0ff",
        },

        /* ---------- Semantic status ---------- */
        success: "#34d399",
        warning: "#fbbf24",
        error: "#ffb4ab",

        /* ---------- Container hierarchy ---------- */
        "surface-lowest": "#0b0e15",
        "surface-low": "#191b23",
        "surface-high": "#272a32",
        "surface-highest": "#32353d",
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