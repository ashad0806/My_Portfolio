import { useEffect, useState } from 'react'

const ROLES = ['UI/UX Designer', 'Web Developer', 'Python Developer', 'Freelancer']

function Typewriter({ words = ROLES, typeSpeed = 85, deleteSpeed = 45, pause = 1400 }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    // Respect reduced-motion: just show the first word, no animation
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return
    }

    const word = words[index % words.length]
    let delay = deleting ? deleteSpeed : typeSpeed

    if (!deleting && text === word) delay = pause
    if (deleting && text === '') delay = 350

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }
    }, delay)

    return () => clearTimeout(t)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return (
    <span className="inline-block min-h-[1.25em]">
      <span>{text}</span>
      <span className="typewriter-caret" aria-hidden="true" />
    </span>
  )
}

export default Typewriter