import { profile } from '../data/portfolio'
import { ArrowRight, Mail } from './Icons'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const { ref, visible } = useReveal()

  return (
    <section className="section" id="kontak">
      <div className={`container reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="contact">
          <p className="eyebrow eyebrow--light">Kontak</p>
          <h2>Punya ide atau proyek yang ingin diwujudkan?</h2>
          <p className="contact__lead">
            Saya selalu senang mendengar cerita baru. Kirim pesan dan mari kita diskusikan
            langkah berikutnya.
          </p>

          <div className="contact__actions">
            <a href={`mailto:${profile.email}`} className="btn btn--light">
              <Mail /> {profile.email}
            </a>
            <a href="#proyek" className="btn btn--outline-light btn--animata">
              <span>Lihat proyek</span><span className="btn__arrow" aria-hidden="true"><span className="btn__arrow-track"><ArrowRight size={17} /><ArrowRight size={17} /></span></span>
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
