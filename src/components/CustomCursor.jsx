import { useEffect, useRef } from 'react'

const LINK = 'a, button, [role="button"], summary, select, label[for]'
const CARD = 'article'
const TEXT = 'input, textarea'

function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    const dot = dotRef.current
    const ring = ringRef.current
    const glow = glowRef.current
    document.documentElement.classList.add('has-cursor')

    let mx = -100
    let my = -100
    let rx = -100
    let ry = -100
    let gx = -100
    let gy = -100
    let shown = false
    let raf = 0

    const show = (on) => {
      const v = on ? '1' : '0'
      dot.style.opacity = v
      ring.style.opacity = v
      glow.style.opacity = v
      shown = on
    }

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (!shown) {
        rx = gx = mx
        ry = gy = my
        show(true)
      }
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`
    }

    const onOver = (e) => {
      const t = e.target
      if (!(t instanceof Element)) return
      let state = ''
      if (t.closest(TEXT)) state = 'text'
      else if (t.closest(LINK)) state = 'link'
      else if (t.closest(CARD)) state = 'card'
      ring.dataset.state = state
      dot.dataset.state = state
    }

    const onDown = (e) => {
      ring.dataset.down = '1'
      const r = document.createElement('div')
      r.className = 'cursor-ripple'
      r.style.left = `${e.clientX}px`
      r.style.top = `${e.clientY}px`
      r.addEventListener('animationend', () => r.remove())
      document.body.appendChild(r)
    }
    const onUp = () => {
      ring.dataset.down = ''
    }
    const onLeave = () => show(false)
    const onEnter = () => {
      if (mx > -100) show(true)
    }

    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      gx += (mx - gx) * 0.08
      gy += (my - gy) * 0.08
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove('has-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none">
      {/* Soft glow */}
      <div
        ref={glowRef}
        className="fixed left-0 top-0 z-[2] -ml-[260px] -mt-[260px] h-[520px] w-[520px] rounded-full opacity-0 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(circle, rgba(0,120,255,0.17) 0%, rgba(0,200,255,0.06) 40%, transparent 70%)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="cursor-ring fixed left-0 top-0 z-[9999] -ml-5 -mt-5 h-10 w-10 opacity-0 transition-opacity duration-300"
      >
        <div className="cursor-ring-inner h-full w-full rounded-full border border-cyan/80" />
      </div>
      {/* Dot */}
      <div
        ref={dotRef}
        className="cursor-dot fixed left-0 top-0 z-[9999] -ml-[4px] -mt-[4px] h-2 w-2 rounded-full bg-cyan opacity-0 shadow-[0_0_10px_rgba(104,255,255,0.9)] transition-opacity duration-300"
      />
    </div>
  )
}

export default CustomCursor