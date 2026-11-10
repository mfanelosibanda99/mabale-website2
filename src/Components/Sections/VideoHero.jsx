import { useEffect, useState } from 'react'
import { FiPause, FiPlay } from 'react-icons/fi'
import { site } from '../Data/Site'
import { promoCards } from '../Data/PromoCards'
import Button from '../Ui/Button'

// Timing in milliseconds: how long the intro text and each picture stay on screen
const INTRO_MS = 6000
const SLIDE_MS = 5000

// ---- Picture animation: "stacked cards" with a small pop ----
const POP_BOUNCE = 1.35 // overshoot when a card settles: 1 = none, 1.35 = small, 1.6 = playful
const POP = `cubic-bezier(0.34, ${POP_BOUNCE}, 0.64, 1)`
const SLIDE_IN_FROM = '15%' // how far to the right a new card starts
const OLD_CARD_SCALE = 0.9 // how much the old card shrinks (1 = no change)
const OLD_CARD_DIM = 0.5 // how dark the old card gets (1 = no change, 0 = black)

const poses = {
  // The card on screen
  active: {
    transform: 'translateX(0) scale(1)',
    opacity: 1,
    filter: 'brightness(1)',
    zIndex: 2,
    transition: `transform 900ms ${POP}, opacity 600ms ease-out, filter 600ms ease-out`,
  },
  // The card that was just replaced: shrinks, dims and slips behind the new one
  leaving: {
    transform: `translateX(-3%) scale(${OLD_CARD_SCALE})`,
    opacity: 0,
    filter: `brightness(${OLD_CARD_DIM})`,
    zIndex: 1,
    transition:
      'transform 800ms ease-in-out, opacity 800ms ease-in, filter 800ms ease-in',
  },
  // Cards waiting for their turn, parked just off to the right
  waiting: {
    transform: `translateX(${SLIDE_IN_FROM}) scale(0.94)`,
    opacity: 0,
    filter: 'brightness(1)',
    zIndex: 0,
    transition: 'transform 500ms ease-out, opacity 500ms ease-out',
  },
}

// Adjustable overlays. Raise the last number of a stop (0 to 1) to darken,
// lower it to let more of the video show through.
const overlayDesktop =
  'linear-gradient(90deg, rgba(11,31,75,0.92) 0%, rgba(11,31,75,0.7) 40%, rgba(11,31,75,0.1) 100%)'
const overlayMobile =
  'linear-gradient(180deg, rgba(11,31,75,0.55) 0%, rgba(11,31,75,0.85) 100%)'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Fades and slides a piece of the intro text in and out
function Fade({ show, delay = 0, children }) {
  return (
    <div
      style={{ transitionDelay: show ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 motion-reduce:transition-none ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      {children}
    </div>
  )
}

export default function VideoHero() {
  const { video } = site
  const reduceMotion = prefersReducedMotion()
  const showVideo = video.src && !reduceMotion
  

  // step 0 = intro text, steps 1 to 4 = the pictures
  const [step, setStep] = useState(0)
  const [paused, setPaused] = useState(prefersReducedMotion)

  const total = promoCards.length + 1
  const intro = step === 0
  const labels = ['Welcome', ...promoCards.map((card) => card.title)]

  // Move to the next step after a delay, unless paused
  useEffect(() => {
    if (paused) return
    const id = setTimeout(
      () => setStep((current) => (current + 1) % total),
      intro ? INTRO_MS : SLIDE_MS
    )
    return () => clearTimeout(id)
  }, [step, paused, intro, total])

  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy">
      {/* Background: real video, or the zooming picture as a placeholder */}
      {showVideo ? (
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          src={video.src}
          poster={video.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      ) : (
        <img
          src={video.poster}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full animate-slow-zoom object-cover motion-reduce:animate-none"
        />
      )}

      {/* Gradient overlays: the video plays behind them */}
      <div
        className="absolute inset-0 -z-10 md:hidden"
        style={{ backgroundImage: overlayMobile }}
      />
      <div
        className="absolute inset-0 -z-10 hidden md:block"
        style={{ backgroundImage: overlayDesktop }}
      />

      {/* Stage: the intro text and the pictures sit on top of each other */}
      <div className="relative mx-auto h-[75vh] min-h-500px max-w-7xl md:h-[85vh]">
        {/* Step 0: intro text */}
        <div
          inert={!intro}
          className={`absolute inset-0 flex items-center px-6 transition-opacity duration-1000 motion-reduce:transition-none md:px-12 ${
            intro ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <div className="max-w-2xl text-left text-white">
            <Fade show={intro}>
              <img src={site.logo} alt="" className="h-16 w-16" />
            </Fade>

            <Fade show={intro} delay={150}>
              <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-tight md:text-6xl">
                {site.name}
              </h1>
            </Fade>

            <Fade show={intro} delay={300}>
              <p className="mt-4 font-display text-xl font-medium text-blue-200 md:text-2xl">
                “{site.tagline}”
              </p>
            </Fade>

            <Fade show={intro} delay={450}>
              <p className="mt-4 max-w-lg text-base font-light leading-relaxed text-blue-50">
                A place where every child is encouraged to learn, discover and
                achieve.
              </p>
            </Fade>

             <Fade show={intro} delay={600}>
    <div className="mt-8 flex flex-wrap gap-3">
      <Button to="/register" className="uppercase tracking-wide">
        Apply online
      </Button>
      <Button to="/about" variant="light" className="uppercase tracking-wide">
        Explore our school
      </Button>
    </div>
       </Fade>
          </div>
        </div>

        {/* Steps 1 to 4: the Canva pictures */}
{promoCards.map((card, index) => {
  const cardStep = index + 1
  const active = step === cardStep
  // The card shown just before the current step is the one sliding behind
  const leaving = cardStep === (step - 1 + total) % total
  const pose = poses[active ? 'active' : leaving ? 'leaving' : 'waiting']

  return (
    <div
      key={card.id}
      inert={!active}
      // Visitors who prefer reduced motion get a plain change, with no sliding or shrinking
      style={reduceMotion ? { opacity: pose.opacity, zIndex: pose.zIndex } : pose}
      className={`absolute inset-0 flex origin-left items-center justify-start px-6 md:px-12 ${
        active ? '' : 'pointer-events-none'
      }`}
    >
      <img
        src={card.image}
        alt={`${card.title}. ${card.text}`}
        className="aspect-video w-full max-w-4xl rounded-3xl object-cover shadow-2xl ring-1 ring-white/30"
      />
    </div>
  )
})}
      </div>

      {/* Controls: pause button and dots */}
      <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-4 text-white">
        <button
          type="button"
          aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
          onClick={() => setPaused(!paused)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur transition hover:bg-white/30"
        >
          {paused ? <FiPlay size={14} /> : <FiPause size={14} />}
        </button>

        <div className="flex items-center gap-2">
          {labels.map((label, index) => (
            <button
              key={label}
              type="button"
              aria-label={`Show ${label}`}
              aria-current={step === index}
              onClick={() => setStep(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                step === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}