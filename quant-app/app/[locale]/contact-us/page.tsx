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
  const [invalidForm, setInvalidForm] = useState<boolean>(true);
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onNameChanged = (value : string) => {
    setName(value);
  };

  const onEmailChanged = (value : string) => {
    setEmail(value);
  };

  const onPhoneChanged = (value : string) => {
    setPhone(value);
  };

  const onDescriptionChanged = (value : string) => {
    setDescription(value);
  };
 

  const validateForm = (nameValue : string, emailValue : string, phoneValue : string) => {
    setIsNameValid(validateName(nameValue));
    setIsEmailValid(validateEmail(emailValue));
    setIsPhoneValid(validatePhone(phoneValue));

    setInvalidForm(!isNameValid || !isEmailValid || !isPhoneValid);
  };

  useEffect(() => {
    validateForm(name, email, phone);
  }, [name, email, phone])

  const handleSubmit = (event : React.FormEvent) => {
    event.preventDefault();

    const serviceId = "service_teo59sv";
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
    <div className="contact-us pt-[120px]">
      <div className="container">
        <div className="contact-us__wrapper">
          <div className="contact-us__content">
            <div className="contact-us__content-text">
              <h1>{t("ReadyToStartYourProject")}</h1>
              <h3>{t("LetsMakeVisionReality")}</h3>
              <div className="contact-us__content-info">
                <h4>{t("ContactInfo")}</h4>
                <div className="contact-us__info-item">
                  <Image src="/icons/mail.svg" alt="Mail" width={100} height={0} className="w-auto h-auto"/>
                  <span>support@quant-apps.com</span>
                </div>
                <div className="contact-us__info-item">
                  <Image src="/icons/Location.svg" alt="Location" width={100} height={0} className="w-auto h-auto"/>
                  <span>{t("RepublicMoldova")}</span>
                </div>
              </div>
            </div>

            <div className="contact-us__content-form">
              <p>{t("StartTheConversation")}</p>
              <form onSubmit={handleSubmit} className="contact-us__form">
              <div className="contact-us__phone-div">
                <input
                  type="text"
                  required
                  name="contact-us-name"
                  placeholder={`${t("WhatYourName")}*`}
                  value={name}
                  onChange={(event) => onNameChanged(event.target.value)}
                />
                {!isNameValid && <span>{t("ValidName")}</span>}
                </div>

                <div className="contact-us__phone-div">
                  <input
                    type="text"
                    name="contact-us-phone"
                    placeholder={`${t("WhatYourPhone")}*`}
                    value={phone}
                    onChange={(event) => onPhoneChanged(event.target.value)}
                  />
                  {!isPhoneValid && <span>{t("ValidPhoneNumber")}</span>}
                </div>
                <div className="contact-us__phone-div">
                <input
                  type="email"
                  name="contact-us-email"
                  placeholder={t("WhatYourEmail")}
                  value={email}
                  onChange={(event) => onEmailChanged(event.target.value)}
                />
                  {!isEmailValid && <span>{t("ValidEmail")}</span>}
                </div>
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
      <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
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
    </div>
  );
};

export default Page;
