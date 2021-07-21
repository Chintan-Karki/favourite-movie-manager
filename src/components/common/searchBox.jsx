import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      name="query"
      className="form-control my-3"
      type="search"
      placeholder="Search..."
      value={value}
      aria-label="Search"
      onChange={(e) => onChange(e.currentTarget.value)}
    ></input>
  );
};

export default SearchBox;
