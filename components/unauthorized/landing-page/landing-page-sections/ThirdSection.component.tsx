import AboutBox from "./AboutBox.component";

export default function ThirdSection() {
  const AboutArray = [
    {
      title: "DISCOVER OPPORTUNITIES",
      text: "Find tailored campaigns that align with your niche and audience.",
      bgColor: "bg-cyan-400 basis-1/4 ",
      id: 1,
    },
    {
      title: "EFFICIENT COLLABORATION",
      text: "Streamlined communication and project management tools.",
      bgColor: "bg-cyan-300 basis-1/4 ",
      id: 2,
    },
    {
      title: "FAIR COMPENSATION",
      text: "Transparent payment terms and competitive rates.",
      bgColor: "bg-cyan-200 basis-1/4 ",
      id: 3,
    },
    {
      title: "GROW YOUR BRAND",
      text: "Gain exposure, build your following , and establish yourself as an industry leader.",
      bgColor: "bg-cyan-100 basis-1/4 ",
      id: 4,
    },
  ];

  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-col items-center border-2 ">
        <article className="uppercase w-4/5 border-2 basis-2/3">
          <h1> FIND YOUR PERFECT MATCH WITH <strong>COVO</strong> </h1>
        </article>
        <article className="uppercase w-4/5 border-2 basis-1/3">
          <p>Connect with top brands and unlock exciting opportunities.</p>
        </article>
      </div>

      <div className="flex flex-row justify-center">
        {AboutArray.map((about, index) => {
          const colorStrength = index === 0 ? 500 : 500 - index * 100;
          // const classNameAbout = `bg-teal-${colorStrength}`;
          // const classNameAbout = 'bg-teal-500';

          return (
            <AboutBox
              key={about.id}
              title={about.title}
              text={about.text}
              className={`${about.bgColor} h-[12em]`}
              // className={classNameAbout}
            />
          );
        })}
      </div>
    </section>
  );
}
