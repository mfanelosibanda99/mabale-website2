import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { getStudents } from '../../Lib/api'
import PageHeader from '../Shared/PageHeader'
import DataTable, { StatusBadge } from '../Shared/DataTable'

const columns = [
  { key: 'name', label: 'Pupil' },
  { key: 'className', label: 'Class' },
  { key: 'age', label: 'Age' },
  {
    key: 'status',
    label: 'Status',
    render: (row) => <StatusBadge status={row.status} />,
  },
]

export default function Students() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [className, setClassName] = useState('All')

  useEffect(() => {
    let ignore = false

    getStudents()
      .then((data) => {
        if (!ignore) setStudents(data)
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [])

  const classes = ['All', ...[...new Set(students.map((s) => s.className))].sort()]

  const visible = students.filter(
    (s) =>
      (className === 'All' || s.className === className) &&
      s.name.toLowerCase().includes(search.trim().toLowerCase())
  )

  return (
    <>
      <PageHeader
        title="Students"
        subtitle={`${visible.length} of ${students.length} pupils shown`}
      />

      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <FiSearch
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="search"
            aria-label="Search pupils by name"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/30"
          />
        </div>

        <select
          aria-label="Filter by class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/30"
        >
          {classes.map((name) => (
            <option key={name} value={name}>
              {name === 'All' ? 'All classes' : name}
            </option>
          ))}
        </select>
      </div>

      <DataTable
        columns={columns}
        rows={visible}
        loading={loading}
        emptyText="No pupils match your search."
      />
    </>
  )
}