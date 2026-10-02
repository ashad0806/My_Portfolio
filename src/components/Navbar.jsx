import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Home, User, ShoppingBag, Folder, Mail, FileText, Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/about', label: 'About', icon: User },
  { to: '/services', label: 'Services', icon: ShoppingBag },
  { to: '/projects', label: 'Projects', icon: Folder },
  { to: '/contact', label: 'Contact', icon: Mail },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-full px-6 py-3 font-nav text-[17px] transition ${
      isActive ? 'bg-card-gradient text-white' : 'text-white hover:bg-navy-card'
    }`

  return (
    <header className="sticky top-0 z-50 flex h-[88px] items-center justify-between bg-black px-6 lg:px-12">
      {/* Logo */}
      <Link to="/" className="font-sans text-[27px] text-white">
        AA
      </Link>

      {/* Centre pill (desktop) */}
      <nav className="hidden items-center gap-2 rounded-full bg-navy-deep p-[5px] lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} end={to === '/'} className={linkClass}>
            <Icon size={22} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Resume button (desktop) */}
      <Link
        to="/resume"
        className="hidden h-[42px] items-center gap-3 rounded-full bg-navy-card px-6 font-sans text-xl text-white transition hover:bg-navy lg:flex"
      >
        <FileText size={24} />
        Resume
      </Link>

      {/* Menu button (phone and tablet) */}
      <button
        onClick={() => setOpen(!open)}
        className="text-white lg:hidden"
        aria-label="Toggle menu"
      >
        {open ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Dropdown menu (phone and tablet) */}
      {open && (
        <nav className="absolute inset-x-0 top-[88px] flex flex-col gap-2 bg-navy-deep p-4 lg:hidden">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              <Icon size={22} />
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/resume"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            <FileText size={22} />
            Resume
          </NavLink>
        </nav>
      )}
    </header>
  )
}

export default Navbar