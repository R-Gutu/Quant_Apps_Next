import Banner from "@/components/banner"
import Header from "../services/_components/header"
import CarrersBlock from "./_components/CareersBlock"
import HeadText from "../_components/HeadText"
import OpeningsBlock from "./_components/OpeningsBlock"
import ElevatingBusiness from "../_components/ElevatingBusiness"
import OpeningsType from "@/lib/types/OpeningsType"
import CareersType from "@/lib/types/CareersType"
import Blur from "@/components/Blur"

const page = () => {

    const careers : CareersType[] = [
        {
            title: "Work on Cutting-Edge Software Projects: Mobile Apps, CRM, AI & Web Development",
            text: "Be part of a team that creates scalable digital solutions, including custom enterprise software, mobile apps, AI-powered automation, and high-performance web platforms.",
            className: "mui-md:border-r-[1px] mui-md:border-[#6A65FF80]"
        },
        {
            title: "Collaborative Tech Environment – AI, Cloud, and Software Development Experts",
            text: "Join a culture of innovation, where AI engineers, cloud developers, and software experts collaborate to build the future of digital transformation and enterprise solutions.",
            className: ""
        },
        {
            title: "Continuous Learning: Stay Ahead in Web, Mobile, AI, and Cloud Technologies",
            text: "Advance your career with access to training programs, mentorship, and industry-leading tech conferences in web development, cloud computing, cybersecurity, AI, and automation.",
            className: "mui-md:border-r-[1px] mui-md:border-[#6A65FF80]"
        },
        {
            title: "Challenging Software Development Projects – AI, Cloud, CRM",
            text: "Solve complex challenges in enterprise software, AI-powered solutions, high-performance cloud infrastructure, mobile app development, and automation that drive business success.",
            className: ""
        },
    ]

    const openings : OpeningsType[] = [
        {
            title: "Design Job Openings",
            name: "UI/UX Designer",
            text: "Join our team as a UI/UX Designer and bring creativity to life by designing visually compelling and user-friendly digital interfaces. Collaborate with cross-functional teams to enhance user experience (UX), layout design, typography, and color theory. Play a key role in shaping intuitive digital products that leave a lasting impression.",
            src: "/images/icons/career1.svg",
            alt: "career"
        },
        {
            title: "Development Job Openings",
            name: "Front - End Developer",
            text: "We’re looking for a Front-End Developer to transform UI/UX wireframes into responsive and interactive web interfaces. Work with HTML, CSS, and JavaScript to develop high-performance, visually appealing websites. Collaborate with designers and backend developers to ensure seamless functionality, scalability, and optimal user experience.",
            src: "/images/icons/career2.svg",
            alt: "career"
        },
        {
            title: "Management Job Openings",
            name: "Project Manager",
            text: "We are seeking a Project Manager to oversee the planning, execution, and delivery of software development, web, and mobile app projects. Coordinate cross-functional teams, manage timelines, and ensure seamless collaboration between developers, designers, and stakeholders. Drive project success by optimizing workflows, mitigating risks, and ensuring timely delivery while aligning with business goals.",
            src: "/images/icons/career3.svg",
            alt: "career"
        },
    ]
  return (
    <div className="px-[100px] font-inter max-mui-md:px-[60px] max-smallest:px-[20px]">
        <Banner
            src="/images/banners/faqs_banner.png"
            header="Our Working Process "
            subHeader="A Comprehensive Guide to Reaching Your Business Objectives"
        />
        <div className="flex flex-col gap-10 mt-[90px]">
            <div className="flex flex-col gap-4 pl-10">
                <h1 className="font-semibold text-[48px] max-smallest:text-[26px] max-[400px]:text-[24px] max-mui-md:text-[32px] text-[#FFFFFF] max-smallest:leading-10">Welcome to Quant-Apps, where innovation drives success!</h1>
                <p className="font-normal text-[18px] max-smallest:text-[14px] text-[#E6E6E6] max-mui-md:text-[16px] opacity-75">At Quant-Apps, we believe that success is built on expertise, collaboration, and a passion for cutting-edge technology. As a leading software development company, we focus on mobile and web applications, CRM systems, cloud infrastructure, and AI-powered automation. If you're looking to work on impactful projects that shape the future of digital transformation, we invite you to explore career opportunities with us.</p>
                <div className="mt-5 bg-[#4A6ED1] w-fit rounded-[8px] p-[12px_14px] gap-[10px] font-normal text-[18px] max-smallest:text-[14px] max-mui-md:text-[16px] text-[#FFFFFF]">Why Work at Quant-Apps?</div>
            </div>
        </div>
        <div className="w-full grid grid-cols-2 grid-rows-2 mt-[50px] max-mui-md:grid-cols-1">
            {careers.map((item, index) => (
                <CarrersBlock key={index} {...item} />
            ))}
        </div>
        <HeadText
            title="Current Openings"
            text="We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences." 
        />
        <div className="flex flex-col">
            {openings.map((item, index) => (
                <OpeningsBlock key={index} {...item} />
            ))}
        </div>
        <ElevatingBusiness />
        <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
          <Blur
            color='#836FFF99'
            right="-250px"
            top="350px"
            filter="blur(250px)"
            className=" w-[500px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
          />
          <Blur
            color='#836FFF99'
            left="-250px"
            top="1000px"
            filter="blur(250px)"
            className=" w-[400px] h-[400px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
          />
          <Blur
            color='#836FFF99'
            right="-250px"
            top="1500px"
            filter="blur(250px)"
            className=" w-[400px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
          />
          <Blur
            color='#836FFF99'
            left="-250px"
            top="2000px"
            filter="blur(250px)"
            className=" w-[600px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
          />
          <Blur
            color='#9C08FFCC'
            right="-250px"
            top="2500px"
            filter="blur(200px)"
            className=" w-[400px] h-[400px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
          />
          <Blur
            color='#9C08FFCC'
            left="-250px"
            top="3100px"
            filter="blur(200px)"
            className=" w-[400px] h-[400px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
          />
        </div>
    </div>
  )
}

export default page