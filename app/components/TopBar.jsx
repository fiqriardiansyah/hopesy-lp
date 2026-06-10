'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header className={`topbar${scrolled ? ' scrolled' : ''}`}>
        <a className="tb-brand" href="#" onClick={close}>
          <img
            src="/hopesy.png"
            alt="HOPESY"
            style={{ display: 'block', height: '40px' }}
            onError={(e) => {
              e.target.outerHTML =
                '<span style="font-family:Cabinet Grotesk,sans-serif;font-size:20px;font-weight:800;color:#8b0f63;letter-spacing:-.3px">Hopesy</span>'
            }}
          />
        </a>
        <nav className="tb-nav">
          <a className="nav-a" href="#cara-kerja">Cara Kerja</a>
          <a className="nav-a" href="#layanan">Layanan</a>
          <a className="nav-a" href="#trust-score">Trust Score</a>
          <a className="nav-a" href="#faq">FAQ</a>
          <Link className="nav-a" href="/blog">Blog</Link>
          <a
            className="btn-wa"
            href="https://wa.me/6285892758224?text=Halo%20HOPESY%2C%20saya%20ingin%20konsultasi"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Chat WhatsApp
          </a>
        </nav>
        <button
          className="tb-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={menuOpen ? 'ham-open-1' : ''}></span>
          <span className={menuOpen ? 'ham-open-2' : ''}></span>
          <span className={menuOpen ? 'ham-open-3' : ''}></span>
        </button>
      </header>
      <div className={`tb-mobile-menu${menuOpen ? ' open' : ''}`}>
        <a className="nav-a" href="#cara-kerja" onClick={close}>Cara Kerja</a>
        <a className="nav-a" href="#layanan" onClick={close}>Layanan</a>
        <a className="nav-a" href="#trust-score" onClick={close}>Trust Score</a>
        <a className="nav-a" href="#faq" onClick={close}>FAQ</a>
        <Link className="nav-a" href="/blog" onClick={close}>Blog</Link>
        <a
          className="btn-wa"
          href="https://wa.me/6285892758224?text=Halo%20HOPESY%2C%20saya%20ingin%20konsultasi"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          💬 Chat WhatsApp
        </a>
      </div>
    </>
  )
}
