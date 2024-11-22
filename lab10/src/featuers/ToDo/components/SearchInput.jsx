import React from "react";

const SearchInput = ({ filterText, onFilterTextChange }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={onFilterTextChange}
      />
    </form>
  );
};

export default SearchInput;
