import { useEffect, useState } from "react";
import Mail from "../assets/icons/mail.svg";
import Location from "../assets/icons/Location.svg";
import Footer from "../components/Footer";
import ModalBg from "../assets/images/modal-bg.png";
import {
  validateEmail,
  validateName,
  validatePhone,
} from "../utils/validateContactUsForm";
import "../style/main.css";

const ContactUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [invalidForm, setInvalidForm] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onNameChanged = (value) => {
    setName(value);
    validateForm(value, email, phone);
  };

  const onEmailChanged = (value) => {
    setEmail(value);
    validateForm(name, value, phone);
  };

  const onPhoneChanged = (value) => {
    setPhone(value);
    validateForm(name, email, value);
  };

  const validateForm = (nameValue, emailValue, phoneValue) => {
    const isNameValid = validateName(nameValue);
    const isEmailValid = validateEmail(emailValue);
    const isPhoneValid = validatePhone(phoneValue);

    setInvalidForm(!isNameValid || !isEmailValid || !isPhoneValid);
  };

  return (
    <>
      <div className="contact-us">
        <div className="container">
          <div className="contact-us__wrapper">
            <div className="contact-us__content">
              <div className="contact-us__content-text">
                <h1>Ready to Start Your Project?</h1>
                <h3>
                  Let’s make your vision a reality. Contact us today and let’s
                  discuss how we can help you innovate and grow.
                </h3>
                <div className="contact-us__content-info">
                  <h4>Contact Info</h4>
                  <div className="contact-us__info-item">
                    <img src={Mail} alt="" />
                    <span>support@quant-apps.com</span>
                  </div>
                  <div className="contact-us__info-item">
                    <img src={Location} alt="" />
                    <span>London</span>
                  </div>
                </div>
              </div>
              <div className="contact-us__content-form">
                <p>Start the conversation! We're here to assist you.</p>
                <form action="#" className="contact-us__form">
                  <input
                    type="text"
                    name="contact-us-name"
                    placeholder="What's your name?*"
                    value={name}
                    onInput={(event) => onNameChanged(event.target.value)}
                  />
                  <div className="contact-us__phone-div">
                    <input
                      type="text"
                      name="contact-us-phone"
                      placeholder="What's your phone number?*"
                      value={phone}
                      onInput={(event) => onPhoneChanged(event.target.value)}
                    />
                    <span>Please enter a valid phone number.</span>
                  </div>
                  <input
                    type="email"
                    name="contact-us-email"
                    placeholder="Whats your email?"
                    value={email}
                    onInput={(event) => onEmailChanged(event.target.value)}
                  />
                  <input
                    type="text"
                    name="contact-us-description"
                    placeholder="Describe your interest"
                  />

                  <button
                    className={`fill-btn ${invalidForm ? "disabled" : ""}`}
                    id="contact-us-form-btn"
                    disabled={invalidForm}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <img src={ModalBg} alt="" className="contact-us__content-img" />
          </div>
        </div>
      </div>

      <span className="contact-us-img"></span>
      <span className="contact-us-img-2"></span>

      <Footer />
    </>
  );
};

export default ContactUs;
