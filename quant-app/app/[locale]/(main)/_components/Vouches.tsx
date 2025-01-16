'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import ClientStory from "@/src/old-pages/ClientStory";
import { Link } from "@mui/material";
import Image from 'next/image';
import Fi from "@/src/assets/icons/fi.svg";
import { useTranslations } from "next-intl";

export default function Vouches() {
    const t = useTranslations('main');
    return (
        <section className="client-success-stories-section">
            <div className="client-success-stories">
                <h1 className="client-success-stories__title">
                    {t("ClientSuccessStories")}
                </h1>

                <div className="client-success-stories__slider">
                    <Swiper
                        className="swiper-wrapper"
                        centeredSlides={false}
                        slidesPerView="auto"
                        spaceBetween={16}
                        freeMode={false}
                    >
                        <SwiperSlide style={{ width: "fit-content" }}>
                            <ClientStory
                                clientName="Leslie Alexander"
                                text={t("LeslieAlexanderComment")}
                            />
                        </SwiperSlide>

                        <SwiperSlide style={{ width: "fit-content" }}>
                            <ClientStory
                                clientName="Sarah Istwany"
                                clientDescription="Rye Country Day School"
                                text={t("SarahIstwanyComment")}
                            />
                        </SwiperSlide>

                        <SwiperSlide style={{ width: "fit-content" }}>
                            <ClientStory
                                clientName="Barnabas Willis"
                                text={t("BarnabasWillisComment")}
                            />
                        </SwiperSlide>

                        <SwiperSlide style={{ width: "fit-content" }}>
                            <ClientStory
                                clientName="Draft Pick Design"
                                text={t("DraftPickDesignComment")}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <Link
                    href="https://www.fiverr.com/drimba3"
                    className="client-success-stories__fiverr"
                    target="_blank"
                >
                    <span>{t("AllReviewsOn")}</span>

                    <Image src={Fi} alt="" className="fiverr__icon" />
                </Link>
            </div>
        </section>
    )
}