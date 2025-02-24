import Image from "next/image"
import Banner from "@/components/banner"
import Service from "./_components/service"
import Reason from "./_components/reason"
import Review from "./_components/review"
import Accordion from "./_components/accordion"
import ProjectForm from "./_components/projectForm"
import Blur from "@/components/Blur"
import { Link } from "@/i18n/routing"
import { getTranslations } from "next-intl/server"

export default async function Page() {
    const t = await getTranslations("home");

    interface DataType {
        icon: string,
        title: string,
        text: string,
        className?: string
    }

    const services: DataType[] = [
        {
            icon: "/images/icons/brush.svg",
            title: t('services.uiux.title'),
            text: t('services.uiux.text'),
            className: "border-b-[1px] border-r-[1px]"
        },
        {
            icon: "/images/icons/puzzle.svg",
            title: t('services.mobile.title'),
            text: t('services.mobile.text'),
            className: "border-b-[1px] min-[1150px]:border-r-[1px]"
        },
        {
            icon: "/images/icons/dev.svg",
            title: t('services.web.title'),
            text: t('services.web.text'),
            className: "border-b-[1px] max-[1150px]:border-r-[1px]"
        },
        {
            icon: "/images/icons/stats.svg",
            title: t('services.crm.title'),
            text: t('services.crm.text'),
            className: "min-[1150px]:border-r-[1px] max-[1150px]:border-b-[1px]"
        },
        {
            icon: "/images/icons/platforms.svg",
            title: t('services.crossPlatform.title'),
            text: t('services.crossPlatform.text'),
            className: "border-r-[1px]"
        },
        {
            icon: "/images/icons/gear.svg",
            title: t('services.support.title'),
            text: t('services.support.text'),
            className: "max-[800px]:!border-0"
        }
    ];


    const reasons: DataType[] = [
        {
            icon: "/images/icons/stars.svg",
            title: t('reasons.expert.title'),
            text: t('reasons.expert.text'),
            className: "border-b-[1px] border-r-[1px] border-solid border-[#6A65FF1A]"
        },
        {
            icon: "/images/icons/communication.svg",
            title: t('reasons.client.title'),
            text: t('reasons.client.text'),
            className: "border-b-[1px] border-solid border-[#6A65FF1A]"
        },
        {
            icon: "/images/icons/stats.svg",
            title: t('reasons.results.title'),
            text: t('reasons.results.text'),
            className: "border-r-[1px] border-solid border-[#6A65FF1A]"
        },
        {
            icon: "/images/icons/case.svg",
            title: t('reasons.partnership.title'),
            text: t('reasons.partnership.text'),
            className: "max-[900px]:!border-0"
        }
    ];


    interface ReviewsType {
        content: string,
        name: string,
        src: string,
        description: string,
        imgHeight?: number,
        link: string,
        className?: string
    }

    const reviews: ReviewsType[] = [
        {
            content: t('reviews.sarah.content'),
            name: t('reviews.sarah.name'),
            src: "/images/icons/rye_school.svg",
            description: t('reviews.sarah.description'),
            link: "https://www.ryecountryday.org/",
            className: "border-r-[1px] border-solid border-[#6A65FF1A]"
        },
        {
            content: t('reviews.barnabas.content'),
            name: t('reviews.barnabas.name'),
            src: "/images/icons/fiverr.svg",
            description: t('reviews.barnabas.description'),
            imgHeight: 38,
            link: "https://www.fiverr.com/drimba3?public_mode=true"
        },
        {
            content: t('reviews.leslie.content'),
            name: t('reviews.leslie.name'),
            src: "/images/icons/fiverr.svg",
            description: t('reviews.leslie.description'),
            imgHeight: 38,
            link: "https://www.fiverr.com/drimba3?public_mode=true",
            className: "border-r-[1px] border-solid border-[#6A65FF1A] min-[1150px]:[&>div]:mb-[100px]"
        },
        {
            content: t('reviews.draft.content'),
            name: t('reviews.draft.name'),
            src: "/images/icons/fiverr.svg",
            description: t('reviews.draft.description'),
            imgHeight: 38,
            link: "https://www.fiverr.com/drimba3?public_mode=true",
            className: "min-[1150px]:[&>div]:mb-[100px] max-[800px]:!border-0"
        }
    ];

    interface FaqsType {
        number: string,
        question: string,
        answer: string,
        className?: string
    }

    const faqs1: FaqsType[] = [
        {
            number: "01",
            question: t('faqs.services.question'),
            answer: t('faqs.services.answer'),
            className: "border-b-[1px] border-r-[1px]"
        },
        {
            number: "02",
            question: t('faqs.custom.question'),
            answer: t('faqs.custom.answer'),
            className: "border-b-[1px] border-r-[1px]"
        },
        {
            number: "03",
            question: t('faqs.cost.question'),
            answer: t('faqs.cost.answer'),
            className: "border-b-[1px] border-r-[1px]"
        },
        {
            number: "04",
            question: t('faqs.unique.question'),
            answer: t('faqs.unique.answer'),
            className: "border-b-[1px] border-r-[1px]"
        }
    ];

    const faqs2: FaqsType[] = [
        {
            number: "05",
            question: t('faqs.platforms.question'),
            answer: t('faqs.platforms.answer'),
            className: "border-b-[1px] border-l-[1px] translate-x-[-1px]"
        },
        {
            number: "06",
            question: t('faqs.timeline.question'),
            answer: t('faqs.timeline.answer'),
            className: "border-b-[1px] border-l-[1px] translate-x-[-1px]"
        },
        {
            number: "07",
            question: t('faqs.support.question'),
            answer: t('faqs.support.answer'),
            className: "border-b-[1px] border-l-[1px] translate-x-[-1px]"
        },
        {
            number: "08",
            question: t('faqs.start.question'),
            answer: t('faqs.start.answer'),
            className: "border-b-[1px] border-l-[0.5px] translate-x-[-1px] max-[1100px]:!border-0"
        }
    ];

    return (
        <div className="mt-[80px] px-[16px] medium:px-[161px] min-[1270px]:px-[80px] min-[1900px]:mt-[112px] flex flex-col items-center">
            <h1 className="font-semibold text-white text-center text-[30px] min-[1000px]:text-[48px] min-[1900px]:text-[68px]">
                {t('hero.title')}
            </h1>
            <div className="flex items-center justify-center relative mt-[25px] w-full">
                <Image src="/images/pictures/ipad.webp" width={578} height={443} alt={t('hero.ipadAlt')} className="h-auto w-[85%] min-[700px]:w-[530px] min-[1900px]:w-[578px]" />
                <Link href="/video-modal">
                    <Image className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[30%] duration-200 transition-all cursor-pointer hover:scale-110 hover:drop-shadow-2xl" unoptimized src="/images/elements/watch.svg" width={261} height={120} alt={t('hero.watchAlt')} />
                </Link>
                <Blur
                    color='#4A5DE5'
                    left="200px"
                    top="100px"
                    filter="blur(120px)"
                    className="w-[229px] h-[229px] -z-10"
                />
                <Blur
                    color='#4A5DE5'
                    right="250px"
                    top="100px"
                    filter="blur(120px)"
                    className="w-[229px] h-[229px] -z-10"
                />
            </div>
            <div className="w-full py-[40px] max-[1900px]:py-0 bg-[#6A65FF1A] rounded-[35px] mt-[35px] relative">
                <div className="bg-[#4A6ED1] px-[24px] py-[14px] rounded-[100px] absolute top-[0] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center text-white text-[18px] max-[1000px]:text-[14px] font-medium text-nowrap">
                    {t('trusted.title')}
                </div>
                <div className="w-full h-full flex justify-items-center justify-around items-center max-[1000px]:grid max-[1000px]:grid-cols-2 max-[1000px]:gap-0 max-[700px]:[&_img]:w-[100px] [&>div]:w-full [&>div]:h-full [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:border-[#6A65FF1A] [&>div]:border-solid [&>div]:py-[30px]">
                    <div className="max-[1000px]:border-r-[1px] max-[1000px]:border-b-[1px] max-[1000px]:!pt-[50px]">
                        <Image src="/images/icons/RYECDS.svg" width={146} height={146} alt={t('trusted.companies.rye')} />
                    </div>
                    <div className="max-[1000px]:border-b-[1px] max-[1000px]:!pt-[50px]">
                        <Image src="/images/icons/vistage.svg" width={146} height={146} alt={t('trusted.companies.vistage')} />
                    </div>
                    <div className="max-[1000px]:border-r-[1px] max-[1000px]:border-b-[1px]">
                        <Image src="/images/icons/scriptpro.svg" width={146} height={146} alt={t('trusted.companies.scriptpro')} />
                    </div>
                    <div className="max-[1000px]:border-b-[1px]">
                        <Image src="/images/icons/hiiq.svg" width={146} height={146} alt={t('trusted.companies.hiiq')} />
                    </div>
                    <div className="max-[1000px]:col-span-2">
                        <Image src="/images/icons/fordham.svg" width={146} height={146} alt={t('trusted.companies.fordham')} />
                    </div>
                </div>
            </div>
            <Banner
                className="mt-[20px] min-[600px]:mt-[50px]"
                src="/images/banners/our-services-banner.png"
                header={t('sections.services.title')}
                subHeader={t('sections.services.subtitle')}
            />
            <div className="grid grid-cols-3 max-[1150px]:grid-cols-2 max-[800px]:grid-cols-1 [&>div]:border-solid [&>div]:border-[#6A65FF1A] max-[800px]:[&>div]:border-0 max-[800px]:[&>div]:border-b-[1px] w-full">
                {services.map((item, index) => (
                    <Service
                        key={index}
                        className={item?.className}
                        src={item.icon}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
            <Banner
                src="/images/banners/why-choose-us-banner.png"
                header={t('sections.reasons.title')}
                subHeader={t('sections.reasons.subtitle')}
            />
            <div className="grid grid-cols-2 max-[900px]:grid-cols-1 w-full [&>div]:border-solid [&>div]:border-[#6A65FF1A] max-[900px]:[&>div]:border-0 max-[900px]:[&>div]:border-b-[1px]">
                {reasons.map((item, index) => (
                    <Reason
                        key={index}
                        className={item.className}
                        src={item.icon}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
            <Banner
                src="/images/banners/what-clients-say-banner.png"
                header={t('sections.reviews.title')}
                subHeader={t('sections.reviews.subtitle')}
            />
            <div className="relative">
                <div className="grid grid-cols-2 max-[1150px]:grid-cols-1 w-full [&>div]:border-solid [&>div]:border-[#6A65FF1A] max-[1150px]:[&>div]:border-0 max-[1150px]:[&>div]:border-b-[1px]">
                    {reviews.map((item, index) => (
                        <Review
                            key={index}
                            content={item.content}
                            name={item.name}
                            src={item.src}
                            description={item.description}
                            className={item?.className}
                            link={item.link}
                            imgHeight={item?.imgHeight}
                        />
                    ))}
                </div>
                <div className="absolute max-[1150px]:hidden bottom-[30px] right-[80px] flex text-white items-center gap-2">
                    <p className="font-semibold text-[24px]">{t('reviews.more.text')}</p>
                    <Link href={t('reviews.more.fiverr.link')} legacyBehavior>
                        <a target="_blank">
                            <Image src="/images/icons/fiverr_purple.svg" className="btn" width={43} height={43} alt={t('reviews.more.fiverr.alt')} />
                        </a>
                    </Link>
                </div>
            </div>

            <Banner
                src="/images/banners/faqs_banner.png"
                header={t('sections.faqs.title')}
                subHeader={t('sections.faqs.subtitle')}
            />
            <div className="grid grid-cols-2 max-[1100px]:grid-cols-1 mb-[80px]">
                <div className="max-[1100px]:[&>div]:border-0 max-[1100px]:[&>div]:border-b-[1px]">
                    {faqs1.map((item, index) => (
                        <Accordion
                            key={index}
                            className={item?.className}
                            number={item.number}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </div>
                <div className="max-[1100px]:[&>div]:border-0 max-[1100px]:[&>div]:border-b-[1px]">
                    {faqs2.map((item, index) => (
                        <Accordion
                            key={index}
                            className={item?.className}
                            number={item.number}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </div>
            </div>
            <Banner
                src="/images/banners/what-clients-say-banner.png"
                header={t('sections.cta.title')}
                subHeader={t('sections.cta.subtitle')}
                button={t('sections.cta.button')}
                icon="/images/icons/start_project_logo.svg"
            />
            <ProjectForm className="py-[100px] px-[20%] max-[1100px]:px-[40px]" />
            <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
                <Blur
                    color="#836FFF99"
                    left="-250px"
                    top="1150px"
                    filter="blur(250px)"
                    className="w-[500px] h-[500px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
                />
                <Blur
                    color="#836FFF99"
                    right="-250px"
                    top="1800px"
                    filter="blur(250px)"
                    className="w-[500px] h-[500px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
                />
                <Blur
                    color="#836FFF99"
                    left="-250px"
                    top="2700px"
                    filter="blur(250px)"
                    className="w-[500px] h-[500px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
                />
                <Blur
                    color="#836FFF99"
                    right="-250px"
                    top="2900px"
                    filter="blur(250px)"
                    className="w-[500px] h-[500px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
                />
                <Blur
                    color="#836FFF99"
                    left="-250px"
                    top="4100px"
                    filter="blur(250px)"
                    className="w-[500px] h-[500px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
                />
                <Blur
                    color="#836FFF99"
                    right="-250px"
                    top="4400px"
                    filter="blur(250px)"
                    className="w-[500px] h-[500px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
                />
                <Blur
                    color="#836FFF99"
                    left="-250px"
                    top="5000px"
                    filter="blur(250px)"
                    className="w-[500px] h-[500px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
                />
                <Blur
                    color="#836FFF99"
                    right="-250px"
                    top="5300px"
                    filter="blur(250px)"
                    className="w-[500px] h-[500px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
                />
                <Blur
                    color="#9C08FFCC"
                    right="-250px"
                    top="6400px"
                    filter="blur(250px)"
                    className="w-[500px] h-[500px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
                />
                <Blur
                    color="#9C08FFCC"
                    left="-250px"
                    top="7000px"
                    filter="blur(250px)"
                    className="w-[500px] h-[500px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
                />
            </div>
        </div>
    )
}