import React, { useState } from "react";
import useGetUsers from "../hooks/useGetUsers.js";
import useDeleteUser from "../hooks/useDeleteUser.js";
import UsersTable from "./UsersTable.jsx";
import SearchBox from "./SearchBox.jsx";

const UsersContainer = () => {
  const { users, setUsers, loadUsers } = useGetUsers();
  const [filter, setFilter] = useState("");

  const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteUsers = async (id) => {
    await useDeleteUser(id);
    console.log(await useDeleteUser(id));
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <button style={{ margin: "20px" }} onClick={loadUsers}>
        Load Users
      </button>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <>
          <SearchBox search={filter} setSearch={setFilter} />
          <UsersTable users={filteredUsers} onDelete={handleDeleteUsers} />
        </>
      )}
    </>
  );
};

export default UsersContainer;
