"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${menuOpen ? styles.menuActive : ""}`}
    >
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo} onClick={close}>
          <Image
            src="/images/logo-white.png"
            alt="Milagro Medicina Integrativa"
            width={1200}
            height={269}
            priority
          />
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.mobileOpen : ""}`}>
          {links.map((l, i) => (
            <li key={l.href} style={{ "--i": i } as React.CSSProperties}>
              <Link
                href={l.href}
                onClick={close}
                className={pathname === l.href ? styles.active : ""}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li style={{ "--i": links.length } as React.CSSProperties}>
            <Link href="/#contacto" className={`btn btn-gold ${styles.cta}`} onClick={close}>
              Agendar Cita
            </Link>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
