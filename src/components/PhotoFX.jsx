import { useRef, useState } from 'react'

// shape: "circle" (Home, Resume) or "card" (rounded rectangle, About)
function PhotoFX({ src, alt, shape = 'circle', className = '', imgClassName = '' }) {
  const ref = useRef(null)
  const frame = useRef(0)
  const [burst, setBurst] = useState(0)

  const onMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty('--rx', `${(-y * 14).toFixed(2)}deg`)
      el.style.setProperty('--ry', `${(x * 14).toFixed(2)}deg`)
      el.style.setProperty('--mx', `${((x + 0.5) * 100).toFixed(1)}%`)
      el.style.setProperty('--my', `${((y + 0.5) * 100).toFixed(1)}%`)
    })
  }

  const onLeave = () => {
    cancelAnimationFrame(frame.current)
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={ref}
      data-static
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => setBurst((n) => n + 1)}
      className={`photo-fx photo-fx-${shape} ${className}`}
    >
      <span className="photo-fx-glow" />
      <span className="photo-fx-ring" />
      {shape === 'circle' && (
        <span className="photo-fx-orbit" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      )}
      {burst > 0 && <span key={burst} className="photo-fx-burst" />}

      <div className="photo-fx-card">
        <img src={src} alt={alt} className={`h-full w-full object-cover ${imgClassName}`} />
        <span className="photo-fx-shine" />
      </div>
    </div>
  )
}

export default PhotoFX