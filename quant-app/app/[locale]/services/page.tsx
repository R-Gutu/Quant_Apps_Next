import { getTranslations } from "next-intl/server";
import Image from 'next/image'

import Vector from "@/src/assets/icons/vector.svg";
import Pen from "@/src/assets/icons/pen.svg";
import Security from "@/src/assets/icons/sequrity.svg";
import Puzzle from "@/src/assets/icons/pazle.svg";
import Star from "@/src/assets/icons/Star.svg";
import Moon from "@/src/assets/icons/moon.svg";
import NextProject from "@/src/components/NextProject";
import WhatWeOffer from "@/src/components/WhatWeOffer";
import Accordion from "./Accordion";
import WhyIOS from "./WhyIOS";

const Services = async () => {
  const t = await getTranslations("services");

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
              <WhyIOS src={Pen} title={t("OptimalPerformance")} text={t("OptimalPerformanceDetails")} />
              <WhyIOS src={Security} title={t("HigherSecurity")} text={t("HigherSecurityDetails")} />
              <WhyIOS src={Vector} title={t("ConsistentUiUx")} text={t("ConsistentUiUxDetails")} />
              <WhyIOS src={Puzzle} title={t("DeepPlatformIntegration")} text={t("DeepPlatformIntegrationDetails")} />
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
              <Accordion num={1} title={t("Consultation")} text={t("ConsultationDetails")} />
              <Accordion num={2} title={t("ResearchAndStrategyDevelopment")} text={t("ResearchAndStrategyDevelopmentDetails")} />
              <Accordion num={3} title={t("PlanningAndStrategy")} text={t("PlanningAndStrategyDetails")} />
              <Accordion num={4} title={t("BrandingAndIdentityDesign")} text={t("BrandingAndIdentityDesignDetails")} />
              <Accordion num={5} title={t("WireFramesUiUxDesign")} text={t("WireFramesUiUxDesignDetails")} />
              <Accordion num={6} title={t("DevelopmentAndIntegration")} text={t("DevelopmentAndIntegrationDetails")} />
              <Accordion num={7} title={t("TestingAndQualityAssurance")} text={t("TestingAndQualityAssuranceDetails")} />
              <Accordion num={8} title={t("LaunchAndDeployment")} text={t("LaunchAndDeploymentDetails")} />
              <Accordion num={9} title={t("MaintenanceAndOptimization")} text={t("MaintenanceAndOptimizationDetails")} />
            </div>
          </div>
        </div>
      </section>

      <NextProject />
    </>
  );
};

export default Services;