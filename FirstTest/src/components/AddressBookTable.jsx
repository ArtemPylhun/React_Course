import React from "react";
import { useEditAddressBook } from "../hooks/useEditAddressBook";
const AddressBookTable = ({
  addressesBooks,
  filteredAdressesBooks,
  setAddressesBooks,
}) => {
  const {
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
  } = useEditAddressBook(addressesBooks, setAddressesBooks);

  const displayAddressesBooks =
    filteredAdressesBooks.length > 0 ? filteredAdressesBooks : addressesBooks;

  if (addressesBooks.length === 0) {
    return <p>No data to display!</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th className="thTd">Id</th>
          <th className="thTd">FirstName</th>
          <th className="thTd">LastName</th>
          <th className="thTd">Phone</th>
          <th className="thTd">Actions</th>
        </tr>
      </thead>
      <tbody>
        {displayAddressesBooks.map((addressBook) => {
          return (
            <tr key={addressBook.id.toString()}>
              <td className="thTd">{addressBook.id.toString()}</td>
              <td className="thTd">
                {editId === addressBook.id ? (
                  <div>
                    <input
                      value={editFirstName}
                      onChange={(e) => setEditFirstName(e.target.value)}
                      style={{ borderColor: editFirstNameError ? "red" : "" }}
                    />
                    {editFirstNameError && (
                      <p style={{ color: "red" }}>{editFirstNameError}</p>
                    )}
                  </div>
                ) : (
                  addressBook.firstName
                )}
              </td>

              <td className="thTd">
                {editId === addressBook.id ? (
                  <div>
                    <input
                      value={editLastName}
                      onChange={(e) => setEditLastName(e.target.value)}
                      style={{ borderColor: editLastNameError ? "red" : "" }}
                    />
                    {editLastNameError && (
                      <p style={{ color: "red" }}>{editLastNameError}</p>
                    )}
                  </div>
                ) : (
                  addressBook.lastName
                )}
              </td>

              <td className="thTd">
                {editId === addressBook.id ? (
                  <div>
                    <input
                      value={editPhone}
                      onChange={(e) => setEditPhone(e.target.value)}
                      style={{ borderColor: editPhoneError ? "red" : "" }}
                    />
                    {editPhoneError && (
                      <p style={{ color: "red" }}>{editPhoneError}</p>
                    )}
                  </div>
                ) : (
                  addressBook.phone
                )}
              </td>

              <td className="thTd">
                {editId === addressBook.id ? (
                  <button
                    className="table-save-button"
                    onClick={() => handleSaveButtonClick(addressBook.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="table-edit-button"
                    onClick={() =>
                      handleEditButtonClick(
                        addressBook.id,
                        addressBook.firstName,
                        addressBook.lastName,
                        addressBook.phone
                      )
                    }
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AddressBookTable;
