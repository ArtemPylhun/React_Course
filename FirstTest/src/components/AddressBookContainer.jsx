import React from "react";
import AddAddressComponent from "./AddAddressComponent";
import SearchInput from "./SearchInput";
import { useState } from "react";
import { useGetAllAddressesBooks } from "../hooks/useGetAllAddressesBooks";
import AddressBookTable from "./AddressBookTable";

const AddressBookContainer = () => {
  const { adressesBooks, setAddressesBooks, error } = useGetAllAddressesBooks();
  const [newAddressBook, setNewAddressBook] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [filterText, setFilterText] = useState("");

  const filteredAddressesBooks = adressesBooks.filter((adressBook) =>
    `${adressBook.firstName} ${adressBook.lastName} ${adressBook.phone}`
      .toLowerCase()
      .includes(filterText.toLowerCase())
  );

  function handleAddressChange(event) {
    const { name, value } = event.target;
    setNewAddressBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      !newAddressBook.firstName ||
      !newAddressBook.lastName ||
      !newAddressBook.phone
    )
      return;
    const newEntry = { id: Date.now(), ...newAddressBook };
    setAddressesBooks((prev) => [...prev, newEntry]);
    setNewAddressBook({ firstName: "", lastName: "", phone: "" });
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
      <AddAddressComponent
        newAddress={newAddressBook}
        onAddressChange={handleAddressChange}
        onSubmit={handleSubmit}
      />
      <AddressBookTable
        addressesBooks={adressesBooks}
        setAddressesBooks={setAddressesBooks}
        filteredAdressesBooks={filteredAddressesBooks}
      />
    </>
  );
};

export default AddressBookContainer;
