import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../css/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username && password) {
      setError('');
      console.log('Login successful!');
    } else {
      setError('Please enter both username and password.');
    }
  };

  return (
    <div>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="login-container">
    <center>
    <br></br>
    <h2>Login</h2>
    </center>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            <br></br>
            <center>

            <Link to='/dash'><button type="button" onClick={handleLogin}>
            Login
            </button></Link>
            <br></br>
            <br></br>
            <label className='lab'>Dont have an account:<Link className='reg' to = "/signup">Register</Link></label>
            

            </center>
            <br></br>
            </div>
            {error && <div className="error-message">{error}</div>}
            </form>
            </div>
            </div>
  );
};

export default Login;