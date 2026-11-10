import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FiArrowUp, FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { site } from '../Data/Site'
import Button from '../Ui/Button'
import BannerDecor from '../Ui/BannerDecor'

const { contact } = site

const explore = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Activities', to: '/activities' },
]

const parents = [
  { label: 'Admissions', to: '/admissions' },
  { label: 'Apply online', to: '/register' },
  { label: 'News', to: '/news' },
  { label: 'Contact us', to: '/contact' },
  { label: 'Portal login', to: '/login' },
]

// TODO: replace '#' with the school's real social media pages
const socials = [
  { label: 'Facebook', icon: FaFacebookF, href: '#' },
  { label: 'Instagram', icon: FaInstagram, href: '#' },
  { label: 'YouTube', icon: FaYoutube, href: '#' },
]

const contactCards = [
  {
    icon: FiPhone,
    label: 'Call us',
    text: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, '')}`,
  },
  {
    icon: FiMail,
    label: 'Email us',
    text: contact.email,
    href: `mailto:${contact.email}`,
  },
  { icon: FiMapPin, label: 'Visit us', text: contact.address },
]

// The three cards with the phone, email and address
function ContactCards({ className = '' }) {
  return (
    <ul className={`grid gap-4 md:grid-cols-3 ${className}`}>
      {contactCards.map(({ icon: Icon, label, text, href }) => (
        <li
          key={label}
          className="flex items-center gap-4 rounded-2xl bg-white p-5 text-navy shadow-xl ring-1 ring-slate-200"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-royal text-white">
            <Icon size={20} />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {label}
            </p>
            {href ? (
              <a href={href} className="wrap-break-words text-sm font-semibold hover:underline">
                {text}
              </a>
            ) : (
              <p className="wrap-break-words text-sm font-semibold">{text}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

function LinkColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-display text-base font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm font-light text-blue-100">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="transition hover:text-white hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Curved top: a royal blue arch behind a navy arch, drawn over the section above */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[calc(100%-1px)] h-12 w-full md:h-20"
      >
        <path d="M0,100 Q720,-62 1440,100 Z" className="fill-royal" />
        <path d="M0,100 Q720,-30 1440,100 Z" className="fill-navy" />
      </svg>

      {/* Contact cards sitting on the edge (laptops and larger) */}
      <div className="absolute inset-x-0 top-0 z-10 hidden -translate-y-1/2 md:block">
        <ContactCards className="mx-auto max-w-7xl px-12" />
      </div>

      <div className="relative isolate overflow-hidden bg-navy">
        {/* Rails and rings, the same as the page banners */}
        <BannerDecor />

        {/* Ghost word: decoration only */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-12% -left-1% select-none whitespace-nowrap font-display font-bold leading-none"
          style={{
            fontSize: 'clamp(6rem, 22vw, 20rem)',
            color: 'rgba(255,255,255,0.04)',
          }}
        >
          MABALE
        </span>

        <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-12 md:px-12 md:pt-28">
          {/* Contact cards inside the footer (phones) */}
          <ContactCards className="mb-12 md:hidden" />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
            {/* School */}
            <div>
              <Link to="/" className="flex items-center gap-3">
                <img src={site.logo} alt="" className="h-12 w-12" />
                <span className="font-display text-lg font-semibold leading-tight">
                  {site.name}
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-blue-100">
                {site.tagline}
              </p>
              <ul className="mt-5 flex gap-3">
                {socials.map(({ label, icon: Icon, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition hover:border-royal hover:bg-royal"
                    >
                      <Icon size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <LinkColumn title="Explore" links={explore} />
            <LinkColumn title="Parents" links={parents} />

            {/* Call to action and office hours */}
            <div>
              <h3 className="font-display text-base font-semibold">Join our school</h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-blue-100">
                Admissions are open for pupils aged 5 to 14.
              </p>
              <Button to="/register" variant="light" className="mt-5">
                Apply online
              </Button>
              <p className="mt-6 flex items-start gap-2 text-sm font-light text-blue-100">
                <FiClock size={16} className="mt-0.5 shrink-0 text-blue-300" />
                {contact.hours}
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs font-light text-blue-200 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              Back to top
              <FiArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}