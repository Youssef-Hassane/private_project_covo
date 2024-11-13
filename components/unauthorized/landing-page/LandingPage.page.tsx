import FirstSection from './landing-page-sections/FirstSection.component';
import SecondSection from './landing-page-sections/SecondSection.component';
import ThirdSection from './landing-page-sections/ThirdSection.component';
import FourthSection from './landing-page-sections/FourthSection.component';
import FifthSection from './landing-page-sections/FifthSection.component';



export default function LandingPage() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </div>
  )
}