import React, { useState } from 'react';
import '../styles/ManufacturerPage.css';

const ManufacturerPage = () => {
  const [productName, setProductName] = useState('');
  const [otherDetails, setOtherDetails] = useState('');
  const [qrGenerated, setQrGenerated] = useState(false);
  const [blockAdded, setBlockAdded] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setQrGenerated(false);
    setBlockAdded(true); // Simulating block addition

    // Code to send form data to backend for block addition
    // Replace this with your actual implementation
    // For simplicity, we'll just log the form data here
    console.log({ productName, otherDetails });
  };

  const generateQR = () => {
    setQrGenerated(true);
  };

  return (
    <div>
      <h1>Manufacturer Page</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <label>Other Details:</label>
          <input
            type="text"
            value={otherDetails}
            onChange={(e) => setOtherDetails(e.target.value)}
          />
        </div>
        <button type="submit">Add Block</button>
      </form>
      {qrGenerated && <p>QR Code Generated!</p>}
      {!qrGenerated && (
        <button onClick={generateQR}>
          Generate QR Code
        </button>
      )}
      {blockAdded && <p>Block added to blockchain!</p>}
    </div>
  );
};

export default ManufacturerPage;
