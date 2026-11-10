import usePageTitle from '../Hooks/usePageTitle'
import PageBanner from '../Components/Ui/PageBanner'
import ActivitiesSection from '../Components/Sections/Activities'
import ActivityDetails from '../Components/Sections/ActivityDetails'

export default function Activities() {
  usePageTitle('Activities')

  return (
    <>
      <PageBanner
        title="Activities"
        subtitle="Beyond the classroom, growth happens everywhere."
      />
      <ActivitiesSection />
      <ActivityDetails />
    </>
  )
}