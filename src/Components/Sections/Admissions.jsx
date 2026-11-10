import { FiArrowRight, FiPhone } from 'react-icons/fi'
import { site } from '../Data/Site'
import Button from '../Ui/Button'
import Reveal from '../Ui/Reveal'
import SectionTittle from '../Ui/SectionTittle'

export default function Admissions() {
  return (
    <section id="admissions" className="bg-royal px-6 py-16 text-white md:px-12 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Message */}
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-100">
            Admissions open
          </p>
          <SectionTittle light className="mt-3">
            Join our school community
          </SectionTittle>
          <p className="mt-4 font-display text-lg font-medium text-blue-100">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-lg text-base font-light leading-relaxed text-blue-50">
            Give your child a place where curiosity is nurtured, confidence is
            built, and every young mind is encouraged to thrive.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button to="/register" variant="light">
  Apply online
  <FiArrowRight size={16} />
</Button>

            <a
              href={`tel:${site.contact.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
            >
              <FiPhone size={16} />
              {site.contact.phone}
            </a>
          </div>
        </Reveal>

        {/* Photo with an offset navy block behind it */}
        <Reveal delay={200}>
          <div className="relative isolate">
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-navy/40" />
            <img
              src="/sec6-1.png"
              alt="Mabale Primary School building"
              loading="lazy"
              className="aspect-4/3 w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}