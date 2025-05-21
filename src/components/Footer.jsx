import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-wrapper">
        <div className="footer-left">
          <div className="logo-placeholder" />
          <p>Lorem ipsum dolor sit amet consectetur.<br />Morbi faucibus cras proin commodo varius.</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-center">
          <Link to="/">Home</Link>
          <Link to="/flight">Flight</Link>
          <Link to="/cabs">Cabs</Link>
          <Link to="/hotels">Hotels</Link>
          <Link to="/trains">Trains</Link>
        </div>

        <div className="footer-right">
          <Link to="/register">Register as traveler</Link>
        </div>
      </div>

      <hr className="footer-separator" />

      <div className="footer-bottom container">
        <p>©2024 Alumni. All rights reserved</p>
        <div className="bottom-links">
          <Link to="/privacy">Privacy & Policy</Link>
          <Link to="/terms">Terms & Condition</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
