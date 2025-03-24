import Banner from "@/components/banner";
import { getTranslations } from "next-intl/server";
import Header from "./_components/header";
import Description from "./_components/description";
import Service from "@/lib/types/Service";
import Blur from "@/components/Blur";
import DescriptionType from "@/lib/types/Description";
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("services");

  return {
    title: t("title"),
    description: t("description"),
  };
}

const Page = async () => {
  const t = await getTranslations("services");
  const services: Service[] = [
    {
      header: {
        title: t('Design.title'),
        text: t('Design.text'),
        button: t('Design.button')
      },
      description: [{
        title: t('UXDesign.title'),
        blocks: [
          {
            text: t('UXDesign.blocks.block1'),
            src: "/images/icons/ux1.svg",
            alt: "ux1"
          },
          {
            text: t('UXDesign.blocks.block2'),
            src: "/images/icons/ux2.svg",
            alt: "ux2"
          },
          {
            text: t('UXDesign.blocks.block3'),
            src: "/images/icons/ux3.svg",
            alt: "ux3"
          },
          {
            text: t('UXDesign.blocks.block4'),
            src: "/images/icons/ux4.svg",
            alt: "ux4"
          },
        ],
        className: "mui-md:border-t-[1px] mui-md:border-b-[1px] border-[#6A65FF80]"
      },
      {
        title: t('UIDesign.title'),
        blocks: [
          {
            text: t('UIDesign.blocks.block1'),
            src: "/images/icons/ui1.svg",
            alt: "ui1"
          },
          {
            text: t('UIDesign.blocks.block2'),
            src: "/images/icons/ui2.svg",
            alt: "ui2"
          },
          {
            text: t('UIDesign.blocks.block3'),
            src: "/images/icons/ui3.svg",
            alt: "ui3"
          },
          {
            text: t('UIDesign.blocks.block4'),
            src: "/images/icons/ui4.svg",
            alt: "ui4"
          },
        ],
        className: "mui-md:border-t-[1px] mui-md:border-b-[1px] border-[#6A65FF80]"
      },
      {
        title: t('Branding.title'),
        blocks: [
          {
            text: t('Branding.blocks.block1'),
            src: "/images/icons/branding1.svg",
            alt: "branding1"
          },
          {
            text: t('Branding.blocks.block2'),
            src: "/images/icons/branding2.svg",
            alt: "branding2"
          },
          {
            text: t('Branding.blocks.block3'),
            src: "/images/icons/branding3.svg",
            alt: "branding3"
          },
          {
            text: t('Branding.blocks.block4'),
            src: "/images/icons/branding4.svg",
            alt: "branding4"
          },
        ],
        className: "mui-md:border-t-[1px] border-[#6A65FF80]"
      }]
    },
    {
      header: {
        title: t('Engineering.title'),
        text: t('Engineering.text'),
        button: t('Engineering.button')
      },
      description: [{
        title: t('WebDevelopment.title'),
        blocks: [
          {
            text: t('WebDevelopment.blocks.block1'),
            src: "/images/icons/webdev1.svg",
            alt: "webdev1"
          },
          {
            text: t('WebDevelopment.blocks.block2'),
            src: "/images/icons/webdev2.svg",
            alt: "webdev2"
          },
          {
            text: t('WebDevelopment.blocks.block3'),
            src: "/images/icons/webdev3.svg",
            alt: "webdev3"
          },
          {
            text: t('WebDevelopment.blocks.block4'),
            src: "/images/icons/webdev4.svg",
            alt: "webdev4"
          },
        ],
        className: "mui-md:border-t-[1px] mui-md:border-b-[1px] border-[#6A65FF80]"
      },
      {
        title: t('MobileAppDevelopment.title'),
        blocks: [
          {
            text: t('MobileAppDevelopment.blocks.block1'),
            src: "/images/icons/appdev1.svg",
            alt: "appdev1"
          },
          {
            text: t('MobileAppDevelopment.blocks.block2'),
            src: "/images/icons/appdev2.svg",
            alt: "appdev2"
          },
          {
            text: t('MobileAppDevelopment.blocks.block3'),
            src: "/images/icons/appdev3.svg",
            alt: "appdev3"
          },
          {
            text: t('MobileAppDevelopment.blocks.block4'),
            src: "/images/icons/appdev4.svg",
            alt: "appdev4"
          },
        ],
        className: "mui-md:border-t-[1px] mui-md:border-b-[1px] border-[#6A65FF80]"
      },
      {
        title: t('CRMDevelopment.title'),
        blocks: [
          {
            text: t('CRMDevelopment.blocks.block1'),
            src: "/images/icons/crmdev1.svg",
            alt: "crmdev1"
          },
          {
            text: t('CRMDevelopment.blocks.block2'),
            src: "/images/icons/crmdev2.svg",
            alt: "crmdev2"
          },
          {
            text: t('CRMDevelopment.blocks.block3'),
            src: "/images/icons/crmdev3.svg",
            alt: "crmdev3"
          },
          {
            text: t('CRMDevelopment.blocks.block4'),
            src: "/images/icons/crmdev4.svg",
            alt: "crmdev4"
          },
        ],
        className: "mui-md:border-t-[1px] mui-md:border-b-[1px] border-[#6A65FF80]"
      }]
    },
    {
      header: {
        title: t('ProjectManagement.title'),
        text: t('ProjectManagement.text'),
        button: t('ProjectManagement.button')
      },
      description: [{
        title: t('StrategicPlanning.title'),
        blocks: [
          {
            text: t('StrategicPlanning.blocks.block1'),
            src: "/images/icons/strategic1.svg",
            alt: "strategic1"
          },
          {
            text: t('StrategicPlanning.blocks.block2'),
            src: "/images/icons/strategic2.svg",
            alt: "strategic2"
          },
          {
            text: t('StrategicPlanning.blocks.block3'),
            src: "/images/icons/strategic3.svg",
            alt: "strategic3"
          },
          {
            text: t('StrategicPlanning.blocks.block4'),
            src: "/images/icons/strategic4.svg",
            alt: "strategic4"
          },
        ],
        className: "mui-md:border-t-[1px] mui-md:border-b-[1px] border-[#6A65FF80]"
      },
      {
        title: t('AgileDevelopment.title'),
        blocks: [
          {
            text: t('AgileDevelopment.blocks.block1'),
            src: "/images/icons/agiledev1.svg",
            alt: "agiledev1"
          },
          {
            text: t('AgileDevelopment.blocks.block2'),
            src: "/images/icons/agiledev2.svg",
            alt: "agiledev2"
          },
          {
            text: t('AgileDevelopment.blocks.block3'),
            src: "/images/icons/agiledev3.svg",
            alt: "agiledev3"
          },
          {
            text: t('AgileDevelopment.blocks.block4'),
            src: "/images/icons/agiledev4.svg",
            alt: "agiledev4"
          },
        ],
        className: "mui-md:border-t-[1px] mui-md:border-b-[1px] border-[#6A65FF80]"
      },
      {
        title: t('QualityAssurance.title'),
        blocks: [
          {
            text: t('QualityAssurance.blocks.block1'),
            src: "/images/icons/crmdev1.svg",
            alt: "crmdev1"
          },
          {
            text: t('QualityAssurance.blocks.block2'),
            src: "/images/icons/crmdev2.svg",
            alt: "crmdev2"
          },
          {
            text: t('QualityAssurance.blocks.block3'),
            src: "/images/icons/crmdev3.svg",
            alt: "crmdev3"
          },
          {
            text: t('QualityAssurance.blocks.block4'),
            src: "/images/icons/crmdev4.svg",
            alt: "crmdev4"
          },
        ],
        className: "border-[#6A65FF80]"
      }]
    },
  ]

  return (
    <div className="px-[100px] font-inter max-mui-md:px-[40px] max-smallest:px-[10px]">
      <h1 className="sr-only">Serivces</h1>
      <Banner
        className="mt-[20px] min-[600px]:mt-[60px]"
        src="/images/banners/what-we-offer-banner.png"
        header={t('banner.whatWeOffer.header')}
        subHeader={t('banner.whatWeOffer.subHeader')}
        priority
      />
        {services.map(({header, description}) => (
          <div key={header.title}>
            <Header 
              title={header.title}
              text={header.text}
              button={header.button}
            />
            {description.map((item: DescriptionType, index: number) => (
              <Description 
                key={index}
                title={item.title}
                blocks={item.blocks}
                className={item.className}
              />
            ))}
          </div>
        ))}
        <Banner
          src="/images/banners/what-clients-say-banner.png"
          header={t('banner.excited.header')}
          subHeader={t('banner.excited.subHeader')}
          button={t('banner.excited.button')}
          icon="/images/icons/start_project_logo.svg"
        />
        <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
          <Blur
            color='#836FFF99'
            left="-250px"
            top="350px"
            filter="blur(250px)"
            className=" w-[600px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
          />
          <Blur
            color='#836FFF99'
            right="-250px"
            top="1500px"
            filter="blur(250px)"
            className=" w-[600px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
          />
          <Blur
            color='#836FFF99'
            left="-250px"
            top="2100px"
            filter="blur(250px)"
            className=" w-[600px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
          />
          <Blur
            color='#836FFF99'
            right="-250px"
            top="2700px"
            filter="blur(250px)"
            className=" w-[600px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
          />
          <Blur
            color='#836FFF99'
            left="-250px"
            top="3200px"
            filter="blur(250px)"
            className=" w-[500px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
          />
          <Blur
            color='#836FFF99'
            right="-250px"
            top="3600px"
            filter="blur(250px)"
            className=" w-[500px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
          />
          <Blur
            color='#9C08FF80'
            left="-250px"
            top="4300px"
            filter="blur(250px)"
            className=" w-[500px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
          />
          <Blur
            color='#9C08FF80'
            right="-250px"
            top="4500px"
            filter="blur(250px)"
            className=" w-[400px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
          />
        </div>
    </div>
  );
};

export default Page;