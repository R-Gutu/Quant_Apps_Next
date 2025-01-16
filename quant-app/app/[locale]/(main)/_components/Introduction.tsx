import { useState } from "react";
import { Typography, Box } from "@mui/material"
import Image from 'next/image'
import Ipad from "@/src/assets/images/ipad.png";
import { useLocale } from "next-intl";
import { getIntroByLanguage } from "@/src/utils/languageUtils";
import VideoModal from "@/src/components/VideoModal";
import TalkModal from "@/src/components/TalkPopup/TalkPopup";

export default function Introduction({ t }: any) {
    const currentLocale = useLocale();
    const intro = getIntroByLanguage(currentLocale);

    const [isVidModalOpen, setIsVidModalOpen] = useState(false);
    const handleOpenVidModal = () => setIsVidModalOpen(true);
    const handleCloseVidModal = () => setIsVidModalOpen(false);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseTalkModal = () => setIsModalOpen(false);

    return (
        <>
            <TalkModal
                open={isModalOpen}
                setOpen={setIsModalOpen}
                handleClose={handleCloseTalkModal}
            />
            <VideoModal
                open={isVidModalOpen}
                setOpen={setIsVidModalOpen}
                handleClose={handleCloseVidModal}
                noSupportMessage={t("BrowserDoesNotSupportVideo")}
                src={intro}
            />
            <div className="banner">
                <div className="banner__content">
                    <div className="banner__text">
                        <Typography
                            sx={(theme) => ({
                                fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                                fontSize: "55px",
                                fontWeight: "600",
                                lineHeight: "74px",
                                color: "white",
                                textAlign: "left", // по умолчанию слева (для десктопа)
                                [theme.breakpoints.down("md")]: {
                                    fontSize: "40px",
                                    lineHeight: "50px",
                                    textAlign: "center", // по центру для мобильных
                                },
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "30px",
                                    lineHeight: "40px",
                                },
                            })}
                        >
                            {t("WeBuildAppsThatEmpower")}
                        </Typography>

                        <Typography
                            sx={(theme) => ({
                                fontFamily: "Poppins",
                                fontSize: "24px",
                                lineHeight: "35px",
                                color: "#EBEBEB",
                                textAlign: "justify",
                                [theme.breakpoints.down("md")]: {
                                    fontSize: "24px",
                                    lineHeight: "30px",
                                    textAlign: "center", // по центру для мобильных
                                },
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "18px",
                                    lineHeight: "25px",
                                    textAlign: "center",
                                },
                            })}
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
                        <button
                            className="lets-talk fill-btn banner__text-btn"
                            onClick={() => handleOpenModal()}
                        >
                            {t("LetsTalk")}
                        </button>
                    </Box>

                    <div className="banner__video">
                        <Image
                            src={Ipad}
                            alt="Ipad"
                            loading="lazy"
                            className="banner__video-img"
                        />

                        <div className="banner__video-play" onClick={() => handleOpenVidModal()}>
                            <span />

                            <p>{t("WatchVideo")}</p>
                        </div>

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
                    <button
                        className="lets-talk fill-btn banner__text-btn"
                        onClick={() => handleOpenModal()}
                    >
                        {t("LetsTalk")}
                    </button>
                </Box>

                <span className="banner__blur-img banner__blur-1"></span>
                <span className="banner__blur-img banner__blur-2"></span>
                <span className="banner__blur-img banner__blur-3"></span>
                <span className="banner__blur-img banner__blur-4"></span>
            </div>
        </>
    )
}