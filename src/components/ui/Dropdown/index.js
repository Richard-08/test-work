import React, { useState, useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";

import "./styles.scss";
import Arrow from "../../../images/utils/arrow-down.svg";

export default function Dropdown({ label, value, data, handleChange }) {
  const dropdownRef = useRef();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useClickOutside(dropdownRef, handleClose);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleOption = (value, e) => {
    handleChange(value);
    handleClose();
  };

  return (
    <div className={`dropdown ${open ? "open" : ""}`}>
      {label && (
        <label id="dropdown__label" className="dropdown__label">
          {label}
        </label>
      )}
      <div className="dropdown__container" ref={dropdownRef}>
        <button
          className="dropdown__btn"
          type="button"
          aria-expanded={open}
          aria-controls="listbox1"
          aria-haspopup="listbox"
          aria-labelledby="dropdown__label"
          id="dropdown__label"
          role="combobox"
          tabIndex="0"
          onClick={toggleOpen}
        >
          <span>{value.name}</span>
          <img src={Arrow} alt="Arrow down" className="dropdown__btn-arrow" />
        </button>
        <ul
          className="dropdown__menu"
          aria-labelledby="dropdown__label"
          role="listbox"
          tabIndex="-1"
        >
          {data.map((item) => (
            <li
              key={item.id}
              role="option"
              aria-selected={item.id === value.id}
              className="dropdown__item"
              onClick={(e) => handleOption(item, e)}
            >
              <a className="dropdown__link" href="#">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
