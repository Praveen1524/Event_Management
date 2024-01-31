import React from 'react'
import "../css/UserDashboard.css"
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import proim from "../images/pro1.jpg"

function UserDashboard() {
  return (
    <div className='dashboard'>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    <div className='pro'>
    <img src={proim}></img>
    </div>
    <div className='pro1'><h2>Hello David!</h2><p>You have no schedules today..</p></div>
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
    <div className='conttt'>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        <div className='d1'><br></br><h2>Events Attended</h2><h4>15</h4></div>
        <br></br>
        <br></br>
        <br></br>
        <div className='d2'><br></br><h2>Upcoming Events</h2><h4>2</h4></div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='contt'>
            <div className='cont1'>
                    <br></br>
                    <div className='top'>
                    <h2>7 Feb</h2>
                    <h3>Birthday Party</h3>
                    </div>
                    <br></br>
                    <h4><AccessTimeFilledIcon/> 8:00PM-10:00PM</h4>
                    <h4><PlaceIcon/> RS PURAM</h4>
            </div>
            <div className='cont2'>
                    <br></br>
                    <div className='top'>
                    <h2>18 Feb</h2>
                    <h3>Farewell Party</h3>
                    </div>
                    <br></br>
                    <h4><AccessTimeFilledIcon/> 6:00PM-7:00PM</h4>
                    <h4><PlaceIcon/> Race Cource</h4>
            </div>
            <div className='cont3'>
                    <br></br>
                    <div className='top'>
                    <h2>15 Mar</h2>
                    <h3>Birthday Party</h3>
                    </div>
                    <br></br>
                    <h4><AccessTimeFilledIcon/> 11:00AM-11:30AM</h4>
                    <h4><PlaceIcon/> Peelamedu</h4>
            </div>
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
    </div>
  )
}

export default UserDashboard