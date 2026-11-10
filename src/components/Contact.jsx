import { profile } from '../data/portfolio'
import { Mail } from './Icons'
import AnimatedHeading from './AnimatedHeading'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const { ref, visible } = useReveal()

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
          </div>

          <ul className="contact__socials">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer">
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
