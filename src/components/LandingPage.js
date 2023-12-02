import React from 'react';
import '../styles/LandingPage.css'; // Import CSS for styling
import logo from './logo.png';
import icon1 from './icon-1.png';
import icon2 from './icon2.png';
import manufacturerIcon from './ManufacturerIcon.png';
import supplierIcon from './SupplierIcon.png';
import customerIcon from './CustomerIcon.png';
import { Link } from 'react-router-dom';
document.body.classList.add('landing-page');

function LandingPage() {
  return (

    <div className="landing-page">
<div className="container">
  <header className="header">
   <img src={logo} alt="Logo" className="logo" />
   <nav className="navigation">
     <ul>
       <li><a href="#about">About Us</a></li>
       <li><a href="#how-it-works">How It Works</a></li>
       <li><a href="#contact">Contact</a></li>
       <li><Link to="/loginPage">Login-Register</Link></li>
     </ul>
   </nav>
  </header>

  <section className="hero">
    <div className="overlay"></div>
    <div className="hero-content">
      <h1>Ensuring Product Authenticity with Blockchain Technology</h1>
      <p>Track the entire supply chain history of your product to verify its genuineness.</p>
      <Link to="/loginPage"><button>Get Started</button></Link>
    </div>
  </section>
</div>


      {/* About Us Section */}
      <section id="about" className="about">
        <img src={icon2} alt="Product with QR code" />
        <div className="about-content">
          <h2>About Our Solution</h2>
          <p>AuthentiChain employs blockchain technology to ensure product authenticity. Our Dapp provides an unalterable record of a product's journey, from manufacturer to your hands. This transparency safeguards against counterfeit goods, giving you confidence in your purchases. We're on a mission to create a fair market environment and empower consumers. Join us in revolutionizing product authentication and trust. Explore our Dapp and experience a new era of secure shopping.</p>
        </div>
      </section>

      {/* What is BlockChain Section */}
      <section id="blockchain" className="blockchain">
        <div className="blockchain-content">
          <h2>How Blockchain Ensures Trust</h2>
          <p>Blockchain is a decentralized ledger that records transactions across a network of computers. It maintains trust through transparency and immutability: once a record is added, it cannot be altered. This ensures a reliable and tamper-proof record of events.

In the context of product authenticity, blockchain enables tracking every step of a product's journey. Each interaction, from manufacturer to consumer, is recorded and cannot be falsified. This transparency combats counterfeit products, providing consumers with confidence in their purchases.</p>
        </div>
        <img src={icon1} alt="Product with QR code" />
      </section>

      {/* How It Works Section */}
<section id="how-it-works" className="how-it-works">
  <div className="step">
    <img src={manufacturerIcon} alt="Manufacturer Icon" className="icon" />
    <h3>Manufacturer</h3>
    <p>Manufacturers launch the product's journey with a unique QR code, ensuring transparency. Their dedication establishes the initial blockchain entry, assuring authenticity. By leveraging blockchain, they empower consumers to trace products back to their source.</p>
  </div>
  <div className="step">
    <img src={supplierIcon} alt="Supplier Icon" className="icon" />
    <h3>Supplier</h3>
    <p>Suppliers enhance transparency by scanning QR codes and adding vital details, including destination points. This data is securely recorded on the blockchain, assuring buyers. Their diligence upholds supply chain integrity, instilling trust in every product's authenticity.</p>
  </div>
  <div className="step">
    <div classname ="image-1"><img src={customerIcon} alt="Customer Icon" className="icon" /></div>
    <h3>Customer</h3>
    <p>Customers verify product authenticity by scanning a QR code. Mismatched locations alert them to potential counterfeits, promoting informed purchases. Through blockchain, customers join the fight against counterfeit products. </p>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="contact">
  <h2>Contact Us</h2>
  <div className="contact-details">
    <div className="contact-item">
      <h3>Email</h3>
      <p>AuthentiChain_feedback@gmail.com</p>
    </div>
    <div className="contact-item">
      <h3>Phone</h3>
      <p>040-23011778</p>
    </div>
    <div className="contact-item">
      <h3>Address</h3>
      <p>Sy.No 62/1, Mahindra University, Bahdurpally, Hyderabad - 500043</p>
    </div>
  </div>
</section>
    </div>

  );
}

export default LandingPage;
