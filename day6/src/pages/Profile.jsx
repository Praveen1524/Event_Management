import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import "../css/Profile.css";
// import home1 from "../assets/images/home1.jpeg";
// import photo from "../assets/images/photo 2.webp"

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Praveen');
  const [lastName, setLastName] = useState('K');
  const [email, setEmail] = useState('praveen@gmail.com');

  const enableEditing = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Perform any save/update logic here
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset the input values if the user cancels editing
    setFirstName('Praveen');
    setLastName('K');
    setEmail('praveen@gmail.com');
  };

  const handleInputChange = (setterFunction) => (event) => {
    setterFunction(event.target.value);
  };

  return (
    <div className='profile'>
    <div className="profilecontainer">
      <center>
      <img src={"../images/bg.jpg"}/>
        
      </center>
      <div className="columns">
        <div className='column'>
          <TextField
            className='textfield'
            label="First Name"
            value={firstName}
            onChange={isEditing ? handleInputChange(setFirstName) : undefined}
            variant="outlined"
            fullWidth
            disabled={!isEditing}
          />

          <TextField
            className='textfield'
            label="Last Name"
            value={lastName}
            onChange={isEditing ? handleInputChange(setLastName) : undefined}
            variant="outlined"
            fullWidth
            disabled={!isEditing}
          />
        </div>

        <div className='column'>
          <TextField
            className='textfield'
            label="Email"
            value={email}
            onChange={isEditing ? handleInputChange(setEmail) : undefined}
            variant="outlined"
            fullWidth
            disabled={!isEditing}
          />
        </div>
      </div>

      {isEditing ? (
        <div className="buttons">
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </div>
      ) : (
        <Button variant="contained" color="primary" onClick={enableEditing} className="buttons">
          Edit Profile
        </Button>
      )}
    </div>
    </div>
  );
};

export default Profile;


