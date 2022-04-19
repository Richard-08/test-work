import React, { Fragment } from "react";
import "./styles.scss";

export default function InfoItem({ name, value }) {
  return (
    <div className="info-item">
      <dt className="info-item__title">{name}</dt>
      <dd className="info-item__value">{value}</dd>
    </div>
  );
}
