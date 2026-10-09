import { Link } from 'react-router-dom'
import {
  Code,
  Database,
  PaintBucket,
  Globe,
  Wrench,
  GitBranch,
  Container,
  Rocket,
  Pipette,
  ArrowLeft,
} from 'lucide-react'
import { FaFigma } from 'react-icons/fa'

const programming = [
  { name: 'Python', pct: 90, text: 'Advanced automation, data analysis, &\nbackend architecture.' },
  { name: 'Java', pct: 60, text: 'Enterprise-grade solutions & strictly\ntyped OOP systems.' },
]

const databases = [
  { label: 'SQL', pct: 90 },
  { label: 'PostgreSQL', pct: 70 },
]

const tools = [
  { icon: GitBranch, label: 'Git & Github' },
  { icon: Container, label: 'Dockerize' },
  { icon: Rocket, label: 'Postman' },
  { icon: Code, label: 'VS Code & PyCharm' },
]

const learning = [
  { letter: 'R', name: 'React', sub: 'Core Logic' },
  { letter: 'N', name: 'Node Js', sub: 'API Dev' },
  { letter: 'T', name: 'Tailwind', sub: 'UI Styling' },
  { letter: 'F', name: 'Flutter', sub: 'Cross-Platform' },
]

const cardProgramming =
  'border-2 border-transparent bg-[linear-gradient(180deg,#011845,#02359a)_padding-box,linear-gradient(135deg,#ffffff,#68ffff)_border-box] shadow-[0_8px_20px_rgba(0,0,0,0.45)]'
const cardSolid =
  'border-2 border-transparent bg-[linear-gradient(#021a4a,#021a4a)_padding-box,linear-gradient(135deg,#ffffff,#68ffff)_border-box] shadow-[0_8px_20px_rgba(0,0,0,0.45)]'
const cardBlue =
  'border-2 border-transparent bg-[linear-gradient(180deg,#092866,#0641b7)_padding-box,linear-gradient(135deg,#ffffff,#68ffff)_border-box] shadow-[0_8px_20px_rgba(0,0,0,0.45)]'
const cardTools =
  'border-2 border-transparent bg-[linear-gradient(180deg,#092866,#033ba9)_padding-box,linear-gradient(135deg,#ffffff,#68ffff)_border-box] shadow-[0_8px_20px_rgba(0,0,0,0.45)]'

