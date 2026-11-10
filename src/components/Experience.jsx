import { useEffect, useRef } from 'react'
import { BotMessageSquare, Gamepad2, PanelsTopLeft, Zap } from 'lucide-react'
import { solutions } from '../data/portfolio'
import AnimatedHeading from './AnimatedHeading'

const solutionIcons = [Zap, PanelsTopLeft, BotMessageSquare, Gamepad2]

export default function Experience() {
  const timelineRef = useRef(null)

  useEffect(() => {
    const root = timelineRef.current
    if (!root) return undefined
    const items = root.querySelectorAll('[data-timeline-item]')

    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.18, rootMargin: '0px 0px -5% 0px' })

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="solutions-section" id="pengalaman">
      <div className="container solutions__container" ref={timelineRef}>
        <header className="solutions__head">
          <AnimatedHeading highlight="untuk bisnis Anda?">Apa yang bisa dibantu<br /></AnimatedHeading>
          <p>Mulai dari pekerjaan rutin hingga pengalaman pelanggan yang lebih menarik.</p>
        </header>

        <ol className="solutions-timeline">
          {solutions.map((solution, index) => {
            const Icon = solutionIcons[index]
            return (
              <li className="solutions-timeline__item" data-timeline-item key={solution.title} style={{ '--item-index': index }}>
                <div className="solutions-timeline__title">
                  <span className="solutions-timeline__number">{String(index + 1).padStart(2, '0')}</span>
                  <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                  <h3>{solution.title}</h3>
                </div>
                <div className="solutions-timeline__body">
                  <p className="solutions-timeline__description">{solution.description}</p>
                  <ul className="solutions-timeline__tools" aria-label={`Teknologi untuk ${solution.title}`}>
                    {solution.tools.map((tool) => <li key={tool}>{tool}</li>)}
                  </ul>
                  <details className="solutions-timeline__example">
                    <summary>Contoh penerapan</summary>
                    <p>{solution.example}</p>
                  </details>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
