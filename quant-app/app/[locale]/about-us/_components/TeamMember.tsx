import Image from "next/image"

const TeamMember = () => {
  return (
    <div className="flex flex-col gap-[30px] px-[40px] py-[35px] rounded-[45px] bg-[#F8F8F8] border-[1px] border-solid border-[#191A23] [box-shadow:0px_4px_15px_0px_#4A5DE580] [box-shadow:0px_4px_4px_0px_#00000040_inset]">
        <div className="w-full flex justify-between items-center">
            <Image src="/images/pictures/roman.png" width={50} height={50} alt="roman" className="w-[100px]"/>
            <div className=" h-full flex flex-col justify-end">
                <h2 className="font-medium text-[20px] leading-[24.2px] tracking-[0%] text-[#000000]">Roman Gutu</h2>
                <p className="font-normal text-[18px] leading-[21.78px] tracking-[0%] text-[#000000]">CEO and Founder</p>
            </div>
            <div className="h-full flex justify-start items-start">
                <Image src="/images/icons/linkedin.svg" width={40} height={30} alt="linkedin"/>
            </div>
        </div>
        <hr className="border-[1px] border-solid border-[#000000]"/>
        <div className="font-normal text-[18px] leading-[21.78px] tracking-[0%] text-[#000000]">
            <p>CEO with 7+ years in CRM, app, and website development, creating innovative and scalable solutions.</p>
        </div>
    </div>
  )
}

export default TeamMember