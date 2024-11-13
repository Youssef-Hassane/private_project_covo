import Image from "next/image";


export default function FirstSection() {
  return (
    <div className='bg-[url("/svg/BG.svg")] bg-no-repeat bg-cover w-full h-[700px] flex '>
        <div className="w-1/2 h-full bg-blue-200"></div>
        <div className="w-1/2 h-full bg-red-200">
          <Image src="/images/Rectangle.png" width={500} height={500} alt="Rectangle" />
        
        </div>
    </div>
  )
}
