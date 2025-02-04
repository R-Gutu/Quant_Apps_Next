import { getTranslations } from "next-intl/server";
import Image from 'next/image'
import NextProject from "../_sections/NextProject";
import WhatWeOffer from "../_sections/WhatWeOffer";
import Accordion from "./_components/Accordion";
import WhyIOS from "./_components/WhyIOS";
import Blur from "@/components/Blur";

const Page = async () => {
  const t = await getTranslations("services");

  return (
    <div>
      <div className="container !pt-[65px]">
        <WhatWeOffer />
      </div>

      <section className="why-ios-section" id="why-native-ios">
        <div className="container">
          <div className="why-ios">
            <h1 className="why-ios__title">
              {t("WhyDoesNativeIosDevelopment")}
            </h1>

            <div className="why-ios__items">
              <WhyIOS src="/icons/pen.svg" title={t("OptimalPerformance")} text={t("OptimalPerformanceDetails")} />
              <WhyIOS src="/icons/security.svg" title={t("HigherSecurity")} text={t("HigherSecurityDetails")} />
              <WhyIOS src="/icons/vector.svg" title={t("ConsistentUiUx")} text={t("ConsistentUiUxDetails")} />
              <WhyIOS src="/icons/puzzle.svg" title={t("DeepPlatformIntegration")} text={t("DeepPlatformIntegrationDetails")} />
            </div>
          </div>
        </div>

      </section>

      <section className="working-process__section">
        <div className="container">
          <div className="working-process">
            <div className="working-process__title">
              <h2 className="text-[60px] max-[900px]:text-[32px] font-clash font-[600] text-white">{t("OurWorkingProcess")}</h2>

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
      <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
        <Blur
              color="rgba(186, 8, 255, 0.8156512605042017)"
              left="0%"
              top="7%"
              width="600px"
              height="600px"
              filter="blur(140px)"
              className="absolute"
        />
        <Blur
            color="#1E50FF"
            left="0%"
            bottom="36%"
            width="300px"
            height="300px"
            filter="blur(120px)"
        />
        <Blur
          color="#9C08FF99"
          right="-2%"
          bottom="30%"
          width="300px"
          height="300px"
          filter="blur(80px)"
        />
        <Blur
          color="#1E50FF"
          left="-2%"
          top="5%"
          width="300px"
          height="300px"
          filter="blur(180px)"
        />
        <Blur
          color="#9C08FF99"
          right="6%"
          top="8%"
          width="400px"
          height="400px"
          filter="blur(140px)"
        />
        <Blur
          color="#1E50FF"
          right="6%"
          top="25%"
          width="400px"
          height="400px"
          filter="blur(120px)"
        />
        <Blur
          color="#9C08FF99"
          left="6%"
          top="30%"
          width="400px"
          height="400px"
          filter="blur(140px)"
        />
        <Image src="/icons/Star.svg" width={50} height={50} alt="star" className="w-auto h-auto bottom-[1200px] left-[30px] why-ios__bg-img max-[900px]:hidden" />
        <Image src="/icons/Star.svg" width={50} height={50} alt="star" className="w-[60px] h-auto bottom-[1570px] left-[840px] why-ios__bg-img max-[900px]:hidden opacity-50" />
        
        <Image src="/icons/Star.svg" width={50} height={50} alt="star" className="w-auto h-auto absolute top-[930px] left-[320px]" />
        <Image src="/icons/Star.svg" width={50} height={50} alt="star" className="w-auto h-auto absolute top-[680px] right-[200px]" />
        <Image src="/icons/Star.svg" width={50} height={50} alt="star" className="w-auto h-auto absolute top-[1150px] right-[430px]" />
        <Image src="/icons/Star.svg" width={50} height={50} alt="star" className="w-auto h-auto absolute top-[1430px] left-[250px]" />
      </div>

      <NextProject />
    </div>
  );
};

export default Page;