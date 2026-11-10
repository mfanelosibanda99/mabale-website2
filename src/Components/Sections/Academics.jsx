import { FiArrowRight } from 'react-icons/fi'
import { academics } from '../Data/Academics'
import Button from '../Ui/Button'
import Reveal from '../Ui/Reveal'
import SectionTittle from '../Ui/SectionTittle'

export default function Academics() {
  return (
    <section id="academics" className="bg-blue-50 px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-royal">
              Our academics
            </p>
            <SectionTittle className="mt-3">Discover Your Potential</SectionTittle>
            <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-slate-600">
              From science and reading to technology and the arts, our lessons
              help every child aged 5–14 learn with confidence.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <Button href="#admissions">
              Enquire about admissions
              <FiArrowRight size={16} />
            </Button>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-5 lg:gap-8">
          {academics.map((item, index) => {
            const Icon = item.icon

            return (
              <Reveal key={item.id} delay={index * 150}>
                <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative">
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt=""
                        loading="lazy"
                        className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Round icon badge overlapping the photo edge */}
                    <span className="absolute -bottom-6 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-royal text-white shadow-lg ring-4 ring-white">
                      <Icon size={20} />
                    </span>
                  </div>

                  <div className="px-5 pb-6 pt-10">
                    <h3 className="font-display text-xl font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}