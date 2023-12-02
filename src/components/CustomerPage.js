import React, { useState } from 'react';
import '../styles/CustomerPage.css';
import logo from './logo.png'; // Replace with actual path

const CustomerPage = () => {
  const [qrCode, setQrCode] = useState('');
  const [productHistory, setProductHistory] = useState(null);

  const handleQrCodeUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setQrCode(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const getHistory = () => {
    // Code to request product history based on the QR code
    // Replace this with your actual implementation
    // For simplicity, we'll just set some sample product history
    const sampleProductHistory = [
      { location: 'Manufacturer', date: '2023-10-15' },
      { location: 'Supplier', date: '2023-10-20' },
      { location: 'Retailer', date: '2023-10-25' },
      { location: 'Customer', date: '2023-11-02' }
    ];

    setProductHistory(sampleProductHistory);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <button className="logout-button">Logout</button>
      </header>
      <h1>Customer Page</h1>
      <div>
        <label>Upload QR Code:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleQrCodeUpload}
        />
      </div>
      {qrCode && (
        <div>
          <img src={qrCode} alt="QR Code" />
          <button onClick={getHistory}>Get Product History</button>
        </div>
      )}
      {productHistory && (
        <div>
          <h2>Product History</h2>
          <ul>
            {productHistory.map((entry, index) => (
              <li key={index}>
                Location: {entry.location}, Date: {entry.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomerPage;
