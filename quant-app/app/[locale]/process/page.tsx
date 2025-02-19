import Banner from "@/components/banner"
import Accordion from "./_components/accordion"
import HeadText from "../_components/HeadText"


const page = () => {
    const process = [
        {
            id: "01",
            title: "Consultation",
            text: "We begin by deeply understanding your goals and needs. We listen to your ideas, analyze your business processes, and propose a strategy that will deliver maximum results."
        },
        {
            id: "02",
            title: "Research and Strategy Development",
            text: "We conduct thorough research, study the market and competitors to develop an effective strategy tailored to your unique requirements and objectives."
        },
        {
            id: "03",
            title: "Planning and Strategic Management",
            text: "We plan every step towards success. We create detailed roadmaps and clearly define key milestones to ensure each phase of the project is completed on time and within budget."
        },
        {
            id: "04",
            title: "Branding and Identity Design",
            text: "We create a unique visual identity that reflects the essence of your brand. We design logos, color palettes, and other branding elements to make your brand easily recognizable and memorable."
        },
        {
            id: "05",
            title: "Wireframes and UI/UX Design",
            text: "We design intuitive and attractive interfaces that provide the best user experience. We create wireframes and prototypes that lay the foundation for your future app or website."
        },
        {
            id: "06",
            title: "Development and Integration",
            text: "We develop functional, high-performance solutions that seamlessly integrate with your systems, ensuring smooth operation of apps and services."
        },
        {
            id: "07",
            title: "Testing and Quality Assurance",
            text: "Every app and solution undergoes strict testing stages. We check all functional and technical aspects to ensure flawless performance across all devices and platforms."
        },
        {
            id: "08",
            title: "Launch and Deployment",
            text: "We carefully prepare your app for launch to ensure smooth operation. After testing, we deploy the app on the selected platforms and ensure a seamless start."
        },
        {
            id: "09",
            title: "Maintenance and Optimization",
            text: "After the launch, we continue to support and optimize the app, improving its performance, fixing bugs, and adding new features to meet user needs."
        }
    ]
  return (
    <div className="px-[100px] max-mui-md:px-[40px] font-inter">
        <Banner
            src="/images/banners/faqs_banner.png"
            header="Our Working Process "
            subHeader="A Comprehensive Guide to Reaching Your Business Objectives"
        />
        <HeadText/>
        <div className="flex flex-col gap-[30px] pb-[100px]">
            {process.map((item, index) => (
                <Accordion key={index} {...item}/>
            ))}
        </div>
        <Banner
            src="/images/banners/what-clients-say-banner.png"
            header="Excited to work together on your next project?"
            subHeader="Let’s bring your ideas to life with custom development and design solutions tailored to your needs."
            button="Start Project"
            icon="/images/icons/start_project_logo.svg"
        />
    </div>
  )
}

export default page