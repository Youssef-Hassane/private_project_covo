import Campaigns from "@/components/authorized/home/Campaigns.component";
import Messages from "@/components/authorized/home/Messages.component";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Page() {
  return (
    <div className={`w-full flex flex-row justify-center ${inter.className} `}>
      <div className="flex " ></div>
      <div className="px-[1.5em] h-[auto] max-w-[1200px] min-h-screen grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-2 gap-3 content-center w-full">
        <Campaigns />
        <Messages />
        <Campaigns />
        <Campaigns />
      </div>
    </div>
  );
}
