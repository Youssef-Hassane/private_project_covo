import Image from "next/image";


export default function FourthSection() {
  const cardInformation = [
    { url: "/images/pngwing_pepsi.png", text: "Discover Influencers", supText: "Our platform offers a user-friendly interface for easily searching and filtering influencers based on various criteria, including niche, audience demographics, engagement rates and location.", id: 1 },
    { url: "/images/pngwing_pepsi.png", text: "Build Your Campaign", supText: "Our platform provides a streamlined process for creating and customizing campaigns, allowing brands to define their objectives, target audience, budget, and desired deliverables.", id: 2 },
    { url: "/images/pngwing_pepsi.png", text: "Cloud-Enabled", supText: "Our cloud-based platform ensures scalability, accommodating both small and large-scale campaigns without compromising performance.", id: 3 },
    { url: "/images/pngwing_pepsi.png", text: "Manage Ongoing Campaigns", supText: "Our cloud-based platform ensures scalability, accommodating both small and large-scale campaigns without compromising performance.", id: 3 },
    { url: "/images/pngwing_pepsi.png", text: "Cloud-Enabled", supText: "Our cloud-based platform ensures scalability, accommodating both small and large-scale campaigns without compromising performance.", id: 3 },
    { url: "/images/pngwing_pepsi.png", text: "Cloud-Enabled", supText: "Our cloud-based platform ensures scalability, accommodating both small and large-scale campaigns without compromising performance.", id: 3 },


  ];


  return (
    <div className="bg-custom-light-grayish-blue2">
      <div className="grid gap-2">
        <h1 className="text-5xl font-[700] text-custom-dark-desaturated-blue text-center">Benefits</h1>
        <p className="text-3xl font-[600] text-custom-lark-blue text-center">One Platform — Cost-Effective Influencer Marketing</p>
        <p className="text-1xl font-[600] text-custom-dark-desaturated-blue text-center">Simplify your influencer marketing with our all-in-one platform, offering cost-effective solutions while streamlining your influencer marketing efforts and maximize ROI with our affordable platform.</p>
      </div>
      <br />
      <div className="flex gap-2 justify-center items-center">
        {cardInformation.map((cardObject) => (
          <div key={cardObject.id} className="bg-white w-[400px] h-[400px] rounded-lg border-custom-light-grayish-blue border-2 flex flex-col justify-center items-center p-4">
            <Image
              src={cardObject.url}
              alt={`Brand logo ${cardObject.id}`}
              width={150}
              height={150}
              className="w-[100px] h-auto filter grayscale transition-opacity hover:grayscale-0"
            />
            <br />
            <p className="text-2xl font-[600] text-custom-dark-desaturated-blue text-center">{cardObject.text}</p>
            <p className=" font-[300] text-custom-dark-desaturated-blue text-center">{cardObject.supText}</p>
          </div>
        ))}
      </div>
    </div>
  )
}