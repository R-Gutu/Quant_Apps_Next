'use client'
import { useEffect, useState, useCallback } from "react";
import {
  handleFiles,
  validateEmail,
  validateName,
  validateBudget
} from "@/lib/utils/validateTalkModal";
import emailjs from '@emailjs/browser';
import { Modal } from '@mui/material';
import Image from 'next/image';
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("talk-popup");
  const tf = useTranslations("contact-us");
  const [budget, setBudget] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  const [iosCheckbox, setIosCheckbox] = useState(false);
  const [webCheckbox, setWebCheckbox] = useState(false);
  const [crmCheckbox, setCrmCheckbox] = useState(false);
  const [uiuxCheckbox, setUiuxCheckbox] = useState(false);
  const [backendCheckbox, setBackendCheckbox] = useState(false);
  const [androidAppCheckbox, setAndroidAppCheckbox] = useState(false);

  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [isLastNameValid, setIsLastNameValid] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isValidBudget, setIsValidBudget] = useState<boolean>(false);
  const [isCheckboxValid, setIsCheckboxValid] = useState<boolean>(false);

  const [invalidForm, setInvalidForm] = useState(true);

  const serviceId = "service_teo59sv";     // Ваш service ID
  const templateId = "template_e7f0ogb";   // Ваш Template ID
  const publicKey = "S46PU3W0ILp9NXki4";   // Ваш Public Key


  const onFirstNameChanged = (value: string) => {
    setFirstName(value);
  };

  const onLastNameChanged = (value: string) => {
    setLastName(value);
  };

  const onEmailChanged = (value: string) => {
    setEmail(value);
  };

  const onIosCheckboxChanged = (value: boolean) => {
    setIosCheckbox(value);
  };

  const onWebCheckboxChanged = (value: boolean) => {
    setWebCheckbox(value);
  };

  const onCrmCheckboxChanged = (value: boolean) => {
    setCrmCheckbox(value);
  };

  const onUiuxCheckboxChanged = (value: boolean) => {
    setUiuxCheckbox(value);
  };

  const onBackendCheckboxChanged = (value: boolean) => {
    setBackendCheckbox(value);
  };

  const onAndroidAppChanged = (value: boolean) => {
    setAndroidAppCheckbox(value);
  };

  const validateForm = useCallback((firstName: string, lastName: string, email: string, ios: boolean, web: boolean, crm: boolean, uiux: boolean, backend: boolean, android: boolean, budget: string) => {
    setIsNameValid(validateName(firstName))
    setIsLastNameValid(validateName(lastName));
    setIsEmailValid(validateEmail(email))
    setIsValidBudget(validateBudget(budget, 0));
    setIsCheckboxValid(ios || web || crm || uiux || backend || android);
    const isFormInvalid =
      !isNameValid || !isLastNameValid || !isEmailValid ||
      !isCheckboxValid || !isValidBudget;
    setInvalidForm(isFormInvalid);
  }, [isCheckboxValid, isEmailValid, isNameValid, isLastNameValid, isValidBudget]);

  const onDropZoneDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add("dragover");
  };

  const onDropZoneDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("dragover");
  };

  const onDropZoneDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove("dragover");

    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const onFileInputChange = (e: React.ChangeEvent) => {
    const files = (e.currentTarget as HTMLInputElement).files;
    handleFiles(files);
  };

  const onBudgetChanged = (value: string) => {
    setBudget(value);
  }

  const checkBoxes = [
    {
      text: t('IosApp'),
      state: iosCheckbox,
      onChange: onIosCheckboxChanged,
    },
    {
      text: t('WebDevelopment'),
      state: webCheckbox,
      onChange: onWebCheckboxChanged,
    },
    {
      text: t('Servers/Backend'),
      state: backendCheckbox,
      onChange: onBackendCheckboxChanged,
    },
    {
      text: t('AndroidApp'),
      state: androidAppCheckbox,
      onChange: onAndroidAppChanged,
    },
    {
      text: t('BusinessCRM'),
      state: crmCheckbox,
      onChange: onCrmCheckboxChanged,
    },
    {
      text: t('DesignUI/UX'),
      state: uiuxCheckbox,
      onChange: onUiuxCheckboxChanged,
    },
  ]

  useEffect(() => {
    validateForm(firstName, lastName, email, iosCheckbox, webCheckbox, crmCheckbox, uiuxCheckbox, backendCheckbox, androidAppCheckbox, budget);
  }, [firstName, lastName, email, iosCheckbox, webCheckbox, crmCheckbox, uiuxCheckbox, backendCheckbox, androidAppCheckbox, budget, validateForm])

  const handleSubmit = (e: React.FormEvent) => {
    validateForm(firstName, lastName, email, iosCheckbox, webCheckbox, crmCheckbox, uiuxCheckbox, backendCheckbox, androidAppCheckbox, budget);
    e.preventDefault();

    // Формируем список выбранных услуг
    const chosenServices = [];
    if (iosCheckbox) chosenServices.push("iOS App");
    if (webCheckbox) chosenServices.push("Web development");
    if (crmCheckbox) chosenServices.push("Business CRM");
    if (uiuxCheckbox) chosenServices.push("Design UI/UX");
    if (backendCheckbox) chosenServices.push("Servers/Backend");
    if (androidAppCheckbox) chosenServices.push("Android App");

    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      project_details: projectDetails,
      services: chosenServices.join(", "),
      budget: budget,
      attachments: "" // При необходимости можно добавить логику для приложений
    };
    console.log(templateParams)

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Сообщение успешно отправлено!");

        // Сбрасываем поля
        setFirstName("");
        setLastName("");
        setEmail("");
        setProjectDetails("");
        setIosCheckbox(false);
        setWebCheckbox(false);
        setCrmCheckbox(false);
        setUiuxCheckbox(false);
        setBackendCheckbox(false);
        setAndroidAppCheckbox(false);
        setInvalidForm(true);
        router.back();
      }, (err) => {
        console.log("FAILED...", err);
        alert("Произошла ошибка при отправке. Пожалуйста, попробуйте снова.");
      });
  };

  const router = useRouter();
  return (
    <Modal
      open={true}
      onClose={() => router.back()}
      disableScrollLock={true}
    >
      <div className="modal-content talk-popup">
        <span
          className="close-modal"
          id="closeModal"
          onClick={() => router.back()}
        ></span>
        <div className="talk-popup__content max-[890px]:bg-[#F9F9FF]">
          <div className="talk-popup__left bg-[#F9F9FF]">
            <Image src="/icons/black-logo.svg" alt="BlackLogo" width={200} height={0} className="w-auto h-auto talk-popup__logo" />
            <div className="talk-popup__left-content">
              <h1>{t('LetsCraftTogether')}</h1>
              <Image src="/images/modal-img.png" width={200} height={0} className="w-auto h-auto" alt="Modal" unoptimized={true} />
              <p>{t('ReadyToKickstartProject')}</p>
            </div>
            <Image src="/images/modal-bg.png" alt="Modal" width={500} height={0} className="w-auto h-auto talk-popup__left-img" unoptimized={true} />
          </div>
          <div className="talk-popup__right">
            <form className="talk-popup__form" onSubmit={handleSubmit}>
              <div className="talk-popup__first-last-name">
                <div className="talk-popup__from-row">
                  <label>{t('FirstName')}</label>
                  <div className="contact-us__phone-div">
                    <input
                      type="text"
                      placeholder={t('FirstNamePlaceholder')}
                      value={firstName}
                      onInput={(event: React.ChangeEvent<HTMLInputElement>) => onFirstNameChanged(event.target.value)}
                    />
                    {isNameValid || <span>{tf("ValidName")}</span>}
                  </div>
                </div>
                <div className="talk-popup__from-row">
                  <label>{t('LastName')}</label>
                  <div className="contact-us__phone-div">
                    <input
                      type="text"
                      placeholder={t('LastNamePlaceholder')}
                      value={lastName}
                      onInput={(event: React.ChangeEvent<HTMLInputElement>) => onLastNameChanged(event.target.value)}
                    />
                    {isLastNameValid || <span>{tf("ValidName")}</span>}
                  </div>
                </div>
              </div>
              <div className="talk-popup__from-row">
                <label>{t('Email')}</label>
                <div className="contact-us__phone-div">
                  <input
                    type="email"
                    placeholder="brianclark@gmail.com"
                    value={email}
                    onInput={(event: React.ChangeEvent<HTMLInputElement>) => onEmailChanged(event.target.value)}
                  />
                  {isEmailValid || <span>{tf("ValidEmail")}</span>}
                </div>
              </div>
              <div className="talk-popup__from-row">
                <label>{t('ProjectDetails')}</label>
                <textarea
                  placeholder={t('ProjectDetailsPlaceholder')}
                  rows={4}
                  value={projectDetails}
                  onChange={(event) => setProjectDetails(event.target.value)}
                  className="resize-none !p-[18px] !leading-normal placeholder:!p-0"
                ></textarea>
              </div>
              <p className="font-clash text-[14px] font-semibold text-[#6D758F]">{t('SelectTheServices')}</p>
              <div>
                <div className="grid grid-cols-3 gap-4
                  max-[890px]:flex flex-col max-[890px]:gap-1
                ">
                  {
                    checkBoxes.map((checkbox, index) => (
                      <div className="talk-popup__service-checkbox max-[890px]:px-[8px] max-[890px]:py-[5px] max-[890px]:rounded-[5px] max-[890px]:shadow-sm max-[890px]:bg-white" key={index}>
                        <label className="custom-checkbox">
                          <input
                            type="checkbox"
                            checked={checkbox.state}
                            onChange={(event) => checkbox.onChange(event.currentTarget.checked)}
                          />
                          <span className="checkmark"></span>
                        </label>
                        <span>{checkbox.text}</span>
                      </div>
                    ))
                  }
                </div>
                  {isCheckboxValid || <span className="font-inter text-[#c1c1c1] text-[13px] font-normal leading-[15.73px]">{t('ChooseOption')}</span>}
              </div>
              <div className="talk-popup__budget talk-popup__from-row">
                <p>
                  <span>{t('Budget')} </span> {t('UnsureOnBudget')}
                </p>
                <div className="contact-us__phone-div">
                  <input
                    type="text"
                    placeholder="$3000-$5000"
                    value={budget}
                    onInput={(event: React.ChangeEvent<HTMLInputElement>) => onBudgetChanged(event.target.value)}
                  />
                  {isValidBudget || <span>{t('WriteBudget')}</span>}
                </div>
              </div>
              <div className="talk-popup__attachments">
                <span>{t('Attachments')}</span>
                <div
                  className="talk-popup__add-attachments"
                  id="dropZone"
                  onDragOver={onDropZoneDragOver}
                  onDragLeave={onDropZoneDragLeave}
                  onDrop={onDropZoneDrop}
                >
                  <div className="talk-popup__add-attachment-info">
                    <Image src="/icons/staple.svg" width={500} height={0} className="h-auto w-auto" alt="Staple" />
                    <p>
                      {t('DragFiles')} <span>{t('Browse')}</span>
                    </p>
                  </div>
                  <input
                    type="file"
                    className="talk-popup__attachments-files"
                    id="fileInput"
                    multiple
                    onChange={onFileInputChange}
                  />
                </div>
                <div id="fileList"></div>
              </div>
              <button
                type="submit"
                className={`fill-btn talk-popup__submit ${invalidForm ? "disabled" : ""}`}
                disabled={invalidForm}
              >
                {t('Submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Page;
