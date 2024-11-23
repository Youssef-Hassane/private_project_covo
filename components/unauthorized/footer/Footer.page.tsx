import Image from "next/image";
import Contact from "./Contact.component";
import Legal from "./Legal.component";
import Join from "./Join.component";

// "bg-[url("/svg/BG.svg")]"

export default function Footer() {
  return (
    <footer className={`mb-[82px] md:m-auto lg:m-auto py-[3em] bg-custom-lark-blue h-auto w-full flex flex-col-reverse md:flex-row text-gray-300`}>
      {/* <div className={`bg-no-repeat bg-left bg-[url("/images/COVO_WHITE_NO_BG.png")] filter opacity-50 h-[40em] w-full basis-1/3 `}> */}
      <div className={` bg-no-repeat md:bg-left lg:bg-left bg-[url("/images/COVO_WHITE_NO_BG.png")] filter opacity-50 h-auto w-full basis-1/3 `}></div>

      <section className=" basis-1/3 flex flex-col justify-center pt-[2em] px-[1em] ">
        <Legal className={``} />
        <Contact />
      </section>

      <section className=" basis-1/3 flex flex-col justify-center pt-[2em] px-[1em] ">
        <Join />
      </section>

    </footer>
  );
}
