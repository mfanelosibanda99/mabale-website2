import { quickFacts } from '../Data/QuickFacts'
import Reveal from '../Ui/Reveal'

export default function QuickFacts() {
  return (
    <section
      aria-label="Why choose us"
      className="border-b border-blue-100 bg-white px-6 py-10 md:px-12"
    >
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-blue-100">
        {quickFacts.map(({ id, title, text, icon: Icon }, index) => (
          <li key={id} className="px-4 last:col-span-2 md:last:col-span-1">
            <Reveal delay={index * 100}>
              <Icon size={32} className="mx-auto text-royal" />
              <h3 className="mt-3 font-display text-base font-semibold text-navy">
                {title}
              </h3>
              <p className="mt-1 text-xs font-light leading-relaxed text-slate-500">
                {text}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}