'use client'
import { useState } from "react";
import {
  handleFiles,
  validateEmail,
  validateName,
} from "@/src/utils/validateTalkModal";

import Staple from "@/src/assets/icons/staple.svg";
import LogoBlack from "@/src/assets/icons/black-logo.svg";
import ModalBg from "@/src/assets/images/modal-bg.png";
import ModalImage from "@/src/assets/images/modal-img.png";
import emailjs from '@emailjs/browser';
import { Modal } from '@mui/material';
import Image from 'next/image';
import { useRouter } from "@/i18n/routing";

const page = () => {
  const budget1Prices = [
    "$5.000-$10.000",
    "$3.000-$5.000",
    "$1.000-$3.000",
  ];
  const budget2Prices = [
    "$10.000-$15.000",
    "$5.000-$10.000",
    "$3.000-$5.000",
  ];
  const budget3Prices = [
    "$15.000-$25.000",
    "$10.000-$15.000",
    "$5.000-$10.000",
  ];

  const [budgetId, setBudgetId] = useState(3);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  const [iosCheckbox, setIosCheckbox] = useState(false);
  const [webCheckbox, setWebCheckbox] = useState(false);
  const [crmCheckbox, setCrmCheckbox] = useState(false);
  const [uiuxCheckbox, setUiuxCheckbox] = useState(false);
  const [backendCheckbox, setBackendCheckbox] = useState(false);

  const [budgetCheckboxes, setBudgetCheckboxes] = useState([false, false, false]);

  const [invalidForm, setInvalidForm] = useState(true);

  const serviceId = "service_caidqxy";     // Ваш service ID
  const templateId = "template_e7f0ogb";   // Ваш Template ID
  const publicKey = "S46PU3W0ILp9NXki4";   // Ваш Public Key

  const onFirstNameChanged = (value : any) => {
    setFirstName(value);
    validateForm(value, lastName, email, iosCheckbox, webCheckbox, crmCheckbox, uiuxCheckbox, backendCheckbox);
  };

  const onLastNameChanged = (value : any) => {
    setLastName(value);
    validateForm(firstName, value, email, iosCheckbox, webCheckbox, crmCheckbox, uiuxCheckbox, backendCheckbox);
  };

  const onEmailChanged = (value : any) => {
    setEmail(value);
    validateForm(firstName, lastName, value, iosCheckbox, webCheckbox, crmCheckbox, uiuxCheckbox, backendCheckbox);
  };

  const onIosCheckboxChanged = (value : any) => {
    setIosCheckbox(value);
    onIosWebCheckboxChanged(value, webCheckbox);
    validateForm(firstName, lastName, email, value, webCheckbox, crmCheckbox, uiuxCheckbox, backendCheckbox);
  };

  const onWebCheckboxChanged = (value : any) => {
    setWebCheckbox(value);
    onIosWebCheckboxChanged(iosCheckbox, value);
    validateForm(firstName, lastName, email, iosCheckbox, value, crmCheckbox, uiuxCheckbox, backendCheckbox);
  };
  
  const onCrmCheckboxChanged = (value : any) => {
    setCrmCheckbox(value);
    validateForm(firstName, lastName, email, iosCheckbox, webCheckbox, value, uiuxCheckbox, backendCheckbox);
  };

  const onUiuxCheckboxChanged = (value : any) => {
    setUiuxCheckbox(value);
    validateForm(firstName, lastName, email, iosCheckbox, webCheckbox, crmCheckbox, value, backendCheckbox);
  };

  const onBackendCheckboxChanged = (value : any) => {
    setBackendCheckbox(value);
    validateForm(firstName, lastName, email, iosCheckbox, webCheckbox, crmCheckbox, uiuxCheckbox, value);
  };

  const onIosWebCheckboxChanged = (iosCheckbox : any, webCheckbox : any) => {
    if (iosCheckbox && webCheckbox) {
      setBudgetId(0);
    } else if (iosCheckbox && !webCheckbox) {
      setBudgetId(1);
    } else if (!iosCheckbox && webCheckbox) {
      setBudgetId(2);
    } else {
      setBudgetId(3);
    }
  };

  const validateForm = (firstName : any, lastName : any, email : any, ios : any, web : any, crm : any, uiux : any, backend : any) => {
    const isFirstNameValid = validateName(firstName);
    const isLastNameValid = validateName(lastName);
    const isEmailValid = validateEmail(email);
    // Теперь валидной будет форма, если выбран хотя бы один из пяти чекбоксов
    const isCheckboxValid = ios || web || crm || uiux || backend;

    setInvalidForm(
      !isFirstNameValid || !isLastNameValid || !isEmailValid || !isCheckboxValid
    );
  };

  const onDropZoneDragOver = (e : any) => {
    e.preventDefault();
    e.currentTarget.classList.add("dragover");
  };

  const onDropZoneDragLeave = (e : any) => {
    e.currentTarget.classList.remove("dragover");
  };

  const onDropZoneDrop = (e : any) => {
    e.preventDefault();
    e.currentTarget.classList.remove("dragover");

    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const onFileInputChange = (e : any) => {
    const files = e.currentTarget.files;
    handleFiles(files);
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();

    // Формируем список выбранных услуг
    const chosenServices = [];
    if (iosCheckbox) chosenServices.push("iOS App");
    if (webCheckbox) chosenServices.push("Web development");
    if (crmCheckbox) chosenServices.push("Business CRM");
    if (uiuxCheckbox) chosenServices.push("Design UI/UX");
    if (backendCheckbox) chosenServices.push("Servers/Backend");

    // Определяем выбранный бюджет
    let selectedBudget = "";
    if (budgetCheckboxes[0]) {
      selectedBudget = budget1Prices[budgetId];
    } else if (budgetCheckboxes[1]) {
      selectedBudget = budget2Prices[budgetId];
    } else if (budgetCheckboxes[2]) {
      selectedBudget = budget3Prices[budgetId];
    }

    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      project_details: projectDetails,
      services: chosenServices.join(", "),
      budget: selectedBudget,
      attachments: "" // При необходимости можно добавить логику для приложений
    };

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
        setBudgetCheckboxes([false, false, false]);
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
      disableScrollLock={ true }
    >
      <div className="modal-content talk-popup">
        <span
          className="close-modal"
          id="closeModal"
          onClick={() => router.back()}
        ></span>
        <div className="talk-popup__content">
          <div className="talk-popup__left">
            <Image src={LogoBlack} alt="" className="talk-popup__logo" />
            <div className="talk-popup__left-content">
              <h1>Let’s craft something unforgettable together!</h1>
              <Image src={ModalImage} alt="" />
              <p>
                Ready to kickstart your project? Complete the form to schedule a
                discovery call, where we’ll dive into your goals and ideas.
                After the call, we’ll deliver a custom plan with a clear
                timeline and pricing.
              </p>
            </div>
            <Image src={ModalBg} alt="" className="talk-popup__left-img" />
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
                    onInput={(event) => onFirstNameChanged(event.target.value)}
                  />
                </div>
                <div className="talk-popup__from-row">
                  <label>Last name</label>
                  <input
                    type="text"
                    placeholder="What’s your last name?"
                    value={lastName}
                    onInput={(event) => onLastNameChanged(event.target.value)}
                  />
                </div>
              </div>
              <div className="talk-popup__from-row">
                <label>E-mail</label>
                <input
                  type="email"
                  placeholder="brianclark@gmail.com"
                  value={email}
                  onInput={(event) => onEmailChanged(event.target.value)}
                />
              </div>
              <div className="talk-popup__from-row">
                <label>Project details</label>
                <textarea
                  placeholder="What can we help you with?"
                  rows="4"
                  value={projectDetails}
                  onChange={(event) => setProjectDetails(event.target.value)}
                  style={{
                    resize: "none", 
                  }}
                ></textarea>
              </div>
              <div className="talk-popup__select-services">
                <p>Select the services you need for your project:</p>
                
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
                  <span>Servers/Backend</span>
                </div>
              </div>
              <div className="talk-popup__budget">
                <p>
                  <span>Budget </span>   (Unsure on budget? Select a range, and
                  we’ll tailor the best solution for you!)
                </p>
                <div className="talk-popup__budget-checkboxes">
                  <div className="talk-popup__budget-checkboxes-item">
                    <label className="custom-checkbox">
                      <input
                        type="checkbox"
                        className="talk-popup__budget-checkboxe"
                        checked={budgetCheckboxes[0]}
                        onChange={(event) =>
                          setBudgetCheckboxes([
                            event.currentTarget.checked,
                            false,
                            false,
                          ])
                        }
                      />
                      <span className="checkmark"></span>
                    </label>
                    <span id="budget-1">{budget1Prices[budgetId]}</span>
                  </div>
                  <div className="talk-popup__budget-checkboxes-item">
                    <label className="custom-checkbox">
                      <input
                        type="checkbox"
                        className="talk-popup__budget-checkboxe"
                        checked={budgetCheckboxes[1]}
                        onChange={(event) =>
                          setBudgetCheckboxes([
                            false,
                            event.currentTarget.checked,
                            false,
                          ])
                        }
                      />
                      <span className="checkmark"></span>
                    </label>
                    <span id="budget-2">{budget2Prices[budgetId]}</span>
                  </div>
                  <div className="talk-popup__budget-checkboxes-item">
                    <label className="custom-checkbox">
                      <input
                        type="checkbox"
                        className="talk-popup__budget-checkboxe"
                        checked={budgetCheckboxes[2]}
                        onChange={(event) =>
                          setBudgetCheckboxes([
                            false,
                            false,
                            event.currentTarget.checked,
                          ])
                        }
                      />
                      <span className="checkmark"></span>
                    </label>
                    <span id="budget-3">{budget3Prices[budgetId]}</span>
                  </div>
                </div>
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
                    <Image src={Staple} alt="" />
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

export default page;
