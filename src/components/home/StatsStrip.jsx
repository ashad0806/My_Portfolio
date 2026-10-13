import CountUp from '../CountUp'
import { projects } from '../../data/Projects'

// Edit these numbers any time
const stats = [
  { end: 10, suffix: '+', label: 'Projects Built' },
  { end: 3.50, decimals: 2, label: 'GPA' },
  { end: 100, suffix: '%', label: 'Accuracy' },
]

function StatsStrip() {
  return (
    <div className="mx-auto mt-10 grid max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-[20px] border border-white/15 bg-[linear-gradient(180deg,#002060,#000000)] px-6 py-6 text-center"
        >
          <div className="bg-[linear-gradient(90deg,#00e5ff,#0759ff)] bg-clip-text font-sans text-5xl font-bold text-transparent">
            <CountUp
              end={s.end}
              decimals={s.decimals}
              prefix={s.prefix}
              suffix={s.suffix}
            />
          </div>
          <div className="mt-1 font-calibri text-xl">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

export default StatsStrip