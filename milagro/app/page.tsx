import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiDroplet,
  FiLayers,
  FiHeart,
  FiMapPin,
  FiPhone,
  FiClock,
} from "react-icons/fi";
import Chakana from "@/components/Chakana";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

const pillars = [
  {
    icon: <FiDroplet />,
    title: "Medicina Homeopática",
    desc: "Tratamientos naturales y personalizados que estimulan la capacidad curativa innata del organismo.",
  },
  {
    icon: <FiLayers />,
    title: "Enfoque Integrativo",
    desc: "Combinamos lo mejor de la medicina convencional con terapias naturales para un cuidado completo.",
  },
  {
    icon: <FiHeart />,
    title: "Atención Personalizada",
    desc: "Cada paciente es único. Escuchamos, comprendemos y diseñamos un plan de salud a tu medida.",
  },
];

const services = [
  {
    num: "01",
    title: "Homeopatía Clásica",
    desc: "Remedios homeopáticos individualizados basados en un diagnóstico profundo y personalizado.",
  },
  {
    num: "02",
    title: "Medicina Botánica",
    desc: "El poder de las plantas medicinales al servicio de tu salud, con respaldo científico.",
  },
  {
    num: "03",
    title: "Nutrición Integrativa",
    desc: "Orientación nutricional que complementa tu tratamiento y fortalece tu bienestar.",
  },
  {
    num: "04",
    title: "Terapias Complementarias",
    desc: "Acupuntura, flores de Bach y otras terapias que trabajan en armonía con tu cuerpo.",
  },
];

// Repeated so each half of the scrolling track is wider than the screen.
const marquee = Array(4)
  .fill(["Medicina General", "Medicina Alternativa"])
  .flat() as string[];

export default function Home() {
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
              Salud · Bienestar · Equilibrio
            </p>
            <h1 className={`title-xl rise ${styles.heroTitle}`} style={d(0.2)}>
              Medicina que sana{" "}
              <span className="grad-text">cuerpo y espíritu</span>
            </h1>
            <p className="lead rise" style={d(0.35)}>
              Medicina General e Integrativa con un enfoque humano,
              personalizado y profundamente compasivo.
            </p>
            <div className={`rise ${styles.heroBtns}`} style={d(0.5)}>
              <Link href="#contacto" className="btn btn-gold">
                Agendar Cita <FiArrowRight />
              </Link>
              <Link href="/servicios" className="btn btn-ghost">
                Nuestros Servicios
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
              alt="Símbolo de Milagro"
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
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className={styles.pillar}>
                <span className={styles.pillarIcon}>{p.icon}</span>
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
            <p className="eyebrow">Sobre Nosotros</p>
            <h2 className={`title-lg ${styles.sectionTitle}`}>
              Un médico comprometido{" "}
              <span className="grad-text">con tu bienestar</span>
            </h2>
            <p className={styles.body}>
              En Milagro Medicina Integrativa, creemos que la salud verdadera
              surge del equilibrio entre el cuerpo, la mente y el espíritu.
              Nuestro enfoque homeopático e integrativo permite tratar al
              paciente de manera holística, abordando las causas profundas de
              cada dolencia.
            </p>
            <p className={styles.body}>
              Con años de experiencia en medicina integrativa, nuestro equipo
              acompaña a cada paciente en su camino hacia una salud plena y
              sostenida.
            </p>
            <Link href="/about" className="btn btn-line">
              Conocer más <FiArrowRight />
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
              <p className="eyebrow">Lo que ofrecemos</p>
              <h2 className={`title-lg ${styles.sectionTitle}`}>
                Nuestros <span className="grad-text">Servicios</span>
              </h2>
            </div>
            <p className="lead">
              Ofrecemos una amplia gama de tratamientos diseñados para
              restablecer el equilibrio natural de tu salud.
            </p>
          </Reveal>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.08}>
                <Link href="/servicios" className={styles.serviceCard}>
                  <Chakana className={styles.serviceMotif} strokeWidth={0.6} />
                  <div className={styles.serviceTop}>
                    <span className={styles.serviceNum}>{s.num}</span>
                    <span className={styles.serviceArrow}>
                      <FiArrowUpRight />
                    </span>
                  </div>
                  <h3 className="title-md">{s.title}</h3>
                  <p>{s.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className={styles.seeAll}>
            <Link href="/servicios" className="btn btn-gold">
              Ver todos los servicios <FiArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className={styles.contact} id="contacto">
        <div className={`container ${styles.contactGrid}`}>
          <Reveal className={styles.contactInfo}>
            <p className="eyebrow">Contáctanos</p>
            <h2 className={`title-lg ${styles.sectionTitle}`}>
              Agenda tu <span className="grad-text">consulta</span>
            </h2>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon}>
                  <FiMapPin />
                </span>
                <div>
                  <h4>Ubicación</h4>
                  <p>
                    Avenida Remigio Crespo Toral 4-30 y Avenida Ricardo Muñoz
                    Dávila
                    <br />
                    completa aquí
                  </p>
                </div>
              </li>
              <li>
                <span className={styles.contactIcon}>
                  <FiPhone />
                </span>
                <div>
                  <h4>Teléfono / WhatsApp</h4>
                  <p>+593 98 933 6545</p>
                </div>
              </li>
              <li>
                <span className={styles.contactIcon}>
                  <FiClock />
                </span>
                <div>
                  <h4>Horario de Atención</h4>
                  <p>
                    Lunes – Viernes: 10:00 – 18:00
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form className={styles.form}>
              <Chakana className={styles.formMotif} strokeWidth={0.4} />
              <div className={styles.formRow}>
                <label>
                  <span>Nombre completo</span>
                  <input type="text" placeholder="Tu nombre" />
                </label>
                <label>
                  <span>Teléfono</span>
                  <input type="tel" placeholder="+593" />
                </label>
              </div>
              <label>
                <span>Correo electrónico</span>
                <input type="email" placeholder="tu@correo.com" />
              </label>
              <label>
                <span>Mensaje</span>
                <textarea rows={4} placeholder="¿En qué podemos ayudarte?" />
              </label>
              <button type="submit" className="btn btn-teal">
                Enviar mensaje <FiArrowRight />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
