import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolio'
import { ArrowRight, Close, Menu } from './Icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lightMode, setLightMode] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = lightMode ? 'light' : 'dark'
  }, [lightMode])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 820) setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header
      className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--on-dark'} ${
        open ? 'navbar--open' : ''
      }`}
    >
      <div className="container navbar__inner">
        <a href="#atas" className="brand" aria-label="Kembali ke atas">
          <span className="brand__name">{profile.initials}</span>
        </a>

        <nav id="menu-utama" className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navigasi utama">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#kontak" className="btn btn--primary btn--animata nav__cta" onClick={() => setOpen(false)}>
            <span>Ayo ngobrol</span><span className="btn__arrow" aria-hidden="true"><span className="btn__arrow-track"><ArrowRight size={15} /><ArrowRight size={15} /></span></span>
          </a>
        </nav>

        {/* <button className="theme-toggle" type="button" onClick={() => setLightMode((value) => !value)} aria-label={lightMode ? 'Aktifkan mode gelap' : 'Aktifkan mode terang'}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            {lightMode ? <><path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z" /><path d="M16 3v3M14.5 4.5h3" /></> : <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>}
          </svg>
        </button> */}

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="menu-utama"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
