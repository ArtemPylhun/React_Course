import React from "react";

const ToDoTable = ({ toDos, handleDeleteButtonClick }) => {
  if (toDos.length === 0) {
    return <p>No data to display!</p>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => {
          return (
            <tr key={toDo.id.toString()}>
              <td>{toDo.id.toString()}</td>
              <td>{toDo.title}</td>
              <td>
                <button onClick={() => handleDeleteButtonClick(toDo.id)}>
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
