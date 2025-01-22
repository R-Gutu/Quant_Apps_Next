import { Grid2, Typography } from "@mui/material"
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image"
import { getRoadMapByLanguage } from "@/lib/utils/languageUtils";

const TimeLine = async () => {
  const t = await getTranslations("about-us");
  const currentLocale = await getLocale();
  const roadMap = getRoadMapByLanguage(currentLocale);

  return (
    <div>
      <Grid2
        container
        sx={{
          justifyContent: "center",
          paddingLeft: "30px",
          mt: "80px",
        }}
      >
        <Grid2
          container
          gap="1.6vw"
          sx={{
            alignItems: "center",
            height: "fit-content",
            "& h1": {
              fontFamily: `"ClashDisplay", "Inter", sans-serif`,
              color: "white",
              fontSize: "5.3vw",
              fontWeight: "600",
            },
            "& p": {
              fontFamily: `"ClashDisplay", "Inter", sans-serif`,
              color: "white",
              fontSize: "1.5vw",
            },
          }}
        >
          <Grid2 width="fit-content">
            <Typography variant="h1">{t("Timeline")}</Typography>
          </Grid2>

          <Grid2 size={5}>
            <Typography>{t("ShapingFutureMilestone")}</Typography>
          </Grid2>
        </Grid2>

        <Grid2 container height="1vw" justifyContent="end" size={12} mb="50px">
          <span
            style={{
              height: "100%",
              width: "77%",
              backgroundColor: "#555DEB80",
            }}
          />
        </Grid2>
        <Image width={0} height={0} className="w-full h-auto" src={roadMap} alt="RoadMap" key={roadMap} />
      </Grid2>
    </div>
  )
}

export default TimeLine