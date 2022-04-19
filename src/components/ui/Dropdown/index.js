import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import useClickOutside from "../../hooks/useClickOutside";

import "./styles.scss";
import Arrow from "../../../images/utils/arrow-down.svg";

/**
 * @description single select dropdown component
 * @param {String} label dropdown label
 * @param {Object} value selected|default value {id: 0, name: 'option'}
 * @param {Array} data options data [{id: 0, name: 'option 1'}, {id: 1, name: 'option 2'}]
 * @param {Function} handleChange handle change selected value
 */

export default function Dropdown({
  className = "",
  label,
  value,
  data,
  handleChange,
}) {
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
    <div className={`dropdown ${open ? "open" : ""} ${className}`}>
      {label && (
        <label id={"dropdown__label" + label} className="dropdown__label">
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
          aria-labelledby={"dropdown__label" + label}
          id={"dropdown__label" + label}
          role="combobox"
          tabIndex="0"
          onClick={toggleOpen}
        >
          <span>{value.name}</span>
          <img src={Arrow} alt="Arrow down" className="dropdown__btn-arrow" />
        </button>
        <ul
          className="dropdown__menu"
          aria-labelledby={"dropdown__label" + label}
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
              <a className="dropdown__link" href="#" tabIndex={open ? 0 : -1}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.object,
  data: PropTypes.array,
  handleChange: PropTypes.func,
};
