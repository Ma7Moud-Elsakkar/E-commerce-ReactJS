import React from 'react';
import './Footer.css';
import logo from '../../img/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <img src={logo} alt="Website Logo" className="footer-logo-img" />
          <p>
            We offer the best products at competitive prices. Our goal is to satisfy our customers and provide an easy and pleasant shopping experience.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebook /> Facebook</a>
            <a href="#" aria-label="Twitter"><FaTwitter /> Twitter</a>
            <a href="#" aria-label="Instagram"><FaInstagram /> Instagram</a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h2>Customer Service</h2>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Return Policy</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <span><FaMapMarkerAlt /> Address:</span> Main Shopping St, City
            </li>
            <li>
              <span><FaPhone /> Phone:</span> +123 456 789 000
            </li>
            <li>
              <span><FaEnvelope /> Email:</span> support@example.com
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} E-Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
