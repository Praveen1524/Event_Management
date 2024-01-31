import { Link } from "react-router-dom"; 
// import CelebrationIcon from '@mui/icons-material/Celebration';
import logo1 from "../images/logo1.jpg"
function Navbar() {
  return (
    <div id="header">
    <div id="siteinfo">
    </div>
        <div id="navbar">
            <img src={logo1} alt="Description of the image"/>
            <h2 className="name">Party Nights</h2>
            
            <Link className="navlink" to = "/">Home</Link>
            <Link className="navlink" to = "/about">About</Link>
            <Link className="navlink" to = "/admindash">Admin</Link>
            <Link className="navlink" to = "/login">Login/Register</Link>
        </div>
    </div>
  )
}

export default Navbar