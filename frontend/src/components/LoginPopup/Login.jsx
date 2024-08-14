import React, { useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`http://localhost:8088/hmi/add/${email}/${password}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const user = await response.json();
        // Store user information in localStorage or context
        localStorage.setItem('user', JSON.stringify(user));
        console.log('Login successful:', user);
        navigate('/admin-dashboard/stats  '); // Redirect to user dashboard
      } else {
        alert('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="form-section">
        <div className="logo">
          <img src={assets.logo} alt="College Logo" className='img' />
        </div>
        <h2>Welcome!! Homie</h2>
        <p className="tagline">The key to happiness is to login.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p className="signup-link">
          New as Homie? <a href="/signup">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
