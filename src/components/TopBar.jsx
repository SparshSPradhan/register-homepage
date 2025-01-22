import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './TopBar.css';  // Add styling here

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="contact-info">
          <span>Email: <a href="mailto:info@registerkaro.in">info@registerkaro.in</a></span>
          <span>Call: <a href="tel:+918447746183">+91 84477 46183</a></span>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
