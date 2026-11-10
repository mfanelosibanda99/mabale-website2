import { useEffect, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { getAnnouncements } from '../../Lib/api'
import AnnouncementList from '../../Portal/Shared/AnnouncementList'
import Button from '../Ui/Button'
import Reveal from '../Ui/Reveal'
import SectionTittle from '../Ui/SectionTittle'

export default function LatestNews() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let ignore = false

    getAnnouncements({ publicOnly: true })
      .then((data) => {
        if (ignore) return
        // Newest first, and only the three latest
        const latest = [...data]
          .sort((a, b) => b.date.localeCompare(a.date))
          .slice(0, 3)
        setItems(latest)
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [])

  return (
    <section className="bg-blue-50 px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-royal">
              Latest news
            </p>
            <SectionTittle className="mt-3">News from our school</SectionTittle>
          </Reveal>

          <Reveal delay={150}>
            <Button to="/news">
              All news
              <FiArrowRight size={16} />
            </Button>
          </Reveal>
        </div>

        <div className="mt-10">
          <AnnouncementList
            items={items}
            loading={loading}
            className="grid gap-6 md:grid-cols-3"
          />
        </div>
      </div>
    </section>
  )
}