import Image from "next/image";

export default function SecondSection() {
  const imageURLs = [
    { url: "/images/pngwing_pepsi.png", id: 1 },
    { url: "/images/pngwingAdidas.png", id: 2 },
    { url: "/images/pngwingBarbie.png", id: 3 },
    { url: "/images/pngwingBurberry.png", id: 4 },
    { url: "/images/pngwingCalvinKlein.png", id: 5 },
    { url: "/images/pngwingPuma.png", id: 6 },
    { url: "/images/pngwingZara.png", id: 7 },
  ];

  return (
    <div className="flex-row border-2 border-red-900 ">
      <div className="margin-auto w-full items-center justify-around flex flex-row border-2 h-[155px] px-6">
        {imageURLs.map((imageObject) => {
          return (
            <Image
              key={imageObject.id}
              src={imageObject.url}
              alt={`someImage`}
              width={150}
              height={150}
              className="w-[100px] h-auto filter grayscale py-3"
            />
          );
        })}
      </div>
    </div>
  );
}
