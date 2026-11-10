import usePageTitle from '../Hooks/usePageTitle'
import PageBanner from '../Components/Ui/PageBanner'
import AboutSection from '../Components/Sections/About'

export default function About() {
  usePageTitle('About us')

  return (
    <>
      <PageBanner
        title="About us"
        subtitle="Bright classrooms. Caring teachers. Inspired learners."
      />
      <AboutSection showLink={false} />
    </>
  )
}