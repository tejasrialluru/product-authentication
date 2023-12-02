import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import ManufacturerPage from './components/ManufacturerPage';
import SupplierPage from './components/SupplierPage';
import CustomerPage from './components/CustomerPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ManufacturerPage" element={<ManufacturerPage />} />
        <Route path="/SupplierPage" element={<SupplierPage />} />
        <Route path="/CustomerPage" element={<CustomerPage />} />
      </Routes>
    </div>
  );
}

export default App;
