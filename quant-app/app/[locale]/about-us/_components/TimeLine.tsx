import { Grid2, Typography } from "@mui/material"
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image"
import { getRoadMapByLanguage } from "@/lib/utils/languageUtils";

const TimeLine = async () => {
  const t = await getTranslations("about-us");
  const currentLocale = await getLocale();
  const roadMap = getRoadMapByLanguage(currentLocale);

  return (
    <div className="w-full">
      <Grid2
        container
        className="w-full"
        sx={{
          justifyContent: "center",
          mt: "80px",
          width: "100%",
        }}
      >
        <Grid2
          container
          gap="1.6vw"
          sx={{
            alignItems: "center",
            height: "fit-content",
            "& h2": {
              color: "white",
              fontSize: "5.3vw",
              fontWeight: "600",
            },
            "& p": {
              color: "white",
              fontSize: "1.5vw",
            },
          }}
        >
          <Grid2 width="fit-content">
            <Typography className="!font-inter" variant="h2">{t("Timeline")}</Typography>
          </Grid2>

          <Grid2 size={5}>
            <Typography className="!font-inter">{t("ShapingFutureMilestone")}</Typography>
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
        <div className="overflow-hidden w-full">
          <Image width={2000} height={0} className="w-full h-auto max-[800px]:hidden ml-[1%]" src={roadMap.desktop} alt="RoadMap" key={roadMap.desktop} />
          <Image width={2000} height={0} className="!w-[180%] max-w-[165%] h-auto min-[800px]:hidden ml-[2%] mb-[70px]" src={roadMap.mobileLeft} alt="RoadMap" key={roadMap.mobileLeft} />
          <Image width={2000} height={0} className="!w-[180%] max-w-[180%] h-auto min-[800px]:hidden ml-[-80%]" src={roadMap.mobileRight} alt="RoadMap" key={roadMap.mobileRight} />
        </div>
      </Grid2>
    </div>
  )
}

export default TimeLine