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
            className="max-[768px]:!hidden"
            container
            direction="row"
            justifyContent="end"
            gap="20px"
            mb="50px"
            mr="65px"
          >
          </Grid2>
          <div className="footer">
            <Link href="/" legacyBehavior>
              <a className="footer__logo self-center !font-clash">
                <Image src="/icons/logo.svg" alt="Logo" width={250} height={40} />
              </a>
            </Link>
            <div className="footer__links">
              <div className="footer__column">
                <p className="footer__column-title !font-clash">{tFooter("FindUsAt")}</p>
                {socialLinks.map(({ href, icon, alt }) => (
                  <Grid2 key={alt} container>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      legacyBehavior
                    >
                      <a className="flex flex-row justify-between w-1/2 min-w-[100px] no-underline !font-clash">
                        <h4 className="flex items-center text-white opacity-75 hover:opacity-100">
                          {alt}
                        </h4>
                        <Image
                          width={14}
                          height={14}
                          src={icon}
                          alt="External Link"
                          className="ml-[13px]"
                        />
                      </a>
                    </Link>
                  </Grid2>
                ))}
              </div>

              <div className="footer__column">
                <p className="footer__column-title !font-clash">{tFooter("Company")}</p>
                <AppLink href="/about-us">{tToolbar("AboutUs")}</AppLink>

                <ScrollLink
                  id="projects"
                  elementId="projects"
                  href="/#projects"
                >
                  {tToolbar("Projects")}
                </ScrollLink>
                <AppLink href="/services">{tToolbar("Services")}</AppLink>
              </div>

              <div className="footer__column">
                <p className="footer__column-title !font-clash">{tFooter("LearnMore")}</p>
                <AppLink href="/contact-us">{tToolbar("ContactUs")}</AppLink>
                <AppLink href="/faqs">{tToolbar("FAQs")}</AppLink>
              </div>

              <div className="footer__column">
                <Typography
                  className="!font-clash"
                  sx={{
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
                  className="!font-clash"
                  sx={{
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
                <AppLink href="/privacy-policy" className="text-nowrap">{tFooter("PrivacyPolicy")}</AppLink>
              </div>

              <div className="mobile-footer-socials">
                {socialLinks.map(({ href, icon, alt }) => (
                  <Link
                    key={alt}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    legacyBehavior
                  >
                    <Image width={41} height={41} src={icon} alt={alt} />
                  </Link>
                ))}
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