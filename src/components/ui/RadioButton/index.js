import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

/**
 * @description radio|checkbox component
 * @param {string} type radio button type, available types: checkbox|radio
 * @param {string} label input label
 * @param {string} name input name
 * @param {boolean} required required checkbox false|true
 * @param {boolean} checked input state false|true
 * @param {Function} handleChange handle change checked
 */
export default function RadioButton({
  type = "radio",
  label,
  name = "",
  required = false,
  checked,
  handleChange,
}) {
  return (
    <div className="radio">
      <input
        className="radio__input"
        type={type}
        id={"radio" + label}
        name={name}
        aria-checked={checked}
        checked={checked}
        onChange={handleChange}
        required={required}
      />
      <label htmlFor={"radio" + label} className="radio__label">
        {label}
      </label>
    </div>
  );
}

RadioButton.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
};
