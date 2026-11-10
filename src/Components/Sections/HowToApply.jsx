import { FiCheckCircle } from 'react-icons/fi'
import { applySteps, requiredDocuments } from '../Data/ApplySteps'
import Button from '../Ui/Button'
import Reveal from '../Ui/Reveal'
import SectionTittle from '../Ui/SectionTittle'

export default function HowToApply() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-royal">
            Admissions
          </p>
          <SectionTittle className="mt-3">How to apply</SectionTittle>
        </Reveal>

        {/* Steps */}
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {applySteps.map((step, index) => (
            <li key={step.id}>
              <Reveal delay={index * 150} className="h-full">
                <div className="h-full rounded-3xl bg-blue-50 p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-royal font-display text-lg font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-slate-600">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Documents and button */}
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col gap-8 rounded-3xl bg-navy p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h3 className="font-display text-xl font-semibold">
                What to have ready
              </h3>
              <ul className="mt-4 space-y-2 text-sm font-light text-blue-50">
                {requiredDocuments.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <FiCheckCircle size={18} className="mt-0.5 shrink-0 text-blue-300" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <Button to="/register" variant="light" className="shrink-0">
              Start your application
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}