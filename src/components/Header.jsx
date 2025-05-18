import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';
import cabImage from '../images/cab.jpg';
import { FaCar, FaPlane, FaTrain, FaHotel } from 'react-icons/fa';

const Header = () => {
  const [activeTransport, setActiveTransport] = useState('Cabs');
  const [activeTripType, setActiveTripType] = useState('One Way');

  const transportOptions = [
    { name: 'Cabs', icon: <FaCar /> },
    { name: 'Flight', icon: <FaPlane /> },
    { name: 'Trains', icon: <FaTrain /> },
    { name: 'Hotels', icon: <FaHotel /> }
  ];
  const tripTypeOptions = ['One Way', 'Outstation-Round Trip', 'Airport Transfers'];

  return (
    <div
      className="hero-wrapper"
      style={{ backgroundImage: `url(${cabImage})` }}
    >
      <div className="overlay" />

      {/* Navigation Header */}
      <header className="nav-header">
        <div className="nav-container">
          <div className="logo">
            {/* <FaPlane style={{ marginRight: '8px' }} /> */}
            TripPlane
          </div>
          <div className="nav-links">
            <Link to="/" className="active">Home</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About Us</Link>
          </div>
          <div className="auth-buttons">
            <Link to="/login" className="login-btn">Login/Signup</Link>
          </div>
        </div>
      </header>

      {/* Hero Text */}
      <div className="hero-text">
        <h1>Discover the World, One Journey at a Time</h1>
        <p className="subtitle">
          Seamlessly book flights, trains, cabs, and stays — all in one place.
          Your next unforgettable adventure begins here.
        </p>
      </div>

      {/* Transport Options */}
      <div className="transport-container">
       <div className="transport-background"></div>
       <div className="top-transport-options">
         {transportOptions.map((option) => (
           <button
             key={option.name}
             className={`transport-btn ${activeTransport === option.name ? 'active' : ''}`}
             onClick={() => setActiveTransport(option.name)}
        >
             <span className="transport-icon">{option.icon}</span>
             {option.name}
           </button>
         ))}
       </div>
      </div>

      {/* Booking Card */}
      <div className="booking-container">
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
          {/* <button className="search-btn">Search →</button> */}
        </div>
        <div>
          <button className="search-btn">Search →</button>
        </div>
      </div>
    </div>
  );
};

export default Header;