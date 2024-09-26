import React from "react";
const formStyles = {
  display: "flex",
  alignItems: "center",
  padding: "10px", // Padding around the entire form
};

const inputStyles = {
  padding: "10px", // Padding inside the input
  marginRight: "10px", // Space between input and button
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const SearchInput = ({ filterText, onFilterTextChange }) => {
  return (
    <form style={formStyles}>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={onFilterTextChange}
        style={inputStyles}
      />
    </form>
  );
};

export default SearchInput;
