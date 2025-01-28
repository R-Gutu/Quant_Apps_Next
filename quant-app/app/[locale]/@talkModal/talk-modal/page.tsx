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

const Page = () => {
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


  const [invalidForm, setInvalidForm] = useState(true);

  const serviceId = "service_y1v3t7u";     // Ваш service ID
  const templateId = "template_kiufyoh";   // Ваш Template ID
  const publicKey = "wENYR-vuKMTOamg4i";   // Ваш Public Key

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
    const isFirstNameValid = validateName(firstName);
    const isLastNameValid = validateName(lastName);
    const isEmailValid = validateEmail(email);
    const isValidBudget = validateBudget(budget, 0, 25000);
    console.log("isValidBudget:", isValidBudget); // Лог для проверки бюджета
    const isCheckboxValid = ios || web || crm || uiux || backend || android;
    const isFormInvalid = 
      !isFirstNameValid || !isLastNameValid || !isEmailValid || 
      !isCheckboxValid || !isValidBudget;
    console.log("isFormInvalid:", isFormInvalid); // Лог для общего статуса формы
  
    setInvalidForm(isFormInvalid);
  }, [firstName, lastName, email, budget]);

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
        <div className="talk-popup__content">
          <div className="talk-popup__left">
            <Image src="/icons/black-logo.svg" alt="" width={200} height={0} className="w-auto h-auto talk-popup__logo" />
            <div className="talk-popup__left-content">
              <h1>Let’s craft something unforgettable together!</h1>
              <Image src="/images/modal-img.png" width={200} height={0} className="w-auto h-auto" alt="" unoptimized={true} />
              <p>
                Ready to kickstart your project? Complete the form to schedule a
                discovery call, where we’ll dive into your goals and ideas.
                After the call, we’ll deliver a custom plan with a clear
                timeline and pricing.
              </p>
            </div>
            <Image src="/images/modal-bg.png" alt="" width={500} height={0} className="w-auto h-auto talk-popup__left-img" unoptimized={true} />
          </div>
          <div className="talk-popup__right">
            <form className="talk-popup__form" onSubmit={handleSubmit}>
              <div className="talk-popup__first-last-name">
                <div className="talk-popup__from-row">
                  <label>First name</label>
                  <input
                    type="text"
                    placeholder="What’s your first name?"
                    value={firstName}
                    onInput={(event: React.ChangeEvent<HTMLInputElement>) => onFirstNameChanged(event.target.value)}
                  />
                </div>
                <div className="talk-popup__from-row">
                  <label>Last name</label>
                  <input
                    type="text"
                    placeholder="What’s your last name?"
                    value={lastName}
                    onInput={(event: React.ChangeEvent<HTMLInputElement>) => onLastNameChanged(event.target.value)}
                  />
                </div>
              </div>
              <div className="talk-popup__from-row">
                <label>E-mail</label>
                <input
                  type="email"
                  placeholder="brianclark@gmail.com"
                  value={email}
                  onInput={(event: React.ChangeEvent<HTMLInputElement>) => onEmailChanged(event.target.value)}
                />
              </div>
              <div className="talk-popup__from-row">
                <label>Project details</label>
                <textarea
                  placeholder="What can we help you with?"
                  rows={4}
                  value={projectDetails}
                  onChange={(event) => setProjectDetails(event.target.value)}
                  className="resize-none !p-[18px] !leading-normal placeholder:!p-0"
                ></textarea>
              </div>
              <p className="font-clash text-[14px] font-semibold text-[#6D758F]">Select the services you need for your project:</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="talk-popup__service-checkbox">
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      checked={iosCheckbox}
                      onChange={(event) =>
                        onIosCheckboxChanged(event.currentTarget.checked)
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                  <span>iOS App</span>
                </div>

                <div className="talk-popup__service-checkbox">
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      checked={webCheckbox}
                      onChange={(event) =>
                        onWebCheckboxChanged(event.currentTarget.checked)
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                  <span>Web development</span>
                </div>

                <div className="talk-popup__service-checkbox">
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      checked={backendCheckbox}
                      onChange={(event) =>
                        onBackendCheckboxChanged(event.currentTarget.checked)
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                  <span>Servers / Backend</span>
                </div>

                <div className="talk-popup__service-checkbox">
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      checked={androidAppCheckbox}
                      onChange={(event) =>
                        onAndroidAppChanged(event.currentTarget.checked)
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                  <span>Android App</span>
                </div>

                <div className="talk-popup__service-checkbox">
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      checked={crmCheckbox}
                      onChange={(event) =>
                        onCrmCheckboxChanged(event.currentTarget.checked)
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                  <span>Business CRM</span>
                </div>

                <div className="talk-popup__service-checkbox">
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      checked={uiuxCheckbox}
                      onChange={(event) =>
                        onUiuxCheckboxChanged(event.currentTarget.checked)
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                  <span>Design UI/UX</span>
                </div>


              </div>
              <div className="talk-popup__budget talk-popup__from-row">
                <p>
                  <span>Budget </span>   (Unsure on budget? Select a range, and
                  we’ll tailor the best solution for you!)
                </p>
                <input
                  type="text"
                  placeholder="$3000-$5000"
                  value={budget}
                  onInput={(event: React.ChangeEvent<HTMLInputElement>) => onBudgetChanged(event.target.value)}
                />
              </div>
              <div className="talk-popup__attachments">
                <span>Attachments</span>
                <div
                  className="talk-popup__add-attachments"
                  id="dropZone"
                  onDragOver={onDropZoneDragOver}
                  onDragLeave={onDropZoneDragLeave}
                  onDrop={onDropZoneDrop}
                >
                  <div className="talk-popup__add-attachment-info">
                    <Image src="/icons/staple.svg" width={500} height={0} className="h-auto w-auto" alt="" />
                    <p>
                      Drag your file(s) or <span>browse</span>
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
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Page;
