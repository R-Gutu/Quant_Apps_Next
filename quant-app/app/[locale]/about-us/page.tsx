import Banner from "@/components/banner";
import Image from "next/image";
import TeamMember from "./_components/TeamMember";

const Page = async () => {
  return (
    <div className="flex flex-col font-inter px-[160px]">
        <Banner
            src="/images/what-we-offer-banner.png"
            header="What We Offer?"
            subHeader="Custom mobile apps, CRM solutions, server infrastructure, and websites designed to enhance your brand’s impact."
        />
        <div className="flex gap-[150px] px-[140px] py-[60px]">
          <div className="flex flex-col gap-[20px] justify-center">
            <h1 className="font-semibold text-[44px] text-[#FFFFFF]">About Quant-Apps</h1>
            <div className="font-normal text-[20px] text-[#E6E6E6] opacity-75">
              <p className="indent-6">At Quant-Apps, we transform bold ideas into high-performance apps and websites. Despite being a young company, our team combines years of experience with cutting-edge technology to deliver custom digital solutions that exceed expectations.</p>

              <p className="indent-6">We specialize in mobile app development, web design, and digital transformation, crafting visually stunning, high-functioning platforms that engage users and drive business growth. Our creative thinkers and technical experts work closely with clients, ensuring a collaborative, tailored approach for each project.</p>

              <p className="indent-6">What sets us apart?</p>

              <p className="indent-6">Seamless communication, deep client engagement, and a commitment to long-term success. We don’t just build apps—we create lasting digital experiences that help businesses thrive.</p>

              <p className="indent-6">Let’s bring your vision to life with custom software solutions that elevate your brand and set you apart in the digital world.</p>
            </div>
          </div>
            <Image width={490} height={490} className="rounded-[16px] border-[3px] border-solid border-[#6A65FF80]" alt="about1" src="/images/pictures/about1.png"/>
        </div>
        <div className="flex flex-col gap-[50px]">
          <h2 className="font-semibold text-[64px] leading-[83.2px] tracking-[0%] text-[#FFFFFF]">Timeline</h2>
          <Image src="/images/pictures/enTimeline.png" alt="timeline" width={500} height={500} className="w-full"/>
        </div>
        <div className="flex flex-col gap-[50px] px-[140px] py-[50px]">
          <h2 className="font-semibold text-[64px] leading-[83.2px] tracking-[0%] text-[#FFFFFF]">Team</h2>
          <div className="grid grid-cols-3 grid-rows-2 gap-[50px]">
            <TeamMember/>
            <TeamMember/>
            <TeamMember/>
            <TeamMember/>
            <TeamMember/>
            <TeamMember/>
          </div>
        </div>
        <div className="flex flex-col gap-[50px] border-[1px] border-solid border-[#6A65FF80] rounded-[35px] p-[60px]">
          <div className="flex gap-[40px] items-center">
            <Image src="/images/icons/logo1.svg" width={150} height={150} alt="logo"/>
            <div className="flex flex-col gap-[20px]">
              <h2 className="font-medium text-[30px] leading-[36.31px] tracking-[0%] text-[#98989A]">Quant-Apps: Elevating Businesses with Cutting-Edge Digital Solutions</h2>
              <p className="font-normal text-[18px] leading-[27px] tracking-[0%] text-[#98989A]">We specialize in custom software development, mobile apps, and web design, transforming ideas into high-performance digital products. Our expertise in UX/UI, agile development, and CRM solutions ensures seamless, scalable, and results-driven experiences.</p>
            </div>
          </div>
          <div className="flex justify-between items-center px-[24px] py-[40px] rounded-[12px] border-[1px] border-solid border-[#6A65FF80] backdrop-filter backdrop-blur-md bg-[#00000033]">
            <div className="flex items-center gap-[20px]">
              <h2 className="font-normal text-[20px] leading-[24.2px] tracking-[0%] text-[#98989A]">Welcome to Quant-Apps</h2>
              <div className=" pt-[14px] pr-[20px] pb-[14px] pl-[20px] rounded-[8px] bg-[#4267B2]">
                <p className="font-normal text-[20px] leading-[30px] tracking-[0%] text-[#FFFFFF]">Where innovation, technology, and strategy align to drive business success.</p>
              </div>
            </div>
            <div className=" pt-[18px] pr-[34px] pb-[18px] pl-[34px] rounded-[8px] bg-[#4A6ED1]">
              <p className="font-medium text-[18px] leading-[27px] tracking-[0%] text-[#FFFFFF]">Start Project</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Page;
