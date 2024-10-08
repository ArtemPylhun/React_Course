import React, { useState } from "react";
const AddAddressComponent = ({ newAddress, onAddressChange, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!newAddress.firstName) {
      newErrors.firstName = "The first name is required.";
    }
    if (!newAddress.lastName) {
      newErrors.lastName = "The last name is required.";
    }
    if (!newAddress.phone) {
      newErrors.phone = "The phone number is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onSubmit(event);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          name="firstName"
          value={newAddress.firstName}
          placeholder="First Name"
          onChange={onAddressChange}
          className={errors.firstName ? "input-error" : ""}
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </div>
      <div className="form-group">
        <input
          name="lastName"
          value={newAddress.lastName}
          placeholder="Last Name"
          onChange={onAddressChange}
          className={errors.lastName ? "input-error" : ""}
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
      </div>
      <div className="form-group">
        <input
          name="phone"
          value={newAddress.phone}
          placeholder="Phone"
          onChange={onAddressChange}
          className={errors.phone ? "input-error" : ""}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
      <button type="submit" className="button-green">
        Add Address
      </button>
    </form>
  );
};

export default AddAddressComponent;
