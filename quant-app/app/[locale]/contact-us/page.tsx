'use client'
import {
  validateEmail,
  validateName,
  validatePhone,
} from "@/lib/utils/validateContactUsForm";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import emailjs from '@emailjs/browser';

import Image from 'next/image';
import Blur from "@/components/Blur";

const Page = () => {
  const t = useTranslations("contact-us");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [invalidForm, setInvalidForm] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onNameChanged = (value : string) => {
    setName(value);
    validateForm(value, email, phone);
  };

  const onEmailChanged = (value : string) => {
    setEmail(value);
    validateForm(name, value, phone);
  };

  const onPhoneChanged = (value : string) => {
    setPhone(value);
    validateForm(name, email, value);
  };

  const onDescriptionChanged = (value : string) => {
    setDescription(value);
  };

  const validateForm = (nameValue : string, emailValue : string, phoneValue : string) => {
    const isNameValid = validateName(nameValue);
    const isEmailValid = validateEmail(emailValue);
    const isPhoneValid = validatePhone(phoneValue);

    setInvalidForm(!isNameValid || !isEmailValid || !isPhoneValid);
  };

  const handleSubmit = (event : React.FormEvent) => {
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
                  <Image src="/icons/mail.svg" alt="" width={0} height={0} className="w-auto h-auto"/>
                  <span>support@quant-apps.com</span>
                </div>
                <div className="contact-us__info-item">
                  <Image src="/icons/Location.svg" alt="" width={0} height={0} className="w-auto h-auto"/>
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
      <Blur
            color="#1E50FF"
            left="0%"
            top="0%"
            width="400px"
            height="400px"
            filter="blur(140px)"
            className="max-[700px]:hidden"
          />
      <Blur
            color="#9C08FFB2"
            right="0%"
            bottom="0%"
            width="400px"
            height="400px"
            filter="blur(140px)"
            className="max-[700px]:hidden"
          />
    </div>
  );
};

export default Page;
