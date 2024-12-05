import Campaigns from "@/components/authorized/home/Campaigns.component";
import Messages from "@/components/authorized/home/Messages.component";
import HeaderStats from "@/components/authorized/home/HeaderStats.component";
import Barchart from "@/components/authorized/home/Charts.component";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Page() {
  return (
    <div className={`w-full flex flex-col justify-center ${inter.className} `}>
      <div className="flex justify-center border-2" >
        <HeaderStats />
      </div>

      <div className="px-[2em] lg:px-[4em] xl:px-[12em] border-2 " >
        <Barchart />
      </div>

      <div className="px-[2em] lg:px-[4em] xl:px-[12em] min-h-screen grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-2 md:gap-3 lg:gap-6 content-center w-full border-2 border-red-200 justify-center ">
        <Campaigns />
        <Campaigns />
        <Campaigns />
      </div>

    </div>
  );
}
