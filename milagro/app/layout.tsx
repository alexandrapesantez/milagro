import type { Metadata } from "next";
import { Sora, Manrope, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary, getLocale } from "@/lib/i18n";

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

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return {
    title: "Milagro Medicina Integrativa",
    description: dict.meta.description,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <html
      lang={locale}
      className={`${display.variable} ${body.variable} ${label.variable}`}
    >
      <body>
        <Navbar locale={locale} dict={dict.nav} />
        <main>{children}</main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}
