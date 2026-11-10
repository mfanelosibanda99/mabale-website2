import { useEffect, useState } from 'react'
import { useAuth } from '../../Auth/AuthContext'
import { getAnnouncements, getStudents } from '../../Lib/api'
import PageHeader from '../Shared/PageHeader'
import { StatusBadge } from '../Shared/DataTable'
import AnnouncementList from '../Shared/AnnouncementList'

export default function ParentDashboard() {
  const { user } = useAuth()
  const [children, setChildren] = useState([])
  const [announcements, setAnnouncements] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let ignore = false

    Promise.all([getStudents(), getAnnouncements()])
      .then(([students, news]) => {
        if (ignore) return
        // Demo only: the real server will send just this parent's children
        setChildren(students.filter((s) => user.childIds.includes(s.id)))
        setAnnouncements(news)
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [user.childIds])

  return (
    <>
      <PageHeader title="Parent dashboard" subtitle={`Welcome, ${user.name}.`} />

      <h2 className="mb-3 font-display text-lg font-semibold text-navy">My children</h2>
      {loading ? (
        <p className="text-sm text-slate-500">Loading…</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {children.map((child) => (
            <article
              key={child.id}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-royal font-display text-lg font-semibold text-white">
                  {child.name[0]}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-navy">
                    {child.name}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {child.className} · {child.age} years old
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <StatusBadge status={child.status} />
              </div>
            </article>
          ))}
        </div>
      )}

      <h2 className="mb-3 mt-10 font-display text-lg font-semibold text-navy">
        School announcements
      </h2>
      <AnnouncementList items={announcements} loading={loading} />
    </>
  )
}