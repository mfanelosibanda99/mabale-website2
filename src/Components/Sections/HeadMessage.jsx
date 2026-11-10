import Reveal from '../Ui/Reveal'

// TODO: replace the message, the name and add a photo when the school provides them
const message =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'

export default function HeadMessage() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-24">
      <Reveal>
        <figure className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center md:flex-row md:text-left">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-royal font-display text-3xl font-semibold text-white">
            HT
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-royal">
              A message from the head teacher
            </p>
            <blockquote className="mt-3 text-lg font-light leading-relaxed text-slate-600">
              “{message}”
            </blockquote>
            <figcaption className="mt-4 font-display text-base font-semibold text-navy">
              Head teacher’s name
              <span className="font-sans text-sm font-normal text-slate-500">
                {' '}
                · Head Teacher
              </span>
            </figcaption>
          </div>
        </figure>
      </Reveal>
    </section>
  )
}