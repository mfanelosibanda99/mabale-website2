import { useEffect, useState } from 'react'
import { FiBookOpen, FiUserCheck, FiUsers } from 'react-icons/fi'
import { useAuth } from '../../Auth/AuthContext'
import { getStudents } from '../../Lib/api'
import PageHeader from '../Shared/PageHeader'
import StatCard from '../Shared/StatCard'
import DataTable, { StatusBadge } from '../Shared/DataTable'

const columns = [
  { key: 'name', label: 'Pupil' },
  { key: 'age', label: 'Age' },
  {
    key: 'status',
    label: 'Status',
    render: (row) => <StatusBadge status={row.status} />,
  },
]

export default function TeacherDashboard() {
  const { user } = useAuth()
  const [pupils, setPupils] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let ignore = false

    getStudents()
      .then((students) => {
        // Demo only: the real server will send just this teacher's class
        if (!ignore) setPupils(students.filter((s) => s.className === user.className))
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [user.className])

  const activeCount = pupils.filter((p) => p.status === 'Active').length

  return (
    <>
      <PageHeader title="Teacher dashboard" subtitle={`Welcome, ${user.name}.`} />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="My class" value={user.className} icon={FiBookOpen} />
        <StatCard label="Pupils in class" value={pupils.length} icon={FiUsers} tone="purple" />
        <StatCard label="Active pupils" value={activeCount} icon={FiUserCheck} tone="green" />
      </div>

      <h2 className="mb-3 mt-8 font-display text-lg font-semibold text-navy">
        My pupils
      </h2>
      <DataTable columns={columns} rows={pupils} loading={loading} />
    </>
  )
}