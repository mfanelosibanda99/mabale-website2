export default function SectionTittle({ children, light = false, className = '' }) {
  return (
    <h2
      className={`font-display text-3xl font-semibold md:text-4xl ${
        light ? 'text-white' : 'text-navy'
      } ${className}`}
    >
      {children}
    </h2>
  )
}