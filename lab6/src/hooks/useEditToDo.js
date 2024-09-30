import { useState } from "react";

export const useEditToDo = (toDos, setToDos) => {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editError, setEditError] = useState("");

  const handleEditButtonClick = (id, title) => {
    setEditId(id);
    setEditTitle(title);
  };

  const handleSaveButtonClick = (id) => {
    if (!editTitle.trim()) {
      setEditError("Title is required");
      return;
    }
    const updatedToDos = toDos.map((toDo) => {
      return toDo.id === id ? { ...toDo, title: editTitle } : toDo;
    });
    setToDos(updatedToDos);
    setEditId(null);
    setEditError("");
    // setFilterText("");
  };

  return {
    editId,
    editTitle,
    setEditTitle,
    handleEditButtonClick,
    handleSaveButtonClick,
    editError,
  };
};
