import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Inter,
  Lora,
  Noto_Nastaliq_Urdu,
  Noto_Sans_Arabic,
} from "next/font/google";
import { Header } from "@/components/layout/Header";
import { locales, directions, isLocale } from "@/lib/i18n/types";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-urdu-nastaliq",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urdu-sans-ar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dawn of Light Ministry",
  description:
    "Dawn of Light Ministry (نور کی صبح) — Bethlehem Church, Seminary & Educational Mission, serving Karachi and Faisalabad, Pakistan.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={directions[locale]}
      className={`${inter.variable} ${lora.variable} ${notoNastaliqUrdu.variable} ${notoSansArabic.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Header locale={locale} />
        {children}
      </body>
    </html>
  );
}
