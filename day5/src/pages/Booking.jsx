// src/components/EventBookingForm.jsx
import React, { useState } from 'react';
import '../css/Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    eventTitle: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic to handle the form submission (e.g., API call)
    console.log('Form submitted:', formData);
  };

  return (
    <div className='book'>
    <br></br>
    <h3>Booking Form : </h3>
    <br></br>
    <br></br>
    <form className="event-form" onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Event Title:
        <input
          type="text"
          name="eventTitle"
          value={formData.eventTitle}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Additional Notes:
        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Book Event</button>
    </form>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
  );
};

export default Booking;
