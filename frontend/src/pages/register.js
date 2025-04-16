import React, { useState, useEffect } from 'react';
import './register.css';

function Register() {
  const [emailAddress, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Redirect if already logged in
      window.location.href = '/'; // or '/dashboard'
    }
  }, []);

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailAddress, username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
      } else {
        // Save to localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('userid', data.userid);
        localStorage.setItem('username', data.username);
        localStorage.setItem('email', data.emailAddress);

        // Clear error and maybe redirect
        setError('');
        console.log('User registered:', data);
        // window.location.href = '/dashboard'; // optional redirect
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong.');
    }
  };

  return (
    <div className="register-page">
      <div className="register-input-container">
        <span className="input-title">Email</span>
        <input
          type="email"
          value={emailAddress}
          onChange={(e) => setEmail(e.target.value)}
        />

        <span className="input-title">Username</span>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <span className="input-title">Password</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>Register</button>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default Register;
