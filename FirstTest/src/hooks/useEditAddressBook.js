import { useState } from "react";

export const useEditAddressBook = (adressesBooks, setAddressesBooks) => {
  const [editId, setEditId] = useState(null);
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editFirstNameError, setEditFirstNameError] = useState("");
  const [editLastNameError, setEditLastNameError] = useState("");
  const [editPhoneError, setEditPhoneError] = useState("");

  const handleEditButtonClick = (id, firstName, lastName, phone) => {
    setEditId(id);
    setEditFirstName(firstName);
    setEditLastName(lastName);
    setEditPhone(phone);
  };

  const handleSaveButtonClick = (id) => {
    if (!editFirstName.trim()) {
      setEditFirstNameError("The First Name is required");
      return;
    }
    if (!editLastName.trim()) {
      setEditLastNameError("The Last Name is required");
      return;
    }
    if (!editPhone.trim()) {
      setEditPhoneError("The Phone is required");
      return;
    }
    const updatedAdressesBooks = adressesBooks.map((addressBook) => {
      return addressBook.id === id
        ? {
            ...addressBook,
            firstName: editFirstName,
            lastName: editLastName,
            phone: editPhone,
          }
        : addressBook;
    });
    setAddressesBooks(updatedAdressesBooks);
    setEditId(null);
    setEditFirstNameError("");
    setEditLastNameError("");
    setEditPhoneError("");
  };

  return {
    editId,
    editFirstName,
    editLastName,
    editPhone,
    setEditFirstName,
    setEditLastName,
    setEditPhone,
    handleEditButtonClick,
    handleSaveButtonClick,
    editFirstNameError,
    editLastNameError,
    editPhoneError,
  };
};
