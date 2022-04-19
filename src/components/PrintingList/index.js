import React, { useEffect, useState, Fragment } from "react";
import "./styles.scss";
import Dropdown from "../ui/Dropdown";
import Checkbox from "../ui/Checkbox";
import Divider from "../ui/Divider";

import {
  PRINTING_DATA,
  PRINTING_OPTIONS,
  PAPER_SIZES,
  OPTIONS_MOCK,
} from "./mock-data";

export default function PrintingList() {
  const [printing, setPrinting] = useState(PRINTING_OPTIONS[0]);
  const [printingList, setPrintingList] = useState([]);

  useEffect(() => {
    setPrintingList(() => {
      return PRINTING_DATA.map((item) => {
        return {
          ...item,
          paper_size:
            PAPER_SIZES.find((paper) => paper.id === item.paper_size) ||
            PAPER_SIZES[0],
          choose:
            OPTIONS_MOCK.find((option) => option.id === item.choose) ||
            OPTIONS_MOCK[0],
        };
      });
    });
  }, []);

  const handleChangeFilter = (value) => {
    setPrinting(value);
  };

  const handleChangePrinting = (param, index, value) => {
    setPrintingList((prevList) => {
      return prevList.map((item, idx) => {
        if (idx === index) {
          let ret = { ...item };
          ret[param] = value;
          return ret;
        }
        return item;
      });
    });
  };

  return (
    <div className="printing-list block">
      <div className="printing-list__filters">
        <Dropdown
          label="Printing house"
          value={printing}
          data={PRINTING_OPTIONS}
          handleChange={handleChangeFilter}
        />
      </div>

      {printingList.map((item, idx) => (
        <Fragment key={item.id}>
          <div className="printing-list__item">
            <div className="printing-list__info">
              <img
                src={require(`../../images/icons/${item.filetype}.svg`)}
                alt={item.filetype}
                className="printing-list__type-icon"
              />
              <h3 className="printing-list__name">{item.name}</h3>
            </div>
            <div className="printing-list__params">
              <Dropdown
                className="printing-list__dropdown"
                value={item.choose}
                data={OPTIONS_MOCK}
                handleChange={(value) =>
                  handleChangePrinting("choose", idx, value)
                }
              />
              <Dropdown
                className="printing-list__dropdown"
                value={item.paper_size}
                data={PAPER_SIZES}
                handleChange={(value) =>
                  handleChangePrinting("paper_size", idx, value)
                }
              />
              <input
                className="printing-list__input input"
                type="number"
                value={item.count}
                onChange={(e) =>
                  handleChangePrinting("count", idx, e.target.value)
                }
              />
              <a className="link_primary" href={item.description_link}>
                description
              </a>
            </div>

            <div className="printing-list__controls">
              <Checkbox
                id={item.id}
                checked={item.checked}
                handleChange={(value) =>
                  handleChangePrinting("checked", idx, value.target.checked)
                }
              />
            </div>
          </div>
          {printingList.length - 1 !== idx && <Divider />}
        </Fragment>
      ))}
    </div>
  );
}
