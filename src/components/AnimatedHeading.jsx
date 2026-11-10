import { useReveal } from '../hooks/useReveal'

export default function AnimatedHeading({ children, highlight, className = '' }) {
  const { ref, visible } = useReveal()

  return (
    <h2 ref={ref} className={`${className} animated-heading ${visible ? 'is-visible' : ''}`}>
      <span className="animated-heading__copy">{children}{highlight && <>{' '}<span className="animated-heading__highlight">{highlight}</span></>}</span>
    </h2>
  )
}
