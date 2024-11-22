import React from "react";
import "../css/SearchBox.css";
const SearchBox = ({ search, setSearch }) => {
  return (
    <div className="filter-box">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name"
      />
    </div>
  );
};

export default SearchBox;
