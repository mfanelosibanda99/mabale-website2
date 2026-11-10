import { FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { site } from '../Data/Site'

const { contact } = site

const items = [
  { icon: FiMapPin, label: 'Visit us', text: contact.address },
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
  { icon: FiClock, label: 'Office hours', text: contact.hours },
]

export default function ContactDetails() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
        Get in touch
      </h2>
      <p className="mt-3 max-w-md text-base font-light leading-relaxed text-slate-600">
        Questions about admissions, visits or school life? Call, email or send
        us a message and the school office will get back to you.
      </p>

      <ul className="mt-6 space-y-4">
        {items.map(({ icon: Icon, label, text, href }) => (
          <li
            key={label}
            className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-royal">
              <Icon size={20} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {label}
              </p>
              {href ? (
                <a href={href} className="text-sm font-medium text-navy hover:underline">
                  {text}
                </a>
              ) : (
                <p className="text-sm font-medium text-navy">{text}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}