import { useEffect, useState } from 'react'
import { addAnnouncement, getAnnouncements } from '../../Lib/api'
import PageHeader from '../Shared/PageHeader'
import AnnouncementList from '../Shared/AnnouncementList'
import Button from '../../Components/Ui/Button'

const inputStyles =
  'mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/30'

export default function Announcements() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [audience, setAudience] = useState('public')
  const [posting, setPosting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    getAnnouncements()
      .then((data) => {
        if (!ignore) setItems(data)
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    setPosting(true)
    setError('')
    try {
      const created = await addAnnouncement({
        title: title.trim(),
        text: text.trim(),
        audience,
      })
      setItems((current) => [created, ...current])
      setTitle('')
      setText('')
    } catch (err) {
      setError(err.message)
    } finally {
      setPosting(false)
    }
  }

  return (
    <>
      <PageHeader
        title="Announcements"
        subtitle="Post news for visitors or for parents."
      />

      <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 self-start rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
        >
          <h2 className="font-display text-lg font-semibold text-navy">
            New announcement
          </h2>

          <div>
            <label htmlFor="title" className="text-sm font-medium text-navy">
              Title
            </label>
            <input
              id="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={inputStyles}
            />
          </div>

          <div>
            <label htmlFor="text" className="text-sm font-medium text-navy">
              Message
            </label>
            <textarea
              id="text"
              required
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={inputStyles}
            />
          </div>

          <div>
            <label htmlFor="audience" className="text-sm font-medium text-navy">
              Who can see it
            </label>
            <select
              id="audience"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className={inputStyles}
            >
              <option value="public">Everyone (public news page)</option>
              <option value="parents">Parents only</option>
            </select>
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={posting}
            className="w-full disabled:cursor-not-allowed disabled:opacity-60"
          >
            {posting ? 'Posting…' : 'Post announcement'}
          </Button>
        </form>

        <AnnouncementList items={items} loading={loading} />
      </div>
    </>
  )
}