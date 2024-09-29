import React from "react";

const ToDoTable = ({ toDos, handleDeleteButtonClick }) => {
  if (toDos.length === 0) {
    return <p>Loading...</p>;
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
        {toDos.map((toDo) => {
          return (
            <tr key={toDo.id.toString()}>
              <td className="thTd">{toDo.id.toString()}</td>
              <td className="thTd">{toDo.title}</td>
              <td className="thTd">
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
