import { cookies } from "next/headers";
import es, { type Dictionary } from "@/dictionaries/es";
import en from "@/dictionaries/en";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";
export const LOCALE_COOKIE = "lang";

// Keep the toggle hidden until the English dictionary is filled in.
export const showLanguageToggle = false;

export async function getLocale(): Promise<Locale> {
  const value = (await cookies()).get(LOCALE_COOKIE)?.value;
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}

// Missing English keys fall back to Spanish.
export function getDictionary(locale: Locale): Dictionary {
  return locale === "en" ? { ...es, ...en, nav: { ...es.nav, ...en.nav } } : es;
}
