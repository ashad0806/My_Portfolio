import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  BookOpen,
  Briefcase,
  Mail,
  MapPin,
  Phone,
  Settings,
  User,
} from 'lucide-react'
import { FaFigma } from 'react-icons/fa'

const skills = [
  { name: 'Python', pct: 90 },
  { name: 'Java', pct: 60 },
  { name: 'UI/UX', pct: 80 },
  { name: 'HTML/CSS', pct: 95 },
  { name: 'JS', pct: 75 },
  { name: 'SQL', pct: 90 },
]

const jobs = [
  {
    title: 'Freelancer Developer',
    date: '2025 - Present',
    bullets: [
      'Engineered custom software solutions for diverse clients using Python and modern web frameworks.',
      'Engineered custom software solutions for diverse clients using Python and modern web frameworks.',
      'Engineered custom software solutions for diverse clients using Python and modern web frameworks.',
    ],
  },
  {
    title: 'Documentation Assistant',
    date: '2025 - Till',
    bullets: [
      'Specialized in technical documentation & compliance reporting, ensuring all projects specification met international standardization requirements.',
      'Specialized in technical documentation & compliance reporting, ensuring all projects specification met international standardization requirements.',
      'Specialized in technical documentation & compliance reporting, ensuring all projects specification met international standardization requirements.',
    ],
  },
  {
    title: 'Order Management Assistant',
    date: '2024 - 2025',
    bullets: [
      'Managed high-volume inventory database with 99.99% accuracy using specialized ERP software.',
      'Streamlined the order fulfillment process reducing turnaround time by 2 days on average.',
      'Engineered custom software solutions for diverse clients using Python and modern web frameworks.',
    ],
  },
]

const education =
  'BSc. (Hons) in IT\nTechspire College Affiliated to Asia Pacific University of Innovation &Technology\n2025 - Till Date\n\nSchool Leaving Certificate (SLC)\nAadim National College\nNational Examination Board (NEB)\n2023 - 2025\n\nSecondary Education Examination (SEE)\nShree Pashupati Mitra Secondary School\n2023'

const achievements = [
  {
    icon: <FaFigma size={25} />,
    title: 'UI/UX Compilation ',
    text: 'Completed UI/UX design course & won the competition held on the inter college UI/UX competition.',
  },
  {
    icon: <Settings size={23} />,
    title: 'AWS Solutions Architect',
    text: 'Certified expertise in designing distributed systems & scalable cloud infrastructure.',
  },
]

const card =
  'rounded-[20px] border-2 border-transparent bg-[linear-gradient(180deg,#0c3587,#000000)_padding-box,linear-gradient(135deg,#ffffff,#68ffff)_border-box]'
const cardDark =
  'rounded-[20px] border-2 border-transparent bg-[linear-gradient(180deg,#0c3587,#030d21)_padding-box,linear-gradient(135deg,#ffffff,#68ffff)_border-box]'

function MiniGauge({ name, pct }) {
  const r = 43
  const c = 2 * Math.PI * r
  return (
    <div className="flex flex-col items-center">
      <span className="font-sans text-lg font-semibold leading-[22px]">{pct}%</span>
      <div className="relative mt-1.5 h-[101px] w-[101px]">
        <svg viewBox="0 0 101 101" className="h-full w-full -rotate-90">
          <circle cx="50.5" cy="50.5" r={r} fill="none" stroke="#0055ff" strokeWidth="15" />
          <circle
            cx="50.5"
            cy="50.5"
            r={r}
            fill="none"
            stroke="#68ffff"
            strokeWidth="15"
            strokeDasharray={`${(pct / 100) * c} ${c}`}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-sans text-[13px] font-semibold">
          {name}
        </span>
      </div>
    </div>
  )
}

function CardTitle({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-[13px]">
      <Icon size={40} className="shrink-0" />
      <h2 className="font-sans text-2xl font-bold xl:text-[30px] xl:leading-[36px]">{children}</h2>
    </div>
  )
}

