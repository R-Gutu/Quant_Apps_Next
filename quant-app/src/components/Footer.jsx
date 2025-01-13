import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Grid2, Link, Typography, useMediaQuery } from "@mui/material";

import { useScrollLink } from "../hooks/useScrollLink";
import AppLink from "./AppLink";

import Logo from "../assets/icons/logo.svg";
import FooterFacebook from "../assets/icons/footer-facebook.svg";
import FooterInstagram from "../assets/icons/footer-instagram.svg";
import LinkedIn from "../assets/icons/linked-in.svg";
import LinkedInRounded from "../assets/icons/linked-in-rounded.svg";
import TikTok from "../assets/icons/tik-tok.svg";
import Telegram from "../assets/icons/telegram.svg";
import TelegramOld from "../assets/icons/telegram-old.svg";
import WhatsApp from "../assets/icons/whats-app.svg";

const Footer = () => {
  const { t: tToolbar } = useTranslation("app-toolbar");
  const { t: tFooter } = useTranslation("footer");

  const location = useLocation();
  const navigate = useNavigate();
  const { navigateWithScroll } = useScrollLink();

  const matches = useMediaQuery("(max-width:768px)");

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
              <Link href="https://www.facebook.com/profile.php?id=61571073299478">
                <img
                  style={{ width: "30px" }}
                  src={FooterFacebook}
                  alt="Facebook"
                />
              </Link>

              <Link href="https://www.instagram.com/quantapps_/">
                <img
                  style={{ width: "30px" }}
                  src={FooterInstagram}
                  alt="Instagram"
                />
              </Link>

              <Link href="https://www.linkedin.com/company/quant-apps">
                <img style={{ width: "30px" }} src={LinkedIn} alt="LinkedIn" />
              </Link>

              <Link href="https://www.tiktok.com/@quantapps">
                <img style={{ width: "30px" }} src={TikTok} alt="TikTok" />
              </Link>

              <Link href="https://t.me/quantapps">
                <img style={{ width: "30px" }} src={Telegram} alt="Telegram" />
              </Link>

              <Link href="https://wa.me/37369882331">
                <img style={{ width: "30px" }} src={WhatsApp} alt="WhatsApp" />
              </Link>
            </Grid2>
          )}
          <div className="footer">
            {location.pathname === "/" ? (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
                className="footer__logo"
              >
                <img src={Logo} alt="" />
              </a>
            ) : (
              <div className="footer__logo">
                <img src={Logo} alt="" />
              </div>
            )}

            <div className="footer__links">
              <div className="footer__column">
                <p className="footer__column-title">{tFooter("FindUsAt")}</p>

                <Grid2 container>
                  <Link
                    underline="none"
                    href="https://www.instagram.com/quantapps_/"
                  >
                    Instagram
                    <img
                      style={{ width: "14px", marginLeft: "13px" }}
                      src={LinkedInRounded}
                      alt="LinkedInRounded"
                    />
                  </Link>
                </Grid2>

                <Grid2 container direction="row">
                  <Link
                    underline="none"
                    href="https://www.facebook.com/profile.php?id=61563468213074"
                  >
                    Facebook
                    <img
                      style={{ width: "14px", marginLeft: "13px" }}
                      src={LinkedInRounded}
                      alt="LinkedInRounded"
                    />
                  </Link>
                </Grid2>

                <Grid2 container direction="row">
                  <Link
                    underline="none"
                    href="https://www.linkedin.com/company/quant-apps"
                  >
                    Linkedin
                    <img
                      style={{ width: "14px", marginLeft: "13px" }}
                      src={LinkedInRounded}
                      alt="LinkedInRounded"
                    />
                  </Link>
                </Grid2>
              </div>

              <div className="footer__column">
                <p className="footer__column-title">{tFooter("Company")}</p>

                <AppLink to="/about-us">{tToolbar("AboutUs")}</AppLink>

                <p
                  data-id="projects"
                  className="footer__column-link"
                  onClick={(e) => navigateWithScroll(e, "/", "projects")}
                >
                  {tToolbar("Projects")}
                </p>

                <AppLink to="/services">{tToolbar("Services")}</AppLink>

                {/* <AppLink to="/gaming">{tToolbar("IGaming")}</AppLink> */}
              </div>

              <div className="footer__column">
                <p className="footer__column-title">{tFooter("LearnMore")}</p>

                <AppLink to="/contact-us">{tToolbar("ContactUs")}</AppLink>

                <AppLink to="/contact-us">FAQs</AppLink>
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

                <AppLink to={"/terms-of-use"}>{tFooter("TermsOfUse")}</AppLink>

                <AppLink to={"/privacy-policy"}>
                  {tFooter("PrivacyPolicy")}
                </AppLink>
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

                <AppLink to={"/terms-of-use"}>{tFooter("TermsOfUse")}</AppLink>

                <AppLink to={"/privacy-policy"}>
                  {tFooter("PrivacyPolicy")}
                </AppLink>
              </div>

              <div className="mobile-footer-socials">
                <Link href="https://www.facebook.com/profile.php?id=61571073299478">
                  <img
                    style={{ width: "41px" }}
                    src={FooterFacebook}
                    alt="Facebook"
                  />
                </Link>

                <Link href="https://www.instagram.com/quantapps_/">
                  <img
                    style={{ width: "41px" }}
                    src={FooterInstagram}
                    alt="Instagram"
                  />
                </Link>

                <Link href="https://t.me/quantapps">
                  <img
                    style={{ width: "41px" }}
                    src={TelegramOld}
                    alt="TelegramOld"
                  />
                </Link>

                <Link href="https://www.linkedin.com/company/quant-apps">
                  <img
                    style={{ width: "41px" }}
                    src={LinkedInRounded}
                    alt="LinkedInRounded"
                  />
                </Link>
              </div>
            </div>

            <div className="footer__copyright">
              {`© 2024 Quant-Apps. ${tFooter("AllRightsReserved")}`}
            </div>
          </div>
        </Box>
      </div>
    </footer>
  );
};

export default Footer;
