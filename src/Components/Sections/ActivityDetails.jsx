import { FaFutbol, FaPalette, FaUsers } from 'react-icons/fa'
import Reveal from '../Ui/Reveal'
import SectionTittle from '../Ui/SectionTittle'

// TODO: confirm these descriptions and the events list with the school
const details = [
  {
    id: 'sport',
    title: 'Football & Athletics',
    icon: FaFutbol,
    text: 'On the field, pupils learn fitness, discipline and teamwork, and how to win and lose with respect.',
  },
  {
    id: 'arts',
    title: 'Creative Arts',
    icon: FaPalette,
    text: 'Drawing, painting and crafts give every child a way to share ideas and build creative confidence.',
  },
  {
    id: 'teamwork',
    title: 'Teamwork & Play',
    icon: FaUsers,
    text: 'Group games and shared projects help pupils make friends and learn to work together.',
  },
]

const events = [
  'Sports day',
  'Class awards',
  'School assemblies',
  'Prize-giving',
  'School events',
]

export default function ActivityDetails() {
  return (
    <section className="bg-blue-50 px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-royal">
            What pupils enjoy
          </p>
          <SectionTittle className="mt-3">Growing through play</SectionTittle>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {details.map(({ id, title, icon: Icon, text }, index) => (
            <Reveal key={id} delay={index * 150}>
              <article className="h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-royal text-white">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-navy">
                  {title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-slate-600">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <h3 className="mt-14 font-display text-lg font-semibold text-navy">
            Events we celebrate
          </h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {events.map((event) => (
              <li
                key={event}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-navy ring-1 ring-slate-200"
              >
                {event}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}