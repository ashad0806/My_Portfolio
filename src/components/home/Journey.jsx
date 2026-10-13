import { Link } from 'react-router-dom'
import { Code, FileText, PenTool, Play } from 'lucide-react'

// Three shapes of your curve. The path morphs between them so the line keeps moving.
const PATH_A =
  'M0 28.7 C48.2 4 160.2 -31.2 247 53.2 C333.8 137.6 281.3 197.4 241.5 274.7 C201.3 366.7 348.3 560.7 572.5 337.7 C660.5 250.2 627.5 300.7 704 199.2 C740.1 151.3 972.9 87.2 1082.5 227.2 C1192.1 367.2 1128.2 512.5 1082.5 601.7'
const PATH_B =
  'M0 28.7 C70 -18 140 -10 247 53.2 C350 120 265 215 241.5 274.7 C180 385 370 535 572.5 337.7 C680 270 600 330 704 199.2 C770 130 950 120 1082.5 227.2 C1170 345 1150 490 1082.5 601.7'
const PATH_C =
  'M0 28.7 C30 30 185 -50 247 53.2 C320 160 300 180 241.5 274.7 C225 345 325 585 572.5 337.7 C640 230 650 280 704 199.2 C715 170 995 60 1082.5 227.2 C1215 390 1105 535 1082.5 601.7'
const PATH_VALUES = [PATH_A, PATH_B, PATH_C, PATH_A].join(';')

function MorphAnimate() {
  return (
    <animate
      attributeName="d"
      dur="14s"
      repeatCount="indefinite"
      calcMode="spline"
      keyTimes="0;0.33;0.66;1"
      keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1"
      values={PATH_VALUES}
    />
  )
}

const items = [
  {
    icon: Code,
    title: 'Freelancer Developer',
    text: 'Engineered custom software solutions for diverse clients using Python and modern web frameworks. ',
    date: '2026 - Present',
    left: '4.9%',
    top: 70,
  },
  {
    icon: FileText,
    title: 'Documentation Asst.',
    text: 'Specialized in technical documentation & compliance reporting, ensuring all projects specification met int’l standard.',
    date: '2025 - 2026',
    left: '36.6%',
    top: 168,
  },
  {
    icon: PenTool,
    title: 'B.Sc. Hons in IT',
    text: 'Specialized in Software Engineering & Database Management at Techspire College under APU university.',
    date: '2025 - Present',
    left: '68.17%',
    top: 268,
  },
]

function JourneyCard({ item, style, className = '' }) {
  const { icon: Icon, title, text, date } = item
  return (
    <article
      style={style}
      className={`rounded-[20px] bg-[linear-gradient(135deg,#ffffff,#0033ff)] p-[3px] shadow-[0_8px_24px_rgba(0,0,0,0.55)] ${className}`}
    >
      <div className="relative h-full min-h-[195px] rounded-[17px] bg-[linear-gradient(180deg,#0c3587,#000000)] pb-12 pl-[21px] pr-[18px] pt-[19px]">
        <div className="flex items-center gap-1.5">
          <Icon size={34} className="shrink-0" />
          <h3 className="font-job text-xl leading-8 xl:whitespace-nowrap xl:text-[clamp(18px,1.727vw,25px)]">
            {title}
          </h3>
        </div>
        <p className="mt-5 font-date text-[15px] leading-[17px] xl:mt-8">{text}</p>
        <span className="absolute bottom-3 right-6 font-date text-[15px]">{date}</span>
      </div>
    </article>
  )
}

function FullJourneyButton({ className = '' }) {
  return (
    <Link
      to="/journey"
      className={`flex h-[58px] w-[230px] items-center justify-center gap-2 rounded-[15px] border border-cyan bg-[linear-gradient(180deg,#002f8f,#071229)] font-button text-2xl text-cyan shadow-[inset_0_0_14px_rgba(104,255,255,0.25)] transition hover:brightness-125 ${className}`}
    >
      View Full Journey
      <Play size={22} fill="currentColor" />
    </Link>
  )
}

function Journey() {
  return (
    <section className="border-y border-[#666666] bg-[linear-gradient(180deg,#000000,#002858_30%,#002858_70%,#000000)] px-6 pb-16 pt-8 xl:pb-0">
      {/* Heading */}
      <div className="mx-auto max-w-[1448px] text-center">
        <h2 className="font-heading text-4xl sm:text-5xl xl:text-[53px] xl:leading-[107px]">
          My Journey
        </h2>
        <p className="font-calibri text-xl xl:text-[25px] xl:leading-[31px]">
          A brief look at my professional path and academic foundation.
        </p>
      </div>

      {/* Desktop: curved timeline */}
      <div className="relative mx-auto hidden h-[677px] max-w-[1448px] xl:block">
                <svg
          data-static
          className="absolute z-0 overflow-visible"
          style={{ left: '6.35%', width: '78.94%', top: -13, height: 602 }}
          viewBox="0 0 1143 602"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="journey-line" x1="0" y1="0" x2="1143" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#002c85" />
            </linearGradient>
            <linearGradient id="journey-comet" x1="0" y1="0" x2="1143" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#68ffff" />
            </linearGradient>
          </defs>

          {/* The curve, waving between three shapes */}
          <path
            d={PATH_A}
            stroke="url(#journey-line)"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          >
            <MorphAnimate />
          </path>

          {/* Two lights travelling along the curve */}
          <path
            className="flow-comet"
            d={PATH_A}
            pathLength="1000"
            stroke="url(#journey-comet)"
            strokeWidth="4"
            strokeLinecap="round"
          >
            <MorphAnimate />
          </path>
          <path
            className="flow-comet"
            style={{ animationDelay: '-3.5s' }}
            d={PATH_A}
            pathLength="1000"
            stroke="url(#journey-comet)"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <MorphAnimate />
          </path>
        </svg>

        {/* End dot */}
        <span
          data-static
          className="absolute z-0 h-[27px] w-[27px]"
          style={{ left: '80.25%', top: 571 }}
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-cyan opacity-60" />
          <span className="absolute inset-0 rounded-full bg-white shadow-[0_0_14px_rgba(104,255,255,0.9)]" />
        </span>

        {items.map((item) => (
          <JourneyCard
            key={item.title}
            item={item}
            className="absolute z-10 h-[201px] w-[26.38%]"
            style={{ left: item.left, top: item.top }}
          />
        ))}

        <FullJourneyButton className="absolute left-1/2 top-[542px] -translate-x-1/2" />
      </div>

      {/* Phone and tablet: stacked cards */}
      <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-6 xl:hidden">
        {items.map((item) => (
          <JourneyCard key={item.title} item={item} className="w-full" />
        ))}
        <FullJourneyButton className="mt-4" />
      </div>
    </section>
  )
}

export default Journey