'use client'
import { useEffect, useState } from "react";
import {
  handleFiles,
  validateEmail,
  validateName,
} from "@/lib/utils/validateTalkModal";
import emailjs from '@emailjs/browser';
import { Modal } from '@mui/material';
import Image from 'next/image';
import { useRouter } from "@/i18n/routing";

const Page = () => {
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

  const onFirstNameChanged = (value : string) => {
    setFirstName(value);
  };

  const onLastNameChanged = (value : string) => {
    setLastName(value);
  };

  const onEmailChanged = (value : string) => {
    setEmail(value);
  };

  const onIosCheckboxChanged = (value : boolean) => {
    setIosCheckbox(value);
    onIosWebCheckboxChanged(value, webCheckbox);
  };

  const onWebCheckboxChanged = (value : boolean) => {
    setWebCheckbox(value);
    onIosWebCheckboxChanged(iosCheckbox, value);
  };
  
  const onCrmCheckboxChanged = (value : boolean) => {
    setCrmCheckbox(value);
  };

  const onUiuxCheckboxChanged = (value : boolean) => {
    setUiuxCheckbox(value);
  };

  const onBackendCheckboxChanged = (value : boolean) => {
    setBackendCheckbox(value);
  };

  const onIosWebCheckboxChanged = (iosCheckbox : boolean, webCheckbox : boolean) => {
    if (iosCheckbox && webCheckbox) {
      setBudgetId(0);
    } else if (iosCheckbox && !webCheckbox) {
      setBudgetId(1);
    } else if (!iosCheckbox && webCheckbox) {
      setBudgetId(2);
    }
  };

  const validateForm = (firstName: string, lastName: string, email: string, ios: boolean, web: boolean, crm: boolean, uiux: boolean, backend: boolean) => {
    const isFirstNameValid = validateName(firstName);
    const isLastNameValid = validateName(lastName);
    const isEmailValid = validateEmail(email);
    // Теперь валидной будет форма, если выбран хотя бы один из пяти чекбоксов
    const isCheckboxValid = ios || web || crm || uiux || backend;
    const isBudgetSelected = budgetCheckboxes.some(checkbox => checkbox);

    setInvalidForm(
      !isFirstNameValid || !isLastNameValid || !isEmailValid || !isCheckboxValid ||
      !isBudgetSelected
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

  useEffect(() => {
    validateForm(firstName, lastName, email, iosCheckbox, webCheckbox, crmCheckbox, uiuxCheckbox, backendCheckbox);
  }, [firstName, lastName, email, iosCheckbox, webCheckbox, crmCheckbox, uiuxCheckbox, backendCheckbox])

  const handleSubmit = (e : any) => {
    validateForm(firstName, lastName, email, iosCheckbox, webCheckbox, crmCheckbox, uiuxCheckbox, backendCheckbox);
    e.preventDefault();

    if (!budgetCheckboxes.some(checkbox => checkbox)) {
      alert("Please select a budget range");
      return;
    }
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
            <Image src="/icons/black-logo.svg" alt="" width={0} height={0} className="w-auto h-auto talk-popup__logo" />
            <div className="talk-popup__left-content">
              <h1>Let’s craft something unforgettable together!</h1>
              <Image src="/images/modal-img.png" width={0} height={0} className="w-auto h-auto" alt="" unoptimized={true} />
              <p>
                Ready to kickstart your project? Complete the form to schedule a
                discovery call, where we’ll dive into your goals and ideas.
                After the call, we’ll deliver a custom plan with a clear
                timeline and pricing.
              </p>
            </div>
            <Image src="/images/modal-bg.png" alt="" width={0} height={0} className="w-auto h-auto talk-popup__left-img" unoptimized={true} />
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
                    onInput={(event : any) => onFirstNameChanged(event.target.value)}
                  />
                </div>
                <div className="talk-popup__from-row">
                  <label>Last name</label>
                  <input
                    type="text"
                    placeholder="What’s your last name?"
                    value={lastName}
                    onInput={(event : any) => onLastNameChanged(event.target.value)}
                  />
                </div>
              </div>
              <div className="talk-popup__from-row">
                <label>E-mail</label>
                <input
                  type="email"
                  placeholder="brianclark@gmail.com"
                  value={email}
                  onInput={(event : any) => onEmailChanged(event.target.value)}
                />
              </div>
              <div className="talk-popup__from-row">
                <label>Project details</label>
                <textarea
                  placeholder="What can we help you with?"
                  rows={4}
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
                    <Image src="/icons/staple.svg" width={0} height={0} className="h-auto w-auto" alt="" />
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
