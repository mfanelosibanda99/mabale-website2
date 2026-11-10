import { FiArrowRight } from 'react-icons/fi'
import { site } from '../Data/Site'
import Button from '../Ui/Button'
import Reveal from '../Ui/Reveal'
import SectionTittle from '../Ui/SectionTittle'

// TODO: replace the placeholder figures with the school's real numbers
const stats = [
  { value: '5–14', label: 'Pupil ages' },
  { value: '15', label: 'Dedicated teachers' },
  { value: '10+', label: 'Years of excellence' },
]

export default function About({ showLink = true }) {
  return (
    <section id="about" className="bg-white px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Photo with an offset blue block behind it */}
        <Reveal>
          <div className="relative isolate">
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-3xl bg-royal/15" />
            <img
              src="/sec3-1.png"
              alt="Pupils and teachers at Mabale Primary School"
              loading="lazy"
              className="aspect-4/3 w-full rounded-3xl object-cover shadow-lg"
            />
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={200}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-royal">
            Welcome to
          </p>
          <SectionTittle className="mt-3">{site.name}</SectionTittle>
          <p className="mt-3 font-display text-lg font-medium text-royal">
            Bright classrooms. Caring teachers. Inspired learners.
          </p>

          <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-slate-600">
            At {site.name}, every child is supported by dedicated teachers in a
            vibrant learning environment. Our classrooms are spaces where
            curiosity is nurtured, confidence is built, and every young mind is
            encouraged to thrive.
          </p>

          {/* Stats */}
          <dl className="mt-8 grid max-w-xl grid-cols-3 divide-x divide-blue-100 border-y border-blue-100 py-5 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse px-2">
                <dt className="mt-1 text-xs text-slate-500">{stat.label}</dt>
                <dd className="font-display text-2xl font-semibold text-navy md:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

            {showLink && (
    <Button to="/about" className="mt-8">
      Read more about us
      <FiArrowRight size={16} />
    </Button>
  )}
        </Reveal>
      </div>
    </section>
  )
}