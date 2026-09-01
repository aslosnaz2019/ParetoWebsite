import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Asset Management — parchment on navy
        am: {
          bg: "#F5F0E6",
          text: "#101A38",
          accent: "#DC3C37",
          gold: "#C8AF6E",
        },
        // Venture & Growth — navy ground, parchment voice
        vc: {
          bg: "#101A38",
          text: "#F5F0E6",
          accent: "#DC3C37",
          gold: "#C8AF6E",
        },
        // Private Equity — wine red, gold italic
        pe: {
          bg: "#581C1C",
          text: "#F5F0E6",
          gold: "#D2AF64",
          muted: "#B49B91",
        },
      },
      fontFamily: {
        serif: ["var(--font-eb-garamond)", "Liberation Serif", "Garamond", "serif"],
        sans: ["var(--font-inter)", "DejaVu Sans", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.5em",
        tagline: "0.25em",
        label: "0.18em",
      },
      maxWidth: {
        column: "640px",
      },
      spacing: {
        edge: "6.5%",
      },
    },
  },
  plugins: [],
};
export default config;
