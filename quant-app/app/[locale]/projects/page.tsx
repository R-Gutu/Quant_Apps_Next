import Banner from "@/components/banner"
import Block from "./_components/Block"
import projects from "@/lib/utils/projectsData"

const page = () => {
  return (
    <div className="px-[100px] font-inter">
        <Banner
            src="/images/what-we-offer-banner.png"
            header="What We Offer?"
            subHeader="Custom mobile apps, CRM solutions, server infrastructure, and websites designed to enhance your brand’s impact."
        />
        <div className="p-10 flex flex-col gap-[16px]">
            <h1 className="font-semibold text-[48px] leading-[58.09px] tracking-[0%] text-[#FFFFFF]">At Quant-Apps</h1>
            <p className="font-normal text-[18px] leading-[27px] tracking-[-0.6%] text-[#E6E6E6] opacity-75">We take pride in collaborating with a diverse range of clients, crafting innovative digital solutions that drive business growth and success.</p>
        </div>
        <div className="grid grid-cols-2">
            {projects.map((item, index) => (
                <Block key={index} {...item}/>
            ))}
        </div>
        <Banner
            src="/images/what-we-offer-banner.png"
            header="What We Offer?"
            subHeader="Custom mobile apps, CRM solutions, server infrastructure, and websites designed to enhance your brand’s impact."
        />
    </div>
  )
}

export default page