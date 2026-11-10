const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

export default function AnnouncementList({
  items,
  loading = false,
  className = 'space-y-4',
}) {
  if (loading) return <p className="text-sm text-slate-500">Loading…</p>
  if (items.length === 0) {
    return <p className="text-sm text-slate-500">No announcements yet.</p>
  }

  return (
    <ul className={className}>
      {items.map((item) => (
        <li
          key={item.id}
          className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-royal">
            {formatDate(item.date)}
          </p>
          <h3 className="mt-1 font-display text-base font-semibold text-navy">
            {item.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
        </li>
      ))}
    </ul>
  )
}