import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PaintBucket, Globe, CodeXml, Database, FileText, ChevronDown, ChevronUp } from 'lucide-react'

const services = [
  {
    icon: PaintBucket,
    title: 'UI/UX Design',
    text: 'User-centric interfaces that balance aesthetic beauty with functional clarity. Focusing on user journey mapping, wireframing, & high-fidelity prototyping.',
    tags: ['Figma', 'Adobe XD', 'Prototyping'],
    est: 'Est: 2 - 4 weeks',
  },
  {
    icon: Globe,
    title: 'Web Development',
    text: 'Custom frontend & full-stack web applications built with speed, security, & SEO in mind. High-performance experiences for modern browsers.',
    tags: ['React', 'Tailwind', 'Node.js'],
    est: 'Est: 4 - 8 weeks',
  },
  {
    icon: CodeXml,
    title: 'Python Dev',
    text: 'Backend architecture, API development, & automation scripts. Robust server-side logic & complex data processing solutions.',
    tags: ['Python', 'Flask', 'FastAPI'],
    est: 'Est: 3 - 6 weeks',
  },
  {
    icon: Database,
    title: 'Database Design',
    text: 'Efficient data modeling & architectural planning. Ensuring data integrity, performance tuning, & scalable storage solutions.',
    tags: ['SQL', 'Postgres', 'MongoDB'],
    est: 'Est: 2 - 3 weeks',
  },
  {
    icon: FileText,
    title: 'Documentation',
    text: 'Comprehensive API docs, technical manuals, & system architecture blueprints designed for clarity & maintainability.',
    tags: ['Swagger', 'ReadTheDocuments'],
    est: 'Est: 1 Day - 1 week',
  },
  {
    icon: PaintBucket,
    title: 'Branding',
    text: 'Strategic visual identity design. Developing brand guidelines, color theory, & typography systems that resonate with your core audience.',
    tags: ['Figma', 'Adobe XD', 'Prototyping'],
    est: 'Est: 2 - 4 weeks',
  },
]

const steps = [
  { label: 'C', text: 'Defining goals, scope, &\ntechnical requirements.' },
  { label: 'R', text: 'Market analysis & user journey\ndiscovery.' },
  { label: 'Dn', text: 'Visual concepts & high-\nfidelity prototypes.' },
  { label: 'De', text: 'Agile coding sprints & rigorous\ntesting.' },
  { label: 'D', text: 'Final deployment & post-launch\nsupport.' },
]

// Only the first answer comes from your design. Edit the other three to match what you offer.
const faqs = [
  {
    q: 'Do you prefer fixed pricing or hourly rates?',
    a: 'I typically work on a project-based fixed pricing model for clearly defined scopes. For ongoing maintenance or research-heavy tasks, hourly rates also available. We discuss & agree on the structure during the consultation.',
  },
  {
    q: 'Can you help with existing projects?',
    a: 'Yes. I can review your current project, fix issues, improve the design or add new features. Tell me what you already have and we will agree on the next steps.',
  },
  {
    q: 'What is you typical turnaround time?',
    a: 'It depends on the service and scope. Most projects take between one day and eight weeks, and the estimates on each service card above are a good guide. We confirm the timeline during the consultation.',
  },
  {
    q: 'Do you provide ongoing maintenance?',
    a: 'Yes. After launch I can provide support, updates and fixes, as agreed during the consultation.',
  },
]

