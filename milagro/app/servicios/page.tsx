import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import Chakana from "@/components/Chakana";
import Reveal from "@/components/Reveal";
import { getDictionary } from "@/lib/i18n";
import styles from "./servicios.module.css";

const tones = [styles.toneTeal, styles.toneGold, styles.toneDeep];

export default async function Servicios() {
  const dict = await getDictionary();
  const t = dict.servicesPage;

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        accent={t.heroAccent}
        sub={t.heroSub}
      />

      {/* ── INTRO ── */}
      <section className={styles.intro}>
        <div className="container">
          <Reveal>
            <p className={styles.introText}>
              {t.intro} <span className="grad-text">{t.introAccent}</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className={styles.list}>
        <div className="container">
          {dict.services.map((s, i) => (
            <Reveal
              key={s.title}
              className={`${styles.row} ${i % 2 !== 0 ? styles.reversed : ""}`}
            >
              <div className={`${styles.visual} ${tones[i % tones.length]}`}>
                <Chakana className={styles.visualMotif} strokeWidth={0.4} />
                <Chakana
                  className={styles.visualMotifSm}
                  strokeWidth={0.8}
                  detailed={false}
                />
                <span className={styles.visualNum}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className={styles.detail}>
                <h2 className={styles.title}>{s.title}</h2>
                <p className={styles.desc}>{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`${styles.cta} on-dark`}>
        <div className={styles.ctaGlow} />
        <Chakana className={styles.ctaMotif} strokeWidth={0.3} />
        <Reveal className={styles.ctaInner}>
          <p className="eyebrow">{t.ctaEyebrow}</p>
          <h2 className={`title-lg ${styles.ctaTitle}`}>
            {t.ctaTitle} <span className="grad-text">{t.ctaAccent}</span>
          </h2>
          <p className="lead">{t.ctaLead}</p>
          <Link href="/#contacto" className="btn btn-gold">
            {dict.nav.book} <FiArrowRight />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
