"use client";
import { useState, useEffect, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { setLocale } from "@/app/actions";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries/es";
import styles from "./Navbar.module.css";

export default function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["nav"];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [switching, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { href: "/", label: dict.home },
    { href: "/about", label: dict.about },
    { href: "/servicios", label: dict.services },
  ];

  const switchLocale = (next: Locale) =>
    startTransition(async () => {
      await setLocale(next);
      router.refresh();
    });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    // Pauses page animations so the menu reveal has the GPU to itself.
    document.body.classList.toggle("menu-open", menuOpen);
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
            <div className={styles.lang} role="group" aria-label="Idioma / Language">
              {(["es", "en"] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => switchLocale(l)}
                  disabled={switching}
                  aria-pressed={locale === l}
                  className={locale === l ? styles.langActive : ""}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </li>
          <li style={{ "--i": links.length + 1 } as React.CSSProperties}>
            <Link href="/#contacto" className={`btn btn-gold ${styles.cta}`} onClick={close}>
              {dict.book}
            </Link>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? dict.closeMenu : dict.openMenu}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
