import { about } from '../data/portfolio'
import { Check } from './Icons'
import { useReveal } from '../hooks/useReveal'
import AnimatedHeading from './AnimatedHeading'

export default function About() {
  const { ref, visible } = useReveal()

  return (
    <section className="section" id="tentang">
      <div className={`container reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <p className="eyebrow about__eyebrow">{about.eyebrow}</p>

        <div className="about">
          <div className="about__main">
            <AnimatedHeading className="section__title">{about.title}</AnimatedHeading>

            <div className="about__text">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <ul className="about__list">
            {about.highlights.map((item) => {
              const [title, ...description] = item.split(':')
              return <li key={item}>
                <span className="about__check">
                  <Check />
                </span>
                <span className="about__highlight-copy">
                  <strong>{title}</strong>
                  <span>{description.join(':').trim()}</span>
                </span>
              </li>
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
