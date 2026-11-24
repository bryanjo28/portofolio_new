import { useEffect, useRef, useState } from 'react'
import { Check as CheckIcon, Copy } from 'lucide-react'
import { profile } from '../data/portfolio'
import { Mail } from './Icons'
import AnimatedHeading from './AnimatedHeading'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const { ref, visible } = useReveal()
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setCopied(false), 2400)
    } catch {
      // Fallback: open mail client if clipboard is unavailable
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section className="section" id="kontak">
      <div className={`container reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="contact">
          <p className="eyebrow eyebrow--light">Kontak</p>
          <AnimatedHeading highlight="diwujudkan?">Punya ide atau proyek yang ingin</AnimatedHeading>
          <p className="contact__lead">
            Saya selalu senang mendengar cerita baru. Kirim pesan dan mari kita diskusikan
            langkah berikutnya.
          </p>

          <div className="contact__actions">
            <a href={`mailto:${profile.email}`} className="btn btn--light">
              <Mail /> {profile.email}
            </a>
            <button
              type="button"
              className={`btn btn--ghost-dark contact__copy ${copied ? 'is-copied' : ''}`}
              onClick={copyEmail}
            >
              {copied ? <CheckIcon size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
              <span>{copied ? 'Email tersalin!' : 'Salin email'}</span>
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? `Alamat email ${profile.email} berhasil disalin ke clipboard.` : ''}
            </span>
          </div>

          <ul className="contact__socials">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
