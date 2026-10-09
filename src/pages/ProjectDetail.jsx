import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, TriangleAlert, User } from 'lucide-react'
import { projectDetails } from '../data/projectDetails'

// Same quote on every project in your design. Replace it with a real one when you have it.
const quote = {
  text: '"Ashad\'s ability to take our chaotic data landscape and turn it into a beautiful, functional tool has completely changed how we operate. It\'s not just a dashboard; it\'s our competitive advantage."',
  name: 'Arshalan Aalam',
  role: 'CTO, Global Insights Corp',
}

// key, left %, width %, top px, height px (matches the Figma collage)
const tiles = [
  ['main', 0, 46.92, 0, 712],
  ['wide', 53.08, 46.92, 0, 356],
  ['small1', 53.08, 20.34, 425, 287],
  ['small2', 79.66, 20.34, 425, 287],
  ['tall', 0, 20.34, 781, 356],
  ['bottom', 27.74, 71.8, 781, 356],
]

function Pill({ children }) {
  return (
    <span className="flex h-[33px] items-center rounded-[20px] bg-navy px-[18px] font-sans text-base">
      {children}
    </span>
  )
}

function Tile({ src, className = '', style }) {
  return (
    <div
      style={style}
      className={`rounded-[20px] bg-[linear-gradient(135deg,#0033ff,#9cc7ff)] p-[6px] shadow-[6px_8px_6px_rgba(0,0,0,0.25)] ${className}`}
    >
      <img src={src} alt="" className="h-full w-full rounded-[14px] bg-[#d9d9d9] object-cover object-top" />
    </div>
  )
}

const sectionTitle =
  'font-calibri text-3xl font-bold sm:text-5xl xl:text-[48px] xl:leading-[58px]'

