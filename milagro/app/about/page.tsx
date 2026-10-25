import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import Chakana from "@/components/Chakana";
import Reveal from "@/components/Reveal";
import { getDictionary } from "@/lib/i18n";
import styles from "./about.module.css";

const num = (i: number) => String(i + 1).padStart(2, "0");

export default async function About() {
  const t = (await getDictionary()).about;

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        accent={t.heroAccent}
        sub={t.heroSub}
      />

      {/* ── PHILOSOPHY ── */}
      <section className={styles.philosophy}>
        <div className={`container ${styles.philosophyGrid}`}>
          <Reveal>
            <p className="eyebrow">{t.philosophyEyebrow}</p>
            <h2 className={`title-lg ${styles.title}`}>
              {t.philosophyTitle}{" "}
              <span className="grad-text">{t.philosophyAccent}</span>
            </h2>
            {t.philosophyBody.map((p) => (
              <p key={p} className={styles.body}>
                {p}
              </p>
            ))}
          </Reveal>

          <div className={styles.values}>
            {t.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className={styles.valueCard}>
                  <Chakana className={styles.valueIcon} strokeWidth={5} detailed={false} />
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCTOR BIO ── */}
      <section className={styles.doctor}>
        <div className={`container ${styles.doctorGrid}`}>
          <Reveal className={styles.doctorVisual}>
            <Chakana className={styles.doctorMotif} strokeWidth={0.35} />
            <div className={styles.portrait}>
              <Image
                src="/images/doctor.jpg"
                alt="Dr. James Pesántez Mejía"
                width={900}
                height={1260}
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow">{t.doctorEyebrow}</p>
            <h2 className={`title-lg ${styles.title}`}>
              Dr. James Pesántez Mejía
            </h2>
            <p className={styles.credential}>{t.doctorRole}</p>
            {t.doctorBio.map((p) => (
              <p key={p} className={styles.body}>
                {p}
              </p>
            ))}
            <h4 className={styles.subhead}>{t.philosophyHeading}</h4>
            <p className={styles.body}>{t.philosophyText}</p>
            <h4 className={styles.subhead}>{t.trainingHeading}</h4>
            <ul className={styles.credentials}>
              {t.credentials.map((c) => (
                <li key={c}>
                  <span>
                    <FiCheck />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className={`${styles.whyUs} on-dark`}>
        <div className={styles.whyGlow} />
        <div className="container">
          <Reveal className={styles.whyHead}>
            <p className="eyebrow">{t.whyEyebrow}</p>
            <h2 className={`title-lg ${styles.title}`}>
              {t.whyTitle} <span className="grad-text">{t.whyAccent}</span>
            </h2>
          </Reveal>
          <div className={styles.whyGrid}>
            {t.reasons.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className={styles.whyCard}>
                  <span className={styles.whyNum}>{num(i)}</span>
                  <h3 className="title-md">{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
