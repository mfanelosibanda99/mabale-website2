import { useState } from 'react'
import { Link } from 'react-router-dom'
import { submitApplication } from '../Lib/api'
import { site } from '../Components/Data/Site'
import Button from '../Components/Ui/Button'

const emptyForm = {
  childName: '',
  childAge: '',
  parentName: '',
  phone: '',
  email: '',
  message: '',
}

const inputStyles =
  'mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/30'

function Field({ label, id, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
      </label>
      {children}
    </div>
  )
}

export default function Register() {
  const [form, setForm] = useState(emptyForm)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(null)

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    setError('')
    try {
      const application = await submitApplication({
        ...form,
        childAge: Number(form.childAge),
      })
      setDone(application)
      setForm(emptyForm)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-blue-50 px-6 py-12">
      <div className="mx-auto w-full max-w-2xl">
        <Link to="/" className="inline-flex items-center gap-3">
          <img src={site.logo} alt="" className="h-10 w-10" />
          <span className="font-display text-lg font-semibold text-navy">
            {site.name}
          </span>
        </Link>

        <div className="mt-6 rounded-3xl bg-white p-6 shadow-xl md:p-8">
          {done ? (
            <div role="status" className="py-6 text-center">
              <h1 className="font-display text-2xl font-semibold text-navy">
                Thank you!
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We have received the application for{' '}
                <strong>{done.childName}</strong>. Your reference is{' '}
                <strong>{done.id.toUpperCase()}</strong>. The school office will
                contact you soon.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button type="button" onClick={() => setDone(null)}>
                  Apply for another child
                </Button>
                <Link
                  to="/"
                  className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-navy ring-1 ring-slate-300 transition hover:bg-blue-50"
                >
                  Back to the website
                </Link>
              </div>
            </div>
          ) : (
            <>
              <h1 className="font-display text-2xl font-semibold text-navy">
                Apply online
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                Tell us about your child and how to reach you. Admissions are
                open for pupils aged 5 to 14.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Child's full name" id="childName">
                    <input id="childName" name="childName" required value={form.childName} onChange={handleChange} className={inputStyles} />
                  </Field>
                  <Field label="Child's age" id="childAge">
                    <input id="childAge" name="childAge" type="number" min="5" max="14" required value={form.childAge} onChange={handleChange} className={inputStyles} />
                  </Field>
                  <Field label="Parent or guardian name" id="parentName">
                    <input id="parentName" name="parentName" required value={form.parentName} onChange={handleChange} className={inputStyles} />
                  </Field>
                  <Field label="Phone number" id="phone">
                    <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputStyles} />
                  </Field>
                </div>

                <Field label="Email address" id="email">
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputStyles} />
                </Field>

                <Field label="Anything else we should know? (optional)" id="message">
                  <textarea id="message" name="message" rows={3} value={form.message} onChange={handleChange} className={inputStyles} />
                </Field>

                {error && (
                  <p role="alert" className="text-sm text-red-600">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Sending…' : 'Submit application'}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  )
}