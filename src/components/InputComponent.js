import React, { useState } from "react";
import "../styles/inputField.css";

const InputComponent = ({ data }) => {
  const [value, setValue] = useState();
  console.log(value);
  
  return (
    <div className="input-field">
      <label>{data.name}</label>
      <input
        type="text"
        placeholder={data.placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputComponent;
