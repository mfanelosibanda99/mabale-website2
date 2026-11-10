import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-50 px-6 text-center">
      <p className="font-display text-6xl font-bold text-royal">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-navy">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        The page you are looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Back to the homepage
      </Link>
    </main>
  )
}