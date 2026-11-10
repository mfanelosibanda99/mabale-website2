import { useEffect, useState } from 'react'
import { getApplications, updateApplicationStatus } from '../../Lib/api'
import PageHeader from '../Shared/PageHeader'
import DataTable, { StatusBadge } from '../Shared/DataTable'

const filters = ['All', 'Pending', 'Approved', 'Rejected']

export default function Applications() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')
  const [busyId, setBusyId] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    getApplications()
      .then((data) => {
        if (!ignore) setApplications(data)
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [])

  async function changeStatus(id, status) {
    setBusyId(id)
    setError('')
    try {
      const updated = await updateApplicationStatus(id, status)
      setApplications((current) =>
        current.map((item) => (item.id === id ? updated : item))
      )
    } catch (err) {
      setError(err.message)
    } finally {
      setBusyId(null)
    }
  }

  const columns = [
    { key: 'childName', label: 'Child' },
    { key: 'childAge', label: 'Age' },
    { key: 'parentName', label: 'Parent' },
    { key: 'phone', label: 'Phone' },
    { key: 'date', label: 'Date' },
    {
      key: 'status',
      label: 'Status',
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (row) =>
        row.status === 'Pending' ? (
          <div className="flex gap-2">
            <button
              type="button"
              disabled={busyId === row.id}
              onClick={() => changeStatus(row.id, 'Approved')}
              className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white transition hover:bg-green-700 disabled:opacity-50"
            >
              Approve
            </button>
            <button
              type="button"
              disabled={busyId === row.id}
              onClick={() => changeStatus(row.id, 'Rejected')}
              className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-red-600 ring-1 ring-red-200 transition hover:bg-red-50 disabled:opacity-50"
            >
              Reject
            </button>
          </div>
        ) : (
          <span className="text-xs text-slate-400">Reviewed</span>
        ),
    },
  ]

  const pendingCount = applications.filter((a) => a.status === 'Pending').length
  const visible = applications.filter(
    (a) => filter === 'All' || a.status === filter
  )

  return (
    <>
      <PageHeader
        title="Applications"
        subtitle={`${pendingCount} waiting for review`}
      />

      <div className="mb-4 flex flex-wrap gap-2">
        {filters.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={filter === name}
            onClick={() => setFilter(name)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              filter === name
                ? 'bg-royal text-white'
                : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-blue-50'
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {error && (
        <p role="alert" className="mb-4 text-sm text-red-600">
          {error}
        </p>
      )}

      <DataTable
        columns={columns}
        rows={visible}
        loading={loading}
        emptyText="No applications in this list."
      />
    </>
  )
}