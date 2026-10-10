import type { Metadata } from "next";
import { Sora, Manrope, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const label = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-label",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Milagro Medicina Integrativa",
  description:
    "Salud y bienestar a través de la medicina homeopática e integrativa en Ecuador.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} ${label.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
