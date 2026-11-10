import usePageTitle from '../Hooks/usePageTitle'
import VideoHero from '../Components/Sections/VideoHero'
import QuickFacts from '../Components/Sections/QuickFacts'
import About from '../Components/Sections/About'
import Academics from '../Components/Sections/Academics'
import Activities from '../Components/Sections/Activities'
import LatestNews from '../Components/Sections/LatestNews'
import Admissions from '../Components/Sections/Admissions'

export default function Home() {
  usePageTitle()

  return (
    <>
      <VideoHero />
      <QuickFacts />
      <About />
      <Academics />
      <Activities />
      <LatestNews />
      <Admissions />
    </>
  )
}