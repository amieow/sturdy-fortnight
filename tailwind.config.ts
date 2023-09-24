/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		fontFamily: {
			poppins: ["var(--font-poppins)"],
			inter: ["var(--font-inter)"],
			roboto: ["var(--font-roboto)"],
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
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
				neutral08: "#181818",
				error: "#E3604F",
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
	plugins: [require("tailwindcss-animate")],
};
