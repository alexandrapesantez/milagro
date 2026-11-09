import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingPicker from "@/components/BookingPicker";
import { getDictionary, getLocale } from "@/lib/i18n";
import styles from "./agendar.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: `${dict.booking.metaTitle} · Milagro Medicina Integrativa` };
}

export default async function Agendar() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.booking;

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        accent={t.heroAccent}
        sub={t.heroSub}
        compact
      />

      <section className={styles.booking}>
        <div className="container">
          <BookingPicker t={t} locale={locale} />
          <p className={styles.note}>{t.note}</p>
        </div>
      </section>
    </>
  );
}
