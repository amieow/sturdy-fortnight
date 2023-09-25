import "./globals.css";
import { Inter, Poppins, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/templates/ThemeProviders";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "300", "600"],
	variable: "--font-inter",
	display: "swap",
});
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "600", "300"],
	variable: "--font-poppins",
	display: "swap",
});
const roboto = Roboto({
	subsets: ["latin"],
	weight: ["500", "700", "400"],
	variable: "--font-roboto",
	display: "swap",
});
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${poppins.variable} ${inter.variable} ${roboto.variable} flex flex-col relative`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
