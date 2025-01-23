import { getTranslations } from "next-intl/server";

import FaqAccordionItem from "./_components/FaqAccordionItem"

const Page = async () => {
  const t = await getTranslations("faqs");

  return (
    <section className="faq-section py-[160px]" id="faq">
      <div className="container">
        <div className="faq">
          <h1 className="faq__title">FAQs</h1>
          <div className="faq__accordion">
            <div className="faq__accordion-left">
              <FaqAccordionItem
                header={t("WhatServiceYouOffer")}
                content={<p>{t("WhatServiceYouOfferDetails")}</p>}
              />

              <FaqAccordionItem
                header={t("WhatPlatformYouDevelop")}
                content={<p>{t("WhatPlatformYouDevelopDetails")}</p>}
              />

              <FaqAccordionItem
                header={t("CanBuildCustomApp")}
                content={<p>{t("CanBuildCustomAppDetails")}</p>}
              />

              <FaqAccordionItem
                header={t("HowLongItTake")}
                content={<p>{t("HowLongItTakeDetails")}</p>}
              />
            </div>

            <div className="faq__accordion-right">
              <FaqAccordionItem
                header={t("HowMuchCost")}
                content={<p>{t("HowMuchCostDetails")}</p>}
              />

              <FaqAccordionItem
                header={t("OfferSupportAfter")}
                content={<p>{t("OfferSupportAfterDetails")}</p>}
              />

              <FaqAccordionItem
                header={t("WhatSetsApart")}
                content={<p>{t("WhatSetsApartDetails")}</p>}
              />

              <FaqAccordionItem
                header={t("HowGetStarted")}
                content={<p>{t("HowGetStartedDetails")}</p>}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
        <span className="contact-us-img" />
        <span className="contact-us-img-2 translate-y-[20%]" />
      </div>
    </section>
  );
};

export default Page;
