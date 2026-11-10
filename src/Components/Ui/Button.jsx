import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-royal text-white hover:bg-blue-700',
  light: 'bg-white text-navy hover:bg-blue-50',
}

export default function Button({
  children,
  href,
  to,
  variant = 'primary',
  className = '',
  ...props
}) {
  const styles = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal ${variants[variant]} ${className}`

  // Link to another page of the site
  if (to) {
    return (
      <Link to={to} className={styles} {...props}>
        {children}
      </Link>
    )
  }

  // Link to a section on the same page
  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={styles} {...props}>
      {children}
    </button>
  )
}