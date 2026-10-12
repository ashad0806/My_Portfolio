import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  Briefcase,
  Download,
  Folder,
  GraduationCap,
  Languages,
  Layers,
  Mail,
  MapPin,
  Phone,
  Trophy,
  User,
  Wrench,
} from 'lucide-react'

const summary =
  'BSc (Hons) IT student specializing in UI/UX design and web development, with hands-on experience in HTML, CSS, JavaScript, Java, Python, database management, and Figma. Experienced in developing responsive web interfaces and technology-based projects, while also bringing professional experience in documentation management, client coordination, and administrative operations. Strong attention to detail, communication, and problem-solving skills with a proven ability to work independently and collaboratively.'

const technical = [
  { label: 'Programming', items: ['Python', 'Java'] },
  { label: 'Web Development', items: ['HTML5', 'CSS3', 'JavaScript'] },
  { label: 'UI/UX', items: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping'] },
  { label: 'Database', items: ['Database Management'] },
]

const professional = [
  'Documentation & Records Management',
  'Communication & Team Collaboration',
  'Client Coordination',
  'Problem Solving & Research',
  'Attention to Detail & Time Management',
]

const languages = ['English', 'Nepali', 'Hindi']

const jobs = [
  {
    title: 'Documentation Officer',
    company: 'Active Synergy Consultants Pvt. Ltd.',
    place: 'Bagbazar, Kathmandu',
    date: '9 August 2026 – Present',
    bullets: [
      'Manage and organize physical and digital documentation, improving retrieval efficiency and filing accuracy.',
      'Review documents for accuracy, completeness, and compliance with company and client requirements.',
      'Prepare, format, and update official records, reports, and correspondence.',
      'Maintain confidentiality and security of sensitive company and client information.',
      'Coordinate with team members and clients to collect, verify, and process required documentation.',
    ],
  },
  {
    title: 'Documentation Assistant',
    company: 'GEC Consultancy',
    place: 'Kathmandu, Nepal',
    date: '2026',
    bullets: [
      'Prepared and organized documentation for students applying for foreign education.',
      'Ensured accuracy and completeness of application files.',
      'Assisted students with forms, requirements, and submission processes.',
      'Strengthened attention to detail and professional communication skills.',
    ],
  },
  {
    title: 'Order Management Assistant',
    company: 'Marketing Neupane Suppliers',
    place: 'Kathmandu, Nepal',
    date: '2023',
    bullets: [
      'Processed orders from multiple merchants, ensuring accuracy and timely delivery.',
      'Maintained clear communication with clients to confirm requirements and resolve queries.',
    ],
  },
]

const projects = [
  {
    slug: 'hive-management-system',
    title: 'HIVE Management System',
    tech: ['UI/UX Design'],
    bullets: [
      'Designed the UI/UX for a college library management platform supporting student applications, table booking, and library operations.',
      'Focused on usability, navigation, visual hierarchy, and overall user experience.',
    ],
  },
  {
    slug: 'employee-management-system',
    title: 'Employee Management System',
    tech: ['Python'],
    bullets: [
      'Developed a terminal-based employee management system using Python.',
      'Implemented employee record management and core data-handling functionalities.',
    ],
  },
  {
    slug: 'food-fest-2026',
    title: 'Food-Fest 2026 Website',
    tech: ['HTML', 'CSS', 'JavaScript'],
    bullets: [
      'Developed a responsive front-end website for Food-Fest 2026, a conceptual culinary festival website.',
      'Designed and coded the website’s pages and interactive elements using HTML, CSS, and JavaScript.',
    ],
  },
  {
    slug: 'portfolio-design',
    title: 'Portfolio Design (Website)',
    tech: ['Figma'],
    bullets: [
      'A complete website design created in Figma, spanning 13 pages/frames.',
      'Sole designer, covering the full-page set from concept through final frames.',
    ],
  },
]

const education = [
  {
    title: 'Bachelor of Science (Honours) in Information Technology [BSc (Hons) IT]',
    school: 'Techspire College (under Asia Pacific University of Technology and Innovation)',
    place: 'New Baneshwor, Kathmandu',
    pills: ['2025 – Present'],
  },
  {
    title: 'S.L.C. (School Leaving Certificate)',
    school: 'Aadim National College',
    place: 'Chuchepati, Chabahil, Kathmandu',
    pills: ['2025', 'GPA: 3.50/4.00'],
  },
  {
    title: 'S.E.E. (Secondary Education Examination)',
    school: 'Shree Pashupati Mitra Secondary School',
    place: 'Chabahil Stupa, Kathmandu',
    pills: ['2023', 'GPA: 2.80/4.00'],
  },
]

const awards = [
  {
    title: 'Mr. & Ms. Teen Super Model 2025 — Season 5',
    wins: ['Best Performance'],
  },
  {
    title: 'Glam Model Voux 2025 — Season 4',
    wins: ['2nd Runner-Up', 'Most Confidence', 'Most Talent'],
  },
  {
    title: 'Mr. & Ms. Fresher Show, Aadim College 2025',
    wins: ['1st Runner-Up', 'Best Walk'],
  },
]

const card =
  'rounded-[20px] border-2 border-transparent bg-[linear-gradient(180deg,#0c3587,#030d21)_padding-box,linear-gradient(135deg,#ffffff,#68ffff)_border-box]'

function SectionTitle({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-[13px]">
      <Icon size={36} className="shrink-0 text-cyan" />
      <h2 className="font-sans text-2xl font-bold xl:text-[28px] xl:leading-[34px]">{children}</h2>
    </div>
  )
}

function Chip({ children }) {
  return (
    <span className="rounded-full bg-royal px-3 py-1 font-mono text-[15px] leading-5">
      {children}
    </span>
  )
}

function Dot() {
  return (
    <span className="absolute left-[7px] top-[7px] h-[17px] w-[17px] rounded-full border-2 border-white bg-cyan shadow-[0_0_10px_rgba(104,255,255,0.8)] xl:left-[13px]" />
  )
}

function Line() {
  return (
    <span className="absolute bottom-[-7px] left-[14px] top-[24px] w-[3px] rounded-full bg-[linear-gradient(180deg,#68ffff,#3b6dff)] xl:left-[20px]" />
  )
}

function Resume() {
  return (
    <div className="bg-[linear-gradient(180deg,#000000,#152e5e,#000000)] px-6 pb-16 pt-10 xl:pb-[86px] xl:pt-[70px]">
      <div className="mx-auto grid max-w-[1246px] items-start gap-8 xl:grid-cols-[390px_1fr] xl:gap-[44px]">
        {/* ===== Left column (stays in view on desktop) ===== */}
        <aside className="flex flex-col gap-8 xl:sticky xl:top-[112px]">
          {/* Profile */}
          <div className={`${card} px-6 pb-8 pt-[34px] xl:px-[34px]`}>
            <img
              src="/images/resume-photo.jpg"
              alt="Ashad Alam"
              className="h-[140px] w-[140px] rounded-full border-2 border-white object-cover object-top"
            />
            <h1 className="mt-5 font-sans text-3xl font-bold xl:text-[34px] xl:leading-[41px]">
              Ashad Alam
            </h1>
            <p className="mt-2 font-sans text-[15px] font-semibold leading-[22px] text-cyan">
              BSc (Hons) IT Student | UI/UX Designer | Web Developer
            </p>

            <div className="mt-7 flex flex-col gap-[18px] font-sans text-[15px] font-medium">
              <a href="mailto:ashadalam2006@gmail.com" className="flex items-center gap-4 break-all hover:underline">
                <Mail size={21} className="shrink-0 text-[#4d86ff]" />
                ashadalam2006@gmail.com
              </a>
              <a href="tel:+9779761831569" className="flex items-center gap-4 hover:underline">
                <Phone size={21} className="shrink-0 text-[#4d86ff]" />
                +977 9761831569
              </a>
              <p className="flex items-center gap-4">
                <MapPin size={21} className="shrink-0 text-[#4d86ff]" />
                Chabahil, Kathmandu, Nepal
              </p>
            </div>

            <a
              href="/Ashad_Alam_CV.pdf"
              download
              className="mt-8 flex h-[52px] items-center justify-center gap-3 rounded-[14px] bg-[linear-gradient(180deg,#4482ff,#0038a9)] font-sans text-lg font-bold shadow-[inset_0_0_12px_rgba(255,255,255,0.3)] transition hover:brightness-125"
            >
              <Download size={22} />
              Download CV
            </a>
          </div>

          {/* Core skills */}
          <div className={`${card} px-6 pb-8 pt-[30px] xl:px-[34px]`}>
            <SectionTitle icon={Wrench}>Core Skills</SectionTitle>

            <p className="mt-6 font-sans text-sm font-bold uppercase tracking-[0.08em] text-sky">
              Technical Skills
            </p>
            <div className="mt-3 flex flex-col gap-4">
              {technical.map((g) => (
                <div key={g.label}>
                  <p className="font-sans text-[15px] font-semibold leading-6">{g.label}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {g.items.map((i) => (
                      <Chip key={i}>{i}</Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-7 font-sans text-sm font-bold uppercase tracking-[0.08em] text-sky">
              Professional Skills
            </p>
            <ul className="mt-3 flex flex-col gap-3">
              {professional.map((p) => (
                <li key={p} className="relative pl-6 font-sans text-[15px] leading-6">
                  <span className="absolute left-1 top-[9px] h-[8px] w-[8px] rounded-full bg-cyan" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className={`${card} px-6 pb-8 pt-[30px] xl:px-[34px]`}>
            <SectionTitle icon={Languages}>Languages</SectionTitle>
            <div className="mt-5 flex flex-wrap gap-3">
              {languages.map((l) => (
                <span
                  key={l}
                  className="rounded-full bg-[#013190] px-5 py-2 font-sans text-base font-semibold"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* ===== Right column ===== */}
        <div className="flex flex-col gap-8">
          {/* Summary */}
          <div className={`${card} px-6 pb-9 pt-[32px] xl:px-[38px]`}>
            <SectionTitle icon={User}>Professional Summary</SectionTitle>
            <p className="mt-6 font-sans text-base leading-[28px] xl:text-[17px]">{summary}</p>
          </div>

          {/* Experience */}
          <div className={`${card} px-6 pb-12 pt-[32px] xl:px-[38px]`}>
            <SectionTitle icon={Briefcase}>Professional Experience</SectionTitle>

            <div className="mt-[36px]">
              {jobs.map((job, i) => {
                const last = i === jobs.length - 1
                return (
                  <div
                    key={job.title}
                    className={`relative pl-[44px] xl:pl-[56px] ${last ? '' : 'pb-[48px]'}`}
                  >
                    {!last && <Line />}
                    <Dot />

                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                      <h3 className="font-job text-xl leading-[30px] tracking-[0.01em] xl:text-[22px]">
                        {job.title}
                      </h3>
                      <span className="rounded-[20px] bg-[#4c5cad] px-3 py-1 font-job text-[14px] leading-5">
                        {job.date}
                      </span>
                    </div>
                    <p className="mt-1 font-sans text-[16px] font-semibold leading-6 text-cyan">
                      {job.company}
                    </p>
                    <p className="font-sans text-[14px] leading-6 text-[#c9d6f2]">{job.place}</p>

                    <ul className="mt-[18px] flex flex-col gap-[12px]">
                      {job.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="relative pl-[28px] font-date text-[15px] leading-[25px] tracking-[0.01em] xl:text-[16px]"
                        >
                          <span className="absolute left-[6px] top-[9px] h-[8px] w-[8px] rounded-full bg-cyan" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Projects */}
          <div className={`${card} px-6 pb-10 pt-[32px] xl:px-[38px]`}>
            <SectionTitle icon={Folder}>Projects</SectionTitle>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {projects.map((p) => (
                <article
                  key={p.slug}
                  className="flex flex-col rounded-[16px] bg-[linear-gradient(135deg,#0c3587,#1a4fc0)] px-6 pb-6 pt-6"
                >
                  <h3 className="font-card text-[21px] leading-[28px]">{p.title}</h3>
                  <ul className="mt-4 flex flex-col gap-[10px]">
                    {p.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="relative pl-[22px] font-sans text-[14px] leading-[22px]"
                      >
                        <span className="absolute left-[3px] top-[8px] h-[7px] w-[7px] rounded-full bg-cyan" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="font-sans text-[13px] font-bold uppercase tracking-[0.06em] text-sky">
                      Technologies:
                    </span>
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-sky px-3 py-0.5 font-mono text-[14px] text-[#001643]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/projects/${p.slug}`}
                    className="mt-auto flex items-center gap-1 pt-5 font-card text-[15px] text-cyan hover:underline"
                  >
                    View Case Study
                    <ArrowUpRight size={18} />
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className={`${card} px-6 pb-12 pt-[32px] xl:px-[38px]`}>
            <SectionTitle icon={GraduationCap}>Education</SectionTitle>

            <div className="mt-[36px]">
              {education.map((e, i) => {
                const last = i === education.length - 1
                return (
                  <div
                    key={e.title}
                    className={`relative pl-[44px] xl:pl-[56px] ${last ? '' : 'pb-[40px]'}`}
                  >
                    {!last && <Line />}
                    <Dot />
                    <h3 className="font-job text-lg leading-[28px] tracking-[0.01em] xl:text-[20px]">
                      {e.title}
                    </h3>
                    <p className="mt-1 font-sans text-[16px] font-semibold leading-6 text-cyan">
                      {e.school}
                    </p>
                    <p className="font-sans text-[14px] leading-6 text-[#c9d6f2]">{e.place}</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {e.pills.map((p) => (
                        <span
                          key={p}
                          className="rounded-[20px] bg-[#0023ae] px-3 py-1 font-date text-[15px] leading-5"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Awards */}
          <div className={`${card} px-6 pb-10 pt-[32px] xl:px-[38px]`}>
            <SectionTitle icon={Trophy}>Awards &amp; Achievements</SectionTitle>

            <div className="mt-8 flex flex-col gap-5">
              {awards.map((a) => (
                <div
                  key={a.title}
                  className="rounded-[14px] bg-[linear-gradient(135deg,#0c3587,#2057c5)] px-6 py-5"
                >
                  <h3 className="font-calibri text-xl font-bold leading-7">{a.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {a.wins.map((w) => (
                      <span
                        key={w}
                        className="flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 font-sans text-[14px] font-semibold"
                      >
                        <Layers size={14} className="text-cyan" />
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Go back */}
      <Link
        to="/"
        className="mx-auto mt-12 flex h-[69px] w-[199px] items-center justify-center gap-3 rounded-[20px] bg-[linear-gradient(180deg,#013190,#152e5e)] font-sans text-[26px] font-bold shadow-[inset_0_0_14px_rgba(255,255,255,0.3)] transition hover:brightness-125 xl:mt-[80px]"
      >
        <ArrowLeft size={30} />
        Go Back
      </Link>
    </div>
  )
}

export default Resume