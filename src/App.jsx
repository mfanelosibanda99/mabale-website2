import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './Auth/AuthContext'
import PublicLayout from './Components/Layout/PublicLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Academics from './Pages/Academics'
import Activities from './Pages/Activities'
import Admissions from './Pages/Admissions'
import PublicBoard from './Pages/PublicBoard'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Register from './Pages/Register'
import NotFound from './Pages/NotFound'
import PortalRoutes from './Portal/PortalRoutes'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public website: every page shares the navbar and footer */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/news" element={<PublicBoard />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Pages with their own layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portal/*" element={<PortalRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  )
}