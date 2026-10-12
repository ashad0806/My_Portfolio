import { useMemo, useState } from 'react'

// Deterministic-looking random numbers for each bubble
function makeBubbles(count, minSize, maxSize) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: minSize + Math.random() * (maxSize - minSize),
    dur: 9 + Math.random() * 10,
    delay: -Math.random() * 16,
    sway: (Math.random() > 0.5 ? 1 : -1) * (15 + Math.random() * 45),
  }))
}

// variant "page": fixed to the screen, not clickable
// variant "hero": inside its parent, clickable to pop
function Bubbles({ count = 14, minSize = 10, maxSize = 46, variant = 'page' }) {
  const bubbles = useMemo(() => makeBubbles(count, minSize, maxSize), [count, minSize, maxSize])
  const [popped, setPopped] = useState({})

  const pop = (id) => {
    setPopped((p) => ({ ...p, [id]: true }))
    setTimeout(() => setPopped((p) => ({ ...p, [id]: false })), 4000)
  }

  return (
    <div
      data-static
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${
        variant === 'page' ? 'z-[1]' : 'z-0'
      }`}
    >
      {bubbles.map((b) => (
        <span
          key={b.id}
          onClick={variant === 'hero' ? () => pop(b.id) : undefined}
          className={`bubble ${variant === 'hero' ? 'bubble-hero' : ''} ${
            popped[b.id] ? 'bubble-pop' : ''
          }`}
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            '--dur': `${b.dur}s`,
            '--delay': `${b.delay}s`,
            '--sway': `${b.sway}px`,
          }}
        />
      ))}
    </div>
  )
}

export default Bubbles