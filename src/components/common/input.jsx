import React from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        type="text"
        className="form-control"
        autoFocus
      />
    </div>
  );
};

export default Input;
