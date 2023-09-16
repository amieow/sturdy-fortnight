import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/templates/ThemeProviders";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
