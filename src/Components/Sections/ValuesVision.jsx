import { mission, values, vision } from '../Data/Values'
import Reveal from '../Ui/Reveal'
import SectionTittle from '../Ui/SectionTittle'

export default function ValuesVision() {
  return (
    <section className="bg-blue-50 px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        {/* Blue block: title, vision and mission */}
        <Reveal>
          <div className="h-full rounded-3xl bg-royal p-8 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-100">
              Our values
            </p>
            <SectionTittle light className="mt-3">
              Building Tomorrow’s Leaders
            </SectionTittle>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-display text-lg font-semibold">Our vision</h3>
                <p className="mt-1 text-sm font-light leading-relaxed text-blue-50">
                  {vision}
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">Our mission</h3>
                <p className="mt-1 text-sm font-light leading-relaxed text-blue-50">
                  {mission}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Timeline of values */}
        <ol className="relative space-y-10 self-center before:absolute before:bottom-2 before:left-5px before:top-2 before:w-0.5 before:bg-navy/15 before:content-['']">
          {values.map((value, index) => (
            <li key={value.id} className="relative pl-10">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 h-8 w-3 rounded-full bg-royal"
              />
              <Reveal delay={index * 150}>
                <h3 className="font-display text-lg font-semibold text-navy">
                  {value.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-slate-600">
                  {value.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}