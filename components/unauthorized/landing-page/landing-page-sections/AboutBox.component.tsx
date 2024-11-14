import AboutBoxProps from "./AboutBox.model";

const AboutBox: React.FC<AboutBoxProps> = (props) => {
  return (
    <article className={props.className}>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </article>
  );
}

// export default function AboutBox(props) {
//   return (
//     <article className="">
//       <h1>{props.title}</h1>
//       <p>{props.text}</p>
//     </article>
//   );
// }

export default AboutBox;
