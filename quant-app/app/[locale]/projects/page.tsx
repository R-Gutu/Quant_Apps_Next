import Banner from "@/components/banner"
import Block from "./_components/Block"
import Projects from "@/lib/types/Projects"
import HeadText from "../_components/HeadText"
import { getTranslations } from "next-intl/server"
import type { Metadata } from 'next'
import { strong } from "@/lib/utils/utils"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("projects");

  return {
    title: t("title"),
    description: t("description"),
  };
}

const ProjectsPage = async () => {
  const t = await getTranslations("projects");
  
  const projects: Projects[] = [
    {
      title: t('items.0.title'),
      src: t('items.0.image'),
      alt: t('items.0.alt'),
      linkname: t('items.0.linkName'),
      link: t('items.0.link'),
      text: t.rich('items.0.description', strong),
      "className": "small:border-r-[1px] small:border-[#6A65FF80]"
    },
    {
      title: t('items.1.title'),
      src: t('items.1.image'),
      alt: t('items.1.alt'),
      linkname: t('items.1.linkName'),
      link: t('items.1.link'),
      text: t.rich('items.1.description', strong),
       "className": "small:border-r-[1px] small:border-[#6A65FF80]"
    },
    {
      title: t('items.2.title'),
      src: t('items.2.image'),
      alt: t('items.2.alt'),
      linkname: t('items.2.linkName'),
      link: t('items.2.link'),
      text: t.rich('items.2.description', strong),
      "className": "small:border-r-[1px] small:border-[#6A65FF80]"
    },
    {
      title: t('items.3.title'),
      src: t('items.3.image'),
      alt: t('items.3.alt'),
      linkname: t('items.3.linkName'),
      link: t('items.3.link'),
      text: t.rich('items.3.description', strong),
      "className": "small:border-r-[1px] small:border-[#6A65FF80]"
    },
    {
      title: t('items.4.title'),
      src: t('items.4.image'),
      alt: t('items.4.alt'),
      linkname: t('items.4.linkName'),
      link: t('items.4.link'),
      text: t.rich('items.4.description', strong),
      "className": "small:border-r-[1px] small:border-[#6A65FF80]"
    },
    {
      title: t('items.5.title'),
      src: t('items.5.image'),
      alt: t('items.5.alt'),
      linkname: t('items.5.linkName'),
      link: t('items.5.link'),
      text: t.rich('items.5.description', strong),
      "className": "small:border-r-[1px] small:border-[#6A65FF80]"
    },
    {
      title: t('items.6.title'),
      src: t('items.6.image'),
      alt: t('items.6.alt'),
      linkname: t('items.6.linkName'),
      link: t('items.6.link'),
      text: t.rich('items.6.description', strong),
      "className": "small:border-r-[1px] small:border-[#6A65FF80]"
    },
    {
      title: t('items.7.title'),
      src: t('items.7.image'),
      alt: t('items.7.alt'),
      linkname: t('items.7.linkName'),
      link: t('items.7.link'),
      text: t.rich('items.7.description', strong),
      className: "small:border-r-[1px] small:border-[#6A65FF80]"
    },
    {
      title: t('items.8.title'),
      src: t('items.8.image'),
      alt: t('items.8.alt'),
      linkname: t('items.8.linkName'),
      link: t('items.8.link'),
      text: t.rich('items.8.description', strong),
      "className": "small:border-r-[1px] small:border-[#6A65FF80]"
    },
    {
      title: t('items.9.title'),
      src: t('items.9.image'),
      alt: t('items.9.alt'),
      linkname: t('items.9.linkName'),
      link: t('items.9.link'),
      text: t.rich('items.9.description', strong),
      "className": "small:border-r-[1px] small:border-[#6A65FF80]"
    },
    {
      title: t('items.10.title'),
      src: t('items.10.image'),
      alt: t('items.10.alt'),
      linkname: t('items.10.linkName'),
      link: t('items.10.link'),
      text: t.rich('items.10.description', strong),
      "className": "small:border-r-[1px] small:border-[#6A65FF80]"
    }
  ];

  return (
    <div className="px-[100px] max-small:px-[40px] max-smallest:px-[20px] font-inter">
      <Banner
        className="mt-[20px] min-[600px]:mt-[60px]"
        src={t('banner.image')}
        header={t('banner.title')}
        subHeader={t('banner.subtitle')}
        priority
      />
      <HeadText
        title={t('header.title')}
        text={t.rich('header.text', strong)}
      />
      <div className="grid grid-cols-2 max-small:grid-cols-1">
        {projects.map((item, index) => (
          <Block key={index} {...item}/>
        ))}
      </div>
      <Banner
        src={t('callToAction.image')}
        header={t('callToAction.title')}
        subHeader={t.rich('callToAction.subtitle', strong)}
        button={t('callToAction.buttonText')}
        icon={t('callToAction.buttonIcon')}
      />
    </div>
  )
}

export default ProjectsPage