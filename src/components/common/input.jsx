import React from "react";

const Input = ({ name, label, value, error, onChange }) => {
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
      />
      {error && <div className="alert alert-danger mt-2 p-2 ">{error}</div>}
    </div>
  );
};

export default Input;
