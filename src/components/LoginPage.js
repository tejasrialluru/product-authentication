import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css';
import logo from './logo.png'; // Make sure to import your logo


const LoginPage = () => {
  const [userType, setUserType] = useState('customer');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (

    <div className="login-register-page">
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </header>
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="user-type">
            <label>
              <input
                type="radio"
                value="customer"
                checked={userType === 'customer'}
                onChange={handleUserTypeChange}
              />
              Customer
            </label>
            <label>
              <input
                type="radio"
                value="supplier"
                checked={userType === 'supplier'}
                onChange={handleUserTypeChange}
              />
              Supplier
            </label>
            <label>
              <input
                type="radio"
                value="manufacturer"
                checked={userType === 'manufacturer'}
                onChange={handleUserTypeChange}
              />
              Manufacturer
            </label>
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/CustomerPage">Register here</Link>.</p>
      </div>
    </div>

  );
}

export default LoginPage;
