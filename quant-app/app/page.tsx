"use client"
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import Monitor from "@/src/assets/images/monitor.png";

import Intro from "@/src/assets/video/intro.mp4";
import Noutbook from "@/src/assets/images/noutbook.png";
import Vector from "@/src/assets/icons/vector.svg";
import Apple from "@/src/assets/icons/apple.svg";
import Android from "@/src/assets/icons/android.svg";
import CrossPlatform from "@/src/assets/icons/cross-platform.svg";
import Settings from "@/src/assets/icons/settings.svg";
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
import Pen from "@/src/assets/icons/pen.svg";
import Security from "@/src/assets/icons/sequrity.svg";
import Puzzle from "@/src/assets/icons/pazle.svg";
import Star from "@/src/assets/icons/Star.svg";
import Moon from "@/src/assets/icons/moon.svg";
import VoteStar from "@/src/assets/icons/vote-star.svg";
import ReviewAvatar0 from "@/src/assets/images/review-avatar-0.jpg";
import ReviewAvatar1 from "@/src/assets/images/review-avatar-1.jpg";
import ReviewAvatar2 from "@/src/assets/images/review-avatar-2.jpg";
import ReviewAvatar3 from "@/src/assets/images/review-avatar-3.jpg";
import Fi from "@/src/assets/icons/fi.svg";
import Banner from "@/src/assets/icons/banner.svg";
import { scrollToBlock } from "@/src/utils/scroll-links";
import Footer from "@/src/components/Footer";
import {
  handleClickVideoModal,
  handleCloseModal,
  openLetsTalkModal,
  openVideoModal,
} from "@/src/utils/modal";

import "@/src/style/swiper.css";
import "@/src/style/main.css";

