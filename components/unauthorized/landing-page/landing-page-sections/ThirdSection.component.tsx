import AboutBox from "./AboutBox.component";
import { Roboto } from 'next/font/google';
import { Limelight } from 'next/font/google';

const limelight= Limelight({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  display: 'swap',
});


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});


export default function ThirdSection() {
  const AboutArray = [
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

  return (
    <section className="flex flex-col w-full bg-custom-light-grayish-blue2">
      <div className="flex flex-col items-center h-[10em]">
        <article className="flex flex-col justify-center text-slate-700 text-5xl text-center uppercase w-4/5 basis-2/3">
          <h1> FIND YOUR PERFECT MATCH WITH <strong className={`${limelight.className}`}>COVO</strong> </h1>
        </article>
        <article className="flex flex-col justify-center text-center uppercase w-4/5 basis-1/3">
          <p>Connect with top brands and unlock exciting opportunities.</p>
        </article>
      </div>

      <div className="flex flex-row justify-center px-[2em]">
        {AboutArray.map((about) => {
          return (
            <AboutBox
              key={about.id}
              title={about.title}
              text={about.text}
              className={`basis-1/4 border-2
                          h-[16em] flex
                          flex-col justify-center
rounded-md mx-[0.2em]
bg-[url("/svg/BG.svg")]
                          ${roboto.className} px-[1.5em] py-[1em]`
                        }
              // className={classNameAbout}
            />
          );
        })}
      </div>
    </section>
  );
}
