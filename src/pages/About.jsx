import { Link } from 'react-router-dom'
import {
  MapPin,
  BookOpen,
  Languages,
  Briefcase,
  CodeXml,
  Database,
  PaintBucket,
  PenTool,
} from 'lucide-react'

const infoCards = [
  { icon: MapPin, title: 'Location', lines: ['Chabahil, 7, KTM', 'Nepal'] },
  { icon: BookOpen, title: 'Education', lines: ['BSc. Hons in IT', 'Techspire College'] },
  { icon: Languages, title: 'Languages', lines: ['Nepali, HIndi,', 'English, Japanese'] },
  { icon: Briefcase, title: 'Status', lines: ['Available or remote', 'jobs.'] },
]

const highlights = [
  { title: 'Project Delivered', text: '14+ Projects Completed in Tech field' },
  { title: 'Current Focus', text: 'Designing and Full-Stack Development ' },
]

const services = [
  {
    icon: CodeXml,
    title: 'Python Development',
    text: 'Building efficient & scalable\napplication using Python \nwith clean & maintainable \ncode.',
  },
  {
    icon: Database,
    title: 'Database Design',
    text: 'Designing normalized \ndatabase & writing \noptimized queries for \nreliable performance.',
  },
  {
    icon: PaintBucket,
    title: 'Web Development',
    text: 'Creating responsive & \ninteractive websites with \nmodern technologies.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    text: 'Designing user centered\ninterfaces that are \nbeautiful, intuitive &\naccessible.',
  },
]

const factsRow1 = [
  'Love sketching portraits ',
  'Coffee fuels my code',
  'Always learning something new',
  'Dreaming big & building more',
]
const factsRow2 = [
  'Playing guitar & love singing & all',
  'Dancing along with the beats',
  'Travelling & Exploring the nature',
]

function BlueButton({ to, children }) {
  return (
    <Link
      to={to}
      className="rounded-[20px] bg-[linear-gradient(135deg,#0055ff,#ffffff)] p-[2px]"
    >
      <span className="flex h-[51px] items-center rounded-[18px] bg-[linear-gradient(180deg,#4482ff,#0038a9)] px-[15px] font-calibri text-[26px] shadow-[inset_0_0_12px_rgba(255,255,255,0.35)] transition hover:brightness-125">
        {children}
      </span>
    </Link>
  )
}

function Fact({ text }) {
  return (
    <span className="flex h-[43px] items-center rounded-xl border border-white/10 bg-[#013190]/20 px-[15px] font-sans text-base backdrop-blur-md sm:text-[17px]">
      {text}
    </span>
  )
}

