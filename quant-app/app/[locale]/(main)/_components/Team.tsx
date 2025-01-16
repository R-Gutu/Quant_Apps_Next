'use client'
import { Grid2, Typography, Card, Box, useMediaQuery, useTheme, Link } from "@mui/material"
import Image from 'next/image';
import Roma from "@/src/assets/images/Roma.png";
import LinkedIn from "@/src/assets/images/linkedin.png";
import Veaceslav from "@/src/assets/images/Veaceslav.png";
import { useTranslations } from "next-intl";


export default function Team() {
    const t = useTranslations('main');
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Grid2 container direction="column">
            <Grid2
                sx={{
                    ml: { xs: "0px", sm: "20px", md: "20px", lg: "20px" },
                }}
                container
                direction="row"
                alignItems="center"
                gap="5px"
            >
                <Typography
                    sx={{
                        fontSize: "64px",
                        color: "white",
                        fontWeight: "600",
                        fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                        ml: { xs: "79px", sm: "-0px", md: "0px", lg: "0px" },
                        // mt: {xs: "-60px", sm: "-0px", md: "0px", lg: "0px"}
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
                        textAlign: { xs: "center", sm: "left", md: "left", lg: "left" },
                        ml: { xs: "27px", sm: "-0px", md: "0px", lg: "0px" },
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
                sx={{
                    ml: { xs: "-5px", sm: "20px", md: "20px", lg: "20px" },
                    mt: { xs: "20px", sm: "0px", md: "0px", lg: "0px" },
                }}
            >
                <Card
                    sx={{
                        borderRadius: "61px",
                        width: { xs: "350px", md: "610px" },
                        height: { xs: "331px", md: "447px" },
                        alignContent: "center",
                    }}
                >
                    <Grid2
                        margin="auto"
                        maxWidth={{ xs: "317px", md: "516px" }}
                        maxHeight={{ sx: "276px", md: "385px" }}
                    >
                        <Grid2
                            container
                            direction="row"
                            sx={{
                                width: { xs: "317px", md: "516px" },
                                height: { xs: "112px", md: "151.36px" },
                                justifyContent: "space-between",
                            }}
                        >
                            <Grid2
                                container
                                direction="row"
                                alignItems="end"
                                justifyContent="space-between"
                                sx={{
                                    width: { xs: "277px", md: "372.82px" },
                                    height: { xs: "112px", md: "151.36px" },
                                }}
                            >
                                <Image
                                    width={isSmallScreen ? 105 : 142}
                                    height={isSmallScreen ? 112 : 151}
                                    src={Roma}
                                    alt="Roma"
                                />

                                <Grid2 container direction="column">
                                    <Typography
                                        sx={{
                                            fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                                            fontWeight: "500",
                                            fontSize: { xs: "20px", md: "27px" },
                                            lineHeight: { xs: "24.6px", md: "33.25px" },
                                        }}
                                    >
                                        Roman Gutu
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontFamily: "Poppins",
                                            fontSize: { xs: "18px", md: "24.33px" },
                                            lineHeight: "36.49px",
                                            mb: "10px",
                                        }}
                                    >
                                        {t("CeoAndFounder")}
                                    </Typography>
                                </Grid2>
                            </Grid2>

                            <Link
                                href="https://www.linkedin.com/in/roman-gutu-920693229/"
                                sx={{
                                    backgroundColor: "#6A65FF",
                                    width: { xs: "34px", md: "46px" },
                                    height: { xs: "34px", md: "46px" },
                                    borderRadius: "23px",
                                }}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Image
                                    width={50}
                                    height={50}
                                    style={{ width: "50%", height: "auto" }}
                                    src={LinkedIn} alt="linkedin" />
                            </Link>
                        </Grid2>

                        <Box
                            sx={{
                                height: "1.35px",
                                width: { xs: "317px", md: "430px" },
                                backgroundColor: "black",
                                marginBlock: { xs: "20px", md: "40px" },
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize: { xs: "18px", md: "24px" },
                                lineHeight: { xs: "27px", md: "36px" },
                                fontFamily: "Poppins",
                            }}
                        >
                            {t("CeoAndFounderDetails")}
                        </Typography>
                    </Grid2>
                </Card>

                <Card
                    sx={{
                        borderRadius: "61px",
                        width: { xs: "350px", md: "610px" },
                        height: { xs: "331px", md: "447px" },
                        alignContent: "center",
                    }}
                >
                    <Grid2
                        margin="auto"
                        maxWidth={{ xs: "317px", md: "516px" }}
                        maxHeight={{ sx: "276px", md: "385px" }}
                    >
                        <Grid2
                            container
                            direction="row"
                            sx={{
                                width: { xs: "317px", md: "516px" },
                                height: { xs: "112px", md: "151.36px" },
                                justifyContent: "space-between",
                            }}
                        >
                            <Grid2
                                container
                                direction="row"
                                alignItems="end"
                                justifyContent="space-between"
                                sx={{
                                    width: { xs: "277px", md: "372.82px" },
                                    height: { xs: "112px", md: "151.36px" },
                                }}
                            >
                                <Image
                                    width={isSmallScreen ? 105 : 142}
                                    height={isSmallScreen ? 112 : 151}
                                    src={Veaceslav}
                                    alt="Veaceslav"
                                />

                                <Grid2 container direction="column">
                                    <Typography
                                        sx={{
                                            fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                                            fontWeight: "500",
                                            fontSize: { xs: "20px", md: "27px" },
                                            lineHeight: { xs: "24.6px", md: "33.25px" },
                                        }}
                                    >
                                        Veaceslav Soltan
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontFamily: "Poppins",
                                            fontSize: { xs: "18px", md: "24.33px" },
                                            lineHeight: "36.49px",
                                            mb: "10px",
                                        }}
                                    >
                                        {t("CoFounder")}
                                    </Typography>
                                </Grid2>
                            </Grid2>

                            <Link
                                href="https://www.linkedin.com/in/veaceslav-soltan-290072261/"
                                sx={{
                                    backgroundColor: "#6A65FF",
                                    width: { xs: "34px", md: "46px" },
                                    height: { xs: "34px", md: "46px" },
                                    borderRadius: "23px",
                                }}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Image width={50} height={50} style={{ width: "50%", height: "auto" }} src={LinkedIn} alt="linkedin" />
                            </Link>
                        </Grid2>

                        <Box
                            sx={{
                                height: "1.35px",
                                width: { xs: "317px", md: "430px" },
                                backgroundColor: "black",
                                marginBlock: { xs: "20px", md: "40px" },
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize: { xs: "18px", md: "24px" },
                                lineHeight: { xs: "27px", md: "36px" },
                                fontFamily: "Poppins",
                            }}
                        >
                            {t("CoFounderDetails")}
                        </Typography>
                    </Grid2>
                </Card>
            </Grid2>
        </Grid2>
    )
}