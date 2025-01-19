import { getTranslations } from "next-intl/server";
import { Box, Grid2, Typography } from "@mui/material";
import NextProject from "@/app/[locale]/_sections/NextProject";
import Blur from "@/components/Blur";

const Page = async () => {
  const t = await getTranslations("privacy-policy");

  return (
    <Grid2
      container
      direction="row"
      sx={{
        "& h1": {
          fontFamily: `"ClashDisplay", "Inter", sans-serif`,
          color: "white",
          fontWeight: "700",
          alignContent: "center",
          fontSize: { xs: "32px", md: "56px" },
          lineHeight: { xs: "39.36px", md: "68.88px" },
        },
        "& h2": {
          fontFamily: "Lato",
          color: "#CACACA",
          fontWeight: "600",
          alignContent: "center",
          fontSize: { xs: "12px", md: "25px" },
          lineHeight: { xs: "14.4px", md: "30px" },
        },
        "& p": {
          fontFamily: `"ClashDisplay", "Inter", sans-serif`,
          color: "white",
          alignContent: "center",
          fontWeight: "500",
          fontSize: { xs: "12px", md: "20px" },
          lineHeight: { xs: "14.76px", md: "27px" },
        },
        "& li": {
          fontFamily: `"ClashDisplay", "Inter", sans-serif`,
          color: "white",
          alignContent: "center",
          fontWeight: "500",
          fontSize: { xs: "12px", md: "20px" },
          lineHeight: { xs: "14.76px", md: "27px" },
        },
      }}
    >
      <Grid2 container size={10.5} margin="auto" gap="20px" direction="column">
        <Grid2 container justifyItems="center" gap="20px" position="relative">
          <Typography variant="h1">{t("PrivacyPolicy")}</Typography>

          <Typography variant="h2">{`${t(
            "LastUpdatedOn"
          )} 5/12/2024`}</Typography>

          <Blur color="blue" width="66.7vw" height="66.7vw" left="0" top="0" filter="blur(10px)" />

          <Blur
            color="purple"
            width="66.7vw"
            height="66.7vw"
            right="0"
            top="0"
            filter="blur(10px)"
          />
        </Grid2>

        <Typography sx={{ mb: "20px" }}>{`Quant-Apps ${t(
          "ShortDescription"
        )}`}</Typography>

        <Grid2>
          <Typography>{`1. ${t("InformationWeCollect")}`}</Typography>

          <Typography>
            {t("WeCollect")}
            <br />
            {t("PersonalInformation")}
            <br />
            {t("ThisIncludesAnyInformation")}
          </Typography>

          <ul style={{ listStyle: "inside", marginLeft: "15px" }}>
            <li>{t("Name")}</li>
            <li>{t("EmailAddress")}</li>
            <li>{t("PhoneNumber")}</li>
            <li>{t("BillingInformation")}</li>
            <li>{t("AnyOtherInformation")}</li>
          </ul>

          <Typography>
            {t("NonPersonalInformation")}
            <br />
            {t("ThisIncludesAutomaticallyCollected")}
          </Typography>

          <ul style={{ listStyle: "inside", marginLeft: "15px" }}>
            <li>{t("IpAddress")}</li>
            <li>{t("BrowserType")}</li>
            <li>{t("OperatingSystem")}</li>
            <li>{t("PagesViewedAndTime")}</li>
            <li>{t("DeviceInformation")}</li>
          </ul>
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2>
          <Typography>{`2. ${t("HowWeUseInformation")}`}</Typography>

          <Typography>{t("WeUseCollected")}</Typography>

          <ul style={{ listStyle: "inside", marginLeft: "15px" }}>
            <li>{t("ToProvideAndManage")}</li>
            <li>{t("ToCommunicateWithYou")}</li>
            <li>{t("ToProcessPaymentsAndManageBillings")}</li>
            <li>{t("ToImproveAndPersonalize")}</li>
            <li>{t("ToAnalyzeAndOptimize")}</li>
            <li>{t("ToComply")}</li>
          </ul>
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2 position="relative">
          <Typography>{`3. ${t("HowWeShareInformation")}`}</Typography>

          <Typography>{t("WeDoNotSellOrRentInformation")}</Typography>

          <ul style={{ listStyle: "inside", marginLeft: "15px" }}>
            <li>{t("ServiceProviders")}</li>
            <li>{t("LegalCompliance")}</li>
            <li>{t("BusinessTransfers")}</li>
          </ul>

          <Blur
            filter="blur(10px)"
            color="purple"
            width="66.7vw"
            height="66.7vw"
            left="0"
            top="20%"
          />
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2>
          <Typography>{`4. ${t("CookiesAndTrackingTechnologies")}`}</Typography>

          <Typography>
            {t("WeUseCookiesAndSimilarTrackingTechnologies")}
          </Typography>
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2>
          <Typography>{`5. ${t("DataSecurity")}`}</Typography>

          <Typography>{t("WeImplementAppropriateTechnical")}</Typography>
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2 position="relative">
          <Typography>{`6. ${t("YourRights")}`}</Typography>

          <Typography>{t("DependingOnJurisdiction")}</Typography>

          <ul style={{ listStyle: "inside", marginLeft: "15px" }}>
            <li>{t("AccessPersonalInformation")}</li>
            <li>{t("CorrectOrUpdate")}</li>
            <li>{t("RequestDeletion")}</li>
            <li>{t("ObjectToProcessingOrRestrict")}</li>
            <li>{t("WithdrawConsentWhereProcessing")}</li>
          </ul>

          <Typography>
            {`${t("ToExerciseContactUsAt")} support@quant-apps.com.`}
          </Typography>

          <Blur filter="blur(10px)" color="blue" width="66.7vw" height="66.7vw" right="0" top="0" />
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2>
          <Typography>{`7. ${t("ThirdPartyLinks")}`}</Typography>

          <Typography>{t("OurWebsiteMayContain")}</Typography>
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2>
          <Typography>{`8. ${t("ChildrenPrivacy")}`}</Typography>

          <Typography>{t("OurServicesAreNotDirected")}</Typography>
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2>
          <Typography>{`9. ${t("ChangesToThisPrivacyPolicy")}`}</Typography>

          <Typography>{t("WeMayUpdateThisPrivacyPolicy")}</Typography>
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2>
          <Typography>{`10. ${t("ContactUs")}`}</Typography>

          <Typography>
            {t("ForAnyQuestionOrConcernsContactUs")}
            <br />
            {`${t("Email")}: support@quant-apps.com`}
            <br />
            {t("RepublicOfMoldova")}
          </Typography>
        </Grid2>

        <Typography sx={{ mt: "20px" }}>{t("ThankYouForTrusting")}</Typography>
      </Grid2>

      <NextProject />
    </Grid2>
  );
};

export default Page;