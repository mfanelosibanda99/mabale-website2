import usePageTitle from '../Hooks/usePageTitle'
import PageBanner from '../Components/Ui/PageBanner'
import ContactDetails from '../Components/Sections/ContactDetails'
import ContactForm from '../Components/Sections/ContactForm'

export default function Contact() {
  usePageTitle('Contact us')

  return (
    <>
        <PageBanner title="Contact us" subtitle="We would love to hear from you." next="blue-50" />

      <section className="bg-blue-50 px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ContactDetails />
            <ContactForm />
          </div>

          {/* Placeholder: replace with a Google Maps embed when the school is ready */}
          <div className="mt-12 flex aspect-16/6 min-h-48 items-center justify-center rounded-3xl bg-slate-200 text-sm text-slate-500">
            Map goes here
          </div>
        </div>
      </section>
    </>
  )
}