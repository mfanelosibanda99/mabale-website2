export default function PromoCard({ title, text, image }) {
  return (
    <article className="group relative aspect-3/4 overflow-hidden rounded-3xl bg-navy shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />

      {/* Navy gradient so the text stays readable */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,31,75,0.95),rgba(11,31,75,0.4)_45%,transparent_70%)]" />

      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm font-light leading-relaxed text-blue-100">
          {text}
        </p>
      </div>
    </article>
  )
}