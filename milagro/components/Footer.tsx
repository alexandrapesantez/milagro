import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <Image
                src="/images/logo1.png"
                alt="Milagro Medicina Integrativa"
                width={140}
                height={63}
                className={styles.footerLogo}
              />
              <p className={styles.footerTagline}>
                Salud · Bienestar · Equilibrio
              </p>
              <p className={styles.footerDesc}>
                Medicina homeopática e integrativa en Ecuador, con un enfoque
                humano, natural y profundamente compasivo.
              </p>
            </div>

            <div className={styles.footerNav}>
              <h4 className={styles.footerHeading}>Navegación</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <Link href="/about">Nosotros</Link>
                </li>
                <li>
                  <Link href="/servicios">Servicios</Link>
                </li>
                <li>
                  <Link href="/#contacto">Contacto</Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerServices}>
              <h4 className={styles.footerHeading}>Servicios</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="/servicios">Homeopatía Clásica</Link>
                </li>
                <li>
                  <Link href="/servicios">Medicina Botánica</Link>
                </li>
                <li>
                  <Link href="/servicios">Nutrición Integrativa</Link>
                </li>
                <li>
                  <Link href="/servicios">Terapias Complementarias</Link>
                </li>
                <li>
                  <Link href="/servicios">Medicina Preventiva</Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerContact}>
              <h4 className={styles.footerHeading}>Contacto</h4>
              <div className={styles.contactDetail}>
                <span className={styles.contactIcon}>◎</span>
                <span>
                  Avenida Remigio Crespo Toral 4-30 y Avenida Ricardo Muñoz
                  Dávila
                </span>
              </div>
              <div className={styles.contactDetail}>
                <span className={styles.contactIcon}>◎</span>
                <span>+593 98 933 6545</span>
              </div>
              <div className={styles.contactDetail}>
                <span className={styles.contactIcon}>◎</span>
                <span>contacto@milagromedicinaIntegrativa.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.footerBottomInner}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Milagro Medicina Integrativa. Todos
              los derechos reservados.
            </p>

            <div className={styles.footerDivider}>
              <span className={styles.diamond}></span>
            </div>

            {/* ✅ NEW: Social Icons */}
            <div className={styles.socialIcons}>
              <a
                href="https://www.instagram.com/milagromedicinaintegrativa_?igsh=czE1dm1hOHR6eHJq&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/share/1AwxBKjPoj/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.tiktok.com/@milagromedicinain?_t=ZP-8ygjpTmnixD&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>
            </div>

            <p className={styles.footerNote}>Salud · Bienestar</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
