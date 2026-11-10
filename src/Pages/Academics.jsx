import usePageTitle from '../Hooks/usePageTitle'
import PageBanner from '../Components/Ui/PageBanner'
import AcademicsSection from '../Components/Sections/Academics'
import LearningApproach from '../Components/Sections/LearningApproach'

export default function Academics() {
  usePageTitle('Academics')

  return (
    <>
        <PageBanner
    title="Academics"
    subtitle="Hands-on learning that sparks curiosity in every pupil."
    next="blue-50"
  />
      <AcademicsSection />
      <LearningApproach />
    </>
  )
}