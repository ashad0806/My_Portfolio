import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Share2 } from 'lucide-react'
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF } from 'react-icons/fa'

const EMAIL = 'ashadalam2006@gmail.com'

const info = [
  { icon: Mail, label: 'EMAIL ME', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: 'CALL ME', value: '+977 9761831569', href: 'tel:+9779761831569' },
  { icon: MapPin, label: 'LOCATION', value: 'Chabahil, Kathmandu' },
]

// Replace the '#' links with your real profile links
const socials = [
  { icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/ashad0806' },
  { icon: FaInstagram, label: 'Instagram', href: '#' },
  { icon: FaFacebookF, label: 'Facebook', href: '#' },
]

const inputClass =
  'h-[51px] w-full rounded-[10px] bg-navy px-[13px] font-card text-lg text-white outline-none placeholder:text-muted focus:ring-2 focus:ring-sky sm:text-[21px]'

function ContactSection({
  bgClass = 'bg-black',
  paddingClass = 'pb-16 pt-12 xl:pb-[112px] xl:pt-[76px]',
}) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const handleShare = async () => {
    const url = window.location.origin
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Ashad Alam - Portfolio', url })
      } catch {
        /* cancelled */
      }
    } else {
      await navigator.clipboard.writeText(url)
      alert('Link copied!')
    }
  }

  return (
    <section className={`${bgClass} px-6 xl:px-[58px] ${paddingClass}`}>
      <div className="mx-auto max-w-[1448px]">
        {/* Heading */}
        <h2 className="font-heading text-4xl sm:text-5xl xl:text-[53px] xl:leading-[76px]">
          Get in touch
        </h2>
        <p className="mt-3 font-calibri text-xl sm:text-2xl xl:mt-[18px] xl:text-[31px] xl:leading-[38px]">
          I&apos;m currently available for freelance projects or full-time opportunities.{' '}
          <br className="hidden xl:block" />
          Let&apos;s discuss how we can build something exceptional together.
        </p>

        <div className="mt-12 grid items-start gap-10 xl:mt-[86px] xl:grid-cols-[1fr_674px] xl:gap-[19px]">
          {/* Left column */}
          <div className="xl:pl-[2px]">
            <h3 className="font-card text-3xl xl:text-[43px] xl:leading-[54px]">
              Let’s work together
            </h3>
            <p className="mt-5 font-sans text-lg xl:text-2xl xl:leading-[29px]">
              Have a specific project in mind? Or just want to say Hi?
              <br className="hidden xl:block" /> Inbox is always open.{' '}
            </p>

            {/* Info card */}
            <div className="mt-12 flex w-full max-w-[525px] flex-col gap-[21px] rounded-[20px] bg-[#002162] p-[25px] xl:mt-[78px]">
              {info.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-[11px]">
                  <div className="flex h-[67px] w-[72px] shrink-0 items-center justify-center rounded-[10px] bg-[#afafaf]">
                    <Icon size={40} className="text-[#002162]" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-card text-[13px] leading-4">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="block break-all font-card text-base leading-[26px] hover:underline sm:text-[21px]"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-card text-base leading-[26px] sm:text-[21px]">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <p className="mt-[54px] font-card text-2xl xl:text-[27px] xl:leading-[34px]">
              FIND ME ON
            </p>
            <div className="mt-[15px] flex flex-wrap gap-[21px]">
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share"
                className="flex h-[65px] w-[65px] items-center justify-center rounded-full bg-[#d9d9d9] text-[#111] transition hover:bg-sky"
              >
                <Share2 size={30} />
              </button>
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-[65px] w-[65px] items-center justify-center rounded-full bg-[#d9d9d9] text-[#111] transition hover:bg-sky"
                >
                  <Icon size={30} />
                </a>
              ))}
            </div>
          </div>

          {/* Right column: form */}
          <form
            onSubmit={handleSubmit}
            className="w-full rounded-[20px] bg-[#002162] px-[26px] pb-[62px] pt-[38px]"
          >
            <div className="grid gap-7 sm:grid-cols-2 sm:gap-6">
              <div>
                <label htmlFor="name" className="block font-card text-lg leading-[26px] sm:text-[21px]">
                  Full Name:
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name..........."
                  className={`${inputClass} mt-[10px]`}
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-card text-lg leading-[26px] sm:text-[21px]">
                  Email:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address..........."
                  className={`${inputClass} mt-[10px]`}
                />
              </div>
            </div>

            <div className="mt-7">
              <label htmlFor="subject" className="block font-card text-lg leading-[26px] sm:text-[21px]">
                Subject:
              </label>
              <input
                id="subject"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="Project Inquiry..........."
                className={`${inputClass} mt-[10px]`}
              />
            </div>

            <div className="mt-8">
              <label htmlFor="message" className="block font-card text-lg leading-[26px] sm:text-[21px]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project............"
                className={`${inputClass} mt-[10px] h-[206px] resize-none py-3`}
              />
            </div>

            <button
              type="submit"
              className="mt-14 flex h-[70px] w-full items-center justify-center gap-5 rounded-[10px] bg-black font-fancy text-[25px] transition hover:bg-[#111]"
            >
              Send Message
              <Send size={26} />
            </button>

            {sent && (
              <p className="mt-4 text-center font-card text-base text-cyan">
                Your email app should open with the message ready to send.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection