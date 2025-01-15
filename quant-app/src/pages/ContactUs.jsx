import Mail from "../assets/icons/mail.svg";
import Location from "../assets/icons/Location.svg";
import ModalBg from "../assets/images/modal-bg.png";
import {
  validateEmail,
  validateName,
  validatePhone,
} from "../utils/validateContactUsForm";

import "../style/main.css";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const { t } = useTranslation("contact-us");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
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

  const onDescriptionChanged = (value) => {
    setDescription(value);
  };

  const validateForm = (nameValue, emailValue, phoneValue) => {
    const isNameValid = validateName(nameValue);
    const isEmailValid = validateEmail(emailValue);
    const isPhoneValid = validatePhone(phoneValue);

    setInvalidForm(!isNameValid || !isEmailValid || !isPhoneValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_caidqxy";
    const templateId = "template_1d23foq";
    const publicKey = "S46PU3W0ILp9NXki4";

    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      description: description,
      to_email: "support@quant-apps.com",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setName("");
          setEmail("");
          setPhone("");
          setDescription("");
          alert(t("MessageSentSuccessfully"));
        },
        (err) => {
          console.log("FAILED...", err);
          alert(t("MessageSendingError"));
        }
      );
  };

  return (
    <div className="contact-us">
      <div className="container">
        <div className="contact-us__wrapper">
          <div className="contact-us__content">
            <div className="contact-us__content-text">
              <h1>{t("ReadyToStartYourProject")}</h1>
              <h3>{t("LetsMakeVisionReality")}</h3>
              <div className="contact-us__content-info">
                <h4>{t("ContactInfo")}</h4>
                <div className="contact-us__info-item">
                  <img src={Mail} alt="" />
                  <span>support@quant-apps.com</span>
                </div>
                <div className="contact-us__info-item">
                  <img src={Location} alt="" />
                  <span>{t("RepublicMoldova")}</span>
                </div>
              </div>
            </div>

            <div className="contact-us__content-form">
              <p>{t("StartTheConversation")}</p>
              <form onSubmit={handleSubmit} className="contact-us__form">
                <input
                  type="text"
                  required
                  name="contact-us-name"
                  placeholder={`${t("WhatYourName")}*`}
                  value={name}
                  onChange={(event) => onNameChanged(event.target.value)}
                />

                <div className="contact-us__phone-div">
                  <input
                    type="text"
                    name="contact-us-phone"
                    placeholder={`${t("WhatYourPhone")}*`}
                    value={phone}
                    onChange={(event) => onPhoneChanged(event.target.value)}
                  />
                  <span>{t("ValidPhoneNumber")}</span>
                </div>

                <input
                  type="email"
                  name="contact-us-email"
                  placeholder={t("WhatYourEmail")}
                  value={email}
                  onChange={(event) => onEmailChanged(event.target.value)}
                />

                {/* <textarea
                  name="contact-us-description"
                  placeholder={t("DescribeYourInterest")}
                  value={description}
                  onChange={(event) => onDescriptionChanged(event.target.value)}
                /> */}
                 <input
                    type="text"
                    name="contact-us-description"
                    placeholder="Describe your interest"
                    value={description}
                    onChange={(event) => onDescriptionChanged(event.target.value)}
                  />

                <button
                  type="submit"
                  className={`fill-btn ${invalidForm ? "disabled" : ""}`}
                  id="contact-us-form-btn"
                  disabled={invalidForm}
                >
                  {t("Submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const validateName = (name) => name && name.trim().length > 1;
// const validateEmail = (email) =>
//   email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// const validatePhone = (phone) =>
//   phone && /^\+?[0-9]{7,15}$/.test(phone); // Пример валидации для номера телефона

export default ContactUs;
