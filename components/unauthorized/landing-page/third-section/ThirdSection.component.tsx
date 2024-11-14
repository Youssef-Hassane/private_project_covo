import AboutBox from "../about-box/AboutBox.component";
import { AboutArray, limelight, roboto } from "./ThirdSection.data";

export default function ThirdSection() {
	return (
		<section className="flex flex-col w-full bg-custom-light-grayish-blue2">
			<div className="flex flex-col items-center h-[10em]">
				<article className="flex flex-col justify-center text-slate-700 text-5xl text-center uppercase w-4/5 basis-2/3">
					<h1>
						{" "}
						FIND YOUR PERFECT MATCH WITH{" "}
						<strong className={`${limelight.className}`}>COVO</strong>{" "}
					</h1>
				</article>
				<article className="flex flex-col justify-center text-center w-4/5 basis-1/3">
					<p>Connect With Top Brands & Unlock Exciting Opportunities.</p>
				</article>
			</div>

			<div className="flex flex-wrap gap-2 justify-center items-center">
				{AboutArray.map((about) => {
					return (
						<AboutBox
							key={about.id}
							title={about.title}
							text={about.text}
							className={`bg-white w-[400px] h-[400px] rounded-lg border-custom-light-grayish-blue border-2 flex flex-col justify-center items-center p-4
                          bg-[url("/svg/BG.svg")]
                          ${roboto.className} px-[1.5em] py-[1em]`}
							// className={classNameAbout}
						/>
					);
				})}
			</div>
		</section>
	);
}
