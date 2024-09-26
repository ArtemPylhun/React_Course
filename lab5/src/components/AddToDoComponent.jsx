import React from "react";

const AddToDoComponent = ({ title = "", onTitleChange, onSubmit }) => {
  return (
    <form>
      <input value={title} onChange={onTitleChange} />
      <button className="button-green" onClick={onSubmit}>
        Add
      </button>
    </form>
  );
};

export default AddToDoComponent;
