import { useEffect, useState } from "react";

export const useGetAllAddressesBooks = () => {
  const [adressesBooks, setAddressesBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const initialAddresses = [
        { id: 1, firstName: "John", lastName: "Doe", phone: "123-456-7890" },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Smith",
          phone: "987-654-3210",
        },
        {
          id: 3,
          firstName: "Alice",
          lastName: "Johnson",
          phone: "555-555-5555",
        },
      ];
      setAddressesBooks(initialAddresses);
    } catch (error) {
      setError(error);
    }
  }, []);

  return { adressesBooks, setAddressesBooks, error };
};
