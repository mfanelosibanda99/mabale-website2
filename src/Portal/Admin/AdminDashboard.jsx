import { useEffect, useState } from 'react'
import { FiBell, FiFileText, FiUserCheck, FiUsers } from 'react-icons/fi'
import { getAnnouncements, getApplications, getStudents } from '../../Lib/api'
import PageHeader from '../Shared/PageHeader'
import StatCard from '../Shared/StatCard'
import DataTable, { StatusBadge } from '../Shared/DataTable'
import AnnouncementList from '../Shared/AnnouncementList'

const columns = [
  { key: 'childName', label: 'Child' },
  { key: 'parentName', label: 'Parent' },
  { key: 'date', label: 'Date' },
  {
    key: 'status',
    label: 'Status',
    render: (row) => <StatusBadge status={row.status} />,
  },
]

export default function AdminDashboard() {
  const [data, setData] = useState({
    students: [],
    applications: [],
    announcements: [],
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let ignore = false

    Promise.all([getStudents(), getApplications(), getAnnouncements()])
      .then(([students, applications, announcements]) => {
        if (!ignore) setData({ students, applications, announcements })
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [])

  const { students, applications, announcements } = data
  const activeCount = students.filter((s) => s.status === 'Active').length
  const pendingCount = applications.filter((a) => a.status === 'Pending').length

  return (
    <>
      <PageHeader title="Admin dashboard" subtitle="An overview of the school." />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total pupils" value={students.length} icon={FiUsers} />
        <StatCard label="Active pupils" value={activeCount} icon={FiUserCheck} tone="green" />
        <StatCard label="Pending applications" value={pendingCount} icon={FiFileText} tone="amber" />
        <StatCard label="Announcements" value={announcements.length} icon={FiBell} tone="purple" />
      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-3">
        <section className="xl:col-span-2">
          <h2 className="mb-3 font-display text-lg font-semibold text-navy">
            Recent applications
          </h2>
          <DataTable columns={columns} rows={applications} loading={loading} />
        </section>

        <section>
          <h2 className="mb-3 font-display text-lg font-semibold text-navy">
            Latest announcements
          </h2>
          <AnnouncementList items={announcements} loading={loading} />
        </section>
      </div>
    </>
  )
}