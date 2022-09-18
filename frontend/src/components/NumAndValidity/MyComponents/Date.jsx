import React, { useState } from "react";
import DatePicker from "react-date-picker";

export default function MyApp({ handleValidityChange }) {
  const [date, setDate] = useState(new Date());

  const handleChange = (date) => {
    setDate(date);
    handleValidityChange(date);
  };

  return (
    <div>
      <DatePicker onChange={(date) => handleChange(date)} value={date} />
    </div>
  );
}
