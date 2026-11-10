import Reveal from '../Ui/Reveal'
import SectionTittle from '../Ui/SectionTittle'

// TODO: confirm the real learning stages and subjects with the school
const stages = [
  {
    id: 'early',
    title: 'Early years',
    ages: 'Ages 5–7',
    text: 'Playful learning that builds early reading, number skills and confidence.',
  },
  {
    id: 'middle',
    title: 'Middle years',
    ages: 'Ages 8–10',
    text: 'Growing independence in reading, mathematics and science, with hands-on projects.',
  },
  {
    id: 'upper',
    title: 'Upper years',
    ages: 'Ages 11–14',
    text: 'Deeper study and leadership skills that prepare pupils for the next stage.',
  },
]

const subjects = [
  'English',
  'Mathematics',
  'Science',
  'Technology',
  'Creative arts',
  'Physical education',
  'Social studies',
]

export default function LearningApproach() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-royal">
            How learning works
          </p>
          <SectionTittle className="mt-3">Learning at every stage</SectionTittle>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stages.map((stage, index) => (
            <Reveal key={stage.id} delay={index * 150}>
              <article className="h-full rounded-3xl bg-blue-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-royal">
                  {stage.ages}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-navy">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-slate-600">
                  {stage.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <h3 className="mt-14 font-display text-lg font-semibold text-navy">
            Subjects we teach
          </h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {subjects.map((subject) => (
              <li
                key={subject}
                className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-navy"
              >
                {subject}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}