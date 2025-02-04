import { Grid2, Typography } from "@mui/material"
import { getTranslations } from "next-intl/server";
import TeamMember from "./TeamMember";
import Blur from "@/components/Blur";
import Image from "next/image";


export default async function Team() {
    const t = await getTranslations('main');
    return (
        <Grid2 container direction="column" className="overflow-hidden">
            <Grid2
                container
                direction="row"
                alignItems="center"
                gap="5px"
                justifyContent="center"
                textAlign="center"
            >
                <Typography
                    className="!font-inter"
                    sx={{
                        fontSize: "64px",
                        color: "white",
                        fontWeight: "600",
                    }}
                >
                    {t("Team")}
                </Typography>

                <Typography
                    className="!font-inter"
                    sx={{
                        fontSize: "18px",
                        maxWidth: "80%",
                        color: "white",
                        fontWeight: "400",
                        textAlign: { xs: "center", sm: "center", md: "center", lg: "left" },
                    }}
                >
                    {t("TeamDescription")}
                </Typography>
            </Grid2>

            <Grid2
                container
                direction="row"
                gap="50px"
                justifyContent="center"
                alignItems="center"
                mt="20px"
                className="w-full"
            >
                <TeamMember
                    name="Roman Gutu"
                    src="/images/Roma.png"
                    alt="Roma"
                    title={t("CeoAndFounder")}
                    link="https://www.linkedin.com/in/roman-gutu-920693229/"
                    details={t("CeoAndFounderDetails")}
                />
                <TeamMember
                    name="Veaceslav Soltan"
                    src="/images/Veaceslav.png"
                    alt="Veaceslav"
                    title={t("CoFounder")}
                    link="https://www.linkedin.com/in/veaceslav-soltan-290072261/"
                    details={t("CoFounderDetails")}
                />
            </Grid2>
            <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
                <Blur 
                        color="#1E50FF"
                        left="0%"
                        bottom="6%"
                        width="300px"
                        height="300px"
                        filter="blur(120px)"
                    />
                <Image src="/icons/Star.svg" width={50} height={0} alt="star" className="w-auto h-auto bottom-[80px] left-[30px] why-ios__bg-img max-[900px]:hidden" />
                <Image src="/icons/Star.svg" width={50} height={0} alt="star" className="w-auto h-auto bottom-[-70px] left-[700px] why-ios__bg-img max-[900px]:hidden" />
            </div>
            
        </Grid2>
    )
}