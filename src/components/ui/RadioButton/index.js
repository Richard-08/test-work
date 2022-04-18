import React from "react";
import "./styles.scss";

export default function RadioButton({
  type = "radio",
  label,
  name = "",
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
      />
      <label htmlFor={"radio" + label} className="radio__label">
        {label}
      </label>
    </div>
  );
}