const MainPage = () => {
  const initialCount = window.innerWidth > 768 ? 6 : 3;
  const [visibleCount, setVisibleCount] = useState(initialCount);

  useEffect(() => {
    updateItemsVisibility();
    // updateButtonState();
  }, [visibleCount]);

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

  // const updateButtonState = () => {
  //   const items = document.querySelectorAll(".our-work__item");
  //   const btn = document.querySelector(".our-work__btn");

  //   if (visibleCount >= items.length) {
  //     btn.classList.add("active");
  //     btn.querySelector("span").innerText = "Collapse designs";
  //   } else {
  //     btn.classList.remove("active");
  //     btn.querySelector("span").innerText = "Show more projects";
  //   }
  // };

  // const onClickOutWork = () => {
  //   const btn = document.querySelector(".our-work__btn");
  //   if (btn.classList.contains("active")) {
  //     setVisibleCount(initialCount);
  //     scrollToBlock("our-work");
  //   } else {
  //     setVisibleCount(visibleCount + 3);
  //   }
  // };

  return (
    <>
      <div className="container">
        <div className="banner">
          <div className="banner__content">
            <div className="banner__text">
              <h1 className="banner__text-title">
                We Build Web, iOS Mobile Apps That Empower Your Business
              </h1>
              <p className="banner__text-description">
                We specialize in building mobile apps that empower businesses by
                delivering solutions. Our apps are designed to maximize user
                engagement and drive growth for your company.
              </p>
              <button
                className="lets-talk fill-btn banner__text-btn"
                onClick={() => openLetsTalkModal()}
              >
                Let’s Talk
              </button>
            </div>
            <div className="banner__video">
              <Image
                src={Monitor}
                alt="Monitor"
                loading="lazy"
                className="banner__video-img"
              />
              <div className="banner__video-play" onClick={openVideoModal}>
                <span></span>
                <p>Watch video</p>
              </div>
              <a href={Intro} className="banner__video-play__mobile">
                <span></span>
                <p>Watch video</p>
              </a>
            </div>
          </div>
          <span className="banner__blur-img banner__blur-1"></span>
          <span className="banner__blur-img banner__blur-2"></span>
          <span className="banner__blur-img banner__blur-3"></span>
          <span className="banner__blur-img banner__blur-4"></span>
        </div>

        <div className="offer" id="services">
          <div className="offer__title">
            <h1>What We Offer</h1>
            <p>Custom mobile apps built to amplify your brand’s impact.</p>
          </div>
          <div className="offer__content">
            <div className="offer__img">
              <Image src={Noutbook} alt="" className="offer__img-main" />
              <span className="offer__img-bg"></span>
            </div>
            <div className="offer__text">
              <h2 className="offer__text-title">
                Helping You Build Mobile Solutions That Drive Results
              </h2>
              <div className="offer__items">
                <div className="offer__item">
                  <div className="offer__item-img">
                    <Image src={Vector} alt="" />
                  </div>
                  <div className="offer__item-text">
                    <h3>Tailored Mobile App Design</h3>
                    <p>
                      Crafting visually stunning and user-friendly interfaces
                      for seamless app experiences.
                    </p>
                  </div>
                </div>
                <div className="offer__item">
                  <div className="offer__item-img">
                    <Image src={Apple} alt="" />
                  </div>
                  <div className="offer__item-text">
                    <h3>iOS App Development</h3>
                    <p>
                      Building high-performance apps, optimized for speed,
                      security, and scalability.
                    </p>
                  </div>
                </div>
                <div className="offer__item">
                  <div className="offer__item-img">
                    <Image src={Android} alt="" />
                  </div>
                  <div className="offer__item-text">
                    <h3>Android App Development</h3>
                    <p>Building secure and scalable apps for Android devices</p>
                  </div>
                </div>
                <div className="offer__item">
                  <div className="offer__item-img">
                    <Image src={CrossPlatform} alt="" />
                  </div>
                  <div className="offer__item-text">
                    <h3>Cross Platform -React Native</h3>
                    <p>
                      Creating versatile apps that work seamlessly across
                      platforms.
                    </p>
                  </div>
                </div>
                <div className="offer__item">
                  <div className="offer__item-img">
                    <Image src={Settings} alt="" />
                  </div>
                  <div className="offer__item-text">
                    <h3>Ongoing Support & Maintenance</h3>
                    <p>
                      Ensuring your app continues to perform with regular
                      updates and enhancements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/services");
            }}
          >
            <button className="fill-btn">Read more</button>
          </a>
        </div>
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
              <h1>Our Projects</h1>
              <p>
                Innovation starts with a vision. &nbsp;&nbsp;
                <br className="our-work__title__br" />
                Explore the exciting projects we’ve turned into reality!
              </p>
            </div>
            <div className="our-work__items">
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone1} alt="" />
                </div>
                <div className="our-work__item-text">
                  <h4>Meditation Player App</h4>
                  <p>
                    A sleek mobile application designed for meditation, offering
                    users a calm and minimalistic interface to play guided
                    meditation sessions and soothing sounds.
                  </p>
                </div>
              </div>
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone2} alt="" />
                </div>
                <div className="our-work__item-text">
                  <h4>Market Delivery Grocery App</h4>
                  <p>
                    A grocery delivery platform that allows users to browse and
                    order fresh produce and other groceries, streamlining the
                    process of selecting, ordering, and receiving essentials.
                  </p>
                </div>
              </div>
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone3} alt="" />
                </div>
                <div className="our-work__item-text">
                  <h4>Home Serveware Shopping App</h4>
                  <p>
                    A modern e-commerce app focused on home and kitchen
                    serveware, featuring curated collections of stylish and
                    functional items for home use.
                  </p>
                </div>
              </div>
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone4} alt="" />
                </div>
                <div className="our-work__item-text">
                  <h4>Explore the World Travel App</h4>
                  <p>
                    A user-friendly travel app that enables users to discover
                    new destinations, compare flights, book accommodations, and
                    explore local attractions—all in one place.
                  </p>
                </div>
              </div>
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone5} alt="" />
                </div>
                <div className="our-work__item-text">
                  <h4>Barkcheck</h4>
                  <p>
                    The BarkCheck App helps pet owners manage vaccinations, vet
                    visits, nutrition plans, and find nearby groomers, all in a
                    simple, user-friendly interface.
                  </p>
                </div>
              </div>
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone6} alt="" />
                </div>
                <div className="our-work__item-text">
                  <h4>Tripflick App</h4>
                  <p>
                    The TripFlick App is a travel planning tool that simplifies
                    trip organization, offering personalized itineraries,
                    destination recommendations, and seamless booking—all in a
                    vibrant, user-friendly interface.
                  </p>
                </div>
              </div>
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone7} alt="" />
                </div>
                <div className="our-work__item-text">
                  <h4>Shape Your Body Fitness App</h4>
                  <p>
                    A fitness app tailored to help users achieve their workout
                    goals, offering personalized training plans, progress
                    tracking, and motivational content in a sleek interface.
                  </p>
                </div>
              </div>
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone8} alt="" />
                </div>
                <div className="our-work__item-text">
                  <h4>Hotel Management Dashboard</h4>
                  <p>
                    An intuitive iPad app that simplifies hotel operations with
                    real-time insights into reservations, room statuses, and
                    guest details, ensuring efficient workflows and excellent
                    service.
                  </p>
                </div>
              </div>
              <div className="our-work__item">
                <div className="our-work__item-img">
                  <Image src={Phone9} alt="" />
                </div>
                <div className="our-work__item-text">
                  <h4>Quant-Apps Website</h4>
                  <p>
                    A sleek and modern website showcasing our expertise in web
                    and iOS app development—designed and built by our team.
                  </p>
                </div>
              </div>
            </div>

            <div className="our-work__btn" onClick={() => onClickOutWork()}>
              <span>Show more projects</span>
            </div>
          </div>
        </div>
      </section>

      <section className="why-ios-section" id="why-native-ios">
        <div className="container">
          <div className="why-ios">
            <h1 className="why-ios__title">
              Why does native iOS development outshine cross-platform
              alternatives?
            </h1>
            <div className="why-ios__items">
              <div className="why-ios__item">
                <div className="why-ios__item-img">
                  <Image src={Pen} alt="" />
                </div>
                <div className="why-ios__item-text">
                  <h4>Optimal Performance</h4>
                  <p>
                    Native apps run faster, handle graphics better, and consume
                    less battery, making them ideal for high-performance apps
                    like games or applications that rely heavily on computing
                    power or complex graphics.
                  </p>
                </div>
              </div>
              <div className="why-ios__item">
                <div className="why-ios__item-img">
                  <Image src={Security} alt="" />
                </div>
                <div className="why-ios__item-text">
                  <h4>Higher Security</h4>
                  <p>
                    .Native apps can make full use of the latest security
                    features provided by iOS. Cross-platform solutions, due to
                    their architecture, may not be as flexible in leveraging
                    iOS’s built-in security tools.
                  </p>
                </div>
              </div>
              <div className="why-ios__item">
                <div className="why-ios__item-img">
                  <Image src={Puzzle} alt="" />
                </div>
                <div className="why-ios__item-text">
                  <h4>Consistent UI and UX</h4>
                  <p>
                    Native apps follow Apple's design rules, so they feel more
                    natural and easy to use on iPhones. They also provide a
                    smoother and more intuitive experience that iPhone users are
                    already familiar with, making the app easier to navigate and
                    enjoy.
                  </p>
                </div>
              </div>
              <div className="why-ios__item">
                <div className="why-ios__item-img">
                  <Image src={Puzzle} alt="" />
                </div>
                <div className="why-ios__item-text">
                  <h4>Deep Platform Integration</h4>
                  <p>
                    Native apps can use all the iPhone’s features like Face ID,
                    Siri, and more, and they easily connect with other services
                    like APIs and databases. This gives developers more freedom
                    to build apps that work better and offer more features.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="lets-talk why-ios__item-btn fill-btn"
              onClick={() => openLetsTalkModal()}
            >
              Let’s Talk
            </button>
          </div>
        </div>
        <span className="why-ios__bg-img why-ios__blur-1"></span>
        <span className="why-ios__bg-img why-ios__blur-2"></span>
        <Image src={Star} alt="" className="why-ios__star-1 why-ios__bg-img" />
        <Image src={Star} alt="" className="why-ios__star-2 why-ios__bg-img" />
        <Image src={Star} alt="" className="why-ios__star-3 why-ios__bg-img" />
        <Image src={Moon} alt="" className="why-ios__moon why-ios__bg-img" />
        <Image src={Moon} alt="" className="why-ios__moon-2 why-ios__bg-img" />
      </section>

      {/* centeredSlides: false,
    slidesPerView: 1.2,
    spaceBetween: 16,
    freeMode: false,
    breakpoints: {
        720: {
            spaceBetween: 32,
            slidesPerView: 2.5,
        },
    }, */}

      <section className="reviews-section">
        <div className="reviews">
          <h1 className="reviews__title">
            What people are saying about Quantica
          </h1>
          <div className="reviews__slider">
            <Swiper
              className="swiper-wrapper"
              centeredSlides={false}
              slidesPerView={1.2}
              spaceBetween={16}
              freeMode={false}
              breakpoints={{ 720: { spaceBetween: 32, slidesPerView: 2.5 } }}
            >
              <SwiperSlide className="swiper-slide reviews__slide">
                <div className="reviews__slide-content">
                  <div className="reviews__slide-head">
                    <div className="reviews__slide-avatar">
                      <Image src={ReviewAvatar0} alt="" />
                    </div>
                    <div className="reviews__slide-user-info">
                      <a>Leslie Alexander</a>
                    </div>
                  </div>
                  <p className="reviews__slide-description">
                    Very good work looking forward to working together again.
                  </p>
                </div>
                <div className="reviews__slide-votes">
                  <Image src={VoteStar} alt="" />
                  <Image src={VoteStar} alt="" />
                  <Image src={VoteStar} alt="" />
                  <Image src={VoteStar} alt="" />
                  <Image src={VoteStar} alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide reviews__slide">
                <div className="reviews__slide-content">
                  <div className="reviews__slide-head">
                    <div className="reviews__slide-avatar">
                      <Image src={ReviewAvatar1} alt="" />
                    </div>
                    <div className="reviews__slide-user-info">
                      <a>Sarah Istwany</a>
                      <p>Rye Country Day School</p>
                    </div>
                  </div>
                  <p className="reviews__slide-description">
                    GREAT! So quick and easy to work with. We are super
                    satisfied so far and will continue to work.
                  </p>
                </div>
                <div className="reviews__slide-votes">
                  <Image src={VoteStar} alt="" />
                  <Image src={VoteStar} alt="" />
                  <Image src={VoteStar} alt="" />
                  <Image src={VoteStar} alt="" />
                  <Image src={VoteStar} alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide reviews__slide">
                <div className="reviews__slide-content">
                  <div className="reviews__slide-head">
                    <div className="reviews__slide-avatar">
                      <Image src={ReviewAvatar2} alt="" />
                    </div>
                    <div className="reviews__slide-user-info">
                      <a>Barnabas Willis</a>
                    </div>
                  </div>
                  <p className="reviews__slide-description">
                    It was great working. Definitely will be using him
                    again...already in the process of placing another order!
                  </p>
                </div>
                <div className="reviews__slide-votes">
                  <Image src={VoteStar} alt="" />
                  <Image src={VoteStar} alt="" />
                  <Image src={VoteStar} alt="" />
                  <Image src={VoteStar} alt="" />
                  <Image src={VoteStar} alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide reviews__slide">
                <div className="reviews__slide-content">
                  <div className="reviews__slide-head">
                    <div className="reviews__slide-avatar">
                      <Image src={ReviewAvatar3} alt="" />
                    </div>
                    <div className="reviews__slide-user-info">
                      <a>Draft Pick Desin</a>
                    </div>
                  </div>
                  <p className="reviews__slide-description">
                    10 out of 10 will recommend
                  </p>
                </div>
                <div className="reviews__slide-votes">
                  <Image src={VoteStar} alt="" />
                  <Image src={VoteStar} alt="" />
                  <Image src={VoteStar} alt="" />
                  <Image src={VoteStar} alt="" />
                  <Image src={VoteStar} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <a
            href="https://www.fiverr.com/drimba3"
            className="reviews__fiverr"
            target="_blank"
          >
            <span>All reviews can be viewed on</span>
            <Image src={Fi} alt="" className="fiverr__icon" />
          </a>
        </div>
        <span className="reviews__blur"></span>
      </section>

      <section className="next-project-section">
        <div className="container">
          <div className="next-project">
            <div className="next-project__text">
              <h1 className="next-project__text-title">
                Excited to work together on your next project?
              </h1>
              <p className="next-project__text-description">
                Let’s turn your ideas into reality with custom app development
                and design solutions tailored to your needs.
              </p>
              <button
                className="lets-talk next-project__text-btn"
                onClick={() => openLetsTalkModal()}
              >
                Let’s Talk
              </button>
            </div>
            <div className="next-project__img">
              <Image src={Banner} alt="" />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <div className="modal" id="video-popup" onClick={handleClickVideoModal}>
        <div className="modal-content">
          <span className="close-modal" onClick={handleCloseModal}></span>
          <video id="localVideo" width="100%" controls>
            <source src={Intro} type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      </div>
    </>
  );
};

export default MainPage;
