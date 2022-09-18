import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector({ handleCountryOfRegChange }) {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const handleChange = (value) => {
    setValue(value);
    handleCountryOfRegChange(value);
  };

  return (
    <Select
      placeholder="Country"
      className="Country"
      options={options}
      value={value}
      onChange={handleChange}
    />
  );
}

export default CountrySelector;
