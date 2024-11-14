import FirstSection from "./first-section/FirstSection.component";
import SecondSection from "./second-section/SecondSection.component";
import ThirdSection from "./third-section/ThirdSection.component";
import FourthSection from "./landing-page-sections/FourthSection.component";
import FifthSection from "./landing-page-sections/FifthSection.component";

export default function LandingPagePage() {
	return (
		<div>
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
		</div>
	);
}
