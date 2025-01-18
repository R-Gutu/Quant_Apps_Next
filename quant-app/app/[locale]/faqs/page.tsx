import { getTranslations } from "next-intl/server";

import FaqAccordionItem from "./_components/FaqAccordionItem"

const Faqs = async () => {
  const t = await getTranslations("faqs");

  return (
    <section className="faq-section" id="faq">
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

      <span className="contact-us-img" />
      <span className="contact-us-img-2" />
    </section>
  );
};

export default Faqs;
