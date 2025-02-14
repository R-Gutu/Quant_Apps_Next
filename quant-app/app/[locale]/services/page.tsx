import Banner from "@/components/banner";
import { getTranslations } from "next-intl/server";
import Header from "./_components/header";
import Description from "./_components/description";
import data from "@/lib/utils/servicesData";

const Page = async () => {
  const t = await getTranslations("services");

  return (
    <div className="px-[100px] mt-[62px] font-inter max-mui-md:px-[40px] max-smallest:px-[20px]">
      <Banner
            src="/images/what-we-offer-banner.png"
            header="What We Offer?"
            subHeader="Custom mobile apps, CRM solutions, server infrastructure, and websites designed to enhance your brand’s impact."
        />
        {data.map(({header, description}) => (
          <div key={header.title}>
            <Header 
              title={header.title}
              text={header.text}
              button={header.button}
            />
            {description.map((item: any, index: number) => (
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
          src="/images/what-we-offer-banner.png"
          header="What We Offer?"
          subHeader="Custom mobile apps, CRM solutions, server infrastructure, and websites designed to enhance your brand’s impact."
      />
    </div>
  );
};

export default Page;