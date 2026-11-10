import usePageTitle from '../Hooks/usePageTitle'
import PageBanner from '../Components/Ui/PageBanner'
import HowToApply from '../Components/Sections/HowToApply'
import Faq from '../Components/Sections/Faq'
import AdmissionsSection from '../Components/Sections/Admissions'

export default function Admissions() {
  usePageTitle('Admissions')

  return (
    <>
      <PageBanner title="Admissions" subtitle="Join our school community." />
      <HowToApply />
      <Faq />
      <AdmissionsSection />
    </>
  )
}