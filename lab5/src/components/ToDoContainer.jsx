import React from "react";
import AddToDoComponent from "./AddToDoComponent";
import SearchInput from "./SearchInput";
import ToDoTable from "./ToDoTable";
import { useState } from "react";
import { useGetAllToDo } from "../hooks/useGetAllToDo";
import Loader from "./Loader";
const ToDoContainer = () => {
  const { toDos, setToDos, isLoading, error } = useGetAllToDo();
  const [newToDo, setNewToDo] = useState(null);
  const [filterText, setFilterText] = useState("");

  const filteredToDos = toDos.filter((toDo) => {
    return toDo.title?.toLowerCase().includes(filterText.toLowerCase());
  });

  function handleNewTitleChange(event) {
    setNewToDo({ title: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const toDoWithId = { ...newToDo, id: Date.now() };
    setToDos([...toDos, toDoWithId]);
    setNewToDo(null);
  }

  function handleDelete(id) {
    setToDos((prevToDos) => {
      return prevToDos.filter((toDo) => toDo.id !== id);
    });
  }

  function handleInputChange(event) {
    event.preventDefault();
    setFilterText(event.target.value);
  }

  if (error) {
    return <p>Error {error.message}</p>;
  }

  return (
    <>
      <SearchInput
        filterText={filterText}
        onFilterTextChange={handleInputChange}
      />
      <AddToDoComponent
        title={newToDo?.title}
        onTitleChange={handleNewTitleChange}
        onSubmit={handleSubmit}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ToDoTable
            toDos={filteredToDos}
            handleDeleteButtonClick={handleDelete}
          />
        </>
      )}
    </>
  );
};

export default ToDoContainer;
