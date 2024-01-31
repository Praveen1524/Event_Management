import React from 'react'
import ev1 from "../images/hehe.jpg"
import "../css/Event1.css"
import { Link } from 'react-router-dom'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Footer from '../components/Footer';
function Event1() {
  return (
    <div className='eve1'>
        <div>
        <img src={ev1}></img>
        </div>

        <br></br>
        <br></br>

        <div className='e1d1'>
          <h1>Seven Rocks Show</h1>
          <br></br>
          <p>Prevailed mr tolerably discourse assurance estimable applauded to so. Him everything melancholy uncommonly</p>
        </div>
        <br></br>
        <br></br>
       
        <div className='tic'>        
          <Link to="/booking"><button><ConfirmationNumberIcon/>   Get Tickets</button></Link>
        </div>
        <div className='where'>
            <h1><WhereToVoteIcon/>Where</h1>
            <h3>Online Event</h3>
            <h3>Marsh Meadow</h3>
            <p>Ample end might folly 99-888-55
            Telford, London, United Kingdom</p>
        </div>
        <br></br>
        <br></br>
        <div className='when'>
            <h1><AccessTimeFilledIcon/>When</h1>
            
            <p>27 Dec 2024 12:30 PM (UTC) - 27 Dec 2024 05:30 PM (UTC)</p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    
    </div>
    
  )
}

export default Event1