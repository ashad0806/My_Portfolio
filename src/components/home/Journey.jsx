import { Link } from 'react-router-dom'
import { Code, FileText, PenTool, Play } from 'lucide-react'

const items = [
  {
    icon: Code,
    title: 'Freelancer Developer',
    text: 'Engineered custom software solutions for diverse clients using Python and modern web frameworks. ',
    date: '2025 - Present',
    left: '4.9%',
    top: 70,
  },
  {
    icon: FileText,
    title: 'Documentation Asst.',
    text: 'Specialized in technical documentation & compliance reporting, ensuring all projects specification met int’l standard.',
    date: '2024 - 2025',
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
      <div className="relative h-full min-h-[195px] rounded-[17px] bg-[linear-gradient(180deg,#0c3587,#000000)] px-[21px] pb-12 pt-[19px]">
        <div className="flex items-center gap-2">
          <Icon size={34} />
          <h3 className="font-job text-xl leading-8 xl:text-[25px]">{title}</h3>
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
          </defs>
          <path
            d="M0 28.7 C48.2 4 160.2 -31.2 247 53.2 C333.8 137.6 281.3 197.4 241.5 274.7 C201.3 366.7 348.3 560.7 572.5 337.7 C660.5 250.2 627.5 300.7 704 199.2 C740.1 151.3 972.9 87.2 1082.5 227.2 C1192.1 367.2 1128.2 512.5 1082.5 601.7"
            stroke="url(#journey-line)"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* End dot */}
        <span
          className="absolute z-0 h-[27px] w-[27px] rounded-full bg-white"
          style={{ left: '80.25%', top: 571 }}
        />

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