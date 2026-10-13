import Bubbles from './Bubbles'

const orbs = [
  { left: '-8%', top: '8%', size: 520, color: '#0055ff', dur: 30, dx: 120, dy: -80 },
  { left: '62%', top: '2%', size: 440, color: '#00c8ff', dur: 36, dx: -100, dy: 90 },
  { left: '18%', top: '62%', size: 480, color: '#3b2bff', dur: 32, dx: 90, dy: -70 },
  { left: '72%', top: '66%', size: 420, color: '#00e5ff', dur: 40, dx: -80, dy: -100 },
]

// Fixed behind the photos: drifting glow orbs and slowly rising bubbles
function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {orbs.map((o, i) => (
        <span
          key={i}
          className="fx-orb"
          style={{
            left: o.left,
            top: o.top,
            width: o.size,
            height: o.size,
            background: o.color,
            '--dur': `${o.dur}s`,
            '--dx': `${o.dx}px`,
            '--dy': `${o.dy}px`,
          }}
        />
      ))}
      <Bubbles count={14} minSize={8} maxSize={34} />
    </div>
  )
}

export default BackgroundFX