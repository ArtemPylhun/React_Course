import { useEffect, useState } from "react";
import useLoading from "./useLoading";

export const useGetAllToDo = () => {
  const { isLoading, setIsLoading } = useLoading();
  const [toDos, setToDos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const fetchData = async () => {
        try {
          fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
              setToDos(json);
              setIsLoading(false);
            });
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };
      fetchData();
    }, 2000);
  }, []);

  return { toDos, setToDos, isLoading, error };
};
