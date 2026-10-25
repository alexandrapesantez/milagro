import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiUser,
  FiLayers,
  FiHeart,
  FiMapPin,
  FiPhone,
  FiClock,
} from "react-icons/fi";
import Chakana from "@/components/Chakana";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/lib/i18n";
import styles from "./page.module.css";

const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

const pillarIcons = [<FiUser key="u" />, <FiLayers key="l" />, <FiHeart key="h" />];

export default async function Home() {
  const dict = await getDictionary();
  const t = dict.home;
  // Repeated so each half of the scrolling track is wider than the screen.
  const marquee = Array(4).fill(t.marquee).flat() as string[];

  return (
    <>
      {/* ── HERO ── */}
      <section className={`${styles.hero} on-dark`}>
        <div className={styles.heroBlobA} />
        <div className={styles.heroBlobB} />
        <div className={styles.heroGrid} />

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <p className="eyebrow rise" style={d(0.1)}>
              {dict.tagline}
            </p>
            <h1 className={`title-xl rise ${styles.heroTitle}`} style={d(0.2)}>
              {t.heroTitle}{" "}
              <span className="grad-text">{t.heroAccent}</span>
            </h1>
            <p className="lead rise" style={d(0.35)}>
              {t.heroLead}
            </p>
            <div className={`rise ${styles.heroBtns}`} style={d(0.5)}>
              <Link href="#contacto" className="btn btn-gold">
                {dict.nav.book} <FiArrowRight />
              </Link>
              <Link href="/servicios" className="btn btn-ghost">
                {t.ourServices}
              </Link>
            </div>
          </div>

          <div className={`rise ${styles.heroVisual}`} style={d(0.3)}>
            <Chakana className={styles.heroMotif} strokeWidth={0.35} />
            <Chakana
              className={styles.heroMotifInner}
              strokeWidth={0.5}
              detailed={false}
            />
            <div className={styles.heroGlow} />
            <div className={styles.orbitPath}>
              <span className={styles.orbitDot} />
            </div>
            <div className={`${styles.orbitPath} ${styles.orbitPathSm}`}>
              <span className={`${styles.orbitDot} ${styles.orbitDotGold}`} />
            </div>
            <Image
              src="/images/symbol.png"
              alt={t.symbolAlt}
              width={400}
              height={345}
              priority
              className={styles.heroSymbol}
            />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className={styles.marqueeItem}>
              {m}
              <Chakana className={styles.marqueeIcon} strokeWidth={6} detailed={false} />
            </span>
          ))}
        </div>
      </div>

      {/* ── PILLARS ── */}
      <section className={styles.pillars}>
        <div className={`container ${styles.pillarsGrid}`}>
          {t.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className={styles.pillar}>
                <span className={styles.pillarIcon}>{pillarIcons[i]}</span>
                <h3 className="title-md">{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className={styles.about}>
        <div className={`container ${styles.aboutGrid}`}>
          <Reveal className={styles.aboutVisual}>
            <Chakana className={styles.aboutMotif} strokeWidth={0.35} />
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
            <p className="eyebrow">{t.aboutEyebrow}</p>
            <h2 className={`title-lg ${styles.sectionTitle}`}>
              {t.aboutTitle}{" "}
              <span className="grad-text">{t.aboutAccent}</span>
            </h2>
            {t.aboutBody.map((p) => (
              <p key={p} className={styles.body}>
                {p}
              </p>
            ))}
            <Link href="/about" className="btn btn-line">
              {t.learnMore} <FiArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className={`${styles.services} on-dark`}>
        <div className={styles.servicesGlow} />
        <div className="container">
          <Reveal className={styles.sectionHead}>
            <div>
              <p className="eyebrow">{t.servicesEyebrow}</p>
              <h2 className={`title-lg ${styles.sectionTitle}`}>
                {t.servicesTitle}{" "}
                <span className="grad-text">{t.servicesAccent}</span>
              </h2>
            </div>
            <p className="lead">{t.servicesLead}</p>
          </Reveal>

          <div className={styles.servicesGrid}>
            {dict.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <Link href="/servicios" className={styles.serviceCard}>
                  <Chakana className={styles.serviceMotif} strokeWidth={0.6} />
                  <div className={styles.serviceTop}>
                    <span className={styles.serviceNum}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.serviceArrow}>
                      <FiArrowUpRight />
                    </span>
                  </div>
                  <h3 className="title-md">{s.title}</h3>
                  <p>{s.short}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className={styles.seeAll}>
            <Link href="/servicios" className="btn btn-gold">
              {t.seeAll} <FiArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className={styles.contact} id="contacto">
        <div className={`container ${styles.contactGrid}`}>
          <Reveal className={styles.contactInfo}>
            <p className="eyebrow">{t.contactEyebrow}</p>
            <h2 className={`title-lg ${styles.sectionTitle}`}>
              {t.contactTitle} <span className="grad-text">{t.contactAccent}</span>
            </h2>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon}>
                  <FiMapPin />
                </span>
                <div>
                  <h4>{t.location}</h4>
                  <p>
                    Avenida Remigio Crespo Toral 4-30 y Avenida Ricardo Muñoz
                    Dávila
                  </p>
                </div>
              </li>
              <li>
                <span className={styles.contactIcon}>
                  <FiPhone />
                </span>
                <div>
                  <h4>{t.phone}</h4>
                  <p>+593 98 933 6545</p>
                </div>
              </li>
              <li>
                <span className={styles.contactIcon}>
                  <FiClock />
                </span>
                <div>
                  <h4>{t.hours}</h4>
                  <p>{t.hoursValue}</p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm t={t.form} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
