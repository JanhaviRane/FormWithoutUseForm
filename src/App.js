    
    
import React, { useState } from 'react';
import   './FormValidation.css'; 

function FormValidationWithoutHook() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    country: 'default',
  });

  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    // Basic email validation, you can use a more robust method
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  const validateForm = () => {
    const { name, email, gender, country } = formData;
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!gender) {
      newErrors.gender = 'Gender is required';
    }

    if (country === 'default') {
      newErrors.country = 'Please select a country';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, you can submit the data or perform other actions
      console.log('Form submitted:', formData);
    } 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h1>Validation</h1>
         
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />{' '}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />{' '}
          Female
          {errors.gender && <span className="error-message">{errors.gender}</span>}
        </div>

        <div className="form-group">
          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="default">Select a country</option>
            <option value="us">United States</option>
            <option value="canada">Canada</option>
            <option value="Bharat">Bharat</option>
          </select>
          {errors.country && <span className="error-message">{errors.country}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidationWithoutHook;
