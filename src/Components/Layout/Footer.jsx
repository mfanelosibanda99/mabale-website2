import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FiClock, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import { site } from '../Data/Site'
import { Link } from 'react-router-dom'

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Academics', to: '/academics' },
    { label: 'Activities', to: '/activities' },
    { label: 'Admissions', to: '/admissions' },
    { label: 'News', to: '/news' },
    { label: 'Contact', to: '/contact' },
    { label: 'Apply online', to: '/register' },
    { label: 'Portal login', to: '/login' },
  ]

// TODO: replace '#' with the school's real social media pages
const socials = [
  { label: 'Facebook', icon: FaFacebookF, href: '#' },
  { label: 'Instagram', icon: FaInstagram, href: '#' },
  { label: 'YouTube', icon: FaYoutube, href: '#' },
]

const { contact } = site

const contactItems = [
  { icon: FiMapPin, text: contact.address },
  {
    icon: FiPhone,
    text: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, '')}`,
  },
  { icon: FiMail, text: contact.email, href: `mailto:${contact.email}` },
  { icon: FiClock, text: contact.hours },
]

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    event.currentTarget.reset()
    setSubscribed(true) // no email is sent yet: connect a service later
  }

  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 md:px-12 lg:grid-cols-4">
        {/* School */}
        <div>
          <a href="#home" className="flex items-center gap-3">
            <img src={site.logo} alt="" className="h-12 w-12" />
            <span className="font-display text-lg font-semibold leading-tight">
              {site.name}
            </span>
          </a>
          <p className="mt-4 text-sm font-light leading-relaxed text-blue-100">
            {site.tagline}
          </p>
          <ul className="mt-5 flex gap-3">
            {socials.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition hover:bg-royal hover:border-royal"
                >
                  <Icon size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display text-base font-semibold">Quick links</h3>
          <ul className="mt-4 space-y-3 text-sm font-light text-blue-100">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-white hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-base font-semibold">Contact us</h3>
          <ul className="mt-4 space-y-3 text-sm font-light text-blue-100">
            {contactItems.map(({ icon: Icon, text, href }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon size={16} className="mt-0.5 shrink-0 text-blue-300" />
                {href ? (
                  <a href={href} className="transition hover:text-white hover:underline">
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-display text-base font-semibold">Newsletter</h3>
          <p className="mt-4 text-sm font-light leading-relaxed text-blue-100">
            Subscribe for the latest school news and events.
          </p>

          <form onSubmit={handleSubmit} className="mt-4 flex">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-l-full bg-white px-4 py-3 text-sm text-navy outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="rounded-r-full bg-royal px-5 transition hover:bg-blue-700"
            >
              <FiSend size={16} />
            </button>
          </form>

          {subscribed && (
            <p role="status" className="mt-3 text-sm text-blue-200">
              Thank you! We'll keep you updated.
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-white/15 py-5 text-center text-xs font-light text-blue-200">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}