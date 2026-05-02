import styles from "./about.module.css";

export default function About() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className={styles.pageHero}>
        <div className={styles.heroInner}>
          <p className="section-label">Quiénes Somos</p>
          <h1 className={styles.heroTitle}>
            Sobre Milagro
            <br />
            <em>Medicina Integrativa</em>
          </h1>
          <div className="divider">
            <span className="divider-diamond"></span>
          </div>
          <p className={styles.heroSub}>
            Comprometidos con tu salud y bienestar a través de un enfoque médico
            profundo y humano.
          </p>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className={styles.philosophy}>
        <div className={styles.container}>
          <div className={styles.philosophyGrid}>
            <div>
              <p className="section-label">Nuestra Filosofía</p>
              <h2 className="section-title">Sanar desde la raíz</h2>
              <div className="divider">
                <span className="divider-diamond"></span>
              </div>
              <p className={styles.bodyText}>
                En Milagro Medicina Integrativa creemos que cada persona posee
                una capacidad innata para sanar. Nuestra misión es acompañar ese
                proceso con conocimiento médico profundo, remedios naturales y
                un cuidado genuinamente personalizado.
              </p>
              <p className={styles.bodyText}>
                La medicina homeopática e integrativa nos permite ver al
                paciente en su totalidad — no solo los síntomas, sino las causas
                profundas que los originan. Esta visión holística es la base de
                cada consulta y cada tratamiento que ofrecemos.
              </p>
            </div>
            <div className={styles.philosophyValues}>
              {[
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
              ].map((v) => (
                <div key={v.title} className={styles.valueCard}>
                  <span className={styles.valueDot}></span>
                  <div>
                    <h4 className={styles.valueTitle}>{v.title}</h4>
                    <p className={styles.valueDesc}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DOCTOR BIO ── */}
      <section className={styles.doctor}>
        <div className={styles.container}>
          <div className={styles.doctorGrid}>
            <div className={styles.doctorImageBox}>
              <div className={styles.imagePlaceholder}>
                <span>Foto del Doctor</span>
              </div>
              <div className={styles.imageAccentTop} />
              <div className={styles.imageAccentBottom} />
            </div>
            <div className={styles.doctorBio}>
              <p className="section-label">Nuestro Médico</p>
              <h2 className="section-title">Dr. [James Pesantez Mejia ]</h2>
              <p className={styles.doctorCredential}>
                Médico Homeópata &amp; Especialista en Medicina Integrativa
              </p>
              <div className="divider">
                <span className="divider-diamond"></span>
              </div>
              <p className={styles.bodyText}>
                El Dr. [Nombre] es médico graduado de [Universidad], con
                especialización en medicina homeopática y un postgrado en
                medicina integrativa. Con más de [X] años de experiencia, ha
                atendido a cientos de pacientes en Ecuador con un enfoque
                profundamente humano y científico.
              </p>
              <p className={styles.bodyText}>
                Su filosofía médica combina el rigor de la medicina convencional
                con la sabiduría de las terapias naturales, siempre buscando el
                tratamiento más efectivo y menos invasivo para cada paciente.
              </p>
              <div className={styles.credentials}>
                {[
                  "Médico Cirujano — Universidad [Nombre]",
                  "Especialista en Homeopatía Clásica",
                  "Formación en Medicina Botánica",
                  "Miembro de [Asociación Médica]",
                ].map((c) => (
                  <div key={c} className={styles.credItem}>
                    <span className={styles.credIcon}>✦</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className={styles.whyUs}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className="section-label">Por qué elegirnos</p>
            <h2 className={`section-title ${styles.lightTitle}`}>
              Lo que nos diferencia
            </h2>
            <div className="divider">
              <span className="divider-diamond"></span>
            </div>
          </div>
          <div className={styles.whyGrid}>
            {[
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
            ].map((w) => (
              <div key={w.num} className={styles.whyCard}>
                <span className={styles.whyNum}>{w.num}</span>
                <h3 className={styles.whyTitle}>{w.title}</h3>
                <p className={styles.whyDesc}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
