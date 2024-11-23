import Image from "next/image";
import Contact from "./Contact.component";
import Legal from "./Legal.component";
import Join from "./Join.component";
import COVO_WHITE_NO_BG_2 from "@/assets/images/COVO_WHITE_NO_BG_2.png"



export default function Footer() {
  return (
    <footer className={`py-[2em] bg-custom-lark-blue h-auto w-full text-gray-300 flex justify-center items-center lg:block`}>

      <div className="max-w-[450px] w-full lg:max-w-[100vw]  flex lg:flex-row flex-col-reverse justify-center lg:justify-around ">
        
        <section className=" h-[100px] w-full lg:h-[400px] lg:w-[400px] flex justify-center items-center ">
          <Image className="opacity-50" src={COVO_WHITE_NO_BG_2} alt="COVO_WHITE_NO_BG" />
        </section>

        <section className=" lg:basis-1/3 flex flex-col justify-center  px-[1em]  ">
          <Legal />
          <Contact />
        </section>
        <br />
        <section className=" basis-1/3 flex flex-col justify-center  px-[1em] ">
          <Join />
        </section>
      </div>

    </footer>
  );
}
