import { getTranslations } from "next-intl/server";

import { Box, Grid2, Typography } from "@mui/material";

import NextProject from "@/app/[locale]/_sections/NextProject";
import Blur from "@/components/Blur";
import Image from "next/image";

const Page = async () => {
  const t = await getTranslations("terms-of-use");

  return (
    <Grid2
      container
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
          <Typography variant="h1">{t("TermsOfUse")}</Typography>

          <Typography variant="h2">{`${t(
            "LastUpdatedOn"
          )} 5/12/2024`}</Typography>

        </Grid2>

        <Typography sx={{ mb: "20px" }}>{t("WelcomeSpeech")}</Typography>

        <Grid2>
          <Typography>{`1. ${t("AcceptanceOfTerms")}`}</Typography>

          <Typography>{t("AcceptanceOfTermsDetails")}</Typography>
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2>
          <Typography>{`2. ${t("ServicesProvided")}`}</Typography>

          <Typography>{t("ServicesProvidedDetails")}</Typography>
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2>
          <Typography>{`3. ${t("IntellectualProperty")}`}</Typography>

          <Typography>{t("IntellectualPropertyDetails")}</Typography>
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2 position="relative">
          <Typography>{`4. ${t("UserConduct")}`}</Typography>

          <Typography>{t("UserConductListHeader")}</Typography>

          <ul style={{ listStyle: "inside", marginLeft: "15px" }}>
            <li>{t("UserConductListFirstChild")}</li>

            <li>{t("UserConductListSecondChild")}</li>

            <li>{t("UserConductListThirdChild")}</li>
          </ul>

        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2>
          <Typography>{`5. ${t("DisclaimerOfWarranties")}`}</Typography>

          <Typography>{t("DisclaimerOfWarrantiesDetails")}</Typography>
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2>
          <Typography>{`6. ${t("LimitationOfLiability")}`}</Typography>

          <Typography>{t("LimitationOfLiabilityDetails")}</Typography>
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2>
          <Typography>{`7. ${t("ThirdPartyLinks")}`}</Typography>

          <Typography>{t("ThirdPartyLinksDetails")}</Typography>
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2>
          <Typography>{`8. ${t("Termination")}`}</Typography>

          <Typography>{t("TerminationDetails")}</Typography>
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2>
          <Typography>{`9. ${t("GoverningLaw")}`}</Typography>

          <Typography>{t("GoverningLawDetails")}</Typography>
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2>
          <Typography>{`10. ${t("ModificationsToTerms")}`}</Typography>

          <Typography>{t("ModificationsToTermsDetails")}</Typography>
        </Grid2>

        <Box
          sx={{ backgroundColor: "#555DEB33", height: "12px", width: "100%" }}
        />

        <Grid2 position="relative">
          <Typography>{`11. ${t("ContactUs")}`}</Typography>

          <Typography>
            {t("ForAnyQuestionPleaseContactAt")}
            <br />
            {`${t("Email")}: support@quant-apps.com`}
            <br />
            {t("RepublicOfMoldova")}
          </Typography>
        </Grid2>

        <Typography sx={{ mt: "20px" }}>{t("ThankYouForChoosing")}</Typography>
      </Grid2>

      <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
        <Blur
          color="blue"
          width="46.7vw"
          height="46.7vw"
          left="-10%"
          top="0%"
          filter="blur(10px)"
        />

        <Blur
          color="blue"
          width="56.7vw"
          height="56.7vw"
          right="-15%"
          top="0%"
          filter="blur(10px)"
          className="absolute"
        />

        <Blur
          filter="blur(10px)"
          color="blue"
          width="45vw"
          height="45vw"
          right="0"
          top="20%"
        />

        <Blur
          filter="blur(70px)"
          color="purple"
          width="45vw"
          height="45vw"
          left="-5%"
          top="30%"
        />

        <Blur
          filter="blur(10px)"
          color="purple"
          width="40vw"
          height="40vw"
          right="0"
          top="37%"
        />
        <Image src="/icons/Star.svg" width={50} height={0} alt="star" className="w-[60px] h-auto top-[150px] left-[30px] why-ios__bg-img max-[900px]:hidden" />
        <Image src="/icons/Star.svg" width={50} height={0} alt="star" className="w-[60px] h-auto top-[110px] left-[800px] why-ios__bg-img max-[900px]:hidden" />
        <Image src="/icons/Star.svg" width={50} height={0} alt="star" className="w-[60px] h-auto top-[1050px] right-[540px] why-ios__bg-img max-[900px]:hidden" />
        <Image src="/icons/Star.svg" width={50} height={0} alt="star" className="w-[60px] h-auto top-[1250px] left-[430px] why-ios__bg-img max-[900px]:hidden" />
        <Image src="/icons/Star.svg" width={50} height={0} alt="star" className="w-[60px] h-auto top-[1450px] left-[480px] why-ios__bg-img max-[900px]:hidden" />
        <Image src="/icons/ellipse6.svg" width={50} height={0} alt="ellise" className="why-ios__bg-img w-auto h-auto top-[1590px] left-[600px] max-[900px]:hidden" />
        <NextProject />
      </div>
    </Grid2>
  );
};

export default Page;
