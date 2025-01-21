import { Grid2, Typography } from "@mui/material"
import { getTranslations } from "next-intl/server";
import TeamMember from "./TeamMember";


export default async function Team() {
    const t = await getTranslations('main');
    return (
        <Grid2 container direction="column">
            <Grid2
                container
                direction="row"
                alignItems="center"
                gap="5px"
                justifyContent="center"
                textAlign="center"
            >
                <Typography
                    sx={{
                        fontSize: "64px",
                        color: "white",
                        fontWeight: "600",
                        fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                    }}
                >
                    {t("Team")}
                </Typography>

                <Typography
                    sx={{
                        fontSize: "18px",
                        maxWidth: "80%",
                        color: "white",
                        fontWeight: "400",
                        fontFamily: "Poppins",
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
        </Grid2>
    )
}