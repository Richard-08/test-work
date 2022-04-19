import React from "react";
import "./styles.scss";
import WithRowSplitted from "./components/WithRowSplitted";
import InfoItem from "./components/InfoItem";
import { INFORMATION, RECEIVERS_DATA, RECEIVERS_FIELDS } from "./mock-data";

export default function OrderInfo() {
  const getReceiversData = (item) => {
    return {
      ...item,
      value: RECEIVERS_DATA[item.alias],
    };
  };

  return (
    <div className="order-info block">
      <section className="order-info__information">
        <h4 className="order-info__title">Information</h4>
        <dl className="order-info__list">
          <WithRowSplitted>
            {INFORMATION.map((item) => (
              <InfoItem key={item.alias} {...item} />
            ))}
          </WithRowSplitted>
        </dl>
      </section>
      <section className="order-info__adresses">
        <h4 className="order-info__title">Receivers Addresses</h4>
        <dl className="order-info__list">
          <WithRowSplitted lastRowDivider={false}>
            {RECEIVERS_FIELDS.map((item) => (
              <InfoItem key={item.alias} {...getReceiversData(item)} />
            ))}
          </WithRowSplitted>
        </dl>
      </section>
    </div>
  );
}
