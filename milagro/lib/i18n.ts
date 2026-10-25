import { cookies } from "next/headers";
import es, { type Dictionary } from "@/dictionaries/es";
import en from "@/dictionaries/en";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";
export const LOCALE_COOKIE = "lang";

export async function getLocale(): Promise<Locale> {
  const value = (await cookies()).get(LOCALE_COOKIE)?.value;
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}

export async function getDictionary(): Promise<Dictionary> {
  return (await getLocale()) === "en" ? en : es;
}
