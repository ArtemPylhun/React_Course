import React from "react";

const formStyles = {
  display: "flex",
  alignItems: "center",
  padding: "10px",
};

const inputStyles = {
  padding: "10px",
  marginRight: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  flex: 1,
};

const buttonStyles = {
  backgroundColor: "green",
  color: "white",
  padding: "10px 15px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const AddToDoComponent = ({ title = "", onTitleChange, onSubmit }) => {
  return (
    <form style={formStyles}>
      <input style={inputStyles} value={title} onChange={onTitleChange} />
      <button style={buttonStyles} onClick={onSubmit}>
        Add
      </button>
    </form>
  );
};

export default AddToDoComponent;
