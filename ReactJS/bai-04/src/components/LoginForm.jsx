import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className={`login-overlay ${isOpen ? 'show' : ''}`}>
      <form className="login-form" onSubmit={handleSubmit}>
        <button type="button" className="close-btn" onClick={onClose}>×</button>
        
        <h2>Login</h2>
        
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;