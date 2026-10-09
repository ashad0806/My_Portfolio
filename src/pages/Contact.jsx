import { useState } from 'react'
import { ChevronDown, ChevronUp, Star } from 'lucide-react'
import ContactSection from '../components/home/ContactSection'

// Only the questions come from your design. Edit the answers to match what you offer.
const faqs = [
  {
    q: 'What is your typical turnaround time?',
    a: 'It depends on the service and scope. Most projects take between one day and eight weeks, and the estimates on each service card are a good guide. We confirm the timeline during the consultation.',
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes. After launch I can provide support, updates and fixes, as agreed during the consultation.',
  },
  {
    q: 'Are you available for full-time roles?',
    a: "Yes. I'm currently available for freelance projects or full-time opportunities. Send me a message and we can talk.",
  },
]

const testimonials = [
  {
    text: '“Ashad is a high-quality product ahead of schedule.\nHis technique expertise & communication made the entire\nprocess seamless.”',
    name: 'Ashu Ashu',
    role: 'CTO, TechFlow Solutions',
  },
  {
    text: '“Ashad is a high-quality product ahead of schedule.\nHis technique expertise & communication made the entire\nprocess seamless.”',
    name: 'Prince Prince',
    role: 'CTO, TVF Enterprises',
  },
]

function Contact() {
  const [open, setOpen] = useState(-1)

  return (
    <div className="bg-[linear-gradient(180deg,#000000,#082154,#08245d,#092661,#092865,#0b2e76,#0b327f,#000000)] xl:pb-[113px]">
      {/* Heading + contact details + form (same section as the Home page) */}
      <ContactSection
        bgClass="bg-transparent"
        paddingClass="pb-16 pt-12 xl:pb-[157px] xl:pt-[63px]"
      />

      {/* Banner */}
      <section className="px-6 xl:px-[60px]">
        <div className="relative mx-auto min-h-[260px] max-w-[1319px] overflow-hidden rounded-[40px] border-2 border-white bg-[#0b2e76] shadow-[7px_7px_10px_rgba(0,0,0,0.25)] xl:h-[440px] xl:rounded-[70px]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,45,136,0),rgba(0,45,136,0.73))]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.44),rgba(255,255,255,0.09))]" />
          <img
            src="/images/contact-banner.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-[0.58]"
          />
          <p className="relative max-w-[651px] px-8 pt-10 font-heading text-2xl leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] sm:text-[29px] xl:px-0 xl:pl-[44px] xl:pt-[43px]">
            Available for remote work worldwide &amp; in-person{' '}
            <br className="hidden xl:block" />
            meetings in the Bay Area
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-16 pt-16 xl:pb-[121px] xl:pt-[135px]">
        <h2 className="text-center font-card text-3xl sm:text-4xl xl:text-[43px] xl:leading-[54px]">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-10 flex max-w-[775px] flex-col gap-7 xl:mt-[65px]">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div
                key={q}
                className="rounded-[25px] bg-[#9bbcff] text-black shadow-[0_6px_16px_rgba(0,0,0,0.3)]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex min-h-16 w-full items-center justify-between gap-4 px-8 text-left font-card text-lg sm:text-[27px]"
                >
                  {q}
                  {isOpen ? (
                    <ChevronUp size={36} className="shrink-0" />
                  ) : (
                    <ChevronDown size={36} className="shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <p className="px-8 pb-6 font-card text-base leading-7 sm:text-xl">{a}</p>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Clients feedback */}
      <section className="bg-[#020071] px-6 pb-16 pt-12 xl:pb-[80px] xl:pt-[49px]">
        <h2 className="text-center font-card text-3xl sm:text-4xl xl:text-[43px] xl:leading-[54px]">
          Clients Feedback
        </h2>

        <div className="mx-auto mt-10 grid max-w-[1232px] gap-8 lg:grid-cols-2 xl:mt-[78px] xl:gap-[58px]">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="min-h-[261px] rounded-[30px] border-2 border-transparent bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(180deg,#003aad,#000000)] bg-origin-border px-6 pb-8 pt-[25px] shadow-[0_8px_20px_rgba(0,0,0,0.35)] [background-clip:padding-box,padding-box] xl:px-[23px]"
              style={{ borderColor: '#ffffff' }}
            >
              <div className="flex gap-0">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={26} fill="#facc15" stroke="#facc15" />
                ))}
              </div>
              <p className="mt-[29px] whitespace-pre-line font-card text-base leading-[25px] sm:text-xl">
                {t.text}
              </p>
              <p className="mt-6 font-card text-base leading-6 sm:text-xl">
                {t.name}
                <br />
                {t.role}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Contact