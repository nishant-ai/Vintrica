import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector({ handleCountryChange }) {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  // Set Value in Redux Store
  const changeHandler = (value) => {
    setValue(value);
    handleCountryChange(value);
  };

  return (
    <Select
      placeholder="Country"
      className="Country"
      options={options}
      value={value}
      onChange={changeHandler}
    />
  );
}

export default CountrySelector;
