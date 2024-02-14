// src/components/AdminDashboard.jsx
import React, { useState } from 'react';
import EventList from './EventList';
import '../css/AdminDashboard.css';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Party 1', date: '2022-03-15' },
    { id: 2, title: 'Party 2', date: '2022-04-20' },
    // Add more event data as needed
  ]);

  return (
    <div className='admindash'>
    <br></br>
    <br></br>
    <br></br>
    <div id="adminnavbar">
            
            
            <Link className="adminnavlink" to = "/admin">Create</Link>
            <Link className="adminnavlink" to = "/admindash">Update</Link>
            <Link className="adminnavlink" to = "/admindash">View</Link>
            <Link className="adminnavlink" to = "/admindash">Delete</Link>
        </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className='ad1'><br></br><h2><EventNoteIcon/>Total Events</h2>315</div>
    <div className='ad2'><br></br><h2><HowToRegIcon/>User Registration</h2>154</div>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="event-list-container">
        <h3>Upcoming Events</h3>
        <EventList events={events} />
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
  );
};

export default AdminDashboard;
