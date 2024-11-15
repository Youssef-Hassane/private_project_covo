import FirstSection from "./first-section/FirstSection.component";
import SecondSection from "./second-section/SecondSection.component";
import ThirdSection from "./third-section/ThirdSection.component";
import FourthSection from "./landing-page-sections/FourthSection.component";
import FifthSection from "./landing-page-sections/FifthSection.component";
import Price from "./price/Price.component";
import Features from "./features/features.component";
import Faq from "./faq/faq.component";

export default function LandingPagePage() {
	return (
		<div>
			<div>
				<section id="home">
					<FirstSection />
				</section>
				<SecondSection />
				<section id="about">
					<ThirdSection />
				</section>
				<section id="benefits">
					<FourthSection />
				</section>
				<section id="features">
					<Features />
				</section>
				<section id="faq">
					<Faq />
				</section>
				<section id="pricing">
					<Price />
				</section>
			</div>
		</div>
	);
}
