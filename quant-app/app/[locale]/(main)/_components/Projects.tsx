
'use client'
import { useEffect, useState } from "react";
import Image from 'next/image';
import { Button, Typography } from "@mui/material";
import Project from "./Project";
import { useTranslations } from "next-intl";
import ProjectType from '@/lib/types/ProjectType';
import { scrollToId } from "@/lib/utils/utils";
import Blur from "@/components/Blur";


export default function Projects() {
    const t = useTranslations('main');
    const [slicedProjects, setSlicedProjects] = useState<ProjectType[]>([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const allProjects: ProjectType[] = [
            {
                src: "/images/phone-1.png",
                title: "Meditation Player App",
                description: t("MeditationPlayerAppDescription"),
            },
            {
                src: "/images/phone-2.png",
                title: "Market Delivery Grocery App",
                description: t("MarketDeliveryGroceryAppDescription"),
            },
            {
                src: "/images/phone-3.png",
                title: "Home Serveware Shopping App",
                description: t("HomeServeWareShoppingAppDescription"),
            },
            {
                src: "/images/phone-4.png",
                title: "Explore the World Travel App",
                description: t("ExploreWorldTravelAppDescription"),
            },
            {
                src: "/images/phone-5.png",
                title: "Barkcheck",
                description: t("BarkCheckDescription"),
            },
            {
                src: "/images/phone-6.png",
                title: "Tripflick App",
                description: t("TripFlickAppDescription"),
            },
            {
                src: "/images/phone-7.png",
                title: "Shape Your Body Fitness App",
                description: t("ShapeYourBodyFitnessAppDescription"),
            },
            {
                src: "/images/phone-8.png",
                title: "Hotel Management Dashboard",
                description: t("HotelManagementDashboardDescription"),
            },
            {
                src: "/images/phone-9.png",
                title: "Quant-Apps Website",
                description: t("QuantAppsWebsiteDescription"),
            },
        ];
        const handleResize = () => {
            const count = window.innerWidth > 768 ? 6 : 3;
            setSlicedProjects(showAll ? allProjects : allProjects.slice(0, count));
        };
        if (typeof window !== 'undefined') {
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [showAll, t]);

    if (!slicedProjects.length) {
        return null;
    }

    const showClickHandler = () => {
        setShowAll(prev => !prev);
        if (showAll) scrollToId('projects');
    }

    return (
        <div className="our-work" id="our-work">
            <div className="our-work__title">
                <h3 className="text-[60px] text-white font-clash font-[600]">{t("OurProjects")}</h3>
                <p>
                    {t("InnovationStartsVision")}
                    <br className="our-work__title__br" />
                    {t("ExploreProjectsTurnedIntoReality")}
                </p>
            </div>

            <div className="our-work__items w-full">
                {slicedProjects.map((project, index) => (
                    <Project
                        key={`${project.title}-${index}`}
                        src={project.src}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </div>

            <Button
                onClick={showClickHandler}
                sx={{
                    mt: "0px",
                    borderRadius: "8px",
                    minWidth: "220px",
                    minHeight: "48px",
                    width: "fit-content",
                    backgroundColor: showAll ? "transparent" : "#6A65FF",
                    border: showAll ? "1.5px solid white" : "none",
                    '&:hover': {
                        backgroundColor: showAll ? 'rgba(255, 255, 255, 0.1)' : '#5852ff',
                    },
                }}
            >
                <Typography
                    sx={{
                        fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                        fontWeight: "600",
                        fontSize: "18px",
                        color: "white",
                        textTransform: "none",
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                    }}
                >
                    {showAll ? t("Collapse") : t("ShowMore")}
                    {showAll && (
                        <Image
                            src="/icons/arrow.svg"
                            alt="Arrow"
                            width={50}
                            height={0}
                            className="w-auto h-auto"
                        />
                    )}
                </Typography>
            </Button>
            <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
                <Blur
                    color="#9C08FF99"
                    right="0%"
                    bottom="25%"
                    width="400px"
                    height="400px"
                    filter="blur(140px)"
                />
                <Blur
                    color="#1E50FF4D"
                    left="-10%"
                    top="20%"
                    width="800px"
                    height="800px"
                    filter="blur(100px)"
                />
                <Image src="/icons/Star.svg" width={50} height={0} alt="star" className="w-auto h-auto top-[440px] left-[30px] why-ios__bg-img max-[900px]:hidden" />
                <Image src="/icons/Star.svg" width={50} height={0} alt="star" className="w-auto h-auto top-[540px] left-[500px] why-ios__bg-img max-[900px]:hidden opacity-50" />
                <Image src="/icons/Star.svg" width={50} height={0} alt="star" className="w-auto h-auto bottom-[600px] right-[350px] why-ios__bg-img max-[900px]:hidden" />
                <Image src="/icons/Star.svg" width={50} height={0} alt="star" className="w-auto h-auto bottom-[1360px] right-[350px] why-ios__bg-img max-[900px]:hidden opacity-55" />
                <Image src="/icons/ellipse6.svg" width={50} height={0} alt="ellise" className="why-ios__bg-img w-auto h-auto top-[1570px] left-[200px] -z-10 max-[900px]:hidden" />
            </div>
        </div>
    );
}