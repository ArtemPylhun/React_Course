import { useState, useId } from "react";
import "./App.css";
import ToDoTable from "./components/ToDoTable";
import AddToDoComponent from "./components/AddToDoComponent";
import SearchInput from "./components/SearchInput";

function App() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState(null);
  const [filterText, setFilterText] = useState("");

  function handleNewTitleChange(event) {
    setNewToDo({ title: event.target.value });
  }

  const toDoWithId = { ...newToDo, id: Date.now() };

  function handleSubmit(event) {
    event.preventDefault();
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

  const filteredToDos = toDos.filter((toDo) => {
    return toDo.title?.toLowerCase().includes(filterText.toLowerCase());
  });

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
      <ToDoTable toDos={filteredToDos} handleDeleteButtonClick={handleDelete} />
    </>
  );
}

export default App;
