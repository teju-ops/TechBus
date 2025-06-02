import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './styles/Header.css';
import cabImage from '../images/cab.jpg';
import flightImage from '../images/flight.jpg';
import trainImage from '../images/train.jpg';
import hotelImage from '../images/hotel.jpg';
import { FaCar, FaPlane, FaTrain, FaHotel, FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ isBookingActive }) => {
  const location = useLocation();
  const [activeTransport, setActiveTransport] = useState('Cabs');
  const [activeTripType, setActiveTripType] = useState('One Way');
  const [backgroundImage, setBackgroundImage] = useState(cabImage);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const transportOptions = [
    { name: 'Cabs', icon: <FaCar /> },
    { name: 'Flight', icon: <FaPlane /> },
    { name: 'Trains', icon: <FaTrain /> },
    { name: 'Hotels', icon: <FaHotel /> }
  ];

  const tripTypeOptions = ['One Way', 'Outstation-Round Trip', 'Airport Transfers'];

  const handleTransportClick = (name) => {
    setActiveTransport(name);
    switch (name) {
      case 'Cabs':
        setBackgroundImage(cabImage);
        navigate('/cabs');
        break;
      case 'Flight':
        setBackgroundImage(flightImage);
        break;
      case 'Trains':
        setBackgroundImage(trainImage);
        break;
      case 'Hotels':
        setBackgroundImage(hotelImage);
        break;
      default:
        break;
    }
  };

  const isCabPage = location.pathname === '/cabs';
  const isVerifyPage = location.pathname.includes('verify') || isBookingActive;
  const isCabBookingPage = location.pathname.startsWith('/cabs/book');

  return (
    <div
      className="hero-wrapper"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay" />

      <header className="nav-header">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-bg">
              {/* You can use an <img> if you want, but for the exact shape, use a styled span */}
            </span>
          </div>

          {/* Hamburger menu for mobile */}
          <button
            className="menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop menu */}
          <nav className="nav-links desktop-menu">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          </nav>

          {/* Mobile menu, shown when hamburger is open */}
          {isMobileMenuOpen && (
            <nav className="nav-links mobile-menu">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            </nav>
          )}

          <div className="auth-buttons">
            <Link to="/login" className="login-btn">Login/Signup</Link>
          </div>
        </div>
      </header>

      {!isCabPage && (
        <>
          <div className="hero-text">
            <h1>Discover the World, One Journey at a Time</h1>
            <p className="subtitle">
              Seamlessly book flights, trains, cabs, and stays — all in one place.
              Your next unforgettable adventure begins here.
            </p>
          </div>

          <div className="transport-container">
            <div className="transport-background"></div>
            <div className="top-transport-options">
              {transportOptions.map((option) => (
                <button
                  key={option.name}
                  className={`transport-btn ${activeTransport === option.name ? 'active' : ''}`}
                  onClick={() => handleTransportClick(option.name)}
                >
                  <span className="transport-icon">{option.icon}</span>
                  {option.name}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {!isVerifyPage && !isCabBookingPage && (
        <div className="booking-container custom-booking-container">
          <div className="trip-type-row">
            <button className="trip-type-btn active">One Way</button>
            <button className="trip-type-btn">Outstation-Round Trip</button>
            <button className="trip-type-btn">Airport Transfers</button>
          </div>
          <div className="booking-form-fields-row">
            <div className="form-group big">
              <label>From</label>
              <div className="form-value">Zirakpur, Punjab</div>
            </div>
            <div className="form-swap">
              <span className="swap-icon">&#8646;</span>
            </div>
            <div className="form-group big">
              <label>To</label>
              <div className="form-value">Kasauli, Himachal..</div>
            </div>
            <div className="form-group">
              <label>Departure</label>
              <div className="form-value">14, April 2025</div>
            </div>
            <div className="form-group">
              <label>Return</label>
              <div className="form-value faded">tap to add return date</div>
            </div>
            <div className="form-group">
              <label>Pickup Time</label>
              <div className="form-value">10: 00 AM</div>
            </div>
          </div>
          <div className="form-footer-row">
            <span className="addstop-link">Add Stops</span>
          </div>
          <div>
            <button className="search-btn custom-search-btn">Search <span className="arrow">&#8594;</span></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
