import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function Dot() {
  return <span className="h-[13px] w-[13px] shrink-0 rounded-full bg-[#6ea5ff]" />
}

function Hero() {
  return (
    <section className="bg-[linear-gradient(180deg,#001530_0%,#003e89_50%,#000000_100%)]">
      <div className="mx-auto flex min-h-[701px] max-w-[1440px] flex-col-reverse items-center justify-center gap-12 px-6 py-16 lg:flex-row lg:justify-between lg:px-12">
        {/* Text side */}
        <div className="max-w-[714px]">
          {/* Availability badge */}
          <div className="inline-block rounded-[20px] bg-[linear-gradient(90deg,#002bff,#ffffff)] p-px">
            <div className="flex items-center gap-3 rounded-[20px] bg-[#003288] px-[10px] py-[2px]">
              <span className="h-3 w-3 rounded-full bg-[#00ff73]" />
              <span className="font-sans text-[15px]">Available for new opportunities</span>
            </div>
          </div>

          {/* Name */}
          <h1 className="mt-2 bg-[linear-gradient(90deg,#00e5ff,#0759ff)] bg-clip-text font-sans text-5xl font-bold text-transparent lg:text-[55px] lg:leading-[67px]">
            ASHAD ALAM
          </h1>

          {/* Roles */}
          <div className="mt-3 font-sans text-xl sm:text-3xl lg:text-[37px] lg:leading-[45px]">
            <div className="flex flex-wrap items-center gap-3">
              <span>UI/UX Designer</span>
              <Dot />
              <span>Web Developer</span>
              <Dot />
            </div>
            <div>Python Developer</div>
          </div>

          {/* Description */}
          <p className="mt-12 font-nav text-lg font-medium lg:text-xl">
            I design and build modern design, user-focused digital experiences that solve real
            problems and create impact.
          </p>

          {/* Buttons */}
          <div className="mt-14 flex flex-wrap gap-9">
            <Link
              to="/projects"
              className="flex h-[58px] items-center gap-3 rounded-[20px] bg-[#0041c4] px-7 font-sans text-[21px] font-bold transition hover:bg-blue-bright"
            >
              View Projects
              <ArrowRight size={30} />
            </Link>

            <Link
              to="/contact"
              className="rounded-[15px] bg-[linear-gradient(135deg,#ffffff,#0d49c2)] p-[2px]"
            >
              <span className="flex h-[54px] items-center rounded-[13px] bg-[#111f2b] px-[32px] font-button text-2xl transition hover:bg-navy-card">
                Contact Me
              </span>
            </Link>
          </div>
        </div>

        {/* Photo side */}
        <div className="shrink-0 rounded-full bg-[linear-gradient(135deg,#ffffff,#3381ff_50%,#001e4f)] p-[5px] shadow-[0_0_40px_rgba(0,72,255,0.45)]">
          <img
            src="/images/hero.png"
            alt="Ashad Alam"
            className="h-64 w-64 rounded-full object-cover object-[center_20%] sm:h-80 sm:w-80 lg:h-[399px] lg:w-[421px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero