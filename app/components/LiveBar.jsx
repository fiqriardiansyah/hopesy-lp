'use client'
import { useRef, useEffect } from 'react'

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

export default function LiveBar() {
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
    <div className="live-bar">
      <div className="live-in" ref={ref}>
        <span className="live-lbl">Live Bulan Ini</span>
        <div className="live-items">
          <div className="live-item">
            <span className="live-dot"></span>
            <span className="live-num" data-count="14">14</span>&nbsp;Campaign Aktif
          </div>
          <div className="live-item">
            <span className="live-dot"></span>
            <span className="live-num" data-count="38291">38.291</span>&nbsp;UGC Dikirim
          </div>
          <div className="live-item">
            <span className="live-dot"></span>
            <span className="live-num" data-count="6">6</span>&nbsp;Brand Trending
          </div>
          <div className="live-item">
            <span className="live-dot"></span>
            Avg. respons&nbsp;<span className="live-num" data-count="2">2</span>&nbsp;jam
          </div>
        </div>
      </div>
    </div>
  )
}
