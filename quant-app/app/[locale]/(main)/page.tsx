import Image from "next/image"
import Banner from "./_components/banner"
import Service from "./_components/service"
import Reason from "./_components/reason"
import Review from "./_components/review"

export default function Page() {
    return (
        <div className="px-[161px] mt-[112px] flex flex-col items-center">
            <h1 className="font-semibold text-[68px] text-white text-center">Web & Mobile Apps + CRM Solutions to Power Your Business</h1>
            <div className="relative mt-[25px]">
                <Image src="/images/ipad.webp" width={578} height={443} alt="ipad" />
                <Image className="absolute top-[35%] left-[25%] w-[50%] h-[30%] duration-200 transition-transform cursor-pointer hover:scale-110 hover:drop-shadow" unoptimized src="/icons/watch.svg" width={261} height={120} alt="watch video button" />
            </div>
            <div className="w-full h-[170px] bg-[#6A65FF1A] rounded-[35px] mt-[47px] relative">
                <div className="bg-[#4A6ED1] w-[303px] h-[62px] rounded-[100px] absolute top-[0] left-[50%] translate-x-[-50%]  translate-y-[-50%] flex flex-col items-center justify-center text-white text-[18px] font-medium">
                    Trusted By 20+ Companies
                </div>
                <div className="w-full h-full flex [&_*]:w-[146px] justify-around items-center">
                    <Image src="/icons/RYECDS.svg" width={300} height={90} alt="RYE Country Day Shool logo" />
                    <Image src="/icons/vistage.svg" width={300} height={90} alt="Vistage logo" />
                    <Image src="/icons/scriptpro.svg" width={300} height={90} alt="ScriptPro logo" />
                    <Image src="/icons/hiiq.svg" width={300} height={90} alt="HI-IQ logo" />
                    <Image src="/icons/fordham.svg" width={300} height={90} alt="Fordham University logo" />
                </div>
            </div>
            <Banner
                className="mt-[50px]"
                src="/images/our-services-banner.png"
                header="Our Services"
                subHeader="Custom mobile apps built to amplify your brand’s impact."
            />
            <div className="grid grid-cols-3 w-full">
                <Service
                    className="border-b-[1px] border-r-[1px] border-solid border-[#6A65FF1A]"
                    src="/icons/brush.svg"
                    title="UI/UX"
                    text="We craft visually stunning, user-friendly interfaces that enhance usability, ensuring seamless navigation and engaging experiences across web and mobile applications, delivering intuitive, high-performance designs that captivate users and drive interaction."
                />
                <Service
                    className="border-b-[1px] border-r-[1px] border-solid border-[#6A65FF1A]"
                    src="/icons/puzzle.svg"
                    title="iOS & Android App Development"
                    text="We develop high-performance mobile and web applications optimized for speed, security, and scalability, ensuring seamless functionality, enhanced user experience, and robust performance. Our solutions are designed to handle high traffic, deliver smooth interactions, and provide reliable, secure architecture for businesses aiming for long-term growth and success."
                />
                <Service
                    className="border-b-[1px] border-solid border-[#6A65FF1A]"
                    src="/icons/dev.svg"
                    title="Website Development"
                    text="We create high-performance, SEO-optimized websites designed for speed, security, and user engagement. Our responsive web development ensures seamless functionality across all devices, enhancing user experience and conversion rates. From custom designs to scalable solutions, we build modern, fast, and secure websites that drive business growth and online visibility."
                />
            </div>
            <div className="grid grid-cols-3 w-full">
                <Service
                    className=" border-r-[1px] border-solid border-[#6A65FF1A]"
                    src="/icons/stats.svg"
                    title="CRM Solutions"
                    text="We develop custom CRM solutions to streamline business operations, enhance customer relationships, and improve workflow efficiency. Our scalable and secure CRM systems integrate seamlessly with your existing tools, providing automation, data insights, and centralized management to boost productivity, optimize sales processes, and drive business growth."
                />
                <Service
                    className=" border-r-[1px] border-solid border-[#6A65FF1A]"
                    src="/icons/platforms.svg"
                    title="Cross-Platform Development"
                    text="We specialize in cross-platform development, creating high-performance mobile apps that run seamlessly on iOS and Android. Using modern frameworks like React Native and Flutter, we deliver cost-effective, scalable, and user-friendly applications with a native-like experience, ensuring broad market reach, faster development, and streamlined maintenance."
                />
                <Service
                    src="/icons/gear.svg"
                    title="Support & Maintenance"
                    text="We provide ongoing support and maintenance to keep your applications, websites, and software running smoothly. Our services include performance monitoring, security updates, bug fixes, and feature enhancements to ensure optimal functionality, minimize downtime, and enhance user experience, allowing your business to stay secure, up-to-date, and scalable."
                />
            </div>
            <Banner
                src="/images/why-choose-us-banner.png"
                header="Why Choose Quant-Apps?"
                subHeader="Unlock digital excellence with our expert team, crafting high-performance solutions designed for outstanding results and seamless user experiences."
            />
            <div className="grid grid-cols-2 w-full">
                <Reason
                    className="border-b-[1px] border-r-[1px] border-solid border-[#6A65FF1A]"
                    src="/icons/stars.svg"
                    title="Expert Software Solutions"
                    text="Our skilled professionals leverage deep industry expertise to build cutting-edge digital products. Staying ahead with the latest trends and best practices, we deliver innovative, scalable, and secure solutions tailored to your business needs."
                />
                <Reason
                    className="border-b-[1px] border-solid border-[#6A65FF1A]"
                    src="/icons/communication.svg"
                    title="Client-Focused Digital Strategy"
                    text="We prioritize your business goals, customizing our web and mobile development services to align with your vision. Through strategic collaboration and deep market insights, we create user-centric solutions that drive engagement and success."
                />
            </div>
            <div className="grid grid-cols-2 w-full">
                <Reason
                    className="border-r-[1px] border-solid border-[#6A65FF1A]"
                    src="/icons/stats.svg"
                    title="Results-Driven Development"
                    text="Our core mission is to deliver measurable results. By combining technical expertise with creative problem-solving, we develop high-performance apps, websites, and CRM systems that enhance user experiences, boost efficiency, and accelerate business growth."
                />
                <Reason
                    src="/icons/case.svg"
                    title="Long-Term Digital Partnership"
                    text="We believe in lasting client relationships, providing continuous support, maintenance, and updates for your digital products. Our commitment ensures seamless functionality, security, and performance, helping your business stay competitive and innovative."
                />
            </div>
            <Banner
                src="/images/what-clients-say-banner.png"
                header="What our Clients say About us"
                subHeader="At Quant-Apps, we deliver top-tier digital solutions that drive success. Hear from our satisfied clients!"
            />
            <div className="relative">
                <div className="grid grid-cols-2 w-full">
                    <Review
                        content="Great! So quick and easy to work with. We are super satisfied so far and will continue to work."
                        name="Sarah Istwany"
                        src="/icons/rye_school.svg"
                        description="Representing Rye Country Day School"
                        className="border-r-[1px] border-solid border-[#6A65FF1A]"
                    />
                    <Review
                        content="It was great working. Definitely will be using  again, already in the process of placing another order!"
                        name="Barnabas Willis"
                        src="/icons/fiverr.svg"
                        description="Client from Fiverr"
                        imgHeight={38}
                    />
                </div>
                <div className="grid grid-cols-2 w-full">
                    <Review
                        content="Very good work looking forward to working together again."
                        name="Leslie Alexander"
                        src="/icons/fiverr.svg"
                        description="Client from Fiverr"
                        imgHeight={38}
                        className="border-r-[1px] border-solid border-[#6A65FF1A] [&>div]:mb-[100px]"
                    />
                    <Review
                        content="10 out of 10 will recommend!"
                        name="Draft Pick Design"
                        src="/icons/fiverr.svg"
                        description="Client from Fiverr"
                        imgHeight={38}
                        className="[&>div]:mb-[100px]"
                    />
                </div>
                <div className="absolute bottom-[30px] right-[80px] flex text-white items-center gap-2">
                    <p className="font-semibold text-[24px]">More reviews can be viewed on</p>
                    <Image src="/icons/fiverr_purple.svg" width={43} height={43} alt="Fiverr logo" />
                </div>
            </div>
            <Banner
                src="/images/faqs_banner.png"
                header="Frequently Asked Questions"
                subHeader="Still you have any questions? Contact our Team via support@quant-apps.com"
            />
        </div>
    )
}