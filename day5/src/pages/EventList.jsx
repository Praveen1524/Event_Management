// src/components/EventList.jsx
import React from 'react';

const EventList = ({ events }) => {
  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          {event.title} - {event.date}
        </li>
      ))}
    </ul>
  );
};

export default EventList;
