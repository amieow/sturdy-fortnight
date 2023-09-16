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
        accent: "#69C4FA",
      },
    },
  },
  plugins: [],
};
export default config;
