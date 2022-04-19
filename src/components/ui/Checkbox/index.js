import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

/**
 * @description checkbox component
 * @param {string} label checkbox label
 * @param {string|number} id checkbox name
 * @param {boolean} required required checkbox false|true
 * @param {boolean} checked checkbox state false|true
 * @param {Function} handleChange handle change checked
 */

export default function Checkbox({
  checked = false,
  id,
  label = "",
  required = false,
  handleChange,
}) {
  return (
    <div>
      <input
        className="checkbox"
        id={"checkbox" + id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        aria-checked={checked}
        required={required}
      />
      <label htmlFor={"checkbox" + id}>{label}</label>
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
};
