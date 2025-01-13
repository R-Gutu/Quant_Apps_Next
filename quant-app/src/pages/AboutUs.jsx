import AppPhone from "../assets/images/app-phone.png";
import Graph from "../assets/icons/graph.svg";
import Star from "../assets/icons/Star.svg";
import Banner from "../assets/icons/banner.svg";
import Intro from "../assets/video/intro.mp4";
import Footer from "../components/Footer";
import {
  handleClickVideoModal,
  handleCloseModal,
  openLetsTalkModal,
} from "../utils/modal";
import "../style/main.css";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClickReadMore = (e) => {
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    btn.parentElement.classList.toggle("active");
    if (parent.classList.contains("active")) {
      btn.querySelector("span").innerText = "Collapse";
    } else {
      btn.querySelector("span").innerText = "Read more";
    }
  };

  return (
    <>
      <div className="about container">
        <div className="about-info">
          <div className="about-info-content">
            <img className="about-info__img" src={AppPhone} alt="" />
            <div className="about-info__text">
              <h1>About us</h1>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Quantica, we may be
                a young company, but we bring a wealth of experience and passion
                to every project we take on. Over the years, we’ve worked with a
                diverse range of clients, delivering innovative solutions that
                don’t just meet expectations—they exceed them. We specialize in
                turning ambitious ideas into fully functional, visually stunning
                apps and websites that not only perform but leave a lasting
                impression.
                <span>
                  Our team is a blend of creative thinkers and technical experts
                  who thrive on solving challenges and pushing boundaries.
                  Whether it’s a sleek mobile app, an engaging website, or a
                  complete digital transformation, we approach every project
                  with fresh eyes, tailoring our work to reflect your unique
                  vision and business goals. What sets us apart is our
                  commitment to collaboration. We believe that the best results
                  come from working closely with our clients, understanding
                  their needs, and staying in constant communication throughout
                  the process. We don’t just develop products—we build
                  partnerships designed to grow with you as your business
                  evolves. At Quantica, we see every project as an opportunity
                  to innovate and create something remarkable. We take pride in
                  crafting experiences that are not only functional and
                  user-friendly but also memorable. Let’s work together to turn
                  your ideas into solutions that drive success and set your
                  business apart in the digital landscape.
                </span>
              </p>
            </div>
          </div>
          <div className="mobile-about-text">
            <p className="about-info__text-mobile">
              Our team is a blend of creative thinkers and technical experts who
              thrive on solving challenges and pushing boundaries. Whether it’s
              a sleek mobile app, an engaging website, or a complete digital
              transformation, we approach every project with fresh eyes,
              tailoring our work to reflect your unique vision and business
              goals. What sets us apart is our commitment to collaboration. We
              believe that the best results come from working closely with our
              clients, understanding their needs, and staying in constant
              communication throughout the process. We don’t just develop
              products—we build partnerships designed to grow with you as your
              business evolves. At Quantica, we see every project as an
              opportunity to innovate and create something remarkable. We take
              pride in crafting experiences that are not only functional and
              user-friendly but also memorable. Let’s work together to turn your
              ideas into solutions that drive success and set your business
              apart in the digital landscape.
            </p>
            <button
              className="fill-btn mobile-about-text__btn"
              onClick={onClickReadMore}
            >
              <span>Read more</span>
            </button>
          </div>
          <span className="about-info-img"></span>
          <span className="about-info-img-2"></span>
          <span className="about-info-img-3"></span>
        </div>
      </div>

      <section className="seo-section">
        <div className="container">
          <div className="seo">
            {/* <div className="seo__head">
                    <h1 className="seo__title-mobile">Meet Our CEO</h1>
                    <div className="seo__avatar"><img src="assets/images/autor.png" alt="" /></div>
                    <div className="seo__about">
                        <h1 className="seo__title">Meet Our CEO</h1>
                        <p className="seo__info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&nbsp;&nbsp;&nbsp;Veaceslav Soltan</span> began his career as a graphic designer in
                            2017,
                            quickly evolving his skills into mobile app development, with a focus on iOS platforms.
                            His unique blend of design expertise and technical innovation led him to found Quantica,
                            where he now leads a team dedicated to creating cutting-edge, user-focused mobile
                            applications. <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As CEO, Veaceslav is committed to delivering high-quality digital solutions that drive
                            growth and elevate businesses in the digital space.
                        </p>
                    </div>
                </div> */}
            <div className="seo-timeline" id="timeline">
              <h1 className="seo-timeline__title">Timeline</h1>
              <div className="seo-timeline__items">
                <h2 className="seo-timeline__item">
                  Started as a freelance graphic designer on Fiverr, offering
                  vector tracing services and building the foundation for future
                  design expertise
                </h2>
                <h2 className="seo-timeline__item">
                  Took the leap into app development with a grocery app project,
                  marking a significatn shift towards digital solutions.
                </h2>
                <h2 className="seo-timeline__item">
                  Created new projects, exploring advanced technologies, setting
                  the stage for the future of Quantica.
                </h2>
              </div>
              <div className="seo-timeline__graph">
                <img src={Graph} alt="" />
              </div>
              <div className="seo-timeline__items">
                <h2 className="seo-timeline__item">
                  Expanded services to include UI/UX and logo design, further
                  developing a diverse desgin portfolio.
                </h2>
                <h2 className="seo-timeline__item">
                  Focused on app development skills, working on more complex and
                  innovative projects.
                </h2>
                <h2 className="seo-timeline__item lunch">
                  Officialy founded Quantica, focusing on iOS app development
                  and design, delivering solutions for clients.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <span className="seo-bg-img seo-blur-1"></span>
        <span className="seo-bg-img seo-blur-2"></span>
        <span className="seo-bg-img seo-blur-3"></span>
        <span className="seo-bg-img seo-blur-4"></span>
        <img src={Star} alt="" className="seo-bg-img seo-star-1" />
        <img src={Star} alt="" className="seo-bg-img seo-star-2" />
        <img src={Star} alt="" className="seo-bg-img seo-star-3" />
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
              <img src={Banner} alt="" />
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

export default AboutUs;
