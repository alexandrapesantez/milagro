'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Milagro Medicina Integrativa"
            width={160}
            height={72}
            priority
          />
        </Link>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.open : ''}></span>
          <span className={menuOpen ? styles.open : ''}></span>
          <span className={menuOpen ? styles.open : ''}></span>
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.mobileOpen : ''}`}>
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>Nosotros</Link></li>
          <li><Link href="/servicios" onClick={() => setMenuOpen(false)}>Servicios</Link></li>
          <li>
            <Link href="#contacto" className={styles.ctaBtn} onClick={() => setMenuOpen(false)}>
              Agendar Cita
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
