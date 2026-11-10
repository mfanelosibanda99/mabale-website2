import usePageTitle from '../Hooks/usePageTitle'
import PageBanner from '../Components/Ui/PageBanner'

export default function Contact() {
  usePageTitle('Contact us')

  return (
    <>
      <PageBanner title="Contact us" subtitle="We would love to hear from you." />
      <section className="mx-auto max-w-3xl px-6 py-16 text-center text-slate-600">
        <p>Contact details and a message form are coming in the next step.</p>
      </section>
    </>
  )
}