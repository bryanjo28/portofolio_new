import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { Code2, Database as DatabaseIcon, GitBranch, Server, Workflow } from 'lucide-react'
import githubIcon from '../assets/techstack/transparent/github.png'
import nodeIcon from '../assets/techstack/transparent/nodeJS.png'
import databaseIcon from '../assets/techstack/transparent/postgre.png'
import reactIcon from '../assets/techstack/transparent/reactJS.png'

const tech = [
  { name: 'Node.js', src: nodeIcon },
  { name: 'React', src: reactIcon },
  { name: 'Database', src: databaseIcon },
  { name: 'GitHub', src: githubIcon },
]

function OrbitingTech() {
  const [angle, setAngle] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    let frame
    let previousTime
    const animate = (time) => {
      if (previousTime !== undefined) setAngle((current) => (current + ((time - previousTime) / 25000) * 360) % 360)
      previousTime = time
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="skills-orbit skills-orbit--3d" aria-label="Node.js, React, Database, dan GitHub mengorbit B.J.">
      <div className="orbit orbit--outer" />
      <div className="orbit orbit--inner" />
      <div className="orbit-center orbit-center--float"><span>B.J</span><small>TECH STACK</small></div>
      {tech.map((item, index) => {
        const radians = ((angle + index * (360 / tech.length)) * Math.PI) / 180
        const x = 39 * Math.cos(radians)
        const y = 23 * Math.sin(radians)
        const tilt = (-30 * Math.PI) / 180
        const xTilted = x * Math.cos(tilt) - y * Math.sin(tilt)
        const yTilted = x * Math.sin(tilt) + y * Math.cos(tilt)
        const depth = (Math.sin(radians) + 1) / 2

        return (
          <div className="orbit-item orbit-item--3d" key={item.name} style={{ left: `${50 + xTilted}%`, top: `${50 + yTilted}%`, zIndex: Math.round(1 + depth * 4) }}>
            <span className="orbit-item__bubble" style={{ '--depth-scale': 0.86 + depth * 0.28, '--depth-opacity': 0.68 + depth * 0.32 }}>
              <img src={item.src} alt="" /><small>{item.name}</small>
            </span>
          </div>
        )
      })}
    </div>
  )
}

const descriptions = [
  { title: 'Frontend', tools: 'React.js · Vite', detail: 'Antarmuka web yang interaktif.' },
  { title: 'Backend', tools: 'Node.js · Express.js', detail: 'Logika aplikasi dan integrasi API.' },
  { title: 'Database', tools: 'PostgreSQL · Supabase · SQL', detail: 'Penyimpanan dan pengelolaan data.' },
   { title: 'API & Third-Party Integration ', tools: 'REST API · External Services · Cloud Services', detail: 'Mengintegrasikan aplikasi dengan berbagai layanan eksternal.' },
  { title: 'Version control', tools: 'Git · GitHub', detail: 'Kolaborasi kode dan pengelolaan versi.' },
]

const skillIcons = {
  Frontend: Code2,
  Backend: Server,
  Database: DatabaseIcon,
  'API & Third-Party Integration': Workflow,
  'Version control': GitBranch,
}

export default function Skills() {
  const { ref, visible } = useReveal()

  return (
    <section className="section section--soft" id="keahlian">
      <div className={`container reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="skills-layout skills-layout--split">
          <div className="skills-copy">
            <p className="eyebrow">Keahlian</p>
            <h2 className="section__title">Teknologi yang saya gunakan</h2>
            <p className="section__lead">Saya mengembangkan aplikasi secara end-to-end dengan memanfaatkan berbagai teknologi modern. Mulai dari merancang antarmuka pengguna, membangun sistem backend, mengelola database, hingga mengintegrasikan berbagai layanan untuk menciptakan aplikasi yang fungsional, efisien, dan scalable.</p>
            <div className="skills-description-list">
              {descriptions.map((item) => {
                const Icon = skillIcons[item.title.trim()]
                const tools = item.tools.replaceAll('Â·', '·')
                return (
                  <article className="skills-description" key={item.title}>
                    <div className="skills-description__heading">
                      <span className="skills-description__icon">{Icon && <Icon size={18} strokeWidth={1.8} />}</span>
                      <div><h3>{item.title.trim()}</h3><p>{tools}</p></div>
                    </div>
                    <small className="skills-description__detail">{item.detail}</small>
                  </article>
                )
              })}
            </div>
          </div>
          <OrbitingTech />
        </div>
      </div>
    </section>
  )
}
