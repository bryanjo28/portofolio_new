import { useEffect, useRef, useState } from 'react'

export default function Counter({ value }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const target = Number.parseInt(value, 10)
  const suffix = value.endsWith('+') ? '+' : ''

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined
    let frame
    let startedAt
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const tick = (time) => {
        if (startedAt === undefined) startedAt = time
        const progress = Math.min((time - startedAt) / 1500, 1)
        const eased = 1 - (1 - progress) ** 4
        setCount(Math.round(target * eased))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.35 })
    observer.observe(element)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [target])

  return <span className="counter-value" ref={ref} aria-label={`${target}${suffix}`}>{count}{suffix}</span>
}
