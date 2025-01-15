// import { Link } from "@/i18n/routing";
// import { getTranslations } from "next-intl/server";

// export default async function HomePage() {
//   const t = await getTranslations("HomePage");
//   return (
//     <div>
//       <h1>{t("title")}</h1>
//       <Link href='/contact'>{t("contact")}</Link>
//     </div>
//   );
// }



"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import i18next from "i18next";
import { useTranslations } from "next-intl";


import {
  Box,
  Button,
  Card,
  Grid2,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import ClientStory from "@/src/old-pages/ClientStory";
import NextProject from "@/src/old-pages/sections/NextProject";
import WhatWeOffer from "@/src/old-pages/sections/WhatWeOffer";

import Arrow from "@/src/assets/icons/arrow.svg";
import Ipad from "@/src/assets/images/ipad.png";
import Quantica from "@/src/assets/icons/Quantica.svg";
import QuanticaFill from "@/src/assets/icons/Quantica-fill.svg";
import Phone1 from "@/src/assets/images/phone-1.png";
import Phone2 from "@/src/assets/images/phone-2.png";
import Phone3 from "@/src/assets/images/phone-3.png";
import Phone4 from "@/src/assets/images/phone-4.png";
import Phone5 from "@/src/assets/images/phone-5.png";
import Phone6 from "@/src/assets/images/phone-6.png";
import Phone7 from "@/src/assets/images/phone-7.png";
import Phone8 from "@/src/assets/images/phone-8.png";
import Phone9 from "@/src/assets/images/phone-9.png";
import Fi from "@/src/assets/icons/fi.svg";
import Roma from "@/src/assets/images/Roma.png";
import LinkedIn from "@/src/assets/images/linkedin.png";
import Veaceslav from "@/src/assets/images/Veaceslav.png";
import { scrollToBlock } from "@/src/utils/scrollLinks";
import {
  handleClickVideoModal,
  handleCloseModal,
  openLetsTalkModal,
  openVideoModal,
} from "@/src/utils/modal";
import { getIntroByLanguage } from "@/src/utils/languageUtils";

import "@/src/style/swiper.css";
import "@/src/style/main.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";


const MainPage = () => {
  const t = useTranslations("main");

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const initialCount = window.innerWidth > 768 ? 6 : 3;
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [intro, setIntro] = useState(getIntroByLanguage(i18next.language));
  const videoRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }


    const handleLanguageChange = (lng: string) => {
      const intro = getIntroByLanguage(lng);
      setIntro(intro);

      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        videoRef.current.load();
      }
    };

    i18next.on("languageChanged", handleLanguageChange);

    return () => {
      i18next.off("languageChanged", (lng) =>
        setIntro(getIntroByLanguage(lng))
      );
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      updateItemsVisibility();
    }
  }, [visibleCount]);

  useEffect(() => {
    const scrollTo = searchParams?.get('scrollTo');

    if (scrollTo) {
      const scrollToBlock = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
          if ('scrollBehavior' in document.documentElement.style) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            element.scrollIntoView();
          }
        }
      };

      setTimeout(() => {
        scrollToBlock(scrollTo);
      }, 100);
    }
  }, [pathname, searchParams]);

  const updateItemsVisibility = () => {
    const items = document.querySelectorAll(".our-work__item");

    items.forEach((item, index) => {
      if (index < visibleCount) {
        item.classList.add("d-flex");
      } else {
        item.classList.remove("d-flex");
      }
    });
  };

  const onClickShowMoreProjects = () => {
    if (initialCount !== visibleCount) {
      setVisibleCount(initialCount);
      scrollToBlock("our-work");
    } else {
      setVisibleCount(visibleCount + 3);
    }
  };

  return (
    <>
      <div className="container">
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
                  fontSize: "20px",
                  lineHeight: "35px",
                  color: "#EBEBEB",
                  textAlign: "justify",
                  [theme.breakpoints.down("md")]: {
                    fontSize: "40px",
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
              onClick={() => openLetsTalkModal()}
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

              <div className="banner__video-play" onClick={openVideoModal}>
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
              onClick={() => openLetsTalkModal()}
            >
              {t("LetsTalk")}
            </button>
          </Box>

          <span className="banner__blur-img banner__blur-1"></span>
          <span className="banner__blur-img banner__blur-2"></span>
          <span className="banner__blur-img banner__blur-3"></span>
          <span className="banner__blur-img banner__blur-4"></span>
        </div>

        <WhatWeOffer />

        <Box sx={{ mt: "50px", display: "flex", justifyContent: "center" }}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              router.push("/services");
            }}
          >
            <button className="fill-btn">{t("ReadMore")}</button>
          </a>
        </Box>
      </div>

      <div className="quantica-slider">
        <Swiper
          centeredSlides={false}
          slidesPerView={2.5}
          spaceBetween={93}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          allowTouchMove={false}
          breakpoints={{ 1100: { slidesPerView: 4 } }}
          modules={[Autoplay]}
        >
          <SwiperSlide className="quantica-slider__slide">
            <Image src={Quantica} alt="" />
          </SwiperSlide>

          <SwiperSlide className="quantica-slider__slide">
            <Image src={QuanticaFill} alt="" />
          </SwiperSlide>

          <SwiperSlide className="quantica-slider__slide">
            <Image src={Quantica} alt="" />
          </SwiperSlide>

          <SwiperSlide className="quantica-slider__slide">
            <Image src={QuanticaFill} alt="" />
          </SwiperSlide>

          <SwiperSlide className="quantica-slider__slide">
            <Image src={Quantica} alt="" />
          </SwiperSlide>

          <SwiperSlide className="quantica-slider__slide">
            <Image src={QuanticaFill} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <section className="owr-work-section" id="projects">
        <div className="container">
          <div className="our-work" id="our-work">
            <div className="our-work__title">
              <h1>{t("OurProjects")}</h1>

              <p>
                {t("InnovationStartsVision")}&nbsp;&nbsp;
                <br className="our-work__title__br" />
                {t("ExploreProjectsTurnedIntoReality")}
              </p>
            </div>

            <div className="our-work__items">
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone1} alt="" />
                </div>

                <div className="our-work__item-text">
                  <h4>Meditation Player App</h4>

                  <p>{t("MeditationPlayerAppDescription")}</p>
                </div>
              </div>
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone2} alt="" />
                </div>
                <div className="our-work__item-text">
                  <h4>Market Delivery Grocery App</h4>

                  <p>{t("MarketDeliveryGroceryAppDescription")}</p>
                </div>
              </div>
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone3} alt="" />
                </div>

                <div className="our-work__item-text">
                  <h4>Home Serveware Shopping App</h4>

                  <p>{t("HomeServeWareShoppingAppDescription")}</p>
                </div>
              </div>
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone4} alt="" />
                </div>

                <div className="our-work__item-text">
                  <h4>Explore the World Travel App</h4>

                  <p>{t("ExploreWorldTravelAppDescription")}</p>
                </div>
              </div>
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone5} alt="" />
                </div>

                <div className="our-work__item-text">
                  <h4>Barkcheck</h4>

                  <p>{t("BarkCheckDescription")}</p>
                </div>
              </div>
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone6} alt="" />
                </div>

                <div className="our-work__item-text">
                  <h4>Tripflick App</h4>

                  <p>{t("TripFlickAppDescription")}</p>
                </div>
              </div>
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone7} alt="" />
                </div>

                <div className="our-work__item-text">
                  <h4>Shape Your Body Fitness App</h4>

                  <p>{t("ShapeYourBodyFitnessAppDescription")}</p>
                </div>
              </div>
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone8} alt="" />
                </div>

                <div className="our-work__item-text">
                  <h4>Hotel Management Dashboard</h4>

                  <p>{t("HotelManagementDashboardDescription")}</p>
                </div>
              </div>
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone9} alt="" />
                </div>

                <div className="our-work__item-text">
                  <h4>Quant-Apps Website</h4>

                  <p>{t("QuantAppsWebsiteDescription")}</p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => onClickShowMoreProjects()}
              sx={{
                mt: "0px",
                borderRadius: "8px",
                minWidth: "220px",
                minHeight: "48px",
                width: "fit-content",
                backgroundColor:
                  initialCount !== visibleCount ? "transparent" : "#6A65FF",
                border:
                  initialCount !== visibleCount ? "1.5px solid white" : "none",
              }}
            >
              <Typography
                sx={{
                  fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "white",
                  textTransform: "none",
                }}
              >
                {initialCount !== visibleCount ? t("Collapse") : t("ShowMore")}

                <Image
                  src={Arrow}
                  alt="Arrow"
                  style={{
                    display: initialCount !== visibleCount ? "inline" : "none",
                    marginLeft: "10px",
                  }}
                />
              </Typography>
            </Button>
          </div>

          <Grid2 container direction="column">
            <Grid2
              sx={{
                ml: { xs: "0px", sm: "20px", md: "20px", lg: "20px" },
              }}
              container
              direction="row"
              alignItems="center"
              gap="5px"
            >
              <Typography
                sx={{
                  fontSize: "64px",
                  color: "white",
                  fontWeight: "600",
                  fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                  ml: { xs: "79px", sm: "-0px", md: "0px", lg: "0px"},
                  // mt: {xs: "-60px", sm: "-0px", md: "0px", lg: "0px"}
                }}
              >
                {t("Team")}
              </Typography>

              <Typography
                sx={{
                  fontSize: "18px",
                  maxWidth: "80%",
                  color: "white",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                  textAlign:  { xs: "center", sm: "left", md: "left", lg: "left"},
                  ml: { xs: "27px", sm: "-0px", md: "0px", lg: "0px"},
                }}
              >
                {t("TeamDescription")}
              </Typography>
            </Grid2>

            <Grid2
              container
              direction="row"
              gap="50px"
              justifyContent="center"
              sx={{
                ml: { xs: "-5px", sm: "20px", md: "20px", lg: "20px" },
                mt: { xs: "20px", sm: "0px", md: "0px", lg: "0px" },
              }}
            >
              <Card
                sx={{
                  borderRadius: "61px",
                  width: { xs: "350px", md: "610px" },
                  height: { xs: "331px", md: "447px" },
                  alignContent: "center",
                }}
              >
                <Grid2
                  margin="auto"
                  maxWidth={{ xs: "317px", md: "516px" }}
                  maxHeight={{ sx: "276px", md: "385px" }}
                >
                  <Grid2
                    container
                    direction="row"
                    sx={{
                      width: { xs: "317px", md: "516px" },
                      height: { xs: "112px", md: "151.36px" },
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid2
                      container
                      direction="row"
                      alignItems="end"
                      justifyContent="space-between"
                      sx={{
                        width: { xs: "277px", md: "372.82px" },
                        height: { xs: "112px", md: "151.36px" },
                      }}
                    >
                      <Image
                        width={isSmallScreen ? 105 : 142}
                        height={isSmallScreen ? 112 : 151}
                        src={Roma}
                        alt="Roma"
                      />

                      <Grid2 container direction="column">
                        <Typography
                          sx={{
                            fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                            fontWeight: "500",
                            fontSize: { xs: "20px", md: "27px" },
                            lineHeight: { xs: "24.6px", md: "33.25px" },
                          }}
                        >
                          Roman Gutu
                        </Typography>

                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: { xs: "18px", md: "24.33px" },
                            lineHeight: "36.49px",
                            mb: "10px",
                          }}
                        >
                          {t("CeoAndFounder")}
                        </Typography>
                      </Grid2>
                    </Grid2>

                    <Link
                      href="https://www.linkedin.com/in/roman-gutu-920693229/"
                      sx={{
                        backgroundColor: "#6A65FF",
                        width: { xs: "34px", md: "46px" },
                        height: { xs: "34px", md: "46px" },
                        borderRadius: "23px",
                      }}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Image 
                        width={50} 
                        height={50} 
                        style={{ width: "50%", height: "auto" }}  
                        src={LinkedIn} alt="linkedin" />
                    </Link>
                  </Grid2>

                  <Box
                    sx={{
                      height: "1.35px",
                      width: { xs: "317px", md: "430px" },
                      backgroundColor: "black",
                      marginBlock: { xs: "20px", md: "40px" },
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: { xs: "18px", md: "24px" },
                      lineHeight: { xs: "27px", md: "36px" },
                      fontFamily: "Poppins",
                    }}
                  >
                    {t("CeoAndFounderDetails")}
                  </Typography>
                </Grid2>
              </Card>

              <Card
                 sx={{
                  borderRadius: "61px",
                  width: { xs: "350px", md: "610px" },
                  height: { xs: "331px", md: "447px" },
                  alignContent: "center",
                }}
              >
                <Grid2
                  margin="auto"
                  maxWidth={{ xs: "317px", md: "516px" }}
                  maxHeight={{ sx: "276px", md: "385px" }}
                >
                  <Grid2
                    container
                    direction="row"
                    sx={{
                      width: { xs: "317px", md: "516px" },
                      height: { xs: "112px", md: "151.36px" },
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid2
                      container
                      direction="row"
                      alignItems="end"
                      justifyContent="space-between"
                      sx={{
                        width: { xs: "277px", md: "372.82px" },
                        height: { xs: "112px", md: "151.36px" },
                      }}
                    >
                      {/* <Image
                        width={isSmallScreen ? 105 : 142}
                        height={isSmallScreen ? 112 : 151}
                        src={Veaceslav}
                        alt="Veaceslav"
                      /> */}

                      <Grid2 container direction="column">
                        <Typography
                          sx={{
                            fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                            fontWeight: "500",
                            fontSize: { xs: "20px", md: "27px" },
                            lineHeight: { xs: "24.6px", md: "33.25px" },
                          }}
                        >
                          Veaceslav Soltan
                        </Typography>

                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: { xs: "18px", md: "24.33px" },
                            lineHeight: "36.49px",
                            mb: "10px",
                          }}
                        >
                          {t("CoFounder")}
                        </Typography>
                      </Grid2>
                    </Grid2>

                    <Link
                      href="https://www.linkedin.com/in/veaceslav-soltan-290072261/"
                      sx={{
                        backgroundColor: "#6A65FF",
                        width: { xs: "34px", md: "46px" },
                        height: { xs: "34px", md: "46px" },
                        borderRadius: "23px",
                      }}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Image width={50} height={50} style={{ width: "50%", height:"auto"}} src={LinkedIn} alt="linkedin" />
                    </Link>
                  </Grid2>

                  <Box
                    sx={{
                      height: "1.35px",
                      width: { xs: "317px", md: "430px" },
                      backgroundColor: "black",
                      marginBlock: { xs: "20px", md: "40px" },
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: { xs: "18px", md: "24px" },
                      lineHeight: { xs: "27px", md: "36px" },
                      fontFamily: "Poppins",
                    }}
                  >
                    {t("CoFounderDetails")}
                  </Typography>
                </Grid2>
              </Card>
            </Grid2>
          </Grid2>
        </div>
      </section>

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

          <a
            href="https://www.fiverr.com/drimba3"
            className="client-success-stories__fiverr"
            target="_blank"
          >
            <span>{t("AllReviewsOn")}</span>

            <Image src={Fi} alt="" className="fiverr__icon" />
          </a>
        </div>
      </section>

      <NextProject />

      <div className="modal" id="video-popup" onClick={handleClickVideoModal}>
        <div className="modal-content">
          <span className="close-modal" onClick={handleCloseModal} />

          <video
            id="localVideo"
            ref={videoRef}
            width="100%"
            controls
            key={intro}
          >
            <source src={intro} type="video/mp4" />

            {t("BrowserDoesNotSupportVideo")}
          </video>
        </div>
      </div>
    </>
  );
};

export default MainPage;
