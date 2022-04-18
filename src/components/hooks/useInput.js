import { useState } from "react";

export default useInput = (initial, required = false) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(null);

  return {
    value,
    error,
    onChange: (e) => setValue(e.target.value),
    onBlur: (e) => {
      if (!e.target.value && required) {
        setError("Required field");
      } else {
        setError(null);
      }
    },
  };
};
