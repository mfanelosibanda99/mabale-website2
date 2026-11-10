import { Navigate, Route, Routes } from 'react-router-dom'
import { roleHome, useAuth } from '../Auth/AuthContext'
import ProtectedRoute from '../Auth/ProtectedRoute'
import PortalLayout from './Layouts/PortalLayout'
import AdminDashboard from './Admin/AdminDashboard'
import Students from './Admin/Students'
import Applications from './Admin/Applications'
import Announcements from './Admin/Announcements'
import TeacherDashboard from './Teacher/TeacherDashboard'
import ParentDashboard from './Parent/ParentDashboard'

// /portal on its own sends each person to their own dashboard
function HomeRedirect() {
  const { user } = useAuth()
  return <Navigate to={roleHome[user.role]} replace />
}

export default function PortalRoutes() {
  return (
    <Routes>
      {/* Everything here needs a login */}
      <Route element={<ProtectedRoute />}>
        <Route index element={<HomeRedirect />} />

        <Route element={<PortalLayout />}>
          {/* Admin only */}
          <Route element={<ProtectedRoute allow={['admin']} />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/students" element={<Students />} />
            <Route path="admin/applications" element={<Applications />} />
            <Route path="admin/announcements" element={<Announcements />} />
          </Route>

          {/* Teacher only */}
          <Route element={<ProtectedRoute allow={['teacher']} />}>
            <Route path="teacher" element={<TeacherDashboard />} />
          </Route>

          {/* Parent only */}
          <Route element={<ProtectedRoute allow={['parent']} />}>
            <Route path="parent" element={<ParentDashboard />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/portal" replace />} />
      </Route>
    </Routes>
  )
}