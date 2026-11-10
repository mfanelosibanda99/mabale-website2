import { FiChevronDown } from 'react-icons/fi'
import { faqs } from '../Data/Faq'
import Reveal from '../Ui/Reveal'
import SectionTittle from '../Ui/SectionTittle'

export default function Faq() {
  return (
    <section className="bg-blue-50 px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-royal">
            Questions
          </p>
          <SectionTittle className="mt-3">Common questions</SectionTittle>
        </Reveal>

        <div className="mt-8 space-y-3">
          {faqs.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <details className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-navy">
                  {item.question}
                  <FiChevronDown
                    size={20}
                    className="shrink-0 transition group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-sm font-light leading-relaxed text-slate-600">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}