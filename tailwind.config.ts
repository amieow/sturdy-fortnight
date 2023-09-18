import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      poppins: ["var(--font-poppins)"],
      inter: ["var(--font-inter)"],
    },
    extend: {
      colors: {
        primary: "#FF8000",
        primarySurface: "#FFE6CC",
        primaryBorder: "#FFD5AA",
        primaryHover: "#D46B00",
        primaryPressed: "#AA5500",
        neutral01: "#FEFEFE",
        neutral02: "#D4D4D4",
        neutral03: "#999999",
        neutral04: "#666666",
        neutral05: "#444444",
        neutral06: "#222222",
        neutral07: "#1D1D1D",
        accent: "#69C4FA",
      },
      fontSize: {
        textS: "12px",
        textM: "14px",
        textL: "16px",
        textXl: "18px",
        heading4: "24px",
        heading3: "28px",
        heading2: "32px",
        heading1: "36px",
        display3: "48px",
        display2: "56px",
        display1: "64px",
      },
    },
  },
  plugins: [],
};
export default config;
