'use client'
import { useRef, useEffect } from 'react'

// Deterministic pseudo-random between 0–1 seeded by an integer
function seededRand(seed) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

// Base values as of January 2025
const BASE_YEAR = 2025
const BASE_MONTH = 0

function computeStats() {
  const now = new Date()
  const months = Math.max(
    0,
    (now.getFullYear() - BASE_YEAR) * 12 + now.getMonth() - BASE_MONTH
  )

  let campaigns = 8
  let ugc = 10000
  let brands = 3

  for (let m = 0; m < months; m++) {
    // ~37.5% chance to add 1 campaign/month → avg +6 over 16 months
    if (seededRand(m * 4 + 1) < 0.375) campaigns += 1
    // Adds 1400–2200 UGC/month → avg ~28k over 16 months
    ugc += Math.floor(1400 + seededRand(m * 4 + 2) * 800)
    // ~20% chance to add 1 trending brand/month → avg +3 over 16 months
    if (seededRand(m * 4 + 3) < 0.2) brands += 1
  }

  return { campaigns, ugc, brands }
}

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
  const stats = computeStats()

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
            <span className="live-num" data-count={stats.campaigns}>
              {stats.campaigns.toLocaleString('id')}
            </span>&nbsp;Campaign Aktif
          </div>
          <div className="live-item">
            <span className="live-dot"></span>
            <span className="live-num" data-count={stats.ugc}>
              {stats.ugc.toLocaleString('id')}
            </span>&nbsp;UGC Dikirim
          </div>
          <div className="live-item">
            <span className="live-dot"></span>
            <span className="live-num" data-count={stats.brands}>
              {stats.brands.toLocaleString('id')}
            </span>&nbsp;Brand Trending
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
