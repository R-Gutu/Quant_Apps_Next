import Image from "next/image"
import Banner from "@/components/banner"
import Service from "./_components/service"
import Reason from "./_components/reason"
import Review from "./_components/review"
import Accordion from "./_components/accordion"

export default function Page() {
    return (
        <div className="mt-[80px] px-[16px] medium:px-[161px] min-[1270px]:px-[80px] min-[1900px]:mt-[112px] flex flex-col items-center">
            <h1 className="font-semibold text-white text-center text-[30px] min-[1000px]:text-[48px] min-[1900px]:text-[68px]">
                Web & Mobile Apps + CRM Solutions to Power Your Business
            </h1>
            <div className="flex items-center justify-center relative mt-[25px] w-full">
                <Image src="/images/pictures/ipad.webp" width={578} height={443} alt="ipad" className="h-auto w-[85%] min-[700px]:w-[530px]  min-[1900px]:w-[578px]" />
                <Image className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[30%] duration-200 transition-all cursor-pointer hover:scale-110 hover:drop-shadow-2xl" unoptimized src="/images/elements/watch.svg" width={261} height={120} alt="watch video button" />
            </div>
            <div className="w-full py-[40px] max-[1900px]:py-0 bg-[#6A65FF1A] rounded-[35px] mt-[35px] relative">
                <div className="bg-[#4A6ED1] px-[24px] py-[14px] rounded-[100px] absolute top-[0] left-[50%] translate-x-[-50%]  translate-y-[-50%] flex flex-col items-center justify-center text-white text-[18px] max-[1000px]:text-[14px] font-medium text-nowrap">
                    Trusted By 20+ Companies
                </div>
                <div className="w-full h-full flex justify-items-center justify-around items-center 
                    max-[1000px]:grid max-[1000px]:grid-cols-2 max-[1000px]:gap-0 max-[700px]:[&_img]:w-[100px] [&>div]:w-full [&>div]:h-full [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:border-[#6A65FF1A] [&>div]:border-solid [&>div]:py-[30px]">
                    <div className="max-[1000px]:border-r-[1px] max-[1000px]:border-b-[1px] max-[1000px]:!pt-[50px]">
                        <Image
                            src="/images/icons/RYECDS.svg"
                            width={146}
                            height={146}
                            alt="RYE Country Day School logo"
                        />
                    </div>
                    <div className="max-[1000px]:border-b-[1px] max-[1000px]:!pt-[50px]">
                        <Image
                            src="/images/icons/vistage.svg"
                            width={146}
                            height={146}
                            alt="Vistage logo"
                        />
                    </div>
                    <div className="max-[1000px]:border-r-[1px] max-[1000px]:border-b-[1px]">
                        <Image
                            src="/images/icons/scriptpro.svg"
                            width={146}
                            height={146}
                            alt="ScriptPro logo"
                        />
                    </div>
                    <div className="max-[1000px]:border-b-[1px]">
                        <Image
                            src="/images/icons/hiiq.svg"
                            width={146}
                            height={146}
                            alt="HI-IQ logo"
                        />
                    </div>
                    <div className="max-[1000px]:col-span-2">
                        <Image
                            className=""
                            src="/images/icons/fordham.svg"
                            width={146}
                            height={146}
                            alt="Fordham University logo"
                        />
                    </div>
                </div>
            </div>
            <Banner
                className="mt-[20px] min-[600px]:mt-[50px]"
                src="/images/banners/our-services-banner.png"
                header="Our Services"
                subHeader="Custom mobile apps built to amplify your brand’s impact."
            />
            <div className="grid grid-cols-3 max-[1150px]:grid-cols-2 max-[800px]:grid-cols-1 w-full">
                <Service
                    className="border-b-[1px] border-r-[1px] border-solid border-[#6A65FF1A]"
                    src="/images/icons/brush.svg"
                    title="UI/UX"
                    text="We craft visually stunning, user-friendly interfaces that enhance usability, ensuring seamless navigation and engaging experiences across web and mobile applications, delivering intuitive, high-performance designs that captivate users and drive interaction."
                />
                <Service
                    className="border-b-[1px] border-r-[1px] border-solid border-[#6A65FF1A]"
                    src="/images/icons/puzzle.svg"
                    title="iOS & Android App Development"
                    text="We develop high-performance mobile and web applications optimized for speed, security, and scalability, ensuring seamless functionality, enhanced user experience, and robust performance. Our solutions are designed to handle high traffic, deliver smooth interactions, and provide reliable, secure architecture for businesses aiming for long-term growth and success."
                />
                <Service
                    className="border-b-[1px] border-solid border-[#6A65FF1A]"
                    src="/images/icons/dev.svg"
                    title="Website Development"
                    text="We create high-performance, SEO-optimized websites designed for speed, security, and user engagement. Our responsive web development ensures seamless functionality across all devices, enhancing user experience and conversion rates. From custom designs to scalable solutions, we build modern, fast, and secure websites that drive business growth and online visibility."
                />
                <Service
                    className=" border-r-[1px] border-solid border-[#6A65FF1A]"
                    src="/images/icons/stats.svg"
                    title="CRM Solutions"
                    text="We develop custom CRM solutions to streamline business operations, enhance customer relationships, and improve workflow efficiency. Our scalable and secure CRM systems integrate seamlessly with your existing tools, providing automation, data insights, and centralized management to boost productivity, optimize sales processes, and drive business growth."
                />
                <Service
                    className=" border-r-[1px] border-solid border-[#6A65FF1A]"
                    src="/images/icons/platforms.svg"
                    title="Cross-Platform Development"
                    text="We specialize in cross-platform development, creating high-performance mobile apps that run seamlessly on iOS and Android. Using modern frameworks like React Native and Flutter, we deliver cost-effective, scalable, and user-friendly applications with a native-like experience, ensuring broad market reach, faster development, and streamlined maintenance."
                />
                <Service
                    src="/images/icons/gear.svg"
                    title="Support & Maintenance"
                    text="We provide ongoing support and maintenance to keep your applications, websites, and software running smoothly. Our services include performance monitoring, security updates, bug fixes, and feature enhancements to ensure optimal functionality, minimize downtime, and enhance user experience, allowing your business to stay secure, up-to-date, and scalable."
                />
            </div>
            {/* 


            <Banner
                src="/images/banners/why-choose-us-banner.png"
                header="Why Choose Quant-Apps?"
                subHeader="Unlock digital excellence with our expert team, crafting high-performance solutions designed for outstanding results and seamless user experiences."
            />
            <div className="grid grid-cols-2 w-full">
                <Reason
                    className="border-b-[1px] border-r-[1px] border-solid border-[#6A65FF1A]"
                    src="/images/icons/stars.svg"
                    title="Expert Software Solutions"
                    text="Our skilled professionals leverage deep industry expertise to build cutting-edge digital products. Staying ahead with the latest trends and best practices, we deliver innovative, scalable, and secure solutions tailored to your business needs."
                />
                <Reason
                    className="border-b-[1px] border-solid border-[#6A65FF1A]"
                    src="/images/icons/communication.svg"
                    title="Client-Focused Digital Strategy"
                    text="We prioritize your business goals, customizing our web and mobile development services to align with your vision. Through strategic collaboration and deep market insights, we create user-centric solutions that drive engagement and success."
                />
            </div>
            <div className="grid grid-cols-2 w-full">
                <Reason
                    className="border-r-[1px] border-solid border-[#6A65FF1A]"
                    src="/images/icons/stats.svg"
                    title="Results-Driven Development"
                    text="Our core mission is to deliver measurable results. By combining technical expertise with creative problem-solving, we develop high-performance apps, websites, and CRM systems that enhance user experiences, boost efficiency, and accelerate business growth."
                />
                <Reason
                    src="/images/icons/case.svg"
                    title="Long-Term Digital Partnership"
                    text="We believe in lasting client relationships, providing continuous support, maintenance, and updates for your digital products. Our commitment ensures seamless functionality, security, and performance, helping your business stay competitive and innovative."
                />
            </div>
            <Banner
                src="/images/banners/what-clients-say-banner.png"
                header="What our Clients say About us"
                subHeader="At Quant-Apps, we deliver top-tier digital solutions that drive success. Hear from our satisfied clients!"
            />
            <div className="relative">
                <div className="grid grid-cols-2 w-full">
                    <Review
                        content="Great! So quick and easy to work with. We are super satisfied so far and will continue to work."
                        name="Sarah Istwany"
                        src="/images/icons/rye_school.svg"
                        description="Representing Rye Country Day School"
                        className="border-r-[1px] border-solid border-[#6A65FF1A]"
                    />
                    <Review
                        content="It was great working. Definitely will be using  again, already in the process of placing another order!"
                        name="Barnabas Willis"
                        src="/images/icons/fiverr.svg"
                        description="Client from Fiverr"
                        imgHeight={38}
                    />
                </div>
                <div className="grid grid-cols-2 w-full">
                    <Review
                        content="Very good work looking forward to working together again."
                        name="Leslie Alexander"
                        src="/images/icons/fiverr.svg"
                        description="Client from Fiverr"
                        imgHeight={38}
                        className="border-r-[1px] border-solid border-[#6A65FF1A] [&>div]:mb-[100px]"
                    />
                    <Review
                        content="10 out of 10 will recommend!"
                        name="Draft Pick Design"
                        src="/images/icons/fiverr.svg"
                        description="Client from Fiverr"
                        imgHeight={38}
                        className="[&>div]:mb-[100px]"
                    />
                </div>
                <div className="absolute bottom-[30px] right-[80px] flex text-white items-center gap-2">
                    <p className="font-semibold text-[24px]">More reviews can be viewed on</p>
                    <Image src="/images/icons/fiverr_purple.svg" width={43} height={43} alt="Fiverr logo" />
                </div>
            </div>
            <Banner
                src="/images/banners/faqs_banner.png"
                header="Frequently Asked Questions"
                subHeader="Still you have any questions? Contact our Team via support@quant-apps.com"
            />
            <div className="grid grid-cols-2 mb-[80px]">
                <div>
                    <Accordion
                        className="border-b-[1px] border-r-[1px]"
                        number="01"
                        question="What services does Quant-Apps provide?"
                        answer="Quant-Apps specializes in mobile app development for iOS, Android app development, cross-platform solutions with React Native, CRM systems, UI/UX design, and logo creation. We offer customized solutions, from concept and design to full deployment and optimization."
                    />
                    <Accordion
                        className="border-b-[1px] border-r-[1px]"
                        number="02"
                        question="Can you build a custom app for my business?"
                        answer="Yes! We work closely with businesses to create iOS, Android, and cross-platform solutions that align with your brand and unique needs. From startups to large companies, we develop apps that help you stand out."
                    />
                    <Accordion
                        className="border-b-[1px] border-r-[1px]"
                        number="03"
                        question="How much does app development cost?"
                        answer="The cost of app development varies depending on the app's features, complexity, and requirements. We provide a transparent and customized estimate that fits your budget and goals for iOS apps, Android apps, cross-platform solutions, and CRM systems."
                        />
                    <Accordion
                        className="border-b-[1px] border-r-[1px]"
                        number="04"
                        question="What sets Quant-Apps?"
                        answer="At Quant-Apps, we combine creativity with technical expertise. Our co-founder, Romas Gutsu, started his career as an iOS and Android app developer and gradually became the CEO, leading the company in creating innovative solutions. Meanwhile, Veaceslav Soltan, our co-founder, began his career as a graphic designer and brought a unique approach to designing visually attractive and user-friendly apps for iOS, Android, and cross-platform solutions."
                    />
                </div>
                <div>
                    <Accordion
                        className="border-b-[1px] border-l-[1px] translate-x-[-1px]"
                        number="05"
                        question="What platforms do you develop for?"
                        answer="Quant-Apps specializes in developing mobile applications for iOS, Android app development, cross-platform solutions using React Native, CRM systems, UI/UX design, and logo creation. We offer tailored solutions, from concept and design to full deployment and optimization. Quant-Apps develops apps for iOS, Android, and provides cross-platform solutions with a focus on excellent performance, security, and integration with the Apple and Android ecosystems."
                    />
                    <Accordion
                        className="border-b-[1px] border-l-[1px] translate-x-[-1px]"
                        number="06"
                        question="How long does it take to develop an app?"
                        answer="Development time depends on the complexity and features of the app. Typically, it takes from 1 to 3 months, including the development of iOS, Android, cross-platform solutions, CRM systems, as well as design and testing."
                    />
                    <Accordion
                        className="border-b-[1px] border-l-[1px] translate-x-[-1px]"
                        number="07"
                        question="Do you offer support after the app is launched?"
                        answer="Yes, we offer ongoing support and maintenance services even after your app is launched. Our team ensures that your app stays updated, secure, and runs smoothly as iOS/Android updates or user needs evolve."
                    />
                    <Accordion
                        className="border-b-[1px] border-l-[0.5px] translate-x-[-1px]"
                        number="08"
                        question="How do I get started with Quant-Apps?"
                        answer="Getting started is simple! Contact us for a free consultation where we’ll discuss your app idea, goals, and requirements. From there, we’ll guide you through the development process and help bring your vision to life."
                    />
                </div>
            </div>
            <Banner
                src="/images/banners/what-clients-say-banner.png"
                header="Excited to work together on your next project?"
                subHeader="Let’s bring your ideas to life with custom development and design solutions tailored to your needs."
                button="Start Project"
                icon="/images/icons/start_project_logo.svg"
            /> */}
        </div>
    )
}