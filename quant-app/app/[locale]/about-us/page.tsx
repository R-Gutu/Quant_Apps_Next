import Banner from "@/components/banner";
import Image from "next/image";
import TeamMember from "./_components/TeamMember";
import ElevatingBusiness from "../_components/ElevatingBusiness";
import TeamMemberType from "@/lib/types/MemberType";
import TimelineBlock from "./_components/TimelineBlock";
import TimelineType from "@/lib/types/TimelineType";

const Page = async () => {

  const teamMembers : TeamMemberType[] = [
    {
      name: "Roman Gutu",
      position: "CEO and Founder",
      link: "",
      src: "/images/pictures/roman.png",
      alt: "roman",
      text: "CEO with 7+ years in CRM, app, and website development, creating innovative and scalable solutions."
    },
    {
      name: "Veaceslav Soltan",
      position: "CO-Founder",
      link: "",
      src: "/images/pictures/slavic.png",
      alt: "vyacheslav",
      text: "Experienced graphic designer with over 7 years in UI/UX and motion design, creating impactful and user-friendly digital experiences."
    },
    {
      name: "Vitalie Cernovschi",
      position: "Senior Full-Stack Developer",
      link: "",
      src: "/images/pictures/vitalie.png",
      alt: "vitalie",
      text: "Expert in front-end and back-end technologies, specializing in scalable web solutions and performance optimization."
    },
    {
      name: "Maxim Roenco",
      position: "Middle Front-End Developer",
      link: "https://www.linkedin.com/in/roencomax/",
      src: "/images/pictures/maxim.png",
      alt: "maxim",
      text: "Experienced in HTML, CSS, JavaScript, and responsive design. Focused on user-friendly interfaces and web performance."
    },
    {
      name: "Islam Abu Koush",
      position: "Middle Front-End Developer",
      link: "https://www.linkedin.com/in/islam-abu-koush-a191a2299/",
      src: "/images/pictures/islam.png",
      alt: "islam",
      text: "Skilled in React, JavaScript, and UI frameworks. Passionate about interactive design and performance optimization."
    },
    {
      name: "Denis Soltan",
      position: "Junior Front-End Developer",
      link: "https://www.linkedin.com/in/denis-soltan-52a1a2305/",
      src: "/images/pictures/denis.png",
      alt: "denis",
      text: "A passionate developer with hands-on experience in React and JavaScript. Dedicated to building efficient, responsive, and interactive web interfaces."
    },
  ]


  const timeline : TimelineType[] = [
    {
      id: "01",
      title: "A GOOD IDEA",
      text: "From Fiverr freelancer to design expert, mastering vector tracing and beyond"
    },
    {
      id: "02",
      title: "START MOVING",
      text: "Added UI/UX and logo design, growing a versatile design portfolio"
    },
    {
      id: "03",
      title: "INCREASE",
      text: "Ventured into app development with a grocery app, embracing digital innovation"
    },
    {
      id: "04",
      title: "TAKE TIME",
      text: "Mastered app development with innovative projects"
    },
    {
      id: "05",
      title: "INNOVATION",
      text: "Built projects with advanced tech, shaping Quant-Apps future"
    },
    {
      id: "06",
      title: "QUANT-APPS LAUNCH",
      text: "Founded Quant-Apps, specializing in innovative IT solutions"
    },
  ]

  return (
    <div className="flex flex-col font-inter px-[100px] max-mui-md:px-[40px] ">
        <Banner
            className="mt-[20px] min-[600px]:mt-[50px]"
            src="/images/banners/our-services-banner.png"
            header="About us"
            subHeader="Where innovation meets your vision—crafting digital experiences that inspire"
        />
        <div className="w-full flex gap-[150px] max-medium:gap-[40px] px-[100px] max-mui-md:px-[40] py-[60px] max-medium:flex-col">
          <div className="flex flex-col gap-[20px] justify-center ">
            <h1 className="font-semibold text-[44px] max-mui-md:text-[34px] max-smallest:text-[24px] max-smallest:text-center text-[#FFFFFF]">About Quant-Apps</h1>
            <div className="font-normal text-[20px] max-mui-md:text-[18px] max-smallest:text-[14px] text-[#E6E6E6] opacity-75">
              <p className="indent-6">At Quant-Apps, we transform bold ideas into high-performance apps and websites. Despite being a young company, our team combines years of experience with cutting-edge technology to deliver custom digital solutions that exceed expectations.</p>
              <p className="indent-6">We specialize in mobile app development, web design, and digital transformation, crafting visually stunning, high-functioning platforms that engage users and drive business growth. Our creative thinkers and technical experts work closely with clients, ensuring a collaborative, tailored approach for each project.</p>
              <p className="indent-6">What sets us apart?</p>
              <p className="indent-6">Seamless communication, deep client engagement, and a commitment to long-term success. We don’t just build apps—we create lasting digital experiences that help businesses thrive.</p>
              <p className="indent-6">Let’s bring your vision to life with custom software solutions that elevate your brand and set you apart in the digital world.</p>
            </div>
          </div>
            <Image width={490} height={490} className="w-full h-auto rounded-[16px] border-[3px] border-solid border-[#6A65FF80]" alt="about1" src="/images/pictures/about1.png"/>
        </div>
        <div className="flex flex-col gap-[50px]">
          <h2 className="font-semibold text-[64px] max-mui-md:text-[50px] max-smallest:text-[40px] text-[#FFFFFF]">Timeline</h2>
          <div className="w-full max-mui-md:hidden">
            <Image src="/images/pictures/enTimeline.png" alt="timeline" width={500} height={500} className="w-full object-fill aspect-auto"/>
          </div>
          <div className="mui-md:hidden">
            {timeline.map((item, index) => (
              <TimelineBlock key={index} {...item}/>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[50px] px-[40px] py-[50px] max-smallest:px-[0px] max-smallest:py-[30px]">
          <h2 className="text-center font-semibold text-[64px] max-mui-md:text-[50px] max-smallest:text-[36px] text-[#FFFFFF]">Team</h2>
          <div className="w-full grid grid-cols-3 grid-rows-2 gap-[50px] max-medium:grid-cols-2 max-medium:grid-rows-3 max-small:grid-cols-1 max-small:place-items-center">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
          </div>
        </div>
        <ElevatingBusiness />
    </div>
  );
};

export default Page;
