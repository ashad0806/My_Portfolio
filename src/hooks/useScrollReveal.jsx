import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Elements that fade in when scrolled into view
const TARGETS = [
  'main h1',
  'main h2',
  'main h3',
  'main p',
  'main article',
  'main form',
  'main [data-reveal]',
  'main [class*="rounded-["]',
  'main :is(div, a, button, span)[class*="rounded-full"]',
].join(',')

function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const all = [...document.querySelectorAll(TARGETS)].filter(
      (el) => !el.closest('[data-static]'),
    )
    const set = new Set(all)

    // Skip anything inside another animated element, so a card moves as one piece
    const targets = all.filter((el) => {
      let p = el.parentElement
      while (p) {
        if (set.has(p)) return false
        p = p.parentElement
      }
      return true
    })

    // Small delay between neighbours so they appear one after another
    const counts = new Map()
    targets.forEach((el) => {
      const n = counts.get(el.parentElement) || 0
      counts.set(el.parentElement, n + 1)
      el.style.setProperty('--rv-delay', `${Math.min(n, 6) * 90}ms`)
      el.classList.add('rv')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('rv-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])
}

export default useScrollReveal