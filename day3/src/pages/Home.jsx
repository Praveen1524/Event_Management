import React from 'react'
import '../css/Home.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
    <br></br>
    <br></br>
     <Navbar/>
        <div className='party'>
          <h3>Searching for a Party!</h3>
          <button className='homebutton'><Link className="homelink" to = "/events">Click here..</Link></button>
        </div>
        <div className='partyhead'>
            <h1>Built for the events<br></br> of today—and<br></br> tomorrow</h1>
            <p1>Everything you need to craft impactful event<br></br> experiences all while staying technologically<br></br> relevant, now and always.</p1>
        </div>
    </div>
  )
}

export default Home