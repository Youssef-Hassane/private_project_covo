import Image from "next/image";

export default function FourthSection() {
	const cardInformation = [
		{
			url: "/svg/people_search.svg",
			text: "Discover Influencers",
			supText:
				"Our platform offers a user-friendly interface for easily searching and filtering influencers based on various criteria, including niche, audience demographics, engagement rates and location.",
			id: 1,
		},
		{
			url: "/svg/building_blocks.svg",
			text: "Build Your Campaign",
			supText:
				"Our platform provides a streamlined process for creating and customizing campaigns, allowing brands to define their objectives, target audience, budget, and desired deliverables.",
			id: 2,
		},
		{
			url: "/svg/software_engineer.svg",
			text: "Cloud-Enabled",
			supText:
				"Our cloud-based platform ensures scalability, accommodating both small and large-scale campaigns without compromising performance.",
			id: 3,
		},
		{
			url: "/svg/co_workers.svg",
			text: "Manage Ongoing Campaigns",
			supText:
				"Stay informed about the progress of your campaigns through real-time updates and notifications.",
			id: 4,
		},
		{
			url: "/svg/chat_bot.svg",
			text: "AI-Driven Recommendations",
			supText:
				"Leveraging AI-powered algorithms, we provide precise matches between brands and influencers, ensuring optimal campaign alignment.",
			id: 5,
		},
		{
			url: "/svg/secure_login.svg",
			text: "Encryption and Security",
			supText:
				"Rest assured that your data is safeguarded with robust encryption protocols, ensuring the confidentiality and integrity of your information.",
			id: 6,
		},
	];

	return (
		<div className="bg-custom-light-grayish-blue2">
			<div className="grid gap-2">
				<h1 className="text-5xl font-[700] text-custom-dark-desaturated-blue text-center">
					Benefits
				</h1>
				<p className="text-3xl font-[600] text-custom-lark-blue text-center">
					One Platform — Cost-Effective Influencer Marketing
				</p>
				<p className="text-1xl font-[600] text-custom-dark-desaturated-blue text-center">
					Simplify your influencer marketing with our all-in-one platform,
					offering cost-effective solutions while streamlining your influencer
					marketing efforts and maximize ROI with our affordable platform.
				</p>
			</div>
			<br />
			<div className="flex flex-wrap gap-2 justify-center items-center">
				{cardInformation.map((cardObject) => (
					<div
						key={cardObject.id}
						className="bg-white w-[400px] h-[400px] rounded-lg border-custom-light-grayish-blue border-2 flex flex-col justify-center items-center p-4"
					>
						<Image
							src={cardObject.url}
							alt={`Brand logo ${cardObject.id}`}
							width={200}
							height={200}
							className="w-[100px] h-auto "
						/>
						<br />
						<p className="text-2xl font-[600] text-custom-dark-desaturated-blue text-center">
							{cardObject.text}
						</p>
						<p className=" font-[300] text-custom-dark-desaturated-blue text-center">
							{cardObject.supText}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
