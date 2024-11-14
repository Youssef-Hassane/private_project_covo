import { Roboto } from "next/font/google";
import { Limelight } from "next/font/google";

export const limelight = Limelight({
	subsets: ["latin"],
	weight: ["400"],
	style: ["normal"],
	display: "swap",
});

export const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "700"],
	style: ["normal", "italic"],
	display: "swap",
});

export const AboutArray = [
	{
		title: "DISCOVER OPPORTUNITIES",
		text: "Find tailored campaigns that align with your niche and audience.",
		bgColor: "bg-blue-400 ",
		id: 1,
	},
	{
		title: "EFFICIENT COLLABORATION",
		text: "Streamlined communication and project management tools.",
		bgColor: "bg-blue-300 ",
		id: 2,
	},
	{
		title: "FAIR COMPENSATION",
		text: "Transparent payment terms and competitive rates.",
		bgColor: "bg-blue-200 ",
		id: 3,
	},
	{
		title: "GROW YOUR BRAND",
		text: "Gain exposure, build your following , and establish yourself as an industry leader.",
		bgColor: "bg-blue-100 ",
		id: 4,
	},
];
