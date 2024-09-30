import React from "react";
import { useEditToDo } from "../hooks/useEditToDo";
const ToDoTable = ({
  toDos,
  filteredToDos,
  setToDos,
  handleDeleteButtonClick,
}) => {
  const {
    editId,
    editTitle,
    setEditTitle,
    handleEditButtonClick,
    handleSaveButtonClick,
    editError,
  } = useEditToDo(toDos, setToDos);

  const displayToDos = filteredToDos.length > 0 ? filteredToDos : toDos;

  if (toDos.length === 0) {
    return <p>No data found!</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th className="thTd">Id</th>
          <th className="thTd">Title</th>
          <th className="thTd">Actions</th>
        </tr>
      </thead>
      <tbody>
        {displayToDos.map((toDo) => {
          return (
            <tr key={toDo.id.toString()}>
              <td className="thTd">{toDo.id.toString()}</td>
              <td className="thTd">
                {editId === toDo.id ? (
                  <div>
                    <input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      style={{ borderColor: editError ? "red" : "" }}
                    />
                    {editError && <p style={{ color: "red" }}>{editError}</p>}
                  </div>
                ) : (
                  toDo.title
                )}
              </td>

              <td className="thTd">
                {editId === toDo.id ? (
                  <button
                    className="table-save-button"
                    onClick={() => handleSaveButtonClick(toDo.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="table-edit-button"
                    onClick={() => handleEditButtonClick(toDo.id, toDo.title)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="table-red-button"
                  onClick={() => handleDeleteButtonClick(toDo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ToDoTable;
