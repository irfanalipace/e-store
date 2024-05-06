import React from 'react'
import { useState } from 'react';
import { login } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCredentials({ ...credentials, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login(credentials));
      // Store user authentication status in localStorage
      localStorage.setItem('isAuthenticated', true);
      navigate('/home');
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" value={credentials.username} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
}

export default Login;

