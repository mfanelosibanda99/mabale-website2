import usePageTitle from '../Hooks/usePageTitle'
import PageBanner from '../Components/Ui/PageBanner'

export default function Contact() {
  usePageTitle('Contact us')

  return (
    <>
        <PageBanner
    title="News & announcements"
    ghost="News"
    subtitle={`The latest from ${site.name}.`}
    next="blue-50"
  />
     <section className="bg-blue-50 px-6 py-16 md:py-24">
        <p>Contact details and a message form are coming in the next step.</p>
      </section>
    </>
  )
}