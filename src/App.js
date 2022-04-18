import { useState } from "react";
import Dropdown from "./components/ui/Dropdown";

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

function App() {
  const [printing, setPrinting] = useState(DATA[0]);

  const handleChange = (value) => {
    setPrinting(value);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <Dropdown
        label="Printing house"
        value={printing}
        data={DATA}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
