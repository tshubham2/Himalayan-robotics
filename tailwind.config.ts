import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Shop-floor palette: machine-guard steel and graphite, with safety
        // yellow reserved for actions and the breakdown hotline.
        paper:    "#ffffff",
        steel:    "#eceff2", // alternate section background
        rule:     "#d3d9df", // borders and dividers
        graphite: "#1b1f24", // primary text, dark surfaces
        muted:    "#56616c", // secondary text (AA on paper and steel)
        signal: {
          DEFAULT: "#f5b800", // safety yellow — fills only, never text on light
          hover:   "#ffc929",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
