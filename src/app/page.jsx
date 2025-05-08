import BannerSection from '../components/BannerSection'
import AboutSection from '../components/AboutSection'
import StatsSection from '../components/StatsSection'
import MissionSection from '../components/MissionSection'
import ContactSection from '../components/ContactSection'
import CurriculumSection from '../components/CurriculumSection'
export default function page() {

  return (
    <>
      <BannerSection />
      <AboutSection animateOnScroll={true} />
      <StatsSection />
      <MissionSection />
      <CurriculumSection />
      <ContactSection />
    </>
  )
}
