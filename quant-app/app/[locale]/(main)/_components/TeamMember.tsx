import Image from 'next/image';
import { Grid2, Card, Typography, Box, Link } from "@mui/material";
import TeamMemberType from '@/lib/types/TeamMemberType';

export default async function TeamMember({ name, title, details, src, alt, link }: TeamMemberType) {
    return (
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
                            width={142}
                            height={0}
                            className="w-[105px] h-[112px] mui-md:w-[142px] mui-md:h-[151px]"
                            src={src}
                            alt={alt}
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
                                {name}
                            </Typography>

                            <Typography
                                sx={{
                                    fontFamily: "Poppins",
                                    fontSize: { xs: "18px", md: "24.33px" },
                                    lineHeight: "36.49px",
                                    mb: "10px",
                                }}
                            >
                                {title}
                            </Typography>
                        </Grid2>
                    </Grid2>

                    <Link
                        href={link}
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
                            src="/images/linkedin.png" alt="linkedin"
                        />
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
                    {details}
                </Typography>
            </Grid2>
        </Card>
    )
}