function Resume() {
  return (
    <div className="bg-[linear-gradient(180deg,#000000,#152e5e,#000000)] px-6 pb-16 pt-10 xl:pb-[86px] xl:pt-[82px]">
      <div className="mx-auto grid max-w-[1246px] items-start gap-8 xl:grid-cols-[400px_1fr] xl:gap-[47px]">
        {/* Left column */}
        <div className="flex flex-col gap-[49px]">
          {/* Profile */}
          <div className={`${cardDark} px-6 pb-9 pt-[39px] xl:px-[41px] xl:min-h-[511px]`}>
            <img
              src="/images/resume-photo.jpg"
              alt="Ashad Alam"
              className="h-[157px] w-[157px] rounded-full border-2 border-white object-cover object-top"
            />
            <h1 className="mt-[24px] font-sans text-3xl font-bold xl:text-[34px] xl:leading-[41px]">
              Ashad Alam
            </h1>
            <p className="mt-2 font-sans text-base font-semibold leading-[19px] text-cyan">
              Junior Designer &amp; Python Developer
            </p>

            <div className="mt-[52px] flex flex-col gap-[26px] font-sans text-[15px] font-medium">
              <a href="mailto:ashadalam2006@gmail.com" className="flex items-center gap-[19px] hover:underline">
                <Mail size={22} className="shrink-0 text-[#0055ff]" />
                ashadalam2006@gmail.com
              </a>
              <a href="tel:+9779761831569" className="flex items-center gap-[19px] hover:underline">
                <Phone size={22} className="shrink-0 text-[#0055ff]" />
                +977 9761831569
              </a>
              <p className="flex items-center gap-[19px]">
                <MapPin size={22} className="shrink-0 text-[#0055ff]" />
                Kathmandu, Nepal
              </p>
            </div>
          </div>

          {/* Technical expertise */}
          <div className={`${cardDark} px-6 pb-8 pt-[44px] xl:min-h-[656px]`}>
            <h2 className="text-center font-sans text-2xl font-bold xl:text-[24px] xl:leading-[37px]">
              Technical Expertise
            </h2>
            <div className="mt-[52px] grid grid-cols-2 gap-x-4 gap-y-[39px]">
              {skills.map((s) => (
                <MiniGauge key={s.name} {...s} />
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-[48px]">
          {/* Summary */}
          <div className={`${card} px-6 pb-8 pt-[39px] xl:min-h-[281px] xl:px-[38px]`}>
            <div className="flex items-center gap-[13px] xl:pl-[16px]">
              <User size={40} className="shrink-0" />
              <h2 className="font-sans text-2xl font-bold xl:text-[30px] xl:leading-[36px]">
                Professional Summary
              </h2>
            </div>
            <p className="mt-[30px] max-w-[720px] font-sans text-base xl:text-xl xl:leading-6">
              Highly motivated &amp; detail-oriented Junior Designer with over 1 year of experience
              building/making scalable designs. Expert in architecting clean, maintainable
              codebases using Python &amp; Java. Proven track record in leading cross-functional
              teams &amp; delivering user-centric UI/UX solutions that drive business growth &amp;
              user engagement.
            </p>
          </div>

          {/* Experience */}
          <div className={`${card} px-6 pb-8 pt-[37px] xl:min-h-[739px] xl:px-[38px]`}>
            <CardTitle icon={Briefcase}>Experience</CardTitle>

            <div className="mt-[35px]">
              {jobs.map((job, i) => (
                <div key={job.title} className="relative min-h-[193px] pl-8 xl:pl-[53px]">
                  <span className="absolute left-0 top-[7px] h-[17px] w-[17px] rounded-full border-2 border-white bg-cyan shadow-[0_0_8px_rgba(104,255,255,0.7)] xl:left-[13px]" />
                  {i < jobs.length - 1 && (
                    <span className="absolute left-[7px] top-[19px] hidden h-[151px] w-[3px] bg-[linear-gradient(180deg,#619eff,#ffffff)] xl:left-[20px] xl:block" />
                  )}

                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 xl:pr-[17px]">
                    <h3 className="font-job text-lg leading-[26px] xl:text-xl">{job.title}</h3>
                    <span className="font-job text-[15px]">{job.date}</span>
                  </div>

                  <ul className="mt-[18px] flex flex-col gap-[13px] xl:max-w-[610px]">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="relative pl-[31px] font-date text-[15px] leading-[17px]">
                        <span className="absolute left-[9px] top-1 h-[9px] w-[9px] rounded-full bg-cyan" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Achievements */}
          <div className="grid gap-[48px] md:grid-cols-2 xl:grid-cols-[375fr_378fr] xl:gap-[46px]">
            <div className={`${card} px-6 pb-8 pt-[31px] xl:min-h-[366px] xl:px-[24px]`}>
              <CardTitle icon={BookOpen}>Education</CardTitle>
              <p className="mt-[24px] whitespace-pre-line font-sans text-[15px] font-bold leading-[18px] xl:pl-[5px]">
                {education}
              </p>
            </div>

            <div className={`${card} px-6 pb-8 pt-[31px] xl:min-h-[366px] xl:px-[24px]`}>
              <CardTitle icon={BookOpen}>Achievements</CardTitle>
              <div className="mt-[34px] flex flex-col gap-[27px]">
                {achievements.map((a) => (
                  <div
                    key={a.title}
                    className="min-h-[96px] rounded-[10px] bg-[linear-gradient(135deg,#0c3587,#2057c5)] px-[27px] py-[12px] xl:px-[27px]"
                  >
                    <div className="flex items-center gap-[7px]">
                      {a.icon}
                      <h3 className="font-calibri text-xl font-bold leading-6">{a.title}</h3>
                    </div>
                    <p className="mt-[6px] font-calibri text-[13px] leading-4">{a.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Go back */}
      <Link
        to="/"
        className="mx-auto mt-12 flex h-[69px] w-[199px] items-center justify-center gap-3 rounded-[20px] bg-[linear-gradient(180deg,#013190,#152e5e)] font-sans text-[26px] font-bold shadow-[inset_0_0_14px_rgba(255,255,255,0.3)] transition hover:brightness-125 xl:mt-[86px]"
      >
        <ArrowLeft size={30} />
        Go Back
      </Link>
    </div>
  )
}

export default Resume