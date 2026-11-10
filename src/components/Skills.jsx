import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import AnimatedHeading from './AnimatedHeading'
import { Code2, Database as DatabaseIcon, GitBranch, Server, Workflow } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNodeJs, faReact, faPostgresql, faOpenai, faPython } from '@fortawesome/free-brands-svg-icons'

const tech = [
  { name: 'Node.js', icon: faNodeJs, color: '#78c85a' },
  { name: 'React', icon: faReact, color: '#61dafb' },
  { name: 'PostgreSQL', icon: faPostgresql, color: '#68b5e8' },
  { name: 'OpenAI', icon: faOpenai, color: '#7ee7c1' },
  { name: 'Python', icon: faPython, color: '#ffd166' },
]
function OrbitingTech() {
  const orbitRef = useRef(null)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const items = orbitRef.current.querySelectorAll('.orbit-item--3d')
    let frame
    let previousTime
    let angle = 0
    const positionItems = () => items.forEach((item, index) => {
      const radians = angle + index * (2 * Math.PI / tech.length)
      const x = 37 * Math.cos(radians)
      const y = 18 * Math.sin(radians)
      const tilt = -30 * Math.PI / 180
      const depth = (Math.sin(radians) + 1) / 2
      item.style.left = `${50 + x * Math.cos(tilt) - y * Math.sin(tilt)}%`
      item.style.top = `${50 + x * Math.sin(tilt) + y * Math.cos(tilt)}%`
      item.style.zIndex = Math.sin(radians) >= 0 ? 4 : 1
      item.style.setProperty('--depth-scale', 0.78 + depth * 0.4)
      item.style.setProperty('--depth-opacity', 0.5 + depth * 0.5)
    })
    const animate = (time) => {
      if (previousTime !== undefined) angle = (angle + Math.min(time - previousTime, 64) / 26000 * 2 * Math.PI) % (2 * Math.PI)
      previousTime = time
      positionItems()
      frame = requestAnimationFrame(animate)
    }
    const updateMotion = () => {
      cancelAnimationFrame(frame)
      previousTime = undefined
      positionItems()
      if (!motion.matches) frame = requestAnimationFrame(animate)
    }
    updateMotion()
    motion.addEventListener('change', updateMotion)
    return () => {
      cancelAnimationFrame(frame)
      motion.removeEventListener('change', updateMotion)
    }
  }, [])

  return (
    <div ref={orbitRef} className="skills-orbit skills-orbit--3d" role="img" aria-label="Node.js, React, PostgreSQL, OpenAI, dan Python mengorbit B.J.">
      <div className="orbit orbit--outer" />
      <div className="orbit orbit--inner" />
      <div className="orbit-center orbit-center--float"><span>B.J</span><small>TECH STACK</small></div>
      {tech.map((item) => (
          <div className="orbit-item orbit-item--3d" key={item.name} style={{ '--orbit-color': item.color }}>
            <span className="orbit-item__bubble">
              <span className="orbit-brand-bubble"><FontAwesomeIcon icon={item.icon} aria-hidden="true" /></span><small>{item.name}</small>
            </span>
          </div>
      ))}
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
            <AnimatedHeading className="section__title" highlight="saya gunakan">Teknologi yang</AnimatedHeading>
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
