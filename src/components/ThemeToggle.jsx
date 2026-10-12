import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

function ThemeToggle({ className = '' }) {
  const [light, setLight] = useState(() =>
    document.documentElement.classList.contains('light'),
  )

  useEffect(() => {
    document.documentElement.classList.toggle('light', light)
    try {
      localStorage.setItem('theme', light ? 'light' : 'dark')
    } catch {
      /* storage blocked, ignore */
    }
  }, [light])

  return (
    <button
      type="button"
      onClick={() => setLight(!light)}
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
      title={light ? 'Dark mode' : 'Light mode'}
      className={`flex h-[42px] w-[42px] items-center justify-center rounded-full bg-navy-card text-white transition hover:bg-navy ${className}`}
    >
      {light ? <Moon size={22} /> : <Sun size={22} />}
    </button>
  )
}

export default ThemeToggle