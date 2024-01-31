import React from 'react'
import "../css/UserSidebar.css"
import { Button } from '@mui/material'

function UserSidebar() {
  return (
    <div className='Sidepanel'>
    <Button className='sidebutton'>View Events</Button><br/>
    <Button className='sidebutton'>View Venues</Button><br/>
    <Button className='sidebutton'>Book Event</Button><br/>
    <Button className='sidebutton'>View Bookings</Button>
    </div>
  )
}

export default UserSidebar