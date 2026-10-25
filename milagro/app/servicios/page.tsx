import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import Chakana from "@/components/Chakana";
import Reveal from "@/components/Reveal";
import styles from "./servicios.module.css";

const services = [
  {
    id: "01",
    title: "Medicina Personalizada",
    description:
      "Este es el corazón de Milagro. Primero escuchamos, luego caminamos contigo. La atención se construye a tu medida: tu historia, tus preocupaciones y lo que necesitas en cada etapa de tu camino hacia una mejor salud. No eres un protocolo. Eres la prioridad.",
  },
  {
    id: "02",
    title: "Medicina Ortomolecular",
    description:
      "A través de análisis de sangre, te ayudamos a comprender lo que tu cuerpo está pidiendo. Con ese mapa, orientamos tu cuidado utilizando biopéptidos homeopáticos y enzimas para favorecer un reinicio celular más profundo y estimular la sanación desde adentro.",
  },
  {
    id: "03",
    title: "Medicina Ancestral",
    description:
      "Honramos las medicinas vegetales andinas, la sanación energética y las prácticas de salud alternativas, integrando esta sabiduría ancestral en un enfoque de atención respetuoso y profundamente humano.",
  },
  {
    id: "04",
    title: "Medicina Preventiva",
    description:
      "No esperamos a que la enfermedad hable primero. Identificamos riesgos de forma temprana, fortalecemos tu salud hoy y te ayudamos a proteger los años que vienen.",
  },
  {
    id: "05",
    title: "Coordinación de Especialidades",
    description:
      "Cuando tu cuidado requiere más de un experto, reunimos al equipo. Coordinamos a los especialistas para que no tengas que navegar el sistema solo: tu camino permanece claro, conectado y centrado en ti.",
  },
];

const tones = [styles.toneTeal, styles.toneGold, styles.toneDeep];

export default function Servicios() {
  return (
    <>
      <PageHero
        eyebrow="Lo que ofrecemos"
        title="Nuestros"
        accent="Servicios"
        sub="Cada tratamiento es diseñado para ti, con el tiempo y la dedicación que mereces."
      />

      {/* ── INTRO ── */}
      <section className={styles.intro}>
        <div className="container">
          <Reveal>
            <p className={styles.introText}>
              En Milagro Medicina Integrativa, todo comienza con un principio:
              el paciente es lo primero.{" "}
              <span className="grad-text">
                Tu historia, tus necesidades y tu camino hacia una mejor salud
                son el centro de cada decisión que tomamos.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className={styles.list}>
        <div className="container">
          {services.map((s, i) => (
            <Reveal
              key={s.id}
              className={`${styles.row} ${i % 2 !== 0 ? styles.reversed : ""}`}
            >
              <div className={`${styles.visual} ${tones[i % tones.length]}`}>
                <Chakana className={styles.visualMotif} strokeWidth={0.4} />
                <Chakana
                  className={styles.visualMotifSm}
                  strokeWidth={0.8}
                  detailed={false}
                />
                <span className={styles.visualNum}>{s.id}</span>
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
          <p className="eyebrow">¿Listo para comenzar?</p>
          <h2 className={`title-lg ${styles.ctaTitle}`}>
            Tu salud merece atención{" "}
            <span className="grad-text">de calidad</span>
          </h2>
          <p className="lead">
            En Milagro, cada servicio regresa a la misma promesa: tú importas,
            y tu atención debe sentirse humana.
          </p>
          <Link href="/#contacto" className="btn btn-gold">
            Agendar Cita <FiArrowRight />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
