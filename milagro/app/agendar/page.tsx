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
      />

      <section className={styles.booking}>
        <div className="container">
          <BookingPicker t={t} locale={locale} />
          <ul className={styles.notes}>
            {t.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
