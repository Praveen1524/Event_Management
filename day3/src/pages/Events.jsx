import React from 'react'
import UserNavbar from '../components/UserNavbar'
import "../css/Events.css"
import i1 from "../images/ev1.jpg"
import evv from "../images/evvvv.jpg"
import im1 from "../images/e1.jpg"
import im2 from "../images/ev2.jpg"
import im3 from "../images/party.jpg"
import Footer from '../components/Footer'

import { Link } from 'react-router-dom'


function Events() {
  return (
    <div className='events'>
    <UserNavbar/>
    <div className='evimg'>
        <img src={evv}></img>
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
        <div className='head'>
            <h2>Top Events</h2>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='con1'>
            <Link to="/event1"><img src={im1}></img></Link>
            <h4>Event1</h4>
        </div>
        <div className='con2'>
            <img src={im2}></img>
            <h4>Event2</h4>
        </div>
        <div className='con3'>
            <img src={im3}></img>
            <h4>Event3</h4>
        </div>
        <br></br>
        <br></br>
        <div className='hh'>
        <button >View All Events</button>
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
        <div className='cat'>
            <h2>Event Categories</h2>
            <br></br>
            <br></br>
            <br></br>
                <div className='cat1'>
                <img src={i1}></img>
                <p>Farewell party</p>
                </div>
                <div className='cat2'>
                <img src={i1}></img>
                <p>Reunion party</p>
                </div>
                <div className='cat3'>
                <img src={i1}></img>
                <p>Birthday party</p>
                </div>
                <div className='cat4'>
                <img src={i1}></img>
                <p>Bachelors party</p>
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
    <Footer/>
    </div>
  )
}

export default Events