'use client'
import { useRef, useEffect } from 'react'

const stats = [
  { count: 500, suffix: 'K+', label: 'Real Users' },
  { count: 7, suffix: ' Thn', label: 'Operasional' },
  { count: 100, suffix: '+', label: 'Brand Dilayani' },
  { count: 20, suffix: '+', label: 'Agency Partners' },
]

function animateCount(el) {
  const target = parseInt(el.dataset.count)
  const suffix = el.dataset.suffix || ''
  let val = 0
  const step = target / 80
  const run = () => {
    val = Math.min(val + step, target)
    el.textContent = Math.floor(val).toLocaleString('id') + suffix
    if (val < target) requestAnimationFrame(run)
  }
  run()
}

export default function HeroProof() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) {
            el.querySelectorAll('[data-count]').forEach(animateCount)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="hero-proof" ref={ref}>
      {stats.map(({ count, suffix, label }) => (
        <div key={label}>
          <div className="pn" data-count={count} data-suffix={suffix}>
            {count}{suffix}
          </div>
          <div className="pl">{label}</div>
        </div>
      ))}
    </div>
  )
}
