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

function Projects() {
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

        {/* Desktop: winding timeline */}
        <div className="relative mt-[51px] hidden h-[2434px] xl:block">
          <svg
            className="absolute overflow-visible"
            style={{ left: '40.17%', top: 231.5, width: '19.57%', height: 1901 }}
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
            <path
              d="M0 0 C75 32.2 229.8 162 245.3 359.9 C259 533.8 192.9 540.8 100 782.3 C84 823.8 34.2 1050.2 205.2 1349.7 C376.2 1649.2 219 1797.2 138 1901"
              stroke="url(#projects-line)"
              strokeWidth="5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {projects.map((p) => (
            <div key={p.slug}>
              <span
                className="absolute h-[27px] w-[27px] rounded-full border border-[#a9c4ff] bg-white"
                style={p.dot}
              />
              <span
                className="absolute font-poppins text-[42px] font-semibold leading-[47px] text-[#6da5ff]"
                style={p.yearPos}
              >
                {p.year}
              </span>
              <ProjectCard project={p} className="absolute" style={p.card} />
            </div>
          ))}
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