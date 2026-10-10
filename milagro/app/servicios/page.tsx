import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import Chakana from "@/components/Chakana";
import Reveal from "@/components/Reveal";
import styles from "./servicios.module.css";

const services = [
  {
    id: "01",
    title: "Homeopatía Clásica",
    tagline: "Remedios individualizados para cada persona",
    description:
      "La homeopatía clásica utiliza remedios naturales altamente diluidos para estimular la capacidad curativa innata del organismo. Cada tratamiento es completamente personalizado, basado en un análisis profundo de los síntomas físicos, emocionales y mentales del paciente.",
    benefits: [
      "Sin efectos secundarios",
      "Tratamiento personalizado",
      "Enfoque holístico",
      "Adecuado para todas las edades",
    ],
  },
  {
    id: "02",
    title: "Medicina Botánica",
    tagline: "La sabiduría de las plantas al servicio de tu salud",
    description:
      "Utilizamos plantas medicinales con respaldo científico para tratar diversas condiciones de salud. La fitoterapia ofrece soluciones naturales eficaces para el manejo de enfermedades crónicas, el fortalecimiento del sistema inmune y el equilibrio general del organismo.",
    benefits: [
      "Plantas de origen ecuatoriano",
      "Preparaciones personalizadas",
      "Combinaciones sinérgicas",
      "Respaldo científico",
    ],
  },
  {
    id: "03",
    title: "Nutrición Integrativa",
    tagline: "La alimentación como medicina preventiva",
    description:
      "Diseñamos planes nutricionales individualizados que complementan el tratamiento médico y promueven el bienestar a largo plazo. Evaluamos la relación entre la alimentación y tus condiciones de salud para crear estrategias que nutran y sanen.",
    benefits: [
      "Planes alimentarios personalizados",
      "Enfoque anti-inflamatorio",
      "Salud digestiva",
      "Nutrición funcional",
    ],
  },
  {
    id: "04",
    title: "Terapias Complementarias",
    tagline: "Herramientas terapéuticas en armonía con tu cuerpo",
    description:
      "Ofrecemos una selección de terapias complementarias que potencian el proceso de sanación. Trabajamos con flores de Bach, acupuntura y otras modalidades terapéuticas que actúan en los planos físico, emocional y energético.",
    benefits: [
      "Flores de Bach",
      "Acupuntura",
      "Terapia neural",
      "Medicina biorreguladora",
    ],
  },
  {
    id: "05",
    title: "Medicina Preventiva",
    tagline: "Cuida tu salud antes de que aparezca la enfermedad",
    description:
      "La prevención es el pilar más importante de la salud. Ofrecemos consultas de evaluación integral que identifican desequilibrios antes de que se manifiesten como enfermedad, diseñando estrategias preventivas personalizadas.",
    benefits: [
      "Evaluación de riesgos",
      "Chequeos integrales",
      "Educación en salud",
      "Estilos de vida saludable",
    ],
  },
  {
    id: "06",
    title: "Consulta Pediátrica Homeopática",
    tagline: "Salud natural para los más pequeños",
    description:
      "Los remedios homeopáticos son especialmente adecuados para los niños por su seguridad y suavidad. Tratamos condiciones comunes de la infancia — alergias, infecciones recurrentes, problemas digestivos — con un enfoque gentil y eficaz.",
    benefits: [
      "Seguro para bebés y niños",
      "Sin contraindicaciones",
      "Fortalece la inmunidad",
      "Padres incluidos en el proceso",
    ],
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
              En Milagro Medicina Integrativa, cada servicio parte de una
              comprensión profunda del paciente como un ser integral.{" "}
              <span className="grad-text">
                Nuestros tratamientos trabajan juntos para restablecer el
                equilibrio y promover una salud duradera.
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
                <p className="eyebrow">{s.tagline}</p>
                <h2 className={styles.title}>{s.title}</h2>
                <p className={styles.desc}>{s.description}</p>
                <ul className={styles.benefits}>
                  {s.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
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
            Agenda tu primera consulta y da el primer paso hacia tu bienestar.
          </p>
          <Link href="/#contacto" className="btn btn-gold">
            Agendar Cita <FiArrowRight />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
