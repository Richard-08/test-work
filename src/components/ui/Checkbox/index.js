import React from "react";
import "./styles.scss";

export default function Checkbox({ checked, label = "", handleChange }) {
  return (
    <div>
      <input
        className="checkbox"
        id={"checkbox" + label}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        aria-checked={checked}
      />
      <label htmlFor={"checkbox" + label}>{label}</label>
    </div>
  );
}
