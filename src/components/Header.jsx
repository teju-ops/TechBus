import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './styles/Header.css';
import cabImage from '../images/cab.jpg';
import flightImage from '../images/flight.jpg';
import trainImage from '../images/train.jpg';
import hotelImage from '../images/hotel.jpg';
import { FaCar, FaPlane, FaTrain, FaHotel, FaBars } from 'react-icons/fa';

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
          <div className="logo">TripPlane</div>

          <button
            className="menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaBars />
          </button>

          <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          </div>

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
        <div
          className="booking-container"
          style={{
            position: isCabPage ? 'relative' : undefined,
            marginTop: isCabPage ? '10px' : undefined,
          }}
        >
          <div className="trip-type">
            {tripTypeOptions.map((type) => (
              <button
                key={type}
                className={`trip-type-btn ${activeTripType === type ? 'active' : ''}`}
                onClick={() => setActiveTripType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="booking-form-fields">
            <div className="form-group">
              <label>From</label>
              <input type="text" value="Zirakpur, Punjab" readOnly />
            </div>
            <div className="form-group">
              <label>To</label>
              <input type="text" value="Kasauli, Himachal..." readOnly />
            </div>
            <div className="form-group">
              <label>Departure</label>
              <input type="text" value="14, April 2025" readOnly />
            </div>
            <div className="form-group">
              <label>Pickup Time</label>
              <input type="text" value="10:00 AM" readOnly />
            </div>
          </div>

          <div className="form-footer">
            <span className="addstop">Add Stops</span>
          </div>
          <div>
            <button className="search-btn">Search →</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
