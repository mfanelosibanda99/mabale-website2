import { FiArrowRight } from 'react-icons/fi'
import { activities } from '../Data/Activities'
import Button from '../Ui/Button'
import Reveal from '../Ui/Reveal'
import SectionTittle from '../Ui/SectionTittle'

export default function Activities() {
  return (
    <section id="activities" className="bg-white px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
        {/* Text side */}
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-royal">
            Beyond the classroom
          </p>
          <SectionTittle className="mt-3">Learn. Play. Grow.</SectionTittle>
          <p className="mt-4 text-base font-light leading-relaxed text-slate-600">
            At Mabale Primary School, growth happens everywhere. Our pupils
            thrive through sport, creative arts, athletics, and teamwork,
            building confidence, character, and lifelong friendships.
          </p>
          <Button href="#contact" className="mt-8">
            Get in touch
            <FiArrowRight size={16} />
          </Button>
        </Reveal>

        {/* Photo cards */}
        <div className="grid gap-5 sm:grid-cols-3">
          {activities.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 150}
              className={index === 1 ? 'lg:mt-10' : ''}
            >
              <article className="group overflow-hidden rounded-3xl bg-blue-50 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105 sm:aspect-3/4"
                  />
                </div>
                <h3 className="px-5 py-4 font-display text-lg font-semibold text-navy">
                  {item.title}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}