import Image from "next/image";

export default function SecondSection() {
  const imageURLs = [
    "@/public/images/pngwing_pepsi.png",
    "@/public/images/pngwingAdidas.png",
    "@/public/images/pngwingBarbie.png",
    "@/public/images/pngwingBurberry.png",
    "@/public/images/pngwingCalvinKlein.png",
    "@/public/images/pngwingPuma.png",
    "@/public/images/pngwingZara.png",
  ];

  return (
    <div>
      <div>
        {imageURLs.map((url) => {
          return (
            <>
              <Image src={url} alt={`someImage`} width={150} height={100} />
            </>
          );
        })}
      </div>
    </div>
  );
}