import { useState } from "react";

import { handleCloseModal } from "../utils/modal";
import {
  handleFiles,
  validateEmail,
  validateName,
} from "../utils/validateTalkModal";

import Staple from "../assets/icons/staple.svg";
import LogoBlack from "../assets/icons/logo-black.svg";
import ModalImage from "../assets/images/modal-img.png";
import ModalBg from "../assets/images/modal-bg.png";

const TalkPopup = () => {
  const budget1Prices = [
    "$5.000-$10.000",
    "$3.000-$5.000",
    "$1.000-$3.000",
    "0$",
  ];
  const budget2Prices = [
    "$10.000-$15.000",
    "$5.000-$10.000",
    "$3.000-$5.000",
    "0$",
  ];
  const budget3Prices = [
    "$15.000-$25.000",
    "$10.000-$15.000",
    "$5.000-$10.000",
    "0$",
  ];

  const [budgetId, setBudgetId] = useState(3);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  const [iosCheckbox, setIosCheckbox] = useState(false);
  const [webCheckbox, setWebCheckbox] = useState(false);

  const [budgetCheckboxes, setBudgetCheckboxes] = useState([
    false,
    false,
    false,
  ]);

  const [invalidForm, setInvalidForm] = useState(true);

  const onFirstNameChanged = (value) => {
    setFirstName(value);
    validateForm(value, lastName, email, iosCheckbox, webCheckbox);
  };

  const onLastNameChanged = (value) => {
    setLastName(value);
    validateForm(firstName, value, email, iosCheckbox, webCheckbox);
  };

  const onEmailChanged = (value) => {
    setEmail(value);
    validateForm(firstName, lastName, value, iosCheckbox, webCheckbox);
  };

  const onIosCheckboxChanged = (value) => {
    setIosCheckbox(value);
    validateForm(firstName, lastName, email, value, webCheckbox);
    onIosWebCheckboxChanged(value, webCheckbox);
  };

  const onWebCheckboxChanged = (value) => {
    setWebCheckbox(value);
    validateForm(firstName, lastName, email, iosCheckbox, value);
    onIosWebCheckboxChanged(iosCheckbox, value);
  };

  const onIosWebCheckboxChanged = (iosCheckbox, webCheckbox) => {
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

  const validateForm = (
    firstName,
    lastName,
    email,
    iosCheckbox,
    webCheckbox
  ) => {
    const isFirstNameValid = validateName(firstName);
    const isLastNameValid = validateName(lastName);
    const isEmailValid = validateEmail(email);
    const isCheckboxValid = iosCheckbox || webCheckbox;

    setInvalidForm(
      !isFirstNameValid || !isLastNameValid || !isEmailValid || !isCheckboxValid
    );
  };

  const onDropZoneDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("dragover");
  };

  const onDropZoneDragLeave = (e) => {
    e.currentTarget.classList.remove("dragover");
  };

  const onDropZoneDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("dragover");

    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const onFileInputChange = (e) => {
    const files = e.currentTarget.files;
    handleFiles(files);
  };

  return (
    <div className="modal" id="talk-popup">
      <div className="modal-content talk-popup">
        <span
          className="close-modal"
          id="closeModal"
          onClick={handleCloseModal}
        ></span>
        <div className="talk-popup__content">
          <div className="talk-popup__left">
            <img src={LogoBlack} alt="" className="talk-popup__logo" />
            <div className="talk-popup__left-content">
              <h1>Let’s craft something unforgettable together!</h1>
              <img src={ModalImage} alt="" />
              <p>
                Ready to kickstart your project? Complete the form to schedule a
                discovery call, where we’ll dive into your goals and ideas.
                After the call, we’ll deliver a custom plan with a clear
                timeline and pricing.
              </p>
            </div>
            <img src={ModalBg} alt="" className="talk-popup__left-img" />
          </div>
          <div className="talk-popup__right">
            <form className="talk-popup__form">
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
                  name=""
                  id=""
                  placeholder="What can we help you with?"
                  rows="4"
                ></textarea>
              </div>
              <div className="talk-popup__select-services">
                <p>Select the services you need for your project:</p>
                <div className="talk-popup__service-checkbox">
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      name="ios-checkbox"
                      className="ios-development-checkbox"
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
                      name="ios-checkbox"
                      className="web-development-checkbox"
                      checked={webCheckbox}
                      onChange={(event) =>
                        onWebCheckboxChanged(event.currentTarget.checked)
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                  <span>Web development</span>
                </div>
              </div>
              <div className="talk-popup__budget">
                <p>
                  <span>Budget</span>(Unsure on budget? Select a range, and
                  we’ll tailor the best solution for you!)
                </p>
                <div className="talk-popup__budget-checkboxes">
                  <div className="talk-popup__budget-checkboxes-item">
                    <label className="custom-checkbox">
                      <input
                        type="checkbox"
                        name="ios-checkbox"
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
                        name="ios-checkbox"
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
                        name="ios-checkbox"
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
                    <img src={Staple} alt="" />
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
                className={`fill-btn talk-popup__submit ${
                  invalidForm ? "disabled" : ""
                }`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkPopup;
