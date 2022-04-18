import React, { useState } from "react";
import Dropdown from "../ui/Dropdown";
import Checkbox from "../ui/Checkbox";
import Divider from "../ui/Divider";
import RadioButton from "../ui/RadioButton";

const DATA = [
  {
    id: 0,
    name: "Option 1",
  },
  {
    id: 1,
    name: "Option 2",
  },
  {
    id: 2,
    name: "Option 3",
  },
  {
    id: 3,
    name: "Option 4",
  },
  {
    id: 4,
    name: "Option 5",
  },
  {
    id: 5,
    name: "Option 6",
  },
  {
    id: 6,
    name: "Option 7",
  },
  {
    id: 7,
    name: "Option 8",
  },
];

export default function PrintingList() {
  const [printing, setPrinting] = useState(DATA[0]);
  const [checked, setChecked] = useState(false);

  const handleChange = (value) => {
    setPrinting(value);
  };

  const handleChangeCheck = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      <Dropdown
        label="Printing house"
        value={printing}
        data={DATA}
        handleChange={handleChange}
      />
      <Checkbox checked={checked} handleChange={handleChangeCheck} />
      <Divider />
      <RadioButton
        type="checkbox"
        label="Yes everything is correct"
        checked={checked}
        handleChange={handleChangeCheck}
      />
    </div>
  );
}
