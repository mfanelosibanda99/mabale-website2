import { Link } from 'react-router-dom'

export default function PageBanner({ title, subtitle, image }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy px-6 py-16 text-white md:px-12 md:py-24">
      {/* Optional background picture under a navy layer */}
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-navy/80" />
        </>
      )}

      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="text-xs text-blue-200">
          <Link to="/" className="hover:text-white hover:underline">
            Home
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span aria-current="page">{title}</span>
        </nav>

        <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base font-light text-blue-100">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}