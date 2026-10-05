import { Link } from 'react-router-dom'
import { ArrowUpRight, Play } from 'lucide-react'
import { projects } from '../../data/Projects'

function FeaturedProjects() {
  return (
    <section className="border-y border-[#666666] bg-[linear-gradient(180deg,#000000,#002858_30%,#002858_70%,#000000)] px-6 pb-16 pt-8 xl:px-[38px] xl:pb-[105px] xl:pt-[44px]">
      <div className="mx-auto max-w-[1448px]">
        {/* Heading row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-4xl sm:text-5xl xl:text-[53px] xl:leading-[107px]">
              My Projects
            </h2>
            <p className="font-calibri text-xl sm:text-2xl xl:text-[31px] xl:leading-[38px]">
              Showcasing technical precision and creative problem solving.
            </p>
          </div>

          <Link
            to="/projects"
            className="flex h-[58px] w-fit items-center gap-4 rounded-[15px] bg-[#0041c4] px-[22px] font-button text-2xl text-cyan transition hover:bg-blue-bright"
          >
            View All Projects
            <Play size={26} fill="currentColor" />
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:mt-[62px] xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col rounded-[30px] bg-[#747f8d] p-4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-[243px] w-full rounded-[25px] object-cover object-top"
              />

              <div className="flex flex-1 flex-col px-[5px] pb-3 pt-[37px]">
                {/* Tags */}
                <div className="flex flex-wrap gap-3.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex h-6 items-center rounded-full bg-sky px-4 font-mono text-base text-[#001643]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-2 font-card text-2xl leading-[39px] xl:text-[31px]">
                  {project.title}
                </h3>

                <p className="mt-[18px] font-sans text-[15px] leading-[18px]">
                  {project.description}
                </p>

                <Link
                  to={`/projects/${project.slug}`}
                  className="mt-auto flex items-center gap-1 pt-5 font-card text-[15px] text-cyan hover:underline"
                >
                  View Case Study
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects