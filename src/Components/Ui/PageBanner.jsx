import { Link } from 'react-router-dom'
import BannerDecor from './BannerDecor'
import CurveDivider from './CurveDivider'
import Reveal from './Reveal'

// ---- Look: tune these numbers ----
const GHOST_FILL = 0.08 // how visible the faint page name is (0 = invisible, 1 = solid white)
const GHOST_OUTLINE = 0.12 // how visible the outlined copy of the name is
const GHOST_SIZE = 'clamp(5rem, 17vw, 16rem)' // size of the ghost word; it scales with the screen

// next: the background color of the section that follows ('white' or 'blue-50')
export default function PageBanner({ title, subtitle, image, ghost, next = 'white' }) {
  // The ghost word is the page title in capitals, unless a page gives its own word
  const ghostWord = (ghost ?? title).toUpperCase()

  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
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

      {/* Rails and ring lines */}
      <BannerDecor />

      {/* Ghost word: decoration only, hidden from screen readers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden"
      >
        {/* Outlined copy, nudged up and to the left for depth */}
        <span
          className="absolute -bottom-6% right-[2%] animate-ghost-in whitespace-nowrap font-display font-bold leading-none motion-reduce:animate-none"
          style={{
            fontSize: GHOST_SIZE,
            color: 'transparent',
            WebkitTextStroke: `2px rgba(255,255,255,${GHOST_OUTLINE})`,
          }}
        >
          {ghostWord}
        </span>

        {/* Filled copy, arriving a fraction later */}
        <span
          className="absolute -bottom-12% -right-1% animate-ghost-in whitespace-nowrap font-display font-bold leading-none motion-reduce:animate-none"
          style={{
            fontSize: GHOST_SIZE,
            color: `rgba(255,255,255,${GHOST_FILL})`,
            animationDelay: '150ms',
          }}
        >
          {ghostWord}
        </span>
      </div>

      {/* Content: the padding matches the navbar, so the logo, breadcrumb and title share one left edge */}
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-12 md:pb-36 md:pt-28">
        <nav aria-label="Breadcrumb" className="text-xs text-blue-200">
          <Link to="/" className="hover:text-white hover:underline">
            Home
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span aria-current="page">{title}</span>
        </nav>

        <Reveal>
          <h1 className="mt-4 text-balance font-display text-5xl font-bold md:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>

        {subtitle && (
          <Reveal delay={150}>
            <p className="mt-4 max-w-2xl text-base font-light text-blue-100 md:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>

      {/* Curved bottom edge */}
      <CurveDivider next={next} />
    </section>
  )
}