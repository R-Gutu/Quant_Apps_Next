"use client"

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { usePathname, useRouter } from "next/navigation";
import { Box, Grid2, Typography, useMediaQuery } from "@mui/material";
import AppLink from '@/src/components/AppLink'

import Logo from "@/src/assets/icons/logo.svg";
import FooterFacebook from "@/src/assets/icons/footer-facebook.svg";
import FooterInstagram from "@/src/assets/icons/footer-instagram.svg";
import LinkedIn from "@/src/assets/icons/linked-in.svg";
import LinkedInRounded from "@/src/assets/icons/linked-in-rounded.svg";
import TikTok from "@/src/assets/icons/tik-tok.svg";
import Telegram from "@/src/assets/icons/Telegram.svg";
import TelegramOld from "@/src/assets/icons/telegram-old.svg";
import WhatsApp from "@/src/assets/icons/whats-app.svg";

const Footer = () => {
  const tToolbar = useTranslations("app-toolbar");
  const tFooter = useTranslations("footer");
  const pathname = usePathname();
  const router = useRouter();
  const matches = useMediaQuery("(max-width:768px)");

  const handleScrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigation = (path: string, scrollTo?: string) => {
    if (path === pathname && scrollTo) {
      handleScrollToElement(scrollTo);
    } else {
      router.push(path);
      if (scrollTo) {
        setTimeout(() => handleScrollToElement(scrollTo), 100);
      }
    }
  };

  const socialLinks = [
    { href: "https://www.facebook.com/profile.php?id=61571073299478", icon: FooterFacebook, alt: "Facebook" },
    { href: "https://www.instagram.com/quantapps_/", icon: FooterInstagram, alt: "Instagram" },
    { href: "https://www.linkedin.com/company/quant-apps", icon: LinkedIn, alt: "LinkedIn" },
    { href: "https://www.tiktok.com/@quantapps", icon: TikTok, alt: "TikTok" },
    { href: "https://t.me/quantapps", icon: Telegram, alt: "Telegram" },
    { href: "https://wa.me/37369882331", icon: WhatsApp, alt: "WhatsApp" }
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
          {!matches && (
            <Grid2
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
                    src={link.icon}
                    alt={link.alt}
                  />
                </Link>
              ))}
            </Grid2>
          )}

          <div className="footer">
            <Link href="/" className="footer__logo">
              <Image src={Logo} alt="Logo" width={150} height={40} />
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
                          src={LinkedInRounded}
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
                <p
                  data-id="projects"
                  className="footer__column-link"
                  onClick={() => handleNavigation("/", "projects")}
                  style={{ cursor: 'pointer' }}
                >
                  {tToolbar("Projects")}
                </p>
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

            <div className="mobile-footer-bottom">
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
                  <Image width={41} height={41} src={FooterFacebook} alt="Facebook" />
                </Link>
                <Link href="https://www.instagram.com/quantapps_/" target="_blank" rel="noopener noreferrer">
                  <Image width={41} height={41} src={FooterInstagram} alt="Instagram" />
                </Link>
                <Link href="https://t.me/quantapps" target="_blank" rel="noopener noreferrer">
                  <Image width={41} height={41} src={TelegramOld} alt="Telegram" />
                </Link>
                <Link href="https://www.linkedin.com/company/quant-apps" target="_blank" rel="noopener noreferrer">
                  <Image width={41} height={41} src={LinkedInRounded} alt="LinkedIn" />
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