'use client'
import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Image from 'next/image'

import Vector from "@/src/assets/icons/vector.svg";
import Pen from "@/src/assets/icons/pen.svg";
import Security from "@/src/assets/icons/sequrity.svg";
import Puzzle from "@/src/assets/icons/pazle.svg";
import Star from "@/src/assets/icons/Star.svg";
import Moon from "@/src/assets/icons/moon.svg";
import { scrollToBlock } from "@/src/utils/scrollLinks";
import NextProject from "@/src/old-pages/sections/NextProject";
import WhatWeOffer from "@/src/old-pages/sections/WhatWeOffer";

const Services = () => {
  const { t } = useTranslation("services");
  // const location = useLocation();

  // useEffect(() => {
  //   const scrollTo = location.state?.scrollTo;

  //   if (scrollTo) {
  //     scrollToBlock(scrollTo);
  //   } else {
  //     window.scrollTo(0, 0);
  //   }
  // }, [location]);

  const onClickToggle = (e: any) => {
    e.currentTarget.closest(".faq__accordion-item").classList.toggle("active");
  };

  return (
    <>
      <div className="container">
        <WhatWeOffer />
      </div>

      <section className="why-ios-section" id="why-native-ios">
        <div className="container">
          <div className="why-ios">
            <h1 className="why-ios__title">
              {t("WhyDoesNativeIosDevelopment")}
            </h1>

            <div className="why-ios__items">
              <div className="why-ios__item">
                <div className="why-ios__item-img">
                  <Image src={Pen} alt="" />
                </div>

                <div className="why-ios__item-text">
                  <h4>{t("OptimalPerformance")}</h4>

                  <p>{t("OptimalPerformanceDetails")}</p>
                </div>
              </div>

              <div className="why-ios__item">
                <div className="why-ios__item-img">
                  <Image src={Security} alt="" />
                </div>

                <div className="why-ios__item-text">
                  <h4>{t("HigherSecurity")}</h4>

                  <p>{t("HigherSecurityDetails")}</p>
                </div>
              </div>

              <div className="why-ios__item">
                <div className="why-ios__item-img">
                  <Image src={Vector} alt="" />
                </div>

                <div className="why-ios__item-text">
                  <h4>{t("ConsistentUiUx")}</h4>

                  <p>{t("ConsistentUiUxDetails")}</p>
                </div>
              </div>

              <div className="why-ios__item">
                <div className="why-ios__item-img">
                  <Image src={Puzzle} alt="" />
                </div>

                <div className="why-ios__item-text">
                  <h4>{t("DeepPlatformIntegration")}</h4>

                  <p>{t("DeepPlatformIntegrationDetails")}</p>
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
              <h1>{t("OurWorkingProcess")}</h1>

              <p>{t("ComprehensiveGuideBusinessObjectives")}</p>
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

                    <h2>{t("Consultation")}</h2>
                  </div>

                  <span className="faq__accordion-close"></span>
                </div>

                <div className="faq__accordion-content" id="ques1">
                  <p>{t("ConsultationDetails")}</p>
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

                    <h2>{t("ResearchAndStrategyDevelopment")}</h2>
                  </div>

                  <span className="faq__accordion-close"></span>
                </div>

                <div className="faq__accordion-content" id="ques2">
                  <p>{t("ResearchAndStrategyDevelopmentDetails")}</p>
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

                    <h2>{t("PlanningAndStrategy")}</h2>
                  </div>

                  <span className="faq__accordion-close"></span>
                </div>

                <div className="faq__accordion-content" id="ques3">
                  <p>{t("PlanningAndStrategyDetails")}</p>
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

                    <h2>{t("BrandingAndIdentityDesign")}</h2>
                  </div>

                  <span className="faq__accordion-close"></span>
                </div>

                <div className="faq__accordion-content" id="ques4">
                  <p>{t("BrandingAndIdentityDesignDetails")}</p>
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

                    <h2>{t("WireFramesUiUxDesign")}</h2>
                  </div>

                  <span className="faq__accordion-close"></span>
                </div>

                <div className="faq__accordion-content" id="ques5">
                  <p>{t("WireFramesUiUxDesignDetails")}</p>
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

                    <h2>{t("DevelopmentAndIntegration")}</h2>
                  </div>

                  <span className="faq__accordion-close"></span>
                </div>

                <div className="faq__accordion-content" id="ques6">
                  <p>{t("DevelopmentAndIntegrationDetails")}</p>
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

                    <h2>{t("TestingAndQualityAssurance")}</h2>
                  </div>

                  <span className="faq__accordion-close"></span>
                </div>

                <div className="faq__accordion-content" id="ques7">
                  <p>{t("TestingAndQualityAssuranceDetails")}</p>
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

                    <h2>{t("LaunchAndDeployment")}</h2>
                  </div>

                  <span className="faq__accordion-close"></span>
                </div>

                <div className="faq__accordion-content" id="ques8">
                  <p>{t("LaunchAndDeploymentDetails")}</p>
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

                    <h2>{t("MaintenanceAndOptimization")}</h2>
                  </div>

                  <span className="faq__accordion-close"></span>
                </div>

                <div className="faq__accordion-content" id="ques9">
                  <p>{t("MaintenanceAndOptimizationDetails")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NextProject />
    </>
  );
};

export default Services;
