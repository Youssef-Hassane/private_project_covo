import AboutBoxProps from "./AboutBox.model";

const AboutBox: React.FC<AboutBoxProps> = (props) => {
  return (
    <article className={props.className}>
      <h1 className="text-3xl font-bold text-center basis-1/2" >{props.title}</h1>
      <p className="basis-1/2 px-[1em]" >{props.text}</p>
    </article>
  );
}

export default AboutBox;
