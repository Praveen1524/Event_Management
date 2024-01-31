import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../css/Signup.css'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (email && username && mobile && password && cpassword && password === cpassword) {
      setError('');
      console.log('Signup successful!');
    } else {
      setError('Please fill in all the fields, and make sure the passwords match.');
    }
  };

  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
    
    <div className="signup-container">
    <center>
    <h2>Signup</h2>
    </center>
    <form>
    <div className="form-group">
    <label>Email:</label>
    <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    </div>
    <div className="form-group">
    <label>Username:</label>
    <input
    type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    />
    </div>
    <div className="form-group">
    <label>Mobile Number:</label>
    <input
    type="tel"
    value={mobile}
    onChange={(e) => setMobile(e.target.value)}
    />
    </div>
    <div className="form-group">
    <label>Password:</label>
    <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
    </div>
    <div className="form-group">
    <label>Confirm Password:</label>
    <input
    type="password"
    value={cpassword}
    onChange={(e) => setCPassword(e.target.value)}
    />
    </div>
    <div className="form-group">
    <center>
    <button type="button" onClick={handleSignup}>
    Signup
    </button>
    <br></br>
    <br></br>
    <label className='lab'>Already have an account:<Link className='reg' to = "/login">Login</Link></label>

    </center>
    </div>
    {error && <div className="error-message">{error}</div>}
    </form>
    </div>
    </div>
    );
};

export default Signup;