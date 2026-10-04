import { BookOpen, Layers, Settings } from 'lucide-react'

const achievements = [
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    text: 'Top 10% percentile ranking across the Computer Science department with 3.85 GPA.',
  },
  {
    icon: Layers,
    title: 'UI/UX Compilation ',
    text: 'Completed UI/UX design course & won the competition held on the inter college UI/UX competition.',
  },
  {
    icon: Settings,
    title: 'AWS Solutions Architect',
    text: 'Certified expertise in designing distributed systems & scalable cloud infrastructure.',
  },
]

function Achievements() {
  return (
    <section className="bg-black px-6 pb-16 pt-[53px] xl:pb-[106px]">
      {/* Heading */}
      <div className="mx-auto max-w-[1448px] text-center">
        <h2 className="font-heading text-4xl sm:text-5xl xl:text-[53px] xl:leading-[107px]">
          Key Achievements
        </h2>
        <p className="font-calibri text-xl sm:text-2xl xl:text-[31px] xl:leading-[38px]">
          Recognitions &amp; Certificates that mark my professional growth.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-12 grid max-w-[1448px] gap-8 md:grid-cols-2 xl:mt-[104px] xl:grid-cols-3 xl:px-[56px]">
        {achievements.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-[30px] bg-[linear-gradient(135deg,#0033ff,#ffffff)] p-[2px]"
          >
            <div className="h-full min-h-[355px] rounded-[28px] bg-[linear-gradient(180deg,#002060,#000000)] px-8 py-[34px]">
              <div className="flex h-[82px] w-[75px] items-center justify-center rounded-xl bg-sky">
                <Icon size={48} strokeWidth={1.75} className="text-navy-deep" />
              </div>
              <h3 className="mt-[44px] font-calibri text-2xl font-bold xl:text-[31px] xl:leading-[38px]">
                {title}
              </h3>
              <p className="mt-4 font-calibri text-xl leading-[27px] xl:text-[22px]">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Achievements