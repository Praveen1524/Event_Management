import { Link } from "react-router-dom"; 
// import CelebrationIcon from '@mui/icons-material/Celebration';
import logo1 from "../images/logo1.jpg"
import UserSidebar from "./UserSidebar";
import { Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
function UserNavbar() {
    const[sidebar,SetSidebar]=useState(true);
    const SideBarActive=()=>{SetSidebar(!sidebar)};
  return (
    <div id="header">
    <div id="siteinfo">
    </div>
        <div id="navbar">
            <img src={logo1} alt="Description of the image"/>
            <h2 className="name">Party Nights</h2>
            
            <Link className="navlink" to = "/dash">Profile</Link>
            <Link className="navlink" to = "/events">Events</Link>
            <Link className="navlink" to = "/booking">Booking</Link>
            <Button onClick={SideBarActive}><MenuIcon style={{color:"rgb(255, 253, 150)"}}/></Button>
      <div className={sidebar?"side-active":"side"}>
            <UserSidebar/>
            </div>
        </div>
    </div>
  )
}

export default UserNavbar