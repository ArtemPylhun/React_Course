import { useState } from "react";
import axios from "axios";

const useGetUsers = () => {
  const [users, setUsers] = useState([]);

  const baseUrl = "https://dummyjson.com";
  const loadUsers = async () => {
    const response = await axios.get(baseUrl + "/users");
    setUsers(response.data.users);
  };

  return { users, setUsers, loadUsers };
};
export default useGetUsers;
