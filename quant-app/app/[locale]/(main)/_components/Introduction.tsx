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
        <>
            <div className="pt-[150px] max-[950px]:pt-[100px]">
                <div className="banner__content">
                    <div className="banner__text">
                        <Typography
                            variant="h1"
                            className="!font-clash"
                            sx={{
                                fontSize: "55px",
                                ":lang(ru)": {
                                    fontSize: "43px",
                                },
                                fontWeight: "600",
                                lineHeight: "74px",
                                color: "white",
                                textAlign: "left",
                                "@media (max-width: 900px)": {  // md breakpoint
                                    fontSize: "40px",
                                    ":lang(ru)": {
                                        fontSize: "40px",
                                    },
                                    lineHeight: "50px",
                                    textAlign: "center",
                                },
                                "@media (max-width: 600px)": {  // sm breakpoint
                                    fontSize: "30px",
                                    ":lang(ru)": {
                                        fontSize: "25px",
                                    },
                                    lineHeight: "40px",
                                }
                            }}
                        >
                            {t("WeBuildAppsThatEmpower")}
                        </Typography>

                        <Typography
                            variant="h2"
                            className="!font-poppins"
                            sx={{
                                // fontFamily: "Poppins",
                                fontSize: "24px",
                                lineHeight: "35px",
                                color: "#EBEBEB",
                                textAlign: "justify",
                                "@media (max-width: 900px)": {
                                    fontSize: "24px",
                                    lineHeight: "30px",
                                    textAlign: "center",
                                },
                                "@media (max-width: 600px)": {
                                    fontSize: "18px",
                                    lineHeight: "25px",
                                    textAlign: "center",
                                }
                            }}
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
        </>
    )
}