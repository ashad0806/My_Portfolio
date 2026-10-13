import { Link } from 'react-router-dom'
import { Briefcase, BookOpen, ClipboardList, FileText, Package, ArrowLeft } from 'lucide-react'

const work = [
  {
    icon: FileText,
    title: 'Documentation Officer',
    date: 'Aug 2026 - Present',
    text: 'Active Synergy Consultants Pvt. Ltd., Bagbazar, Kathmandu.\nManage and organize physical and digital documentation, improving retrieval efficiency and filing accuracy.\nReview documents for accuracy and compliance, and prepare official records, reports and correspondence.\nCoordinate with team members and clients to collect, verify and process required documentation.',
  },
  {
    icon: ClipboardList,
    title: 'Documentation Assistant',
    date: '2026',
    text: 'GEC Consultancy, Kathmandu.\nPrepared and organized documentation for students applying for foreign education.\nEnsured accuracy and completeness of application files and assisted students with forms and submission processes.',
  },
  {
    icon: Package,
    title: 'Order Management Assistant',
    date: '2023',
    text: 'Marketing Neupane Suppliers, Kathmandu.\nProcessed orders from multiple merchants, ensuring accuracy and timely delivery.\nMaintained clear communication with clients to confirm requirements and resolve queries.',
  },
]

const education = [
  {
    title: 'B.Sc. Hons in IT',
    school: 'Techspire College (Asia Pacific University)',
    text: 'Bachelor of Science (Honours) in Information Technology, with a focus on UI/UX design, web development and Python.\nCurrently pursuing.',
    pills: ['2025 - present'],
  },
  {
    title: 'S.L.C. (+2 Level Studies)',
    school: 'Aadim National College',
    text: 'Completed +2 level studies in the Management faculty with \nBasic Mathematics & Computer Science. Well known &\none of the most Disciplined students in the college.',
    pills: ['2025', 'GPA - 3.50'],
  },
]

const see = {
  title: 'SEE',
  school: 'Shree Pashupati Mitra Secondary School',
  text: 'A student full of passion in computer science and mathematics. Chose Optional Mathematics & Computer Science in school so I could get a proper base in this sector.',
  pills: ['2023', 'GPA - 2.80'],
}

function Pill({ children }) {
  return (
    <span className="flex h-[37px] items-center rounded-[20px] bg-[#0023ae] px-[15px] font-date text-lg xl:text-[21px]">
      {children}
    </span>
  )
}

function EduCard({ item, className = '' }) {
  return (
    <article
      className={`rounded-[20px] border-2 border-transparent bg-[linear-gradient(180deg,#0c3587,#00153e)_padding-box,linear-gradient(135deg,#0055ff,#ffffff)_border-box] px-6 pb-8 pt-[27px] shadow-[0_8px_20px_rgba(0,0,0,0.45)] xl:px-[32px] ${className}`}
    >
      <h3 className="font-job text-xl leading-8 xl:text-[25px]">{item.title}</h3>
      <p className="mt-[9px] font-date text-lg text-cyan xl:text-[21px] xl:leading-[30px]">
        {item.school}
      </p>
      <p className="mt-[18px] font-date text-base xl:whitespace-pre-line xl:text-[21px] xl:leading-[30px]">
        {item.text}
      </p>
      <div className="mt-6 flex flex-wrap gap-5">
        {item.pills.map((p) => (
          <Pill key={p}>{p}</Pill>
        ))}
      </div>
    </article>
  )
}

function Journey() {
  return (
    <>
      {/* Work experience */}
      <section className="bg-[linear-gradient(180deg,#152e5e,#0b172f_33%,#050b18_66%,#000000)] px-6 pb-16 pt-8 xl:px-[49px] xl:pb-[96px] xl:pt-[37px]">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="font-heading text-5xl sm:text-6xl xl:text-[71px] xl:leading-[107px]">
            My Journey
          </h1>
          <p className="mt-2 max-w-[822px] font-calibri text-xl xl:mt-0 xl:text-[25px] xl:leading-[34px]">
            A comprehensive overview of my professional trajectory, academic{' '}
            <br className="hidden xl:block" />
            background , &amp; milestone that have shaped my technical foundation
          </p>

          <div className="mt-12 flex items-center gap-[13px] xl:mt-[85px] xl:pl-1">
            <Briefcase size={43} className="shrink-0" />
            <h2 className="font-calibri text-3xl font-bold xl:text-[40px] xl:leading-[49px]">
              Work Experience
            </h2>
          </div>

          <div className="relative mt-8 flex flex-col gap-8 xl:ml-[70px] xl:mt-[65px] xl:max-w-[1230px] xl:gap-[65px]">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-[-45px] top-[9px] hidden w-[3px] bg-[linear-gradient(180deg,#ffffff,#0055ff)] xl:block" />

            {work.map(({ icon: Icon, title, date, text }) => (
              <article
                key={title}
                className="relative min-h-[188px] rounded-[20px] border border-transparent bg-[linear-gradient(180deg,#00143d,#174091)_padding-box,linear-gradient(135deg,#0033ff,#ffffff)_border-box] px-6 pb-6 pt-[25px] shadow-[0_8px_20px_rgba(0,0,0,0.45)]"
              >
                {/* Timeline dot */}
                <span className="absolute left-[-52px] top-0 hidden h-[17px] w-[17px] rounded-full bg-[#00ddff] xl:block" />

                <span className="absolute right-6 top-6 flex h-[31px] items-center rounded-[20px] bg-[#4c5cad] px-[9px] font-date text-base">
                  {date}
                </span>

                <div className="flex items-center gap-[14px] pr-36 xl:pl-[14px]">
                  <Icon size={37} className="shrink-0" />
                  <h3 className="font-job text-xl leading-8 xl:text-[25px]">{title}</h3>
                </div>

                <p className="mt-[28px] whitespace-pre-line font-date text-base xl:pl-[14px] xl:text-[18px] xl:leading-6">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-y border-white bg-[linear-gradient(180deg,#000000,#002858_30%,#002858_70%,#000000)] px-6 pb-16 pt-12 xl:px-[55px] xl:pb-[101px] xl:pt-[91px]">
        <div className="mx-auto max-w-[1330px]">
          <div className="flex items-center gap-[17px]">
            <BookOpen size={40} className="shrink-0" />
            <h2 className="font-calibri text-3xl font-bold xl:text-[40px] xl:leading-[49px]">
              Education Background
            </h2>
          </div>

          <div className="mt-10 grid gap-8 xl:mt-[94px] xl:grid-cols-2 xl:gap-x-[61px] xl:gap-y-[78px]">
            {education.map((item) => (
              <EduCard key={item.title} item={item} className="xl:min-h-[309px]" />
            ))}
            <EduCard item={see} className="xl:col-span-2 xl:min-h-[275px]" />
          </div>
        </div>
      </section>

      {/* Go back */}
      <div className="bg-black pb-16 pt-12 xl:pb-[61px] xl:pt-[82px]">
        <Link
          to="/"
          className="mx-auto flex h-[69px] w-[199px] items-center justify-center gap-3 rounded-[20px] bg-[linear-gradient(180deg,#013190,#152e5e)] font-sans text-[26px] font-bold shadow-[inset_0_0_14px_rgba(255,255,255,0.3)] transition hover:brightness-125"
        >
          <ArrowLeft size={30} />
          Go Back
        </Link>
      </div>
    </>
  )
}

export default Journey