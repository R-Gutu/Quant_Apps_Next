import { Typography, Box } from "@mui/material"
import Image from 'next/image'
import { getTranslations, getLocale } from "next-intl/server";
import { getIntroByLanguage } from "@/lib/utils/languageUtils";
import { Link } from "@/i18n/routing";

export default async function Introduction() {
    const t = await getTranslations('main');
    const currentLocale = await getLocale();
    const intro = getIntroByLanguage(currentLocale);

    return (
        <>
            <div className="banner">
                <div className="banner__content">
                    <div className="banner__text">
                        <Typography
                            sx={{
                                fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                                fontSize: "55px",
                                fontWeight: "600",
                                lineHeight: "74px",
                                color: "white",
                                textAlign: "left",
                                "@media (max-width: 900px)": {  // md breakpoint
                                    fontSize: "40px",
                                    lineHeight: "50px",
                                    textAlign: "center",
                                },
                                "@media (max-width: 600px)": {  // sm breakpoint
                                    fontSize: "30px",
                                    lineHeight: "40px",
                                }
                            }}
                        >
                            {t("WeBuildAppsThatEmpower")}
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: "Poppins",
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
                            className="button lets-talk fill-btn banner__text-btn"
                            href='/talk-modal'
                        >
                            {t("LetsTalk")}
                        </Link>
                    </Box>

                    <div className="banner__video">
                        <Image
                            src="/images/ipad.png"
                            fill
                            sizes=""
                            alt="Ipad"
                            loading="lazy"
                            className="banner__video-img"
                        />
                        <Link className="banner__video-play" href="/video-modal">
                            <span />
                            <p>{t("WatchVideo")}</p>
                        </Link>

                        <a href={intro} className="banner__video-play__mobile">
                            <span></span>

                            <p>{t("WatchVideo")}</p>
                        </a>
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
                        className="button lets-talk fill-btn banner__text-btn"
                        href='/talk-modal'
                    >
                        {t("LetsTalk")}
                    </Link>
                </Box>

                <span className="banner__blur-img banner__blur-1"></span>
                <span className="banner__blur-img banner__blur-2"></span>
                <span className="banner__blur-img banner__blur-3"></span>
                <span className="banner__blur-img banner__blur-4"></span>
            </div>
        </>
    )
}