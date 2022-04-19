import React, { Fragment } from "react";
import "./styles.scss";
import Divider from "../../../ui/Divider";

export default function WithRowSplitted({
  perRow = 3,
  lastRowDivider = true,
  children,
}) {
  const rows = () => {
    return Array.from(
      { length: Math.ceil(children.length / perRow) },
      (_, idx) => idx
    );
  };

  const isLastRow = (idx) => {
    return rows().length - 1 !== idx;
  };

  const isNeedDivider = (idx) => {
    if (!lastRowDivider) {
      return isLastRow(idx);
    }

    return true;
  };

  return (
    <Fragment>
      {rows().map((row, idx) => (
        <Fragment key={row}>
          <div className="row">
            {children.slice(row * perRow, row * perRow + perRow)}
          </div>
          {isNeedDivider(idx) && <Divider />}
        </Fragment>
      ))}
    </Fragment>
  );
}