function ProjectDetail() {
  const { slug } = useParams()
  const p = projectDetails[slug]

  if (!p) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-6 py-40">
        <h1 className="font-heading text-5xl">Project not found</h1>
        <Link to="/projects" className="text-cyan underline">
          Back to all projects
        </Link>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section
        className="flex h-[420px] items-end justify-center border-b-2 border-white px-6 pb-8 text-center sm:h-[520px] xl:h-[706px] xl:pb-[50px]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(28,28,28,0) 0%, rgba(14,14,14,0.94) 91%, rgba(0,0,0,0.94) 100%), url(${p.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <h1 className="font-poppins text-3xl font-bold sm:text-5xl xl:text-[53px] xl:leading-[60px]">
          {p.title}
        </h1>
      </section>

      {/* Overview, problem, solution */}
      <section className="bg-[#0e1233] px-6 pb-16 pt-12 xl:px-[46px] xl:pb-[90px] xl:pt-[72px]">
        <div className="mx-auto max-w-[1348px]">
          <div className="grid gap-12 xl:grid-cols-[890px_1fr] xl:gap-[59px]">
            {/* Left column */}
            <div>
              <h2 className={`${sectionTitle} xl:pl-[28px]`}>Project Overview</h2>
              <p className="mt-3 whitespace-pre-line font-sans text-lg xl:mt-0 xl:text-[22px] xl:leading-[35px]">
                {p.overview}
              </p>

              {p.problem && (
                <div className="mt-12 max-w-[766px] rounded-[20px] bg-[#ececec]/20 px-6 pb-8 pt-[19px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-md xl:ml-[50px] xl:mt-[93px] xl:px-[30px]">
                  <div className="flex items-center gap-[7px] xl:pl-[7px]">
                    <TriangleAlert size={41} fill="#d9d9d9" stroke="#000000" strokeWidth={2} />
                    <h3 className="font-calibri text-2xl text-sky xl:ml-[3px] xl:text-[31px]">
                      The Problem
                    </h3>
                  </div>
                  <p className="mt-3 font-sans text-lg xl:text-[22px] xl:leading-[35px]">
                    {p.problem}
                  </p>
                </div>
              )}
            </div>

            {/* Right column */}
            <div>
              <p className="font-calibri text-2xl leading-[29px]">TECHNOLOGIES USED</p>
              <div className="mt-[22px] flex flex-wrap gap-x-[18px] gap-y-[15px]">
                {p.tech.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>

              <p className="mt-12 font-calibri text-2xl leading-[29px] xl:mt-[83px]">ROLE</p>
              <div className="mt-[22px] flex">
                <Pill>{p.role}</Pill>
              </div>

              <p className="mt-12 font-calibri text-2xl leading-[29px] xl:mt-[83px]">DURATION</p>
              <div className="mt-[22px] flex">
                <Pill>{p.duration}</Pill>
              </div>
            </div>
          </div>

          {p.solution && (
            <div className="mt-12 xl:mt-[98px]">
              <h2 className={`${sectionTitle} xl:pl-[28px]`}>Proposed Solution</h2>
              <p className="mt-3 max-w-[1326px] whitespace-pre-line font-nav text-lg font-medium xl:mt-[2px] xl:text-[25px] xl:leading-[34px]">
                {p.solution}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Design process */}
      <section className="bg-black px-6 pb-16 pt-12 xl:px-[72px] xl:pb-[150px] xl:pt-[134px]">
        <h2 className={`${sectionTitle} text-center`}>Design Process &amp; Artifacts</h2>

        {/* Desktop collage */}
        <div className="relative mx-auto mt-[57px] hidden h-[1137px] max-w-[1298px] xl:block">
          {tiles.map(([key, left, width, top, height]) => (
            <Tile
              key={key}
              src={p.images[key]}
              className="absolute"
              style={{ left: `${left}%`, width: `${width}%`, top, height }}
            />
          ))}
        </div>

        {/* Phone and tablet */}
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2 xl:hidden">
          {tiles.map(([key]) => (
            <Tile key={key} src={p.images[key]} className="h-[260px]" />
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="bg-[linear-gradient(180deg,#000c24_42%,#002774)] px-6 pb-16 pt-12 xl:px-[72px] xl:pb-[120px] xl:pt-[91px]">
        <div className="mx-auto max-w-[1298px]">
          <h2 className={`${sectionTitle} text-center`}>Impact &amp; Outcome</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:mt-[57px] xl:gap-[74px]">
            {p.metrics.map((m) => (
              <div
                key={m.label + m.value}
                className="flex min-h-[302px] flex-col items-center rounded-[20px] border border-transparent bg-[linear-gradient(180deg,#000000,#000d2d_33%,#0030a9_66%,#0048ff)_padding-box,linear-gradient(135deg,#ffffff,#b3b3b3,#666666)_border-box] px-6 pb-6 pt-[46px] text-center shadow-[0_6px_16px_rgba(0,0,0,0.4)]"
              >
                <span className="font-nav text-6xl font-medium leading-[60px] xl:text-[69px]">
                  {m.value}
                </span>
                <span className="mt-2 font-nav text-2xl font-medium xl:text-[31px] xl:leading-[38px]">
                  {m.label}
                </span>
                <p className="mt-6 max-w-[452px] font-calibri text-xl xl:mt-[38px] xl:text-[30px] xl:leading-[30px]">
                  {m.text}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="relative mt-8 min-h-[356px] rounded-[20px] border-2 border-black bg-[#002867] px-6 pb-[110px] pt-[70px] shadow-[0_6px_16px_rgba(0,0,0,0.4)] xl:mt-[96px] xl:px-[57px] xl:pt-[99px]">
            <span className="absolute left-6 top-4 font-calibri text-5xl font-bold xl:left-[83px] xl:top-[26px]">
              “
            </span>
            <p className="font-calibri text-xl font-bold italic text-aqua sm:text-2xl xl:text-[33px] xl:leading-[40px]">
              {quote.text}
            </p>

            <div className="absolute bottom-[32px] left-6 flex items-center gap-[17px] xl:left-[56px]">
              <span className="flex h-[57px] w-[57px] items-center justify-center rounded-full bg-white">
                <span className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[#eaddff] text-[#6750a4]">
                  <User size={30} />
                </span>
              </span>
              <div>
                <p className="font-calibri text-xl font-bold leading-6 xl:text-[21px]">
                  {quote.name}
                </p>
                <p className="font-calibri text-base leading-5 xl:text-[17px]">{quote.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to projects */}
      <section className="bg-black px-6 pb-16 pt-12 text-center xl:pb-[175px] xl:pt-[152px]">
        <h2 className="font-calibri text-3xl sm:text-4xl xl:text-[37px] xl:leading-[45px]">
          Interested in seeing of my work?
        </h2>
        <Link
          to="/projects"
          className="mx-auto mt-8 flex h-[71px] w-full max-w-[470px] items-center justify-center gap-4 rounded-[20px] bg-white font-calibri text-2xl text-[#0055ff] transition hover:brightness-90 sm:text-[37px]"
        >
          <ArrowLeft size={40} />
          Go back to All Projects
        </Link>
      </section>
    </>
  )
}

export default ProjectDetail