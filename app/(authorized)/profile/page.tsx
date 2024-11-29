// src/app/authorized/profile/page.tsx

import Image from "next/image";
import AshrafAtef from "@/assets/images/Ashraf-Atef.jpeg";
import cover01 from "@/assets/images/cover-01.png";
import { Separator } from "@/components/ui/separator";
import facebook from "@/assets/images/Social_Media_Icons/facebook.png";
import instagram from "@/assets/images/Social_Media_Icons/instagram.png";
import tiktok from "@/assets/images/Social_Media_Icons/tiktok.png";
import youtube from "@/assets/images/Social_Media_Icons/youtube.png";
import { AreaChartComponent } from "./AreaChart";

export default function ProfilePage() {

  const data = {
    Platforms: [
      {
        id: 1,
        imageURL: facebook,
        followers: "100,000",
        engagementRate: 5.50,
      },
      {
        id: 2,
        imageURL: instagram,
        followers: "70,000",
        engagementRate: 1.50,
      },
      {
        id: 3,
        imageURL: tiktok,
        followers: "50,000",
        engagementRate: 2.50,
      },
      {
        id: 4,
        imageURL: youtube,
        followers: "20,000",
        engagementRate: 3.80,
      },
    ],
    Campaigns: [
      {
        id: 1,
        name: "Summer Fashion Campaign",
        brand: "VitalStep",
        status: "Completed",
        dates: "September 1, 2024 - October 21, 2024",
      },
      {
        id: 2,
        name: "Gadget Review Campaign",
        brand: "TechNova",
        status: "Ongoing",
        dates: "October 1, 2024 - October 30, 2024",
      },
      {
        id: 3,
        name: "Natural Skincare Awareness",
        brand: "Purezza Beauty",
        status: "Upcoming",
        dates: "November 4, 2024 - November 30, 2024",
      },
    ]

  }

  return (
    <div className="w-full h-full bg-sidebar">
      <div className="flex flex-wrap justify-center items-center border-b-[1px] border-sidebar-border pb-2">
        <div className="w-full h-[250px] flex justify-center items-center relative">
          <div className="h-[90%] w-[95%] p-5  absolute">
            <Image
              src={cover01}
              alt="Cover Picture"
              layout="fill"
              objectFit="cover"
              className=" w-full h-full rounded-lg"
            />
            <p className="text-lg w-[160px] text-center border-2 rounded-md text-white p-2 font-weight-[800] z-50 border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.3)] backdrop-blur-sm">Covo Score: 8.20</p>

          </div>
          <Image
            src={AshrafAtef}
            alt="Profile Picture"
            height={200}
            className="rounded-full z-10 mt-[200px] border-8 border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.3)] backdrop-blur-sm"
          />
        </div>

        <div className="w-full h-auto flex flex-col justify-center items-center text-center max-w-[800px] px-4 mt-[90px] gap-4">
          <h2 className="text-3xl font-bold">Ashraf Atef</h2>
          <p className="text-2xltext-gray-600">Lifestyle and fashion influencer.</p>
          <div className="bg-sidebar-border flex p-5 gap-8 rounded-md">
            <p>259 Posts </p>
            <Separator orientation="vertical" className=" h-6" />
            <p>129K Followers</p>
            <Separator orientation="vertical" className=" h-6" />
            <p>2K Following</p>
          </div>
          <p className="text-gray-600 font-bold">About Me</p>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies. Sed vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed, aliquam lacus.</p>

        </div>

      </div>


      <div className="p-5 border-b-[1px] border-sidebar-border">
        <p className="text-3xl font-bold">Platforms</p>
        <div className="flex flex-wrap justify-center items-center">

          {data.Platforms.map((platform) => (
            <div key={platform.id} className="bg-sidebar-border max-w-[480px] flex justify-center items-center p-5 gap-8 rounded-md m-2">
              <Image src={platform.imageURL} alt="Social Media" width={40} height={40} className="flex justify-center items-center" />
              <Separator orientation="vertical" className=" h-6 bg-black/50" />
              <p>{platform.followers} followers</p>
              <Separator orientation="vertical" className=" h-6 bg-black/50" />
              <p>{platform.engagementRate}% engagement rate</p>
            </div>
          ))}
        </div>
      </div>


      <div className="p-5 border-b-[1px] border-sidebar-border">
        <p className="text-3xl font-bold">Campaigns</p>
        <div className="flex flex-wrap justify-center items-center">
          {data.Campaigns.map((Campaigns) => (
            <div key={Campaigns.id} className="bg-sidebar-border w-auto flex flex-wrap justify-center items-center p-5 gap-8 rounded-md m-2">
              <div className="md:w-[340px]">
                <p className="text-3xl font-bold"> {Campaigns.name}</p>
                <br />
                <p className="text-xl"><span className="font-bold">Brand: </span>{Campaigns.brand}</p>
                <p className="text-xl"><span className="font-bold">Status:</span> {Campaigns.status}</p>
                <p className="text-xl"><span className="font-bold">Dates:</span> {Campaigns.dates}</p>
              </div>
              <div>
              <AreaChartComponent />
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

