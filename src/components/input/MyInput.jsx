import React from 'react';
import "./MyInput.css"


const MyInput = ({ id, labelName, placeholder, inputType, ...rest }) => {
    return (
        <div className="container">
        <label htmlFor={id}>{labelName}</label>
        <input
          placeholder={placeholder || ".."}
          id={id}
          type={inputType}
          {...rest}
        />
      </div>
    );
};

export default MyInput;