import { Link } from 'react-router-dom'
import { Box, PenTool, Database, Coffee, Code, Layers, GitBranch, Palette, Play } from 'lucide-react'

const rows = [
  [
    { label: 'Python', icon: Box },
    { label: 'Figma', icon: PenTool },
    { label: 'SQL', icon: Database },
    { label: 'Java', icon: Coffee },
    { label: 'HTML', icon: Code },
  ],
  [
    { label: 'UI/UX Design', icon: Layers },
    { label: 'Github', icon: GitBranch },
    { label: 'Graphic Design', icon: Palette },
  ],
]

function Expertise() {
  return (
    <section className="bg-black px-6 pb-[66px] pt-[53px] text-center">
      <h2 className="font-heading text-4xl leading-tight sm:text-5xl lg:text-[53px]">
        Expertise &amp; Technologies
      </h2>

      <div className="mt-8 flex flex-col gap-8">
        {rows.map((row, i) => (
          <div key={i} className="flex flex-wrap justify-center gap-[33px]">
            {row.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex h-[61px] items-center gap-3 rounded-full bg-[#242424] px-[22px]"
              >
                <Icon size={35} strokeWidth={1.75} />
                <span className="font-mono text-2xl sm:text-[28px]">{label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <Link
        to="/skills"
        className="mx-auto mt-[69px] flex h-[58px] w-[183px] items-center justify-center gap-2 rounded-[15px] border-2 border-cyan bg-[linear-gradient(180deg,#0039ab,#021336)] font-button text-2xl text-cyan shadow-[inset_0_0_14px_rgba(104,255,255,0.25)] transition hover:brightness-125"
      >
        View Details
        <Play size={22} fill="currentColor" />
      </Link>
    </section>
  )
}

export default Expertise