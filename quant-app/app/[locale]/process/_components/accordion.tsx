import Image from "next/image"

const Accordion = () => {
  return (
    <div className=" pt-[41px] pr-[60px] pb-[41px] pl-[60px] flex flex-col gap-[30px] rounded-[12px] bg-[linear-gradient(87.57deg,_#5D5FEF_1.02%,_#0A1A3F_143.1%)] [box-shadow:0px_5px_15px_0px_#9B6BFFB2] [box-shadow:0px_4px_8px_0px_#00000040_inset]">
        <div className="flex justify-between">
            <div className="flex gap-[25px] items-center">
                <div className="font-semibold text-[60px] leading-[72.61px] tracking-[0%] text-[#B8B6FF]">01</div>
                <h2 className="font-semibold text-[30px] leading-[36.31px] tracking-[0%] text-[#E5E9F0]">Consultation</h2>
            </div>
            <div className="flex items-center">
                <Image width={30} height={30} alt="cross" src="/images/icons/faqCross.svg"/>
            </div>
        </div>
        <hr className="border-[1px] border-[#F5F5F5]"/>
        <p className="w-full font-normal text-[22px] leading-[26.63px] tracking-[0%] text-[#E5E9F0]">We begin by deeply understanding your goals and needs. We listen to your ideas, analyze your business processes, and propose a strategy that will deliver maximum results.</p>
    </div>
  )
}

export default Accordion