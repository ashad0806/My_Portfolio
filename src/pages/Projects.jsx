import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'


const projects = [
  {
    slug: 'employee-management-system',
    title: 'Employee Management System',
    image: '/images/ems-logo.png',
    tags: ['Python', 'Database'],
    text: 'A desktop application to manage employee records and automate HR operations.',
    year: '2025',
    card: { left: '6.94%', top: 13 },
    dot: { left: '39.51%', top: 216 },
    yearPos: { left: '44.44%', top: 201 },
  },
  {
    slug: 'hive-management-system',
    title: 'Hive Management System',
    image: '/images/hive-cover.png',
    tags: ['Python', 'Database'],
    text: 'A desktop application to keep the records of college library and the table booking system in HIVE room for multiple purposes.',
    year: '2025',
    card: { left: '62.22%', top: 342 },
    dot: { left: '56.32%', top: 548 },
    yearPos: { left: '46.46%', top: 533 },
  },
  {
    slug: 'food-fest-2026',
    title: 'Food-Fest 2026 Website',
    image: '/images/foodfest-cover.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    text: 'A desktop application which is for the annual FOOD-FEST where different food ventures are invited to sell their food items and more.',
    year: '2026',
    card: { left: '12.43%', top: 839 },
    dot: { left: '45.97%', top: 1019 },
    yearPos: { left: '50%', top: 1004 },
  },
  {
    slug: 'dance-studio-management-system',
    title: 'Dance Studio Management System',
    image: '/images/dance-cover.png',
    tags: ['Python', 'Database'],
    text: 'A desktop application for the records of students of the student of the studio, and the overall information about the studio.',
    year: '2026',
    card: { left: '63.13%', top: 1325 },
    dot: { left: '54.51%', top: 1582 },
    yearPos: { left: '45.28%', top: 1571 },
  },
  {
    slug: 'portfolio-design',
    title: 'Portfolio Design',
    image: '/images/portfolio-cover.png',
    tags: ['Figma', 'Animation'],
    text: 'A desktop freelancer portfolio website containing the information of his/her, overall projects and experiences.',
    year: '2026',
    card: { left: '16.39%', top: 1899 },
    dot: { left: '48.89%', top: 2116 },
    yearPos: { left: '53.33%', top: 2101 },
  },
]

function ProjectCard({ project, style, className = '' }) {
  return (
    <article
      style={style}
      className={`flex w-full max-w-[433px] flex-col rounded-[25px] bg-[#2e4a6c] px-[17px] pb-[14px] pt-5 shadow-[0_10px_24px_rgba(0,0,0,0.5)] xl:h-[535px] xl:w-[433px] ${className}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-[243px] w-full rounded-[25px] object-cover object-top"
      />

      <div className="flex flex-1 flex-col px-[5px] pt-[30px]">
        <div className="flex flex-wrap gap-3.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="flex h-6 items-center rounded-full bg-sky px-4 font-mono text-base text-black"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mt-2 font-card text-2xl leading-[39px] xl:text-[31px]">{project.title}</h3>
        <p className="mt-5 font-sans text-[15px] leading-[18px]">{project.text}</p>

        <Link
          to={`/projects/${project.slug}`}
          className="mt-auto flex items-center gap-1 pt-4 font-jersey text-[21px] text-cyan hover:underline"
        >
          View Details
          <ArrowUpRight size={24} />
        </Link>
      </div>
    </article>
  )
}

const SVG_TOP = 231.5
const SVG_H = 1901
const CARD_W = 30.07 // card width as % of the 1440px container
const DOT_W = 1.875 // dot width as %

// Dot centre, measured in the curve's own units (same scale as the svg)
const dotY = (p) => p.dot.top + 13.5 - SVG_TOP

// Short horizontal rung between a card and its dot
function rungOf(p) {
  const c = parseFloat(p.card.left)
  const d = parseFloat(p.dot.left)
  return c < d
    ? { left: c + CARD_W, width: d - (c + CARD_W), origin: 'right' }
    : { left: d + DOT_W, width: c - (d + DOT_W), origin: 'left' }
}

function Projects() {
  const boxRef = useRef(null)
  const pathRef = useRef(null)
  const headRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    let samples = null
    let total = 0

    const update = () => {
      const box = boxRef.current
      const path = pathRef.current
      const head = headRef.current
      if (!box || !path || !head || box.offsetParent === null) return // hidden on phones

      // Measure the curve once, when it is visible
      if (!samples) {
        total = path.getTotalLength()
        if (!total) return
        samples = []
        for (let i = 0; i <= 400; i++) {
          const len = (i / 400) * total
          const pt = path.getPointAtLength(len)
          samples.push({ len, x: pt.x, y: pt.y })
        }
        path.style.strokeDasharray = `${total}`
      }

      // The tip of the line follows the scroll position
      const rect = box.getBoundingClientRect()
      const tip = window.innerHeight * 0.65 - rect.top - SVG_TOP
      const y = Math.max(0, Math.min(SVG_H, tip))

      let idx = samples.findIndex((s) => s.y >= y)
      if (idx === -1) idx = samples.length - 1
      const s = samples[idx]

      path.style.strokeDashoffset = `${total - s.len}`
      head.setAttribute('cx', s.x)
      head.setAttribute('cy', s.y)
      head.style.opacity = tip <= 0 ? 0 : 1

      setActive(projects.filter((p) => dotY(p) <= y).length)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="bg-[linear-gradient(180deg,#000000,#00062b,#000b56,#000f70,#001475,#001677,#001879)] px-6 pb-16 pt-8 xl:px-0 xl:pb-[140px] xl:pt-[36px]">
      <div className="mx-auto max-w-[1440px]">
        {/* Heading */}
        <div className="xl:pl-[47px]">
          <h1 className="font-heading text-5xl sm:text-6xl xl:text-[71px] xl:leading-[100px]">
            My Projects
          </h1>
          <p className="mt-3 max-w-[1240px] font-card text-lg sm:text-2xl xl:mt-[22px] xl:text-[32px] xl:leading-10">
            A selection of my technical engineering work, ranging from deep-backend Python
            solutions to high-fidelity UI/UX design{' '}
          </p>
        </div>

        {/* Desktop: winding timeline that draws itself as you scroll */}
        <div ref={boxRef} data-static className="relative mt-[51px] hidden h-[2434px] xl:block">
          <svg
            className="absolute overflow-visible"
            style={{ left: '40.17%', top: SVG_TOP, width: '19.57%', height: SVG_H }}
            viewBox="0 0 281.83 1901"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="projects-line" x1="0" y1="0" x2="0" y2="1901" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0062ff" />
                <stop offset="0.25" stopColor="#3784ff" />
                <stop offset="0.5" stopColor="#619eff" />
                <stop offset="0.75" stopColor="#9ec3ff" />
                <stop offset="1" stopColor="#c7d9ff" />
              </linearGradient>
            </defs>

            {/* Faint track: the whole route */}
            <path
              d="M0 0 C75 32.2 229.8 162 245.3 359.9 C259 533.8 192.9 540.8 100 782.3 C84 823.8 34.2 1050.2 205.2 1349.7 C376.2 1649.2 219 1797.2 138 1901"
              stroke="url(#projects-line)"
              strokeOpacity="0.22"
              strokeWidth="5"
              vectorEffect="non-scaling-stroke"
            />

            {/* Bright line that grows with the scroll */}
            <path
              ref={pathRef}
              d="M0 0 C75 32.2 229.8 162 245.3 359.9 C259 533.8 192.9 540.8 100 782.3 C84 823.8 34.2 1050.2 205.2 1349.7 C376.2 1649.2 219 1797.2 138 1901"
              stroke="url(#projects-line)"
              strokeWidth="5"
              strokeLinecap="round"
              style={{
                strokeDasharray: 100000,
                strokeDashoffset: 100000,
                filter: 'drop-shadow(0 0 6px rgba(104,255,255,0.7))',
              }}
            />

            {/* Glowing head at the tip */}
            <circle
              ref={headRef}
              r="8"
              fill="#ffffff"
              style={{ opacity: 0, filter: 'drop-shadow(0 0 10px #68ffff)' }}
            />
          </svg>

          {projects.map((p, i) => {
            const on = i < active
            const rung = rungOf(p)
            return (
              <div key={p.slug}>
                {/* Rung between dot and card */}
                <span
                  className="absolute h-[3px] rounded-full bg-[linear-gradient(90deg,#68ffff,#ffffff)] transition-transform duration-700 ease-out"
                  style={{
                    left: `${rung.left}%`,
                    width: `${rung.width}%`,
                    top: p.dot.top + 12,
                    transformOrigin: rung.origin,
                    transform: on ? 'scaleX(1)' : 'scaleX(0)',
                  }}
                />

                {/* Dot */}
                <span
                  className="absolute h-[27px] w-[27px]"
                  style={p.dot}
                >
                  {on && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-cyan opacity-60" />
                  )}
                  <span
                    className={`absolute inset-0 rounded-full border transition-all duration-500 ${
                      on
                        ? 'scale-110 border-cyan bg-white shadow-[0_0_16px_rgba(104,255,255,0.95)]'
                        : 'scale-75 border-[#506a9e] bg-[#2c3f6b]'
                    }`}
                  />
                </span>

                {/* Year */}
                <span
                  className={`absolute font-poppins text-[42px] font-semibold leading-[47px] transition-all duration-700 ${
                    on ? 'text-cyan opacity-100' : 'text-[#6da5ff] opacity-30'
                  }`}
                  style={p.yearPos}
                >
                  {p.year}
                </span>

                {/* Card steps in when its dot is reached */}
                <div
                  className="absolute transition-all duration-700 ease-out"
                  style={{
                    ...p.card,
                    opacity: on ? 1 : 0.18,
                    transform: on ? 'translateY(0)' : 'translateY(40px)',
                  }}
                >
                  <ProjectCard project={p} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Phone and tablet: stacked cards */}
        <div className="mt-10 flex flex-col items-center gap-10 xl:hidden">
          {projects.map((p) => (
            <div key={p.slug} className="w-full max-w-[433px]">
              <p className="mb-3 font-poppins text-4xl font-semibold text-[#6da5ff]">{p.year}</p>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mx-auto mt-16 max-w-[1205px] rounded-[30px] border-2 border-white bg-[#00127e] px-6 py-12 text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] xl:mt-[122px] xl:h-[435px] xl:px-0 xl:py-0 xl:pt-[87px]">
          <h2 className="font-mono text-2xl sm:text-3xl xl:text-[30px] xl:leading-[31px]">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-6 max-w-[825px] font-mono text-xl sm:text-2xl xl:mt-[43px] xl:text-[30px] xl:leading-[31px]">
            I&apos;m always open to discussing new technical challenges{' '}
            <br className="hidden xl:block" />
            and creative collaborations.
          </p>
          <Link
            to="/contact"
            className="mx-auto mt-8 flex h-[70px] w-full max-w-[340px] items-center justify-center rounded-full bg-[#345390] font-holtwood text-xl shadow-[0_6px_14px_rgba(0,0,0,0.45)] transition hover:brightness-125 sm:text-[30px] xl:mt-[67px]"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects