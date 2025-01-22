'use client'
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const FaqAccordionItem = (props) => {
  const [active, setActive] = useState(false);
  const isMobileScreen = useMediaQuery("(max-width:600px)");

  const onClickToggle = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <div className={`faq__accordion-item ${active ? "active" : ""}`}>
      <div
        className="faq__accordion-header"
        data-toggle="#ques1"
        onClick={() => onClickToggle()}
      >
        <h2 className="!font-inter !text-[16px]">{props.header}</h2>
        <span className="faq__accordion-close"></span>
      </div>
      <div
        className="faq__accordion-content"
        id="ques1"
        style={
          isMobileScreen
            ? { display: active ? "block" : "none" }
            : { maxHeight: active ? "20rem" : "0" }
        }
      >
        {props.content}
      </div>
    </div>
  );
};

export default FaqAccordionItem;
