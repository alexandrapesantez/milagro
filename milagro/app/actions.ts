"use server";
import { cookies } from "next/headers";
import { LOCALE_COOKIE, locales, type Locale } from "@/lib/i18n";

export async function setLocale(locale: Locale) {
  if (!locales.includes(locale)) return;
  (await cookies()).set(LOCALE_COOKIE, locale, {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}
