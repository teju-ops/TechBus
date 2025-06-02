import React from 'react';
import './styles/LocalExpert.css';
import whatsappImage from '../images/whatsapp.png'; // Left-side panel image
import whatsappIcon from '../images/wtsp_icon.png'; // WhatsApp icon near input

const LocalExpert = () => {
  return (
    <div className="local-expert-container">
      <div className="left-panel">
        <img
          src={whatsappImage}
          alt="Local Expert Info"
          className="expert-image"
        />
      </div>
      <div className="right-panel">
        <form className="expert-form">
          <label className="form-label">
            Full Name
            <input type="text" placeholder="Enter Name" className="form-input" />
          </label>

          <label className="form-label">
            WhatsApp Number
            <div className="whatsapp-input">
              <span className="whatsapp-icon">
                <img src={whatsappIcon} alt="WhatsApp" />
              </span>
              <span className="country-code1">+91</span>
              <input
                type="text"
                placeholder="9876543210"
                className="form-input no-radius-left"
              />
            </div>
          </label>

          <label className="form-label">
            Write your question
            <textarea placeholder="Write your question ..." className="form-textarea" />
          </label>

          <p className="info-note">
            <span>ℹ️</span> This conversation moves to WhatsApp for easy access.
          </p>

          <button type="submit" className="send-button">
            Send Question →
          </button>
        </form>
      </div>
    </div>
  );
};

export default LocalExpert;
