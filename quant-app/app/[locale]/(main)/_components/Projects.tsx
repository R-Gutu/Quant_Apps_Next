'use client'
import { useEffect, useState } from "react";
import Image from 'next/image';
import { Button, Typography } from "@mui/material";
import Project from "./Project";

import Arrow from "@/src/assets/icons/arrow.svg";
import Phone1 from "@/src/assets/images/phone-1.png";
import Phone2 from "@/src/assets/images/phone-2.png";
import Phone3 from "@/src/assets/images/phone-3.png";
import Phone4 from "@/src/assets/images/phone-4.png";
import Phone5 from "@/src/assets/images/phone-5.png";
import Phone6 from "@/src/assets/images/phone-6.png";
import Phone7 from "@/src/assets/images/phone-7.png";
import Phone8 from "@/src/assets/images/phone-8.png";
import Phone9 from "@/src/assets/images/phone-9.png";
import { useTranslations } from "next-intl";

interface ProjectData {
    src: any;
    title: string;
    description: string;
}

export default function Projects() {
    const t = useTranslations('main');
    const allProjects: ProjectData[] = [
        {
            src: Phone1,
            title: "Meditation Player App",
            description: t("MeditationPlayerAppDescription"),
        },
        {
            src: Phone2,
            title: "Market Delivery Grocery App",
            description: t("MarketDeliveryGroceryAppDescription"),
        },
        {
            src: Phone3,
            title: "Home Serveware Shopping App",
            description: t("HomeServeWareShoppingAppDescription"),
        },
        {
            src: Phone4,
            title: "Explore the World Travel App",
            description: t("ExploreWorldTravelAppDescription"),
        },
        {
            src: Phone5,
            title: "Barkcheck",
            description: t("BarkCheckDescription"),
        },
        {
            src: Phone6,
            title: "Tripflick App",
            description: t("TripFlickAppDescription"),
        },
        {
            src: Phone7,
            title: "Shape Your Body Fitness App",
            description: t("ShapeYourBodyFitnessAppDescription"),
        },
        {
            src: Phone8,
            title: "Hotel Management Dashboard",
            description: t("HotelManagementDashboardDescription"),
        },
        {
            src: Phone9,
            title: "Quant-Apps Website",
            description: t("QuantAppsWebsiteDescription"),
        },
    ];

    const [slicedProjects, setSlicedProjects] = useState<ProjectData[]>([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const count = window.innerWidth > 768 ? 6 : 3;
            setSlicedProjects(showAll ? allProjects : allProjects.slice(0, count));
        };
        if (typeof window !== 'undefined') {
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [showAll]);

    if (!slicedProjects.length) {
        return null;
    }

    return (
        <div className="our-work" id="our-work">
            <div className="our-work__title">
                <h1>{t("OurProjects")}</h1>
                <p>
                    {t("InnovationStartsVision")}
                    <br className="our-work__title__br" />
                    {t("ExploreProjectsTurnedIntoReality")}
                </p>
            </div>

            <div className="our-work__items">
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
                onClick={() => setShowAll(prev => !prev)}
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
                            src={Arrow}
                            alt="Arrow"
                        />
                    )}
                </Typography>
            </Button>
        </div>
    );
}