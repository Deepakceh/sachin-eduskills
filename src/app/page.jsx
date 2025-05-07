import BannerSection from '../components/BannerSection'
// import StatsSection from '../components/StatsSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
// import CourseSection from '../components/CourseSection'
// import CurriculumSection from '../components/CurriculumSection'
// import WhyChooseSection from '../components/WhyChooseSection'
// import ServiceSection from '../components/ServiceSection'
// import EnrollmentSection from '../components/EnrollmentSection'
export default function page() {

  return (
    <>
      <BannerSection />
      {/* <StatsSection /> */}
      <AboutSection animateOnScroll={true} />
      <ContactSection/>
      
      {/* <WhyChooseSection /> */}
      {/* <ServiceSection /> */}
      {/* <CourseSection /> */}
      {/* <CurriculumSection /> */}
      {/* <EnrollmentSection /> */}
    </>
  )
}
