// AdminViewEvents.js
import React, { useState } from 'react';
import Admin from './Admin_Panel';
import { Button, Rating, TextField, MenuItem } from '@mui/material';
import image from "../../assets/images/photo 2.webp";
import "../css/viewevent.css"
import { Link } from 'react-router-dom';

function AdminViewEvents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('name'); // Default filter criteria
  const [editedEvent, setEditedEvent] = useState(false);

  const events = [
    {
      image: image,
      name: "Event A",
      rating: 4,
      venue: "Convention Center",
      date: "2024-02-28",
      cost: 500,
    },
    {
      image: image,
      name: "Event B",
      rating: 4,
      venue: "Community Hall",
      date: "2024-03-15",
      cost: 700,
    },
    {
      image: image,
      name: "Event C",
      rating: 4,
      venue: "Grand Hotel",
      date: "2024-04-20",
      cost: 1000,
    },
    // Add more events as needed
  ];

  const filteredEvents = events.filter((event) =>
    event[filterCriteria].toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterCriteria(event.target.value);
  };

  const handleEdit = () => {
    setEditedEvent(!editedEvent);
  };

  const handleSave = () => {
    // Implement save logic here, e.g., update the event in your data source
    setEditedEvent(null);
  };

  const handleCancel = () => {
    setEditedEvent(null);
  };

  const handleInputChange = (event, key) => {
    const value = event.target.value;

    // Implement logic to update the event in the state or data source
    setEditedEvent((prevEvent) => ({
      ...prevEvent,
      [key]: value,
    }));
  };

  return (
    <div className='background'>
      <Admin />
      <div className="viewevents">
        {/* ... (existing filter container) */}
        
        {filteredEvents.map((event, index) => (
          <div className='view-container' key={index}>
            <div className='view-container1'>
              <img src={event.image} alt={event.name} />
              <div className='fieldform'>
                <div className="input-group">
                  <label>Name:</label>
                  <TextField
                    value={editedEvent ? editedEvent.name : event.name}
                    variant="outlined"
                    size="small"
                    fullWidth
                    disabled={!editedEvent}
                    InputProps={{
                      style: { border: 'none' }, // Remove border
                    }}
                    onChange={(e) => handleInputChange(e, 'name')}
                  />
                </div>
                <div className="input-group">
                  <label>Venue:</label>
                  <TextField
                    value={editedEvent ? editedEvent.venue : event.venue}
                    variant="outlined"
                    size="small"
                    fullWidth
                    disabled={!editedEvent}
                    InputProps={{
                      style: { border: 'none' }, // Remove border
                    }}
                    onChange={(e) => handleInputChange(e, 'venue')}
                  />
                </div>
                <div className="input-group">
                  <label>Date:</label>
                  <TextField
                    value={editedEvent ? editedEvent.date : event.date}
                    variant="outlined"
                    size="small"
                    fullWidth
                    disabled={!editedEvent}
                    InputProps={{
                      style: { border: 'none' }, // Remove border
                    }}
                    onChange={(e) => handleInputChange(e, 'date')}
                  />
                </div>
                <div className="input-group">
                  <label>Cost:</label>
                  <TextField
                    value={editedEvent ? editedEvent.cost : event.cost}
                    variant="outlined"
                    size="small"
                    fullWidth
                    disabled={!editedEvent}
                    InputProps={{
                      style: { border: 'none' }, // Remove border
                    }}
                    onChange={(e) => handleInputChange(e, 'cost')}
                  />
                </div>
              </div>
              {editedEvent ? (
                <div className='button'>
                  <Button onClick={handleSave}>Save</Button>
                  <Button onClick={handleCancel}>Cancel</Button>
                </div>
              ) : (
                <>
                  <div className='button'>
                    <Button onClick={() => handleEdit()}>Edit</Button>
                    <Link to={/bookvenue/${event.name}}><Button onClick={() => handleEdit()}>Register</Button></Link>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default AdminViewEvents;