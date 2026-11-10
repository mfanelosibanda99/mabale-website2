import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { site } from '../Data/Site'
import Button from '../Ui/Button'

// The link for the page you are on gets highlighted
const linkStyles = ({ isActive }) =>
  `transition hover:text-white ${
    isActive
      ? 'font-semibold text-white underline decoration-blue-400 decoration-2 underline-offset-8'
      : 'text-blue-100'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-md">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-12"
      >
        {/* Logo and school name */}
        <Link to="/" className="flex items-center gap-3">
          <img src={site.logo} alt="" className="h-10 w-10" />
          <span className="font-display text-sm font-semibold leading-tight md:text-base">
            {site.name}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 text-sm xl:flex">
          {site.nav.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} className={linkStyles}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="hidden text-sm font-medium text-blue-100 transition hover:text-white sm:inline"
          >
            Portal login
          </Link>

          <Button to="/register" className="hidden sm:inline-flex">
            Apply online
          </Button>

          {/* Menu button for smaller screens */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="xl:hidden"
          >
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-4 border-t border-white/20 px-6 py-5 text-sm xl:hidden">
          {site.nav.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={linkStyles}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/login" onClick={() => setOpen(false)}>
              Portal login
            </Link>
          </li>
          <li>
            <Button to="/register" onClick={() => setOpen(false)}>
              Apply online
            </Button>
          </li>
        </ul>
      )}
    </header>
  )
}