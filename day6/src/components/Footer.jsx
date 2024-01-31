import React from 'react'
import im4 from "../images/lll.png"
import "../css/Footer.css"

function Footer() {
  return (
    <div className='foot'>
    <br></br>
    <br></br>
    <br></br>
        <div className='imdiv'>
        <img src={im4}></img>
        </div>
        <div className='fdiv1'>
            <div className='fdivh'>
            <h4>Useful Links</h4>
            </div>
            <div className='fdivp'>
            <p>Events</p>
            <p>About</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            </div>
        </div>
        <div className='fdiv2'>
            <div className='fdivh'>
            <h4>Contact</h4>
            </div>
            <div className='fdivp'>
            <p>Send us a message</p>
            <p>85 Golden Street, Coimbatore</p>
            <p>  info@partynights.com</p>
            <p> 1800-180-0808</p>
            </div>
        </div>
        <div className='fdiv3'>
            <div className='fdivh'>
            <h4>Social Connections</h4>
            </div>
            <div className='fdivp'>
            <p>Find us on social platforms</p>
            </div>
        </div>
        <div className='fdiv4'>
            <p>© 2024 Eventmie Lite. Product by Classiebit</p>
        </div>
        
    </div>
    
  )
}

export default Footer