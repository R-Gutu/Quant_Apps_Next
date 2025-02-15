import Banner from "@/components/banner"
import Block from "./_components/Block"
// import projects from "@/lib/utils/projectsData"
import Projects from "@/lib/types/Projects"

const page = () => {
    const projects : Projects[] = [
        {
            title: "Restaurant Website",
            src: "/images/pictures/projects1.png",
            alt: "project1",
            linkname: "Roka Akor",
            link: "https://rokaakor.com/",
            text: "We developed a modern, user-friendly restaurant website for Roka Akor, ensuring seamless online reservations, an intuitive interface, and an elegant design that enhances customer engagement. The platform integrates high-quality visuals, responsive layouts, and a smooth dining experience for visitors.",
            className: "small:border-r-[1px] small:border-[#6A65FF80]"
        },
        {
            title: "Logistics Company",
            src: "/images/pictures/projects2.png",
            alt: "project2",
            linkname: "Acm Movers",
            link: "https://acmmovers.com/",
            text: "We designed and developed a feature-rich logistics website for ACM Movers, optimizing their online booking system. The platform includes real-time quote requests, order tracking, and a seamless customer experience. Our solution enhances operational efficiency while improving user accessibility on all devices.",
            className: ""
        },
        {
            title: "Lens AI",
            src: "/images/pictures/projects3.png",
            alt: "project3",
            linkname: "Lens AI",
            link: "https://apps.apple.com/md/app/lens-ai",
            text: "Lens AI is your smart app for finding anything. With this app, you can take a photo or pick one from your gallery and find it online. Lens AI uses Artificial Intelligence (AI) to search the internet for you. You can learn about what you see in a picture, find where to buy things, and much more.",
            className: "small:border-r-[1px] small:border-[#6A65FF80]"
        },
        {
            title: "Taste Ai",
            src: "/images/pictures/projects4.png",
            alt: "project4",
            linkname: "Taste Ai",
            link: "https://apps.apple.com/md/app/taste-ai/id6566183422",
            text: "Meet your new kitchen helper, Taste Ai ! This app uses artificial intelligence (AI) to deliver recipes customized to your unique preferences and needs.",
            className: ""
        },
        {
            title: "Web-site for Dentist",
            src: "/images/pictures/projects5.png",
            alt: "project5",
            linkname: "NY Dental Group",
            link: "https://nydentalgroup.com/",
            text: "We developed a modern and user-friendly website for NY Dental Group, a leading provider of dental care services. The platform features seamless appointment booking, secure patient data integration, and personalized treatment recommendations, enhancing patient engagement and satisfaction.",
            className: "small:border-r-[1px] small:border-[#6A65FF80]"
        },
        {
            title: "Keyboard AI",
            src: "/images/pictures/projects6.png",
            alt: "project6",
            linkname: "Keyboard AI",
            link: "https://apps.apple.com/md/app/keyboard-ai/id6447576804",
            text: "Introducing Keyboard AI - Your Ultimate Texting Companion! Transform your texting experience with Keyboard AI, the ultimate AI writing assistant that has your back whenever you need to text now! Unleash the power of Artificial Intelligence tools at your fingertips and make every message unique.",
            className: ""
        }
    ]
  return (
    <div className="px-[100px] max-small:px-[40px] max-smallest:px-[20px] font-inter">
        <Banner
            src="/images/what-we-offer-banner.png"
            header="What We Offer?"
            subHeader="Custom mobile apps, CRM solutions, server infrastructure, and websites designed to enhance your brand’s impact."
        />
        <div className="p-10 flex flex-col gap-[16px]">
            <h1 className="font-semibold text-[48px] max-smallest:text-[26px] leading-[58.09px] tracking-[0%] text-[#FFFFFF]">At Quant-Apps</h1>
            <p className="font-normal text-[18px] leading-[27px] max-smallest:text-[14px] tracking-[-0.6%] text-[#E6E6E6] opacity-75">We take pride in collaborating with a diverse range of clients, crafting innovative digital solutions that drive business growth and success.</p>
        </div>
        <div className="grid grid-cols-2 max-small:grid-cols-1">
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