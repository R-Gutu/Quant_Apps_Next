// import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/icons/logo.svg";
import FooterFacebook from "../assets/icons/footer-facebook.svg";
import FooterInstagram from "../assets/icons/footer-instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
            <div className="footer__logo">
              <img src={Logo} alt="" />
            </div>
          <div className="footer__links">
            <div className="footer__column">
              <p className="footer__column-title">Find us at</p>
              <a
                href="https://www.instagram.com/quantapps_/"
                target="_blank"
                className="footer__column-link instagram"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61563468213074"
                target="_blank"
                className="footer__column-link facebook"
              >
                Facebook
              </a>
            </div>
            <div className="footer__column">
              <p className="footer__column-title">Company</p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // navigate("/about-us");
                }}
                className="footer__column-link"
              >
                About us
              </a>
              <span
                data-id="projects"
                className="footer__column-link"
                // onClick={(e) => navigateWithScroll(e, "/main", "projects")}
              >
                Projects
              </span>
            </div>
            <div className="footer__column">
              <p className="footer__column-title">Services</p>
              <span
                className="footer__column-link"
                // onClick={(e) => navigateWithScroll(e, "/services", "services")}
              >
                What We Offer
              </span>
              <span
                className="footer__column-link"
                onClick={(e) =>
                  // navigateWithScroll(e, "/services", "why-native-ios")
                  // console.log("hi")
                  ""
                }
              >
                Why native iOS?
              </span>
            </div>
            <div className="footer__column">
              <p className="footer__column-title">More</p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // navigate("/faqs");
                }}
                className="footer__column-link"
              >
                FAQs
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // navigate("/contact-us");
                }}
                className="footer__column-link"
              >
                Contact us
              </a>
            </div>
          </div>
          <div className="mobile-footer-bottom">
            <div className="footer__column">
              <p className="footer__column-title">More</p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // navigate("/faqs");
                }}
                className="footer__column-link"
              >
                FAQs
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // navigate("/contact-us");
                }}
                className="footer__column-link"
              >
                Contact us
              </a>
            </div>
            <div className="mobile-footer-socials">
              <a
                href="https://www.facebook.com/profile.php?id=61563468213074"
                target="_blank"
                className="footer__column-link"
              >
                <img src={FooterFacebook} alt="" />
              </a>
              <a
                href="https://www.instagram.com/quantapps_/"
                target="_blank"
                className="footer__column-link"
              >
                <img src={FooterInstagram} alt="" />
              </a>
            </div>
          </div>
          <div className="footer__copyright">
            © 2024 Quantica. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
