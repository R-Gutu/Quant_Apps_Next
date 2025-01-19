import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Box, Grid2, Typography } from "@mui/material";
import AppLink from '@/components/AppLink'
import SocialLinksType from "@/lib/types/SocialLinksType";
import ScrollLink from "@/components/ScrollLink";

const Footer = async () => {
  const tToolbar = await getTranslations("app-toolbar");
  const tFooter = await getTranslations("footer");

  const socialLinks: SocialLinksType[] = [
    { href: "https://www.facebook.com/profile.php?id=61571073299478", icon: "/icons/footer-facebook.svg", alt: "Facebook" },
    { href: "https://www.instagram.com/quantapps_/", icon: "/icons/footer-instagram.svg", alt: "Instagram" },
    { href: "https://www.linkedin.com/company/quant-apps", icon: "/icons/linked-in.svg", alt: "LinkedIn" },
    { href: "https://www.tiktok.com/@quantapps", icon: "/icons/tik-tok.svg", alt: "TikTok" },
    { href: "https://t.me/quantapps", icon: "/icons/Telegram.svg", alt: "Telegram" },
    { href: "https://wa.me/37369882331", icon: "/icons/whats-app.svg", alt: "WhatsApp" }
  ];

  return (
    <footer>
      <div className="container">
        <Box
          sx={{
            "& p": {
              fontFamily: `"ClashDisplay", "Inter", sans-serif`,
              color: "white",
              opacity: "0.75",
              lineHeight: "34px",
              fontSize: "14px",
              transition: "all 0.3s ease",
              "&:hover": {
                opacity: 1,
                transform: "translateX(5px)",
                transition: "all 0.3s ease",
              },
            },
            "& a": {
              fontFamily: `"ClashDisplay", "Inter", sans-serif`,
              color: "white",
              opacity: "0.75",
              lineHeight: "34px",
              fontSize: "14px",
              transition: "all 0.3s ease",
              "&:hover": {
                opacity: 1,
                transform: "translateX(5px)",
                transition: "all 0.3s ease",
              },
            },
          }}
        >
          <Grid2
            className="hidden max-w-[768px]:block"
            container
            direction="row"
            justifyContent="end"
            gap="20px"
            mb="50px"
            mr="65px"
          >
            {socialLinks.map((link) => (
              <Link
                key={link.alt}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={30}
                  height={30}
                  className="h-[30px] w-[30px]"
                  src={link.icon}
                  alt={link.alt}
                />
              </Link>
            ))}
          </Grid2>
          <div className="footer">
            <Link href="/" className="footer__logo">
              <Image src="/icons/logo.svg" alt="Logo" width={250} height={40} />
            </Link>
            <div className="footer__links">
              <div className="footer__column">
                <p className="footer__column-title">{tFooter("FindUsAt")}</p>
                {["Instagram", "Facebook", "Linkedin"].map((platform) => (
                  <Grid2 key={platform} container>
                    <Link
                      href={`https://www.${platform.toLowerCase()}.com/${platform === "Facebook" ? "profile.php?id=61563468213074" :
                        platform === "Linkedin" ? "company/quant-apps" :
                          "quantapps_"}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          color: 'white',
                          opacity: 0.75,
                          '&:hover': { opacity: 1 }
                        }}
                      >
                        {platform}
                        <Image
                          width={14}
                          height={14}
                          src="/icons/linked-in-rounded.svg"
                          alt="External Link"
                          style={{ marginLeft: "13px" }}
                        />
                      </Typography>
                    </Link>
                  </Grid2>
                ))}
              </div>

              <div className="footer__column">
                <p className="footer__column-title">{tFooter("Company")}</p>
                <AppLink href="/about-us">{tToolbar("AboutUs")}</AppLink>

                <ScrollLink
                  id="projects"
                  elementId="projects"
                  // className="footer__column-link"
                  href="/#projects"
                  // style={{ cursor: 'pointer' }}
                >
                  {tToolbar("Projects")}
                </ScrollLink>
                {/* <Link
                  data-id="projects"
                  className="footer__column-link"
                  href="/#projects"
                  style={{ cursor: 'pointer' }}
                >
                  {tToolbar("Projects")}
                </Link> */}
                <AppLink href="/services">{tToolbar("Services")}</AppLink>
              </div>

              <div className="footer__column">
                <p className="footer__column-title">{tFooter("LearnMore")}</p>
                <AppLink href="/contact-us">{tToolbar("ContactUs")}</AppLink>
                <AppLink href="/faqs">{tToolbar("FAQs")}</AppLink>
              </div>

              <div className="footer__column">
                <Typography
                  sx={{
                    fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "700",
                    marginBottom: "10px",
                    lineHeight: "34px",
                  }}
                >
                  {tFooter("Legal")}
                </Typography>
                <AppLink href="/terms-of-use">{tFooter("TermsOfUse")}</AppLink>
                <AppLink href="/privacy-policy">{tFooter("PrivacyPolicy")}</AppLink>
              </div>
            </div>

            <div className="mobile-footer-bottom max-[800px]:flex">
              <div className="footer__column">
                <Typography
                  sx={{
                    fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "700",
                    marginBottom: "10px",
                    lineHeight: "34px",
                  }}
                >
                  Legal
                </Typography>
                <AppLink href="/terms-of-use">{tFooter("TermsOfUse")}</AppLink>
                <AppLink href="/privacy-policy">{tFooter("PrivacyPolicy")}</AppLink>
              </div>

              <div className="mobile-footer-socials">
                <Link href="https://www.facebook.com/profile.php?id=61571073299478" target="_blank" rel="noopener noreferrer">
                  <Image width={41} height={41} src="/icons/footer-facebook.svg" alt="Facebook" />
                </Link>
                <Link href="https://www.instagram.com/quantapps_/" target="_blank" rel="noopener noreferrer">
                  <Image width={41} height={41} src="/icons/footer-instagram.svg" alt="Instagram" />
                </Link>
                <Link href="https://t.me/quantapps" target="_blank" rel="noopener noreferrer">
                  <Image width={41} height={41} src="/icons/telegram-old.svg" alt="Telegram" />
                </Link>
                <Link href="https://www.linkedin.com/company/quant-apps" target="_blank" rel="noopener noreferrer">
                  <Image width={41} height={41} src="/icons/linked-in-rounded.svg" alt="LinkedIn" />
                </Link>
              </div>
            </div>

            <div className="footer__copyright">
              {`© ${new Date().getFullYear()} Quant-Apps. ${tFooter("AllRightsReserved")}`}
            </div>
          </div>
        </Box>
      </div>
    </footer>
  );
};

export default Footer;