function Gauge({ name, pct }) {
  const r = 63
  const c = 2 * Math.PI * r
  return (
    <div className="relative h-[149px] w-[149px]">
      <svg viewBox="0 0 149 149" className="h-full w-full -rotate-90">
        <circle cx="74.5" cy="74.5" r={r} fill="none" stroke="#0055ff" strokeWidth="22" />
        <circle
          cx="74.5"
          cy="74.5"
          r={r}
          fill="none"
          stroke="#68ffff"
          strokeWidth="22"
          strokeDasharray={`${(pct / 100) * c} ${c}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-sans text-[28px] font-semibold leading-[33px]">{pct}%</span>
        <span className="font-sans text-xl font-semibold leading-6">{name}</span>
      </div>
    </div>
  )
}

function Bar({ label, pct }) {
  return (
    <div>
      <div className="flex justify-between font-sans text-xl font-semibold sm:text-2xl">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div className="mt-7 h-5 rounded-full bg-[#0055ff]">
        <div className="h-full rounded-full bg-cyan" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

function Skills() {
  return (
    <div className="bg-[linear-gradient(180deg,#020202,#071c45_25%,#05235e_50%,#071c45_75%,#000000)] px-6 pb-16 xl:pb-[77px]">
      {/* Heading */}
      <section className="pt-12 text-center xl:pt-[67px]">
        <h1 className="font-calibri text-5xl font-bold sm:text-7xl xl:text-[90px] xl:leading-[110px]">
          Technical Ecosystem
        </h1>
        <p className="mx-auto mt-4 max-w-[755px] font-calibri text-xl xl:text-[26px] xl:leading-8">
          A comprehensive showcase of my technical proficiency, development{' '}
          <br className="hidden xl:block" />
          methodologies, &amp; the ever-evolution toolset I use to build robust digital{' '}
          <br className="hidden xl:block" />
          solutions
        </p>
      </section>

      <div className="mx-auto mt-12 flex max-w-[1315px] flex-col gap-[50px] xl:mt-[107px]">
        {/* Row 1: Programming + Databases */}
        <div className="grid gap-8 xl:grid-cols-[829fr_438fr] xl:gap-12">
          <div className={`min-h-[426px] rounded-[20px] px-6 pt-[36px] xl:px-[61px] ${cardProgramming}`}>
            <div className="flex items-center gap-[13px]">
              <Code size={50} className="shrink-0" />
              <h2 className="font-calibri text-4xl font-bold xl:text-[44px] xl:leading-[54px]">
                Programming
              </h2>
            </div>

            <div className="mt-[58px] grid gap-10 sm:grid-cols-2">
              {programming.map(({ name, pct, text }) => (
                <div key={name} className="flex flex-col items-center text-center">
                  <Gauge name={name} pct={pct} />
                  <p className="mt-[42px] whitespace-pre-line font-sans text-base font-semibold leading-[19px]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={`min-h-[426px] rounded-[20px] px-6 pt-[36px] xl:px-[41px] ${cardSolid}`}>
            <div className="flex items-center gap-[17px]">
              <Database size={45} className="shrink-0" />
              <h2 className="font-calibri text-4xl font-bold xl:text-[44px] xl:leading-[54px]">
                Databases
              </h2>
            </div>
            <div className="mt-[56px] flex flex-col gap-[47px] pb-10">
              {databases.map((d) => (
                <Bar key={d.label} {...d} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: UI/UX + Web Development */}
        <div className="grid gap-8 xl:grid-cols-2 xl:gap-[49px]">
          <div className={`min-h-[409px] rounded-[20px] px-6 pb-10 pt-[38px] xl:px-[47px] ${cardBlue}`}>
            <div className="flex items-center gap-[16px]">
              <PaintBucket size={47} className="shrink-0" />
              <h2 className="font-calibri text-3xl font-bold xl:text-[40px] xl:leading-[49px]">
                UI/UX Design
              </h2>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-[58px]">
              <div className="flex h-[158px] w-[195px] flex-col items-center rounded-[20px] bg-navy pt-[15px]">
                <FaFigma size={69} />
                <span className="mt-[24px] font-sans text-2xl font-semibold leading-[29px]">Figma</span>
              </div>
              <div className="flex h-[158px] w-[196px] flex-col items-center rounded-[20px] bg-navy pt-[17px]">
                <span className="flex h-[66px] w-[66px] items-center justify-center rounded-full bg-[conic-gradient(#ff0101,#ff6f00,#6fff00,#00fffb,#0051ff,#c800ff,#ff0099,#ff0101)]">
                  <Pipette size={32} />
                </span>
                <span className="mt-[24px] font-sans text-2xl font-semibold leading-[29px]">Adobe</span>
              </div>
            </div>

            <p className="mx-auto mt-[42px] max-w-[477px] text-center font-sans text-lg font-semibold leading-6 xl:text-xl">
              Focusing on accessible, user-centric interfaces &amp; consistent design systems.
            </p>
          </div>

          <div className={`min-h-[409px] rounded-[20px] px-6 pb-10 pt-[43px] xl:px-[44px] ${cardSolid}`}>
            <div className="flex items-center gap-[33px]">
              <Globe size={45} className="shrink-0 text-cyan" />
              <h2 className="font-calibri text-3xl font-bold xl:text-[40px] xl:leading-[49px]">
                Web Development
              </h2>
            </div>

            <div className="mt-[55px] flex flex-wrap gap-[27px]">
              {['HTML', 'JavaScript'].map((t) => (
                <span
                  key={t}
                  className="flex h-[62px] items-center rounded-[40px] bg-[linear-gradient(90deg,#0b49c6,#152e5e)] px-[43px] font-sans text-2xl font-bold xl:text-[26px]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-[67px] px-1">
              <Bar label="Frontend Logics" pct={90} />
            </div>
          </div>
        </div>

        {/* Row 3: Tools & DevOps */}
        <div className={`min-h-[271px] rounded-[20px] px-6 pb-10 pt-[41px] xl:px-[43px] ${cardTools}`}>
          <div className="flex items-center gap-[15px]">
            <Wrench size={48} className="shrink-0" />
            <h2 className="font-calibri text-3xl font-bold xl:text-[40px] xl:leading-[49px]">
              Tools &amp; DevOps
            </h2>
          </div>

          <div className="mt-[37px] flex flex-wrap gap-6 xl:justify-between">
            {tools.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex h-[71px] items-center gap-[14px] rounded-2xl bg-[linear-gradient(135deg,#0c3587,#0055ff)] pl-[30px] pr-[33px]"
              >
                <Icon size={34} strokeWidth={2} className="shrink-0 text-cyan" />
                <span className="font-calibri text-2xl font-bold xl:text-[30px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Currently Learning */}
      <section className="mt-16 xl:mt-[164px]">
        <h2 className="text-center font-calibri text-4xl font-bold sm:text-5xl xl:text-[58px] xl:leading-[71px]">
          Currently Learning
        </h2>

        <div className="mx-auto mt-12 grid max-w-[1151px] justify-items-center gap-8 sm:grid-cols-2 xl:mt-[95px] xl:grid-cols-4 xl:gap-[77px]">
          {learning.map(({ letter, name, sub }) => (
            <div
              key={name}
              className="flex h-[262px] w-[230px] flex-col items-center rounded-[20px] border-2 border-white bg-[linear-gradient(180deg,#152e5e,#0055ff)] pt-[30px]"
            >
              <span className="font-script text-[64px] leading-[81px]">{letter}</span>
              <span className="mt-4 font-sans text-[28px] font-semibold leading-[34px]">{name}</span>
              <span className="mt-2 font-sans text-[22px] leading-[27px]">{sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Go back */}
      <Link
        to="/"
        className="mx-auto mt-16 flex h-[69px] w-[199px] items-center justify-center gap-3 rounded-[20px] bg-[linear-gradient(180deg,#013190,#152e5e)] font-sans text-[26px] font-bold shadow-[inset_0_0_14px_rgba(255,255,255,0.3)] transition hover:brightness-125 xl:mt-[148px]"
      >
        <ArrowLeft size={30} />
        Go Back
      </Link>
    </div>
  )
}

export default Skills