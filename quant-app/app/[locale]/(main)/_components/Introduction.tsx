import { Typography, Box } from "@mui/material"
import Image from 'next/image'
import { getTranslations, getLocale } from "next-intl/server";
import { getIntroByLanguageMobile } from "@/lib/utils/languageUtils";
import { Link } from "@/i18n/routing";
import Blur from "@/components/Blur";

export default async function Introduction() {
    const t = await getTranslations('main');
    const currentLocale = await getLocale();
    const mobileIntro = getIntroByLanguageMobile(currentLocale);
    return (
        <div className="pt-[200px] w-full p-24 max-[950px]:p-5 max-[950px]:pt-[150px]">
            <div className="banner__content">
                <div className="banner__text">
                    <Typography
                        variant="h1"
                        className="!font-inter !font-semibold !text-[70px] !text-white 
                        max-[1800px]:!text-[65px]
                        max-[1650px]:!text-[60px]
                        max-[1510px]:!text-[50px]
                        max-[1100px]:!text-center
                        max-[600px]:!text-[30px]
                        "
                        sx={{
                            ":lang(ru)": {
                                fontSize: "60px!important",
                            },
                            "@media (max-width: 1800px)": {
                                ":lang(ru)": {
                                    fontSize: "55px!important",
                                },
                            },
                            "@media (max-width: 1650px)": {
                                ":lang(ru)": {
                                    fontSize: "50px!important",
                                },
                            },
                            "@media (max-width: 1510px)": {
                                ":lang(ru)": {
                                    fontSize: "40px!important",
                                },
                            },
                            "@media (max-width: 600px)": {
                                ":lang(ru)": {
                                    fontSize: "25px",
                                },
                            }
                        }}
                    >
                        {t("WeBuildAppsThatEmpower")}
                    </Typography>

                    <Typography
                        variant="h2"
                        className="!font-inter !text-justify !text-[35px] !text-[#EBEBEB] 
                        max-[1800px]:!text-[30px]
                        max-[1570px]:!text-[20px]
                        max-[1100px]:!text-center
                        max-[900px]:!text-[24px]
                        max-[600px]:!text-[18px]
                        "
                    >
                        {t("WeSpecializeInBuilding")}
                    </Typography>
                </div>

                <Box
                    sx={{
                        mt: "0px",
                        display: { xs: "flex", md: "none" }, // Показать только на md и больше
                        justifyContent: "center",
                    }}
                >
                    <Link
                        legacyBehavior
                        href='/talk-modal'
                    >
                        <a className="button lets-talk fill-btn banner__text-btn">
                            {t("LetsTalk")}
                        </a>
                    </Link>
                </Box>

                <div className="banner__video">
                    <picture>
                        <Image
                            src="/images/ipad.webp"
                            width={500}
                            height={500}
                            alt="Ipad"
                            priority
                            className="w-full h-full object-contain block"
                        />
                    </picture>
                    <Link href="/video-modal" legacyBehavior>
                        <a className="banner__video-play">
                            <span />
                            <p>{t("WatchVideo")}</p>
                        </a>
                    </Link>
                    <Link href={mobileIntro} legacyBehavior>
                        <a className="banner__video-play__mobile">
                            <span></span>

                            <p>{t("WatchVideo")}</p>
                        </a>
                    </Link>
                </div>
            </div>
            <Box
                sx={{
                    mt: "70px",
                    display: { xs: "none", md: "flex" }, // Показать только на md и больше
                    justifyContent: "center",
                }}
            >
                <Link
                    legacyBehavior
                    href='/talk-modal'
                >
                    <a className="button lets-talk fill-btn banner__text-btn">
                        {t("LetsTalk")}
                    </a>
                </Link>
            </Box>
            <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
                <Blur
                    color="#1E50FF"
                    left="-5%"
                    top="0%"
                    width="300px"
                    height="300px"
                    filter="blur(100px)"
                />
                <Blur
                    color="#9C08FFE5"
                    left="25%"
                    top="0%"
                    width="300px"
                    height="300px"
                    filter="blur(100px)"
                />
                <Blur
                    color="#1E50FF"
                    right="5%"
                    top="10%"
                    width="300px"
                    height="300px"
                    filter="blur(200px)"
                />
                <Blur
                    color="#9C08FFE5"
                    right="5%"
                    top="0%"
                    width="300px"
                    height="300px"
                    filter="blur(200px)"
                />
            </div>
        </div>
    )
}