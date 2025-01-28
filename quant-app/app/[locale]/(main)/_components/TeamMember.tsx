import Image from 'next/image';
import { Grid2, Card, Typography, Box, Link } from "@mui/material";
import TeamMemberType from '@/lib/types/TeamMemberType';

export default async function TeamMember({ name, title, details, src, alt, link }: TeamMemberType) {
    return (
        <Card
            className='!pt-[50px] max-[900px]:!pt-[20px]'
            sx={{
                borderRadius: "45px",
                width: { xs: "350px", md: "610px" },
                height: { xs: "331px", md: "447px" },
                alignContent: "start",
            }}
        >
            <Grid2
                margin="auto"
                maxWidth={{ xs: "317px", md: "516px" }}
                maxHeight={{ sx: "276px", md: "385px" }}
            >
                <Grid2
                    container
                    className="relative"
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
                        wrap='nowrap'
                    >
                        <Image
                            width={142}
                            height={151}
                            className="w-[105px] h-[112px] mui-md:w-[142px] mui-md:h-[151px]"
                            src={src}
                            alt={alt}
                        />
                        <Grid2 container direction="column" className="ml-[15px]">
                            <Typography
                            className='!font-clash'
                                sx={{
                                    fontWeight: "500",
                                    fontSize: { xs: "20px", md: "27px" },
                                    lineHeight: { xs: "24.6px", md: "33.25px" },
                                }}
                            >
                                {name}
                            </Typography>

                            <Typography
                                className='!font-poppins'
                                sx={{
                                    fontSize: { xs: "15px", md: "24.33px" },
                                    mb: "10px",
                                }}
                            >
                                {title}
                            </Typography>
                        </Grid2>
                    </Grid2>

                    <Link
                        href={link}
                        className='absolute top-0 right-0'
                        sx={{
                            backgroundColor: "#6A65FF",
                            width: { xs: "34px", md: "46px" },
                            height: { xs: "34px", md: "46px" },
                            borderRadius: "23px",
                            flexShrink: 0,
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
                    className='!font-poppins text-justify'
                    sx={{
                        fontSize: { xs: "15px", md: "24px" },
                        lineHeight: { xs: "27px", md: "36px" },
                    }}
                >
                    {details}
                </Typography>
            </Grid2>
        </Card>
    )
}