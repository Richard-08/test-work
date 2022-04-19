import React, { useState } from "react";
import "./styles.scss";

import RadioButton from "../ui/RadioButton";
import MailIcon from "../../images/icons/mail.svg";

export default function Footer() {
  const [correct, setCorrect] = useState(false);

  const handleChange = () => {
    setCorrect(!correct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (correct) {
      console.log("Submit");
    }
  };

  return (
    <footer className="footer">
      <form className="footer__form" onSubmit={handleSubmit}>
        <div className="footer__form-input">
          <h3 className="footer__form-title">
            Are you sure that all parameters are correct?
          </h3>
          <RadioButton
            required={true}
            type="checkbox"
            checked={correct}
            label="Yes everything is correct"
            handleChange={handleChange}
          />
        </div>

        <button type="submit" className="footer__form-btn button_primary">
          <img src={MailIcon} alt="Send mail" />
          <span>Place order</span>
        </button>
      </form>
    </footer>
  );
}
