import Hero from "./hero/Hero.component";
import LogoSlider from "./logo-slider/LogoSlider.component";
import About from "./about/About.component";
import Benefits from "./benefits/Benefits.component";
import Price from "./price/Price.component";
import Features from "./features/features.component";
import Faq from "./faq/faq.component";
import Footer from "../footer/Footer.page";

export default function LandingPagePage() {
	return (
		<div>
			<div>
				<section id="home">
					<Hero />
				</section>
				<LogoSlider />
				<section id="about">
					<About />
				</section>
				<section id="benefits">
					<Benefits />
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
				<section id="">
					<Footer />
				</section>
				
			</div>
		</div>
	);
}
