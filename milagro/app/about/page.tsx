import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import Chakana from "@/components/Chakana";
import Reveal from "@/components/Reveal";
import styles from "./about.module.css";

const values = [
  {
    title: "Integridad",
    desc: "Honestidad y transparencia en cada diagnóstico y recomendación.",
  },
  {
    title: "Compasión",
    desc: "Escuchamos con atención y cuidamos con el corazón.",
  },
  {
    title: "Excelencia",
    desc: "Formación continua y los más altos estándares médicos.",
  },
  {
    title: "Naturalidad",
    desc: "Remedios que respetan y potencian la biología del cuerpo.",
  },
];

const credentials = [
  "Médico Cirujano — Universidad [Nombre]",
  "Especialista en Homeopatía Clásica",
  "Formación en Medicina Botánica",
  "Miembro de [Asociación Médica]",
];

const reasons = [
  {
    num: "01",
    title: "Atención de calidad",
    desc: "Consultas detalladas donde el tiempo nunca es un obstáculo para escucharte y entenderte.",
  },
  {
    num: "02",
    title: "Tratamientos sin efectos secundarios",
    desc: "Remedios naturales que trabajan con tu cuerpo, no en su contra.",
  },
  {
    num: "03",
    title: "Seguimiento continuo",
    desc: "Tu proceso de sanación merece acompañamiento constante y ajustes personalizados.",
  },
  {
    num: "04",
    title: "Visión integrativa",
    desc: "Integramos lo mejor de múltiples disciplinas para ofrecerte el mejor cuidado posible.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes Somos"
        title="Sobre Milagro"
        accent="Medicina Integrativa"
        sub="Comprometidos con tu salud y bienestar a través de un enfoque médico profundo y humano."
      />

      {/* ── PHILOSOPHY ── */}
      <section className={styles.philosophy}>
        <div className={`container ${styles.philosophyGrid}`}>
          <Reveal>
            <p className="eyebrow">Nuestra Filosofía</p>
            <h2 className={`title-lg ${styles.title}`}>
              Sanar desde <span className="grad-text">la raíz</span>
            </h2>
            <p className={styles.body}>
              En Milagro Medicina Integrativa creemos que cada persona posee
              una capacidad innata para sanar. Nuestra misión es acompañar ese
              proceso con conocimiento médico profundo, remedios naturales y un
              cuidado genuinamente personalizado.
            </p>
            <p className={styles.body}>
              La medicina homeopática e integrativa nos permite ver al paciente
              en su totalidad — no solo los síntomas, sino las causas profundas
              que los originan. Esta visión holística es la base de cada
              consulta y cada tratamiento que ofrecemos.
            </p>
          </Reveal>

          <div className={styles.values}>
            {values.map((v, i) => (
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
                alt="Médico de Milagro Medicina Integrativa"
                width={600}
                height={664}
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow">Nuestro Médico</p>
            <h2 className={`title-lg ${styles.title}`}>
              Dr. [James Pesantez Mejia ]
            </h2>
            <p className={styles.credential}>
              Médico Homeópata &amp; Especialista en Medicina Integrativa
            </p>
            <p className={styles.body}>
              El Dr. [Nombre] es médico graduado de [Universidad], con
              especialización en medicina homeopática y un postgrado en
              medicina integrativa. Con más de [X] años de experiencia, ha
              atendido a cientos de pacientes en Ecuador con un enfoque
              profundamente humano y científico.
            </p>
            <p className={styles.body}>
              Su filosofía médica combina el rigor de la medicina convencional
              con la sabiduría de las terapias naturales, siempre buscando el
              tratamiento más efectivo y menos invasivo para cada paciente.
            </p>
            <ul className={styles.credentials}>
              {credentials.map((c) => (
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
            <p className="eyebrow">Por qué elegirnos</p>
            <h2 className={`title-lg ${styles.title}`}>
              Lo que nos <span className="grad-text">diferencia</span>
            </h2>
          </Reveal>
          <div className={styles.whyGrid}>
            {reasons.map((w, i) => (
              <Reveal key={w.num} delay={i * 0.08}>
                <div className={styles.whyCard}>
                  <span className={styles.whyNum}>{w.num}</span>
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
