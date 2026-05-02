import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={`section-label animate-fade-up-delay-1`}>
            Salud · Bienestar · Equilibrio
          </p>
          <h1 className={`${styles.heroTitle} animate-fade-up-delay-2`}>
            Medicina que sana
            <br />
            <em>cuerpo y espíritu</em>
          </h1>
          <div className={`divider animate-fade-up-delay-3`}>
            <span className="divider-diamond"></span>
          </div>
          <p className={`${styles.heroSub} animate-fade-up-delay-3`}>
            Medicina homeopática e integrativa con un enfoque humano,
            <br />
            personalizado y profundamente compasivo.
          </p>
          <div className={`${styles.heroBtns} animate-fade-up-delay-4`}>
            <Link href="#contacto" className={styles.btnPrimary}>
              Agendar Cita
            </Link>
            <Link href="/servicios" className={styles.btnSecondary}>
              Nuestros Servicios
            </Link>
          </div>
        </div>
        <div className={styles.heroPattern} />
      </section>

      {/* ── PILLARS ── */}
      <section className={styles.pillars}>
        <div className={styles.container}>
          {[
            {
              icon: "✦",
              title: "Medicina Homeopática",
              desc: "Tratamientos naturales y personalizados que estimulan la capacidad curativa innata del organismo.",
            },
            {
              icon: "◈",
              title: "Enfoque Integrativo",
              desc: "Combinamos lo mejor de la medicina convencional con terapias naturales para un cuidado completo.",
            },
            {
              icon: "◇",
              title: "Atención Personalizada",
              desc: "Cada paciente es único. Escuchamos, comprendemos y diseñamos un plan de salud a tu medida.",
            },
          ].map((p) => (
            <div key={p.title} className={styles.pillar}>
              <span className={styles.pillarIcon}>{p.icon}</span>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className={styles.aboutSnippet}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImageCol}>
            <div className={styles.aboutImageBox}>
              <div className={styles.imagePlaceholder}>
                <span>Foto del Doctor</span>
              </div>
              <div className={styles.imageAccent} />
            </div>
          </div>
          <div className={styles.aboutTextCol}>
            <p className="section-label">Sobre Nosotros</p>
            <h2 className="section-title">
              Un médico comprometido
              <br />
              con tu bienestar
            </h2>
            <div className="divider">
              <span className="divider-diamond"></span>
            </div>
            <p className={styles.aboutText}>
              En Milagro Medicina Integrativa, creemos que la salud verdadera
              surge del equilibrio entre el cuerpo, la mente y el espíritu.
              Nuestro enfoque homeopático e integrativo permite tratar al
              paciente de manera holística, abordando las causas profundas de
              cada dolencia.
            </p>
            <p className={styles.aboutText}>
              Con años de experiencia en medicina integrativa, nuestro equipo
              acompaña a cada paciente en su camino hacia una salud plena y
              sostenida.
            </p>
            <Link href="/about" className={styles.btnOutline}>
              Conocer más →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className={styles.servicesPreview}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className="section-label">Lo que ofrecemos</p>
            <h2 className="section-title">Nuestros Servicios</h2>
            <div className="divider">
              <span className="divider-diamond"></span>
            </div>
            <p className={styles.sectionDesc}>
              Ofrecemos una amplia gama de tratamientos diseñados para
              restablecer el equilibrio natural de tu salud.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {[
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
            ].map((s) => (
              <div key={s.num} className={styles.serviceCard}>
                <span className={styles.serviceNum}>{s.num}</span>
                <h3 className={styles.serviceCardTitle}>{s.title}</h3>
                <p className={styles.serviceCardDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.seeAll}>
            <Link href="/servicios" className={styles.btnPrimary}>
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className={styles.contact} id="contacto">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className="section-label">Contáctanos</p>
            <h2 className={`section-title ${styles.lightTitle}`}>
              Agenda tu consulta
            </h2>
            <div className="divider">
              <span className="divider-diamond"></span>
            </div>
          </div>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>◎</span>
                <div>
                  <h4>Ubicación</h4>
                  <p>
                    Avenida Remigio Crespo Toral 4-30 y Avenida Ricardo Muñoz
                    Dávila
                    <br />
                    completa aquí
                  </p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>◎</span>
                <div>
                  <h4>Teléfono / WhatsApp</h4>
                  <p>+593 98 933 6545</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>◎</span>
                <div>
                  <h4>Horario de Atención</h4>
                  <p>
                    Lunes – Viernes: 9:00 – 18:00
                    <br />
                    Sábado: 9:00 – 13:00
                  </p>
                </div>
              </div>
            </div>
            <form className={styles.contactForm}>
              <input
                type="text"
                placeholder="Nombre completo"
                className={styles.formInput}
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className={styles.formInput}
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className={styles.formInput}
              />
              <textarea
                placeholder="¿En qué podemos ayudarte?"
                rows={4}
                className={styles.formTextarea}
              />
              <button type="submit" className={styles.btnPrimary}>
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
