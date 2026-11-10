import { useState } from 'react'
import { sendMessage } from '../../Lib/api'
import Button from '../Ui/Button'

const emptyForm = { name: '', email: '', phone: '', message: '' }

const inputStyles =
  'mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/30'

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setSending(true)
    setError('')
    try {
      await sendMessage(form)
      setSent(true)
      setForm(emptyForm)
    } catch (err) {
      setError(err.message)
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div role="status" className="rounded-3xl bg-white p-8 text-center shadow-lg">
        <h2 className="font-display text-2xl font-semibold text-navy">Thank you!</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Your message has been received. The school office will reply soon.
        </p>
        <Button type="button" className="mt-6" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl bg-white p-6 shadow-lg md:p-8"
    >
      <h2 className="font-display text-2xl font-semibold text-navy">
        Send us a message
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium text-navy">
            Your name
          </label>
          <input id="contact-name" name="name" required value={form.name} onChange={handleChange} className={inputStyles} />
        </div>
        <div>
          <label htmlFor="contact-phone" className="text-sm font-medium text-navy">
            Phone (optional)
          </label>
          <input id="contact-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputStyles} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="text-sm font-medium text-navy">
          Email address
        </label>
        <input id="contact-email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputStyles} />
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-medium text-navy">
          Message
        </label>
        <textarea id="contact-message" name="message" rows={5} required value={form.message} onChange={handleChange} className={inputStyles} />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={sending}
        className="w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  )
}