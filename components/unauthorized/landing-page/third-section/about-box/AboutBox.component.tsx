import { IAboutBoxProps } from "./AboutBox.model";

export default function AboutBox(props: IAboutBoxProps) {
	return (
		<article className={props.className}>
			<h1 className="text-3xl font-bold text-center basis-1/2">
				{props.title}
			</h1>
			<p className="basis-1/2 px-[1em]">{props.text}</p>
		</article>
	);
}