function Services() {
  const [open, setOpen] = useState(0)

  return (
    <div className="bg-[linear-gradient(180deg,#000205_25%,#03266d_75%)]">
      {/* Hero */}
      <section className="px-6 pt-12 text-center xl:pt-[79px]">
        <h1 className="mx-auto max-w-[777px] font-calibri text-4xl font-bold sm:text-6xl xl:text-[72px] xl:leading-[72px]">
          Elevating Brands Through <br className="hidden sm:block" />
          Technical Excellence
        </h1>
        <p className="mx-auto mt-6 max-w-[750px] font-calibri text-xl xl:mt-[30px] xl:text-[26px] xl:leading-8">
          A comprehensive suite of services blending modern UI/UX Design with{' '}
          <br className="hidden md:block" />
          scalable engineering to build products that scale.
        </p>
      </section>

      {/* Service cards */}
      <section className="px-6 pt-12 xl:pt-[134px]">
        <div className="mx-auto grid max-w-[1337px] gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[49px] xl:gap-y-[60px]">
          {services.map(({ icon: Icon, title, text, tags, est }) => (
            <article
              key={title}
              className="flex min-h-[393px] flex-col rounded-[20px] border-2 border-transparent bg-[linear-gradient(180deg,#0239a7,#00153e)_padding-box,linear-gradient(135deg,#ffffff,#68ffff)_border-box] px-[34px] pb-[38px] pt-[29px]"
            >
              <div className="flex items-center gap-[26px]">
                <Icon size={47} strokeWidth={1.75} className="shrink-0 text-cyan" />
                <h2 className="font-sans text-2xl font-bold xl:text-[32px] xl:leading-[39px]">
                  {title}
                </h2>
              </div>

              <p className="mt-[28px] font-sans text-lg xl:text-xl xl:leading-6">{text}</p>

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex h-8 items-center rounded-[20px] bg-royal px-3 font-sans text-base"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-[35px] font-sans text-base">{est}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Development lifecycle */}
      <section className="mt-16 bg-[linear-gradient(180deg,#000000,#061b44_25%,#0c265c_50%,#061b44_75%,#000000)] px-6 pb-16 pt-12 text-center xl:mt-[106px] xl:pb-0 xl:pt-[76px]">
        <h2 className="font-sans text-3xl font-bold sm:text-4xl xl:text-[44px] xl:leading-[53px]">
          The Development Lifecycle
        </h2>
        <p className="mx-auto mt-6 max-w-[802px] font-sans text-lg xl:mt-[23px] xl:text-2xl xl:leading-[29px]">
          From the first handshake to the final product launch, I follow a rigorous{' '}
          <br className="hidden md:block" />
          methodology focused on quality &amp; transparency.
        </p>

        <div className="relative mx-auto mt-12 max-w-[1230px] xl:mt-[130px] xl:h-[240px]">
          <div className="absolute -left-4 -right-[18px] top-[43px] hidden h-1 bg-white xl:block" />
          <div className="relative grid gap-10 sm:grid-cols-2 xl:grid-cols-5 xl:gap-0">
            {steps.map(({ label, text }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#7ec5ff,#0055ff)] font-script text-[44px] leading-none">
                  {label}
                </div>
                <p className="mt-[35px] whitespace-pre-line font-calibri text-base xl:text-[15px] xl:leading-[18px]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pt-16 text-center xl:pt-[100px]">
        <h2 className="font-sans text-3xl font-bold sm:text-4xl xl:text-[44px] xl:leading-[53px]">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 font-sans text-lg xl:mt-[24px] xl:text-2xl xl:leading-[29px]">
          Everything you need to know about starting a collaboration.
        </p>

        <div className="mx-auto mt-10 flex max-w-[782px] flex-col gap-7 text-left xl:mt-[100px]">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div
                key={q}
                className="rounded-[25px] bg-[#9cc7ff] text-black shadow-[0_6px_16px_rgba(0,0,0,0.3)]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex min-h-16 w-full items-center justify-between gap-4 px-8 text-left font-calibri text-xl font-bold sm:text-[27px]"
                >
                  {q}
                  {isOpen ? (
                    <ChevronUp size={40} className="shrink-0" />
                  ) : (
                    <ChevronDown size={40} className="shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <p className="px-8 pb-6 font-calibri text-xl leading-[29px] sm:text-2xl">{a}</p>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Call to action */}
      <section className="px-6 pb-16 pt-16 xl:pb-[201px] xl:pt-[178px]">
        <div className="mx-auto max-w-[1127px] rounded-[25px] bg-[linear-gradient(90deg,#00153e,#004ade)] px-6 py-12 text-center shadow-[0_8px_24px_rgba(0,0,0,0.45)] xl:h-[344px] xl:py-0 xl:pt-[55px]">
          <h2 className="font-sans text-2xl font-bold sm:text-[28px] xl:leading-[34px]">
            Ready to build something amazing?
          </h2>
          <p className="mx-auto mt-5 max-w-[787px] font-sans text-lg text-[#d0d0d0] xl:mt-[20px] xl:text-2xl xl:leading-[29px]">
            Whether you have fully-formed idea or just a spark of inspiration, let’s{' '}
            <br className="hidden md:block" />
            collaborate to bring it to life with precision &amp; care
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-7 xl:mt-[43px]">
            <Link
              to="/contact"
              className="flex h-[73px] w-[275px] items-center justify-center rounded-[40px] border border-cyan bg-[linear-gradient(90deg,#004ade,#013190)] font-sans text-2xl font-bold text-cyan transition hover:brightness-125"
            >
              Request a Project
            </Link>
            <Link
              to="/contact"
              className="flex h-[73px] w-[275px] items-center justify-center rounded-[40px] border border-white bg-[#001f5c] font-sans text-2xl font-bold text-cyan transition hover:brightness-125"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services