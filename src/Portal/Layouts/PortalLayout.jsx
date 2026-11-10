import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import {
  FiBell,
  FiFileText,
  FiGrid,
  FiHome,
  FiLogOut,
  FiMenu,
  FiUsers,
} from 'react-icons/fi'
import { useAuth } from '../../Auth/AuthContext'
import { site } from '../../Components/Data/Site'

// The sidebar links each role sees
const navByRole = {
  admin: [
    { label: 'Dashboard', to: '/portal/admin', icon: FiGrid, end: true },
    { label: 'Students', to: '/portal/admin/students', icon: FiUsers },
    { label: 'Applications', to: '/portal/admin/applications', icon: FiFileText },
    { label: 'Announcements', to: '/portal/admin/announcements', icon: FiBell },
  ],
  teacher: [{ label: 'Dashboard', to: '/portal/teacher', icon: FiGrid, end: true }],
  parent: [{ label: 'Dashboard', to: '/portal/parent', icon: FiGrid, end: true }],
}

export default function PortalLayout() {
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const links = navByRole[user.role] ?? []

  return (
    <div className="min-h-screen bg-slate-50 lg:flex">
      {/* Dark backdrop behind the sidebar on phones */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-navy text-white transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:shrink-0 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center gap-3 px-5 py-5">
          <img src={site.logo} alt="" className="h-9 w-9" />
          <span className="font-display text-base font-semibold leading-tight">
            {site.name}
          </span>
        </div>

        <nav className="flex-1 px-3 py-2" aria-label="Portal">
          <ul className="space-y-1">
            {links.map(({ label, to, icon: Icon, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive ? 'bg-royal text-white' : 'text-blue-100 hover:bg-white/10'
                    }`
                  }
                >
                  <Icon size={18} />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-1 border-t border-white/15 px-3 py-4 text-sm">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-blue-100 transition hover:bg-white/10"
          >
            <FiHome size={18} />
            Back to website
          </Link>
          <button
            type="button"
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-blue-100 transition hover:bg-white/10"
          >
            <FiLogOut size={18} />
            Log out
          </button>
        </div>
      </aside>

      {/* Top bar and page content */}
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 md:px-8">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="text-navy lg:hidden"
          >
            <FiMenu size={24} />
          </button>

          <p className="hidden text-sm font-medium capitalize text-slate-500 lg:block">
            {user.role} portal
          </p>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-navy">{user.name}</p>
              <p className="text-xs capitalize text-slate-500">{user.role}</p>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-royal font-display text-sm font-semibold text-white">
              {user.name[0]}
            </span>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}