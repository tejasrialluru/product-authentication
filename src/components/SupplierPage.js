import React, { useState } from 'react';
import '../styles/SupplierPage.css';

const SupplierPage = () => {
  const [qrCode, setQrCode] = useState('');
  const [shopDestination, setShopDestination] = useState('');
  const [blockAdded, setBlockAdded] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setBlockAdded(true); // Simulating block addition

    // Code to send form data to backend for block addition
    // Replace this with your actual implementation
    // For simplicity, we'll just log the form data here
    console.log({ qrCode, shopDestination });
  };

  const handleQrCodeUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setQrCode(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h1>Supplier Page</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Upload QR Code:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleQrCodeUpload}
          />
        </div>
        <div>
          <label>Shop Destination:</label>
          <input
            type="text"
            value={shopDestination}
            onChange={(e) => setShopDestination(e.target.value)}
          />
        </div>
        <button type="submit">Add Block</button>
      </form>
      {qrCode && <img src={qrCode} alt="QR Code" />}
      {blockAdded && <p>Block added to blockchain!</p>}
    </div>
  );
};

export default SupplierPage;
