import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Import your logo
import '../styles/Register.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'customer'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="register-page">
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </header>
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="user-type">
            <label>
              <input
                type="radio"
                name="userType"
                value="customer"
                checked={formData.userType === 'customer'}
                onChange={handleChange}
              />
              Customer
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="supplier"
                checked={formData.userType === 'supplier'}
                onChange={handleChange}
              />
              Supplier
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="manufacturer"
                checked={formData.userType === 'manufacturer'}
                onChange={handleChange}
              />
              Manufacturer
            </label>
          </div>
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/loginPage">Login here</Link>.</p>
      </div>
    </div>
  );
};

export default RegisterPage;

