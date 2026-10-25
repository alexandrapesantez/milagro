import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Chakana from "./Chakana";
import type { Dictionary } from "@/dictionaries/es";

export default function Footer({ dict }: { dict: Dictionary }) {
  const { nav, footer } = dict;

  return (
    <footer className={`${styles.footer} on-dark`}>
      <Chakana className={styles.bgMotif} strokeWidth={0.25} />
      <div className={styles.glow} />

      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Image
            src="/images/logo-white.png"
            alt="Milagro Medicina Integrativa"
            width={1200}
            height={269}
            className={styles.logo}
          />
          <p className={styles.tagline}>{dict.tagline}</p>
          <p className={styles.desc}>{footer.desc}</p>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/milagromedicinaintegrativa_?igsh=czE1dm1hOHR6eHJq&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/1AwxBKjPoj/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.tiktok.com/@milagromedicinain?_t=ZP-8ygjpTmnixD&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        <div>
          <h4 className={styles.heading}>{footer.navHeading}</h4>
          <ul className={styles.links}>
            <li>
              <Link href="/">{nav.home}</Link>
            </li>
            <li>
              <Link href="/about">{nav.about}</Link>
            </li>
            <li>
              <Link href="/servicios">{nav.services}</Link>
            </li>
            <li>
              <Link href="/#contacto">{nav.contact}</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>{footer.servicesHeading}</h4>
          <ul className={styles.links}>
            {dict.services.map((s) => (
              <li key={s.title}>
                <Link href="/servicios">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>{footer.contactHeading}</h4>
          <ul className={styles.contact}>
            <li>
              <FiMapPin />
              <span>
                Avenida Remigio Crespo Toral 4-30 y Avenida Ricardo Muñoz Dávila
              </span>
            </li>
            <li>
              <FiPhone />
              <span>+593 98 933 6545</span>
            </li>
            <li>
              <FiMail />
              <span>contacto@milagromedicinaIntegrativa.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Milagro Medicina Integrativa.{" "}
            {footer.rights}
          </p>
          <p className={styles.note}>{footer.note}</p>
        </div>
      </div>
    </footer>
  );
}