function About() {
  return (
    <>
      {/* Top section */}
      <section className="bg-[linear-gradient(180deg,#152e5e,#000000)] px-6 pb-16 xl:pb-[105px] xl:pl-[56px] xl:pr-[69px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col-reverse items-center gap-12 pt-12 xl:flex-row xl:items-start xl:justify-between xl:gap-0 xl:pt-0">
            {/* Text side */}
            <div className="w-full max-w-[706px] xl:pt-[206px]">
              <span className="inline-flex h-8 items-center rounded-[20px] bg-navy px-4 font-nav text-base font-medium text-cyan sm:text-[17px]">
                UI/UX Designer &amp; Python Developer
              </span>

              <h1 className="mt-[21px] font-display text-5xl leading-[1.1] sm:text-6xl xl:text-[56px] xl:leading-[61px]">
                Building Digital <br />
                Masterpiece
              </h1>

              <p className="mt-[29px] font-calibri text-xl sm:text-2xl xl:leading-[30px]">
                I am Ashad Alam, a passionate designer dedicated to bridging the gap between
                sophisticated design logic &amp; seamless user experience. With a foundation in
                Information Technology &amp; a relentless drive for innovation, I transform complex
                problems into elegant, scalable solutions.
              </p>

              <div className="mt-10 flex flex-wrap gap-8 xl:mt-[63px] xl:gap-[35px]">
                <BlueButton to="/projects">View Projects</BlueButton>
                <BlueButton to="/journey">My Journey</BlueButton>
              </div>
            </div>

            {/* Photo side */}
            <div className="relative mx-auto aspect-[478/546] w-[78%] max-w-[478px] xl:mx-0 xl:mr-[29px] xl:mt-[150px] xl:w-[478px]">
              <div className="absolute inset-0 -translate-x-4 translate-y-5 rounded-[30px] bg-[#1444a4] xl:-translate-x-[51px] xl:translate-y-[55px]" />
              <div className="absolute inset-0 -translate-x-2 translate-y-2.5 rounded-[30px] bg-navy xl:-translate-x-[29px] xl:translate-y-[29px]" />
              <div className="relative h-full rounded-[30px] bg-[linear-gradient(135deg,#ffffff,#0055ff)] p-[4px]">
                <img
                  src="/images/about-photo.jpg"
                  alt="Ashad Alam"
                  className="h-full w-full rounded-[26px] object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Info cards */}
          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:mt-[214px] xl:grid-cols-4 xl:gap-[clamp(24px,5.35vw,77px)]">
            {infoCards.map(({ icon: Icon, title, lines }) => (
              <div
                key={title}
                className="min-h-[153px] rounded-[20px] border-2 border-white bg-[linear-gradient(180deg,#000000,#0055ff)] px-[30px] py-[25px]"
              >
                <div className="flex items-center gap-[5px]">
                  <Icon size={25} />
                  <h3 className="font-sans text-xl font-bold xl:text-[21px]">{title}</h3>
                </div>
                <p className="mt-[18px] font-sans text-xl font-bold leading-[25px] xl:text-[21px]">
                  {lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>

          {/* Highlight cards */}
          <div className="mt-8 grid gap-8 md:grid-cols-2 xl:mt-[87px] xl:gap-[69px]">
            {highlights.map(({ title, text }) => (
              <div
                key={title}
                className="rounded-[20px] bg-[linear-gradient(135deg,#ffffff,#7ec5ff)] p-[3px]"
              >
                <div className="flex min-h-[115px] flex-col justify-center rounded-[17px] bg-black px-[31px] py-6">
                  <h3 className="font-sans text-xl font-bold text-cyan xl:text-[22px]">{title}</h3>
                  <p className="mt-1.5 font-sans text-xl font-bold xl:text-[22px]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do + Fun Facts */}
      <section className="bg-[linear-gradient(180deg,#000000,#00153e)] px-6 pb-16 pt-12 xl:px-0 xl:pb-[81px] xl:pt-[54px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center gap-[11px] xl:pl-[56px]">
            <span className="h-[14px] w-3 rounded-full bg-[#0033ff]" />
            <h2 className="font-sans text-xl font-bold xl:text-[23px] xl:leading-7">What I Do</h2>
          </div>

          <div className="mx-auto mt-10 max-w-[1286px] xl:mt-[85px]">
            {/* Service cards */}
            <div className="grid gap-6 sm:grid-cols-2 xl:flex xl:justify-between">
              {services.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-[20px] bg-[linear-gradient(135deg,#68ffff,#ffffff)] p-[2px] xl:h-[272px] xl:w-[260px]"
                >
                  <div className="h-full min-h-[268px] rounded-[18px] bg-[linear-gradient(180deg,#00153e,#013190)] px-[17px] pt-[32px]">
                    <div className="flex h-[62px] w-[67px] items-center justify-center rounded-[10px] bg-navy">
                      <Icon size={38} />
                    </div>
                    <h3 className="mt-[21px] font-sans text-xl font-bold leading-6">{title}</h3>
                    <p className="mt-[21px] whitespace-pre-line font-sans text-[17px] leading-[21px]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Fun facts */}
            <div className="mt-12 rounded-[20px] bg-[linear-gradient(135deg,#ffffff,#68ffff)] p-[2px] xl:mt-[100px]">
              <div className="rounded-[18px] bg-[linear-gradient(180deg,#00153e,#152e5e)] px-6 pb-12 pt-[41px] xl:px-[42px] xl:pb-[72px]">
                <div className="flex items-center gap-[11px]">
                  <span className="h-[14px] w-3 rounded-full bg-cyan" />
                  <h2 className="font-sans text-xl font-bold xl:text-[23px] xl:leading-7">
                    Fun Facts
                  </h2>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 xl:pl-6">
                  {factsRow1.map((f) => (
                    <Fact key={f} text={f} />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-x-10 gap-y-4 xl:mt-12 xl:pl-[104px]">
                  {factsRow2.map((f) => (
                    <Fact key={f} text={f} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="mx-auto mt-12 flex h-[66px] w-[218px] items-center justify-center rounded-[20px] bg-[#013190] font-sans text-[26px] font-bold shadow-[inset_0_0_14px_rgba(255,255,255,0.3)] transition hover:brightness-125 xl:mt-[115px]"
          >
            Let’s Talk!
          </Link>
        </div>
      </section>
    </>
  )
}

export default About