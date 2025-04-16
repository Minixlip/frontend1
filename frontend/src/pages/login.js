import React, { useState, useEffect } from 'react';
import './login.css';

function Login() {
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem('token')) {
      window.location.href = '/'; // or /dashboard
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailAddress, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
      } else {
        // Save login info
        localStorage.setItem('token', data.token);
        localStorage.setItem('userid', data.userid);
        localStorage.setItem('username', data.username);
        localStorage.setItem('email', data.emailAddress);

        setError('');
        console.log('User logged in:', data);
        window.location.href = '/'; // Redirect after login
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-input-container">
        <span>Email</span>
        <input
          type="email"
          value={emailAddress}
          onChange={(e) => setEmail(e.target.value)}
        />

        <span>Password</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
}

export default Login;
