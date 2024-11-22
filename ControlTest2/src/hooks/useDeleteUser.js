import axios from "axios";

const useDeleteUser = async (id) => {
  try {
    await axios.delete(`https://dummyjson.com/users/${id}`);
  } catch (error) {
    console.error("Failed to delete user:", error);
  }
};

export default useDeleteUser;
