import { profile } from '../data/portfolio'
import Counter from './Counter'
import reactIcon from '../assets/techstack/transparent/reactJS.png'
import nodeIcon from '../assets/techstack/transparent/nodeJS.png'
import databaseIcon from '../assets/techstack/transparent/postgre.png'
import githubIcon from '../assets/techstack/transparent/github.png'

const stackIcons = [
  { name: 'React', src: reactIcon },
  { name: 'Node.js', src: nodeIcon },
  { name: 'Database', src: databaseIcon },
  { name: 'GitHub', src: githubIcon },
]

export default function Stats() {
  const [featured, ...supporting] = profile.stats

  return (
    <section className="stats-section" aria-label="Statistik portofolio">
      <div className="container">
        <p className="eyebrow">Dampak dalam angka</p>
        <div className="stats-showcase">
          <article className="stats-card stats-card--featured">
            <p className="stats-card__eyebrow">Portofolio B.J.</p>
            <h2><Counter value={featured.value} /> <span>{featured.label}</span></h2>
            <p className="stats-card__description">Membangun produk digital dari ide sampai siap digunakan.</p>
            <div className="stats-card__stack" aria-label="Teknologi yang sering digunakan">
              {/* {stackIcons.map((icon) => <span className="stats-card__stack-icon" key={icon.name}><img src={icon.src} alt={icon.name} /></span>)} */}
              <span className="stats-card__stack-label">Tools yang sering dipakai</span>
            </div>
          </article>
          {supporting.map((stat) => (
            <article className="stats-card stats-card--support" key={stat.label}>
              <span className="stats-card__value"><Counter value={stat.value} /></span>
              <h3>{stat.label}</h3>
              <span className="stats-card__line" aria-hidden="true" />
              <p>Kontribusi dalam proyek profesional dan independen.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
