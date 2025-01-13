'use client'
import Footer from '@/src/components/Footer'
import Noutbook from '@/src/assets/images/noutbook.png'
import Vector from "@/src/assets/icons/vector.svg";
import Apple from "@/src/assets/icons/apple.svg";
import Android from "@/src/assets/icons/android.svg";
import CrossPlatform from "@/src/assets/icons/cross-platform.svg";
import Settings from "@/src/assets/icons/settings.svg";
import Pen from "@/src/assets/icons/pen.svg";
import Security from "@/src/assets/icons/sequrity.svg";
import Puzzle from "@/src/assets/icons/pazle.svg";
import Star from "@/src/assets/icons/Star.svg";
import Moon from "@/src/assets/icons/moon.svg";
import Banner from "@/src/assets/icons/banner.svg";
import Image from 'next/image'
const Services = () => {
  const onClickToggle = (e:any) => {
    e.currentTarget.closest(".faq__accordion-item").classList.toggle("active");
  };

  return (
    <>
      <div className="container">
        <div className="offer services-offer" id="services">
          <div className="offer__title">
            <h1>What We Offer</h1>
            <p>Custom mobile apps built to amplify your brand’s impact.</p>
          </div>
          <div className="offer__content">
            <div className="offer__img">
            <Image 
                src={Noutbook} 
                alt="Notebook illustration"
                className="offer__img-main"
                priority
              />
              <span className="offer__img-bg"></span>
              <span className="offer__img-bg-2"></span>
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
        </div>
      </div>

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
                  <Image src={Vector} alt="" />
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

      <section className="working-process__section">
        <div className="container">
          <div className="working-process">
            <div className="working-process__title">
              <h1>Our Working Process</h1>
              <p>A Comprehensive Guide to Reaching Your Business Objectives</p>
            </div>
            <div className="working-process__accordion">
              <div className="faq__accordion-item">
                <div
                  className="faq__accordion-header"
                  data-toggle="#ques1"
                  onClick={onClickToggle}
                >
                  <div className="working-process-accordion__header">
                    <span>01</span>
                    <h2>Consultation</h2>
                  </div>
                  <span className="faq__accordion-close"></span>
                </div>
                <div className="faq__accordion-content" id="ques1">
                  <p>
                    Understanding your goals, audience, and project requirements
                    to tailor a personalized solution.
                  </p>
                </div>
              </div>
              <div className="faq__accordion-item">
                <div
                  className="faq__accordion-header"
                  data-toggle="#ques2"
                  onClick={onClickToggle}
                >
                  <div className="working-process-accordion__header">
                    <span>02</span>
                    <h2>Research and Strategy Development</h2>
                  </div>
                  <span className="faq__accordion-close"></span>
                </div>
                <div className="faq__accordion-content" id="ques2">
                  <p>
                    Analyzing your market and creating a strategic plan for a
                    successful product roadmap.
                  </p>
                </div>
              </div>
              <div className="faq__accordion-item">
                <div
                  className="faq__accordion-header"
                  data-toggle="#ques3"
                  onClick={onClickToggle}
                >
                  <div className="working-process-accordion__header">
                    <span>03</span>
                    <h2>Planning and Strategy</h2>
                  </div>
                  <span className="faq__accordion-close"></span>
                </div>
                <div className="faq__accordion-content" id="ques3">
                  <p>
                    Defining key features, timelines, and technical requirements
                    for a streamlined process.
                  </p>
                </div>
              </div>
              <div className="faq__accordion-item">
                <div
                  className="faq__accordion-header"
                  data-toggle="#ques4"
                  onClick={onClickToggle}
                >
                  <div className="working-process-accordion__header">
                    <span>04</span>
                    <h2>Branding and Identity Design</h2>
                  </div>
                  <span className="faq__accordion-close"></span>
                </div>
                <div className="faq__accordion-content" id="ques4">
                  <p>
                    Crafting a unique visual identity and logo that reflects
                    your brand's essence.
                  </p>
                </div>
              </div>
              <div className="faq__accordion-item">
                <div
                  className="faq__accordion-header"
                  data-toggle="#ques5"
                  onClick={onClickToggle}
                >
                  <div className="working-process-accordion__header">
                    <span>05</span>
                    <h2>Wireframes and UI/UX Design</h2>
                  </div>
                  <span className="faq__accordion-close"></span>
                </div>
                <div className="faq__accordion-content" id="ques5">
                  <p>
                    Designing intuitive layouts and user-friendly interfaces to
                    ensure seamless navigation.
                  </p>
                </div>
              </div>
              <div className="faq__accordion-item">
                <div
                  className="faq__accordion-header"
                  data-toggle="#ques6"
                  onClick={onClickToggle}
                >
                  <div className="working-process-accordion__header">
                    <span>06</span>
                    <h2>Development and Integration</h2>
                  </div>
                  <span className="faq__accordion-close"></span>
                </div>
                <div className="faq__accordion-content" id="ques6">
                  <p>
                    Building robust front-end and back-end systems with
                    essential integrations for functionality.
                  </p>
                </div>
              </div>
              <div className="faq__accordion-item">
                <div
                  className="faq__accordion-header"
                  data-toggle="#ques7"
                  onClick={onClickToggle}
                >
                  <div className="working-process-accordion__header">
                    <span>07</span>
                    <h2>Testing and Quality Assurance</h2>
                  </div>
                  <span className="faq__accordion-close"></span>
                </div>
                <div className="faq__accordion-content" id="ques7">
                  <p>
                    Thoroughly testing the product to ensure flawless
                    performance and user satisfaction.
                  </p>
                </div>
              </div>
              <div className="faq__accordion-item">
                <div
                  className="faq__accordion-header"
                  data-toggle="#ques8"
                  onClick={onClickToggle}
                >
                  <div className="working-process-accordion__header">
                    <span>08</span>
                    <h2>Launch and Deployment</h2>
                  </div>
                  <span className="faq__accordion-close"></span>
                </div>
                <div className="faq__accordion-content" id="ques8">
                  <p>
                    Deploying the app or website with full compliance and
                    ensuring a smooth release.
                  </p>
                </div>
              </div>
              <div className="faq__accordion-item">
                <div
                  className="faq__accordion-header"
                  data-toggle="#ques9"
                  onClick={onClickToggle}
                >
                  <div className="working-process-accordion__header">
                    <span>09</span>
                    <h2>Maintenance and Optimization</h2>
                  </div>
                  <span className="faq__accordion-close"></span>
                </div>
                <div className="faq__accordion-content" id="ques9">
                  <p>
                    Providing ongoing updates, support, and performance
                    enhancements for continued success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                // onClick={() => openLetsTalkModal()}
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
    </>
  );
};

export default Services;
