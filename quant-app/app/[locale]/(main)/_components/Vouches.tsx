'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import ClientStory from "./ClientStory"
import { Link } from "@/i18n/routing";
import Image from 'next/image';
import { useTranslations } from "next-intl";

export default function Vouches() {
    const t = useTranslations('main');
    return (
        <section className="client-success-stories-section overflow-hidden">
            <div className="client-success-stories">
                <h3 className="client-success-stories__title">
                    {t("ClientSuccessStories")}
                </h3>

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
                    target="_blank"
                    legacyBehavior
                >
                    <a className="client-success-stories__fiverr">
                        <span>{t("AllReviewsOn")}</span>

                        <Image src="/icons/fi.svg" alt="fiIcon" width={100} height={0} className="w-auto h-auto fiverr__icon" />
                    </a>
                </Link>
            </div>
        </section>
    )
}