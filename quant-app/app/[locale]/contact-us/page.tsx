'use client'
import Mail from "@/src/assets/icons/mail.svg";
import Location from "@/src/assets/icons/Location.svg";
import {
  validateEmail,
  validateName,
  validatePhone,
} from "@/src/utils/validateContactUsForm";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import emailjs from '@emailjs/browser';

import Image from 'next/image';

const ContactUs = () => {
  const t = useTranslations("contact-us");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [invalidForm, setInvalidForm] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onNameChanged = (value : any) => {
    setName(value);
    validateForm(value, email, phone);
  };

  const onEmailChanged = (value : any) => {
    setEmail(value);
    validateForm(name, value, phone);
  };

  const onPhoneChanged = (value : any) => {
    setPhone(value);
    validateForm(name, email, value);
  };

  const onDescriptionChanged = (value : any) => {
    setDescription(value);
  };

  const validateForm = (nameValue : any, emailValue : any, phoneValue : any) => {
    const isNameValid = validateName(nameValue);
    const isEmailValid = validateEmail(emailValue);
    const isPhoneValid = validatePhone(phoneValue);

    setInvalidForm(!isNameValid || !isEmailValid || !isPhoneValid);
  };

  const handleSubmit = (event : any) => {
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
                  <Image src={Mail} alt="" />
                  <span>support@quant-apps.com</span>
                </div>
                <div className="contact-us__info-item">
                  <Image src={Location} alt="" />
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

export default ContactUs;
