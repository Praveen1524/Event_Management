import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
// import Hello_World from "./components/Hello_World"
// import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
// import Navbar from "./components/Navbar"
import User from "./pages/User"
import Home from "./pages/Home"
import Events from "./pages/Events"
import Footer from "./components/Footer"
import Event1 from "./pages/Event1"
import Booking from "./pages/Booking"
import Profile from "./pages/Profile"
import Admin from "./pages/Admin"
import CollegeList from "./pages/CollegeList"
import UserDashboard from "./pages/UserDashboard"
import AdminDashboard from "./pages/AdminDashboard"

function App() {

  return (
    <Router>
      
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path="/user" element = {<User/>}/>
        <Route path="/events" element = {<Events/>}/>
        <Route path="/footer" element = {<Footer/>}/>
        <Route path="/event1" element = {<Event1/>}/>
        <Route path="/booking" element = {<Booking/>}/>
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="/admin" element = {<Admin/>}/>
        <Route path="/admindash" element = {<AdminDashboard/>}/>
        <Route path="/college" element = {<CollegeList/>}/>
        <Route path="/dash" element = {<UserDashboard/>}/>
      </Routes>
    </Router>
    // <Hello_World />
  )
}

export default